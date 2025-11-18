# Testing Strategy: CoinSlosh

## Testing Overview

CoinSlosh will use a multi-layered testing approach:
1. **Unit Tests** - Individual functions and classes
2. **Integration Tests** - Component interactions
3. **End-to-End Tests** - Full user workflows
4. **Performance Tests** - Frame rate and load testing
5. **Manual QA** - Cross-browser and device testing

---

## 1. Unit Testing

### Framework: Vitest
**Reasoning:** Fast, Vite-native, Jest-compatible API

### Test Coverage Targets
- **Critical Code:** 90%+ coverage
- **Utilities:** 80%+ coverage
- **UI Components:** 70%+ coverage
- **Overall:** 75%+ coverage

---

### Unit Test Examples

#### State Manager Tests
```typescript
describe('StateManager', () => {
  let stateManager: StateManager;

  beforeEach(() => {
    stateManager = new StateManager();
    localStorage.clear();
  });

  test('should initialize with default state for new player', () => {
    stateManager.initialize();
    expect(stateManager.getBalance()).toBe(500);
  });

  test('should not allow balance below zero', () => {
    stateManager.setBalance(-100);
    expect(stateManager.getBalance()).toBe(0);
  });

  test('should cap balance at maximum', () => {
    stateManager.setBalance(1000000);
    expect(stateManager.getBalance()).toBe(999999);
  });

  test('should persist state to localStorage', () => {
    stateManager.setBalance(750);
    stateManager.save();
    
    const saved = localStorage.getItem('coinslosh_state');
    const parsed = JSON.parse(saved);
    expect(parsed.coinBalance).toBe(750);
  });

  test('should load state from localStorage', () => {
    localStorage.setItem('coinslosh_state', JSON.stringify({
      coinBalance: 1200,
      timestamp: Date.now(),
      version: '1.0.0'
    }));
    
    stateManager.load();
    expect(stateManager.getBalance()).toBe(1200);
  });

  test('should use defaults if localStorage data is corrupted', () => {
    localStorage.setItem('coinslosh_state', 'invalid json');
    stateManager.load();
    expect(stateManager.getBalance()).toBe(500);
  });
});
```

---

#### Coin Pool Tests
```typescript
describe('CoinPool', () => {
  let pool: CoinPool;

  beforeEach(() => {
    pool = new CoinPool();
  });

  test('should create new coin if pool is empty', () => {
    const coin = pool.getCoin();
    expect(coin).toBeDefined();
    expect(coin.id).toBeTruthy();
  });

  test('should reuse coins from pool', () => {
    const coin1 = pool.getCoin();
    pool.returnCoin(coin1);
    
    const coin2 = pool.getCoin();
    expect(coin2.id).toBe(coin1.id);
  });

  test('should track reuse statistics', () => {
    const coin = pool.getCoin();
    pool.returnCoin(coin);
    pool.getCoin();
    
    const stats = pool.getStats();
    expect(stats.reuseCount).toBe(1);
  });

  test('should reset coin state when returning to pool', () => {
    const coin = pool.getCoin();
    coin.state = CoinState.FALLING;
    
    pool.returnCoin(coin);
    
    const reusedCoin = pool.getCoin();
    expect(reusedCoin.state).toBe(CoinState.SPAWNING);
  });
});
```

---

#### Game Configuration Tests
```typescript
describe('GameConfig', () => {
  test('should have valid machine dimensions', () => {
    expect(MACHINE_CONFIG.dimensions.width).toBeGreaterThan(0);
    expect(MACHINE_CONFIG.dimensions.depth).toBeGreaterThan(0);
  });

  test('should have 4 drop slots', () => {
    expect(MACHINE_CONFIG.dropSlots).toHaveLength(4);
  });

  test('should have valid pusher timing', () => {
    const { forwardDuration, backwardDuration } = MACHINE_CONFIG.pusher;
    expect(forwardDuration).toBe(3000);
    expect(backwardDuration).toBe(3000);
  });

  test('should have front edge reward of 10', () => {
    const frontEdge = MACHINE_CONFIG.edgeZones.find(z => z.type === 'front');
    expect(frontEdge?.reward).toBe(10);
  });

  test('should have side edges with 0 reward', () => {
    const sideEdges = MACHINE_CONFIG.edgeZones.filter(z => 
      z.type === 'left' || z.type === 'right'
    );
    sideEdges.forEach(edge => {
      expect(edge.reward).toBe(0);
    });
  });
});
```

---

#### Utility Function Tests
```typescript
describe('Validation Utils', () => {
  test('validateCoinBalance should reject negative values', () => {
    expect(validateCoinBalance(-1)).toBe(false);
  });

  test('validateCoinBalance should reject values over max', () => {
    expect(validateCoinBalance(1000000)).toBe(false);
  });

  test('validateCoinBalance should accept valid values', () => {
    expect(validateCoinBalance(500)).toBe(true);
    expect(validateCoinBalance(0)).toBe(true);
    expect(validateCoinBalance(999999)).toBe(true);
  });
});

describe('State Migration', () => {
  test('should add version field to old states', () => {
    const oldState = { coinBalance: 750, timestamp: Date.now() };
    const migrated = migrateGameState(oldState);
    expect(migrated.version).toBeDefined();
  });

  test('should migrate from v1.0.0 to v1.1.0', () => {
    const v1State = {
      coinBalance: 750,
      timestamp: Date.now(),
      version: '1.0.0'
    };
    const migrated = migrateGameState(v1State);
    expect(migrated.version).toBe('1.1.0');
    expect(migrated.statistics).toBeDefined();
  });
});
```

---

## 2. Integration Testing

### Framework: Vitest + Happy-DOM

### Integration Test Scenarios

#### Game Initialization Flow
```typescript
describe('Game Initialization', () => {
  test('should initialize all subsystems in correct order', async () => {
    const game = new GameManager();
    const initOrder: string[] = [];
    
    // Mock subsystems to track initialization
    jest.spyOn(game, 'initScene').mockImplementation(() => {
      initOrder.push('scene');
    });
    jest.spyOn(game, 'initPhysics').mockImplementation(() => {
      initOrder.push('physics');
    });
    jest.spyOn(game, 'initState').mockImplementation(() => {
      initOrder.push('state');
    });
    
    await game.initialize();
    
    expect(initOrder).toEqual(['state', 'scene', 'physics']);
  });
});
```

---

#### Coin Drop to Collection Flow
```typescript
describe('Coin Drop Flow', () => {
  let game: GameManager;

  beforeEach(() => {
    game = new GameManager();
    game.initialize();
  });

  test('should complete full drop and collection cycle', () => {
    const initialBalance = game.state.getBalance();
    
    // Drop coin
    game.dropCoin(0);
    expect(game.state.getBalance()).toBe(initialBalance - 1);
    
    // Simulate coin falling to front edge
    const coin = game.getActiveCoins()[0];
    coin.rigidBody.setTranslation({ x: 0, y: 1, z: 8 });
    
    // Step physics to trigger edge detection
    game.updatePhysics(1/60);
    
    // Coin should be collected and balance increased
    expect(game.state.getBalance()).toBe(initialBalance - 1 + 10);
    expect(game.getActiveCoins()).toHaveLength(0);
  });

  test('should lose coin when falling off side', () => {
    const initialBalance = game.state.getBalance();
    
    game.dropCoin(0);
    
    // Simulate coin falling off left side
    const coin = game.getActiveCoins()[0];
    coin.rigidBody.setTranslation({ x: -6, y: 1, z: 0 });
    
    game.updatePhysics(1/60);
    
    // Coin lost, no reward
    expect(game.state.getBalance()).toBe(initialBalance - 1);
    expect(game.getActiveCoins()).toHaveLength(0);
  });
});
```

---

#### Cooldown System Integration
```typescript
describe('Cooldown System', () => {
  let game: GameManager;

  beforeEach(() => {
    game = new GameManager();
    game.initialize();
  });

  test('should prevent drops during cooldown', () => {
    game.dropCoin(0);
    expect(game.isCooldownActive()).toBe(true);
    
    // Try to drop again immediately
    const result = game.dropCoin(1);
    expect(result).toBe(false);
  });

  test('should allow drops after cooldown expires', async () => {
    game.dropCoin(0);
    
    // Wait for cooldown
    await new Promise(resolve => setTimeout(resolve, 1100));
    
    expect(game.isCooldownActive()).toBe(false);
    
    const result = game.dropCoin(1);
    expect(result).toBe(true);
  });
});
```

---

## 3. End-to-End Testing

### Framework: Playwright

### E2E Test Scenarios

#### First-Time Player Journey
```typescript
import { test, expect } from '@playwright/test';

test('first-time player can drop coin and earn reward', async ({ page }) => {
  await page.goto('http://localhost:5000');
  
  // Check initial balance
  const balance = await page.locator('#coin-balance').textContent();
  expect(balance).toBe('500');
  
  // Click on slot 1
  await page.click('[data-slot-id="0"]');
  
  // Balance should decrease
  const newBalance = await page.locator('#coin-balance').textContent();
  expect(newBalance).toBe('499');
  
  // Wait for cooldown indicator
  await expect(page.locator('#cooldown-indicator')).toBeVisible();
  
  // Wait for cooldown to expire
  await page.waitForSelector('#cooldown-indicator', { state: 'hidden' });
  
  // Should be able to drop again
  await page.click('[data-slot-id="1"]');
  const finalBalance = await page.locator('#coin-balance').textContent();
  expect(finalBalance).toBe('498');
});
```

---

#### Persistent State Test
```typescript
test('game state persists across page reloads', async ({ page, context }) => {
  await page.goto('http://localhost:5000');
  
  // Drop coins to change balance
  await page.click('[data-slot-id="0"]');
  await page.waitForTimeout(1100); // Wait for cooldown
  await page.click('[data-slot-id="1"]');
  
  const balance = await page.locator('#coin-balance').textContent();
  
  // Reload page
  await page.reload();
  
  // Balance should be preserved
  const reloadedBalance = await page.locator('#coin-balance').textContent();
  expect(reloadedBalance).toBe(balance);
});
```

---

#### Mobile Touch Interaction
```typescript
test('mobile touch controls work correctly', async ({ page }) => {
  // Set mobile viewport
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('http://localhost:5000');
  
  // Tap on slot
  await page.tap('[data-slot-id="0"]');
  
  // Verify coin was dropped
  const balance = await page.locator('#coin-balance').textContent();
  expect(balance).toBe('499');
});
```

---

## 4. Performance Testing

### Framework: Custom + Chrome DevTools

### Performance Test Scenarios

#### Frame Rate Test
```typescript
describe('Performance: Frame Rate', () => {
  test('should maintain 60 FPS with 50 coins', async () => {
    const game = new GameManager();
    game.initialize();
    
    // Spawn 50 coins
    for (let i = 0; i < 50; i++) {
      game.forceSpawnCoin(i % 4);
    }
    
    // Measure FPS over 5 seconds
    const fps = await measureFPS(game, 5000);
    
    expect(fps).toBeGreaterThan(55); // Allow 5 FPS buffer
  });

  test('should maintain stable frame time', async () => {
    const game = new GameManager();
    game.initialize();
    
    const frameTimes = await collectFrameTimes(game, 1000);
    const avgFrameTime = average(frameTimes);
    const maxFrameTime = Math.max(...frameTimes);
    
    expect(avgFrameTime).toBeLessThan(17); // ~60 FPS
    expect(maxFrameTime).toBeLessThan(25); // No huge spikes
  });
});
```

---

#### Memory Leak Test
```typescript
describe('Performance: Memory', () => {
  test('should not leak memory with repeated coin spawns', async () => {
    const game = new GameManager();
    game.initialize();
    
    const initialMemory = getMemoryUsage();
    
    // Spawn and collect 1000 coins
    for (let i = 0; i < 1000; i++) {
      game.forceSpawnCoin(0);
      game.collectAllCoins();
    }
    
    // Force garbage collection (if available)
    if (global.gc) global.gc();
    
    const finalMemory = getMemoryUsage();
    const memoryIncrease = finalMemory - initialMemory;
    
    // Memory should not increase significantly
    expect(memoryIncrease).toBeLessThan(10 * 1024 * 1024); // 10MB max
  });
});
```

---

#### Load Time Test
```typescript
test('should load game in under 3 seconds', async ({ page }) => {
  const startTime = Date.now();
  
  await page.goto('http://localhost:5000');
  await page.waitForSelector('#gameCanvas', { state: 'visible' });
  
  const loadTime = Date.now() - startTime;
  expect(loadTime).toBeLessThan(3000);
});
```

---

## 5. Accessibility Testing

### Framework: axe-core + Manual Testing

#### Automated Accessibility Tests
```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('should not have accessibility violations', async ({ page }) => {
  await page.goto('http://localhost:5000');
  
  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  
  expect(accessibilityScanResults.violations).toEqual([]);
});
```

---

## 6. Manual QA Checklist

### Cross-Browser Testing

**Desktop Browsers:**
- [ ] Chrome (latest)
- [ ] Chrome (previous version)
- [ ] Firefox (latest)
- [ ] Safari (macOS)
- [ ] Edge (latest)

**Mobile Browsers:**
- [ ] Safari iOS (latest)
- [ ] Chrome Android (latest)
- [ ] Samsung Internet

---

### Device Testing

**Desktop:**
- [ ] 1920x1080 (common desktop)
- [ ] 2560x1440 (QHD)
- [ ] 3840x2160 (4K)

**Mobile:**
- [ ] iPhone 12/13/14 (375x812)
- [ ] iPhone SE (320x568)
- [ ] Samsung Galaxy S21 (360x800)
- [ ] iPad (768x1024)

---

### Functional Testing Checklist

**Game Initialization:**
- [ ] Page loads without errors
- [ ] 3D scene renders correctly
- [ ] Coin balance displays (500 for new, saved for returning)
- [ ] Drop slots are visible and interactive

**Coin Dropping:**
- [ ] Clicking slot spawns coin
- [ ] Balance decreases by 1
- [ ] Cooldown activates
- [ ] Cannot drop during cooldown
- [ ] Can drop again after cooldown
- [ ] All 4 slots work correctly

**Physics:**
- [ ] Coins fall realistically
- [ ] Coins collide with each other
- [ ] Pusher moves coins forward
- [ ] Pusher animation loops smoothly
- [ ] Coins don't pass through surfaces

**Edge Detection:**
- [ ] Coins falling off front award 10 coins
- [ ] Coins falling off sides give no reward
- [ ] Coins are removed after falling
- [ ] Balance updates correctly

**State Persistence:**
- [ ] Balance saves automatically
- [ ] Refreshing page restores balance
- [ ] Closing and reopening browser restores balance
- [ ] Multiple tabs share same state

**UI:**
- [ ] Balance updates in real-time
- [ ] Cooldown indicator shows/hides correctly
- [ ] Slot highlighting on hover works
- [ ] Error messages display when appropriate
- [ ] Maximum balance (999,999) enforced

**Performance:**
- [ ] Game runs at 60 FPS with few coins
- [ ] Game runs smoothly with 50+ coins
- [ ] No visible stuttering
- [ ] No crashes after extended play

---

## 7. Load Testing (Future)

### Framework: k6 (for API endpoints)

```javascript
import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 100 }, // Ramp up to 100 users
    { duration: '5m', target: 100 }, // Stay at 100 users
    { duration: '2m', target: 0 },   // Ramp down
  ],
};

export default function () {
  let res = http.get('https://api.coinslosh.com/health');
  check(res, { 'status is 200': (r) => r.status === 200 });
}
```

---

## Testing Schedule

### During Development
- Run unit tests on every file save (watch mode)
- Run full test suite before git commit (pre-commit hook)
- Run E2E tests before merging to main

### CI/CD Pipeline
```yaml
- name: Unit Tests
  run: npm test

- name: Integration Tests
  run: npm run test:integration

- name: E2E Tests
  run: npm run test:e2e

- name: Performance Tests
  run: npm run test:perf

- name: Coverage Report
  run: npm run coverage
```

---

## Test Data Management

### Mock Data
```typescript
export const MOCK_GAME_STATE: GameState = {
  coinBalance: 750,
  timestamp: 1700179200000,
  version: '1.0.0',
};

export const MOCK_COIN_PROPERTIES = {
  radius: 0.05,
  thickness: 0.01,
  mass: 0.5,
  friction: 0.4,
  restitution: 0.2,
};
```

---

## Bug Tracking

### Issue Template
```markdown
**Bug Description:**
[Clear description of the bug]

**Steps to Reproduce:**
1. [First step]
2. [Second step]
3. [...]

**Expected Behavior:**
[What should happen]

**Actual Behavior:**
[What actually happens]

**Environment:**
- Browser: [e.g., Chrome 118]
- OS: [e.g., Windows 11]
- Device: [e.g., Desktop]

**Screenshots/Video:**
[If applicable]

**Console Errors:**
[Any errors in browser console]
```

---

## Quality Gates

### Before Merge to Main
- [ ] All unit tests pass
- [ ] All integration tests pass
- [ ] Code coverage > 75%
- [ ] No ESLint errors
- [ ] No TypeScript errors
- [ ] Performance benchmarks met
- [ ] Manual QA on at least 2 browsers

### Before Production Release
- [ ] All E2E tests pass
- [ ] Cross-browser testing complete
- [ ] Mobile device testing complete
- [ ] Load time < 3s
- [ ] No critical accessibility issues
- [ ] Security scan passed
- [ ] Performance tests passed

---

## Continuous Improvement

### Metrics to Track
- Test coverage percentage
- Number of bugs found in QA vs production
- Average time to fix bugs
- Performance regression incidents
- User-reported issues

### Regular Reviews
- Monthly: Review test coverage and identify gaps
- Quarterly: Update test strategy based on new features
- Yearly: Evaluate testing tools and frameworks
