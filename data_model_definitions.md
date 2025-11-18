# Data Model Definitions: CoinSlosh

## Overview
CoinSlosh is primarily a client-side application with state stored in browser localStorage. This document defines all data structures used in the game.

---

## 1. Game State (Persisted)

### GameState
Stored in localStorage as JSON under key: `coinslosh_state`

```typescript
interface GameState {
  coinBalance: number;          // Current player coin balance
  timestamp: number;             // Last save timestamp (Unix milliseconds)
  version: string;               // State schema version for migration
  statistics?: GameStatistics;   // Optional: future statistics tracking
}
```

**Example:**
```json
{
  "coinBalance": 1250,
  "timestamp": 1700179200000,
  "version": "1.0.0",
  "statistics": null
}
```

**Constraints:**
- `coinBalance`: Range [0, 999999]
- `timestamp`: Unix timestamp in milliseconds
- `version`: Semantic version string (e.g., "1.0.0")

**Default Values (New Player):**
```json
{
  "coinBalance": 500,
  "timestamp": <current_time>,
  "version": "1.0.0"
}
```

---

## 2. Runtime Game State (Not Persisted)

### RuntimeState
Maintained in memory during gameplay, not saved to localStorage.

```typescript
interface RuntimeState {
  isDropCooldownActive: boolean;    // Is cooldown preventing drops?
  cooldownTimeRemaining: number;    // Milliseconds until cooldown ends
  activeCoins: Coin[];              // Array of coins currently in scene
  pusherPhase: number;              // Pusher animation phase [0-1]
  pusherDirection: 'forward' | 'backward';
  dropSlotHovered: number | null;   // Which slot is mouse hovering over (0-3)
  isPaused: boolean;                // Game paused state (future)
}
```

---

## 3. Coin Object

### Coin
Represents a single coin in the game world.

```typescript
interface Coin {
  id: string;                       // Unique identifier (UUID or incremental)
  mesh: THREE.Mesh;                 // Three.js mesh for rendering
  rigidBody: RAPIER.RigidBody;      // Rapier physics body
  state: CoinState;                 // Current lifecycle state
  createdAt: number;                // Timestamp of creation (for age tracking)
  isPooled: boolean;                // Is this coin in the object pool?
}

enum CoinState {
  SPAWNING = 'spawning',           // Just created, entering scene
  ACTIVE = 'active',               // On platform, physics active
  FALLING = 'falling',             // Detected edge, falling off
  COLLECTED = 'collected',         // Removed from scene, awaiting pool return
}
```

**Physical Properties:**
```typescript
interface CoinPhysicsProperties {
  radius: number;                   // 0.05 units (pog size)
  thickness: number;                // 0.01 units (slammer thickness)
  mass: number;                     // 0.5 units (heavy)
  friction: number;                 // 0.4 (reduced realistic friction)
  restitution: number;              // 0.2 (low bounce)
  linearDamping: number;            // 0.1 (slight air resistance)
  angularDamping: number;           // 0.05 (slight rotation damping)
}
```

**Default Coin Values:**
```typescript
const DEFAULT_COIN_PROPERTIES: CoinPhysicsProperties = {
  radius: 0.05,
  thickness: 0.01,
  mass: 0.5,
  friction: 0.4,
  restitution: 0.2,
  linearDamping: 0.1,
  angularDamping: 0.05,
};
```

---

## 4. Machine Configuration

### MachineConfig
Defines the physical layout of the coin pusher machine.

```typescript
interface MachineConfig {
  dimensions: MachineDimensions;
  dropSlots: DropSlot[];
  pusher: PusherConfig;
  edgeZones: EdgeZone[];
}

interface MachineDimensions {
  width: number;                    // 10 units
  depth: number;                    // 15 units
  upperTierHeight: number;          // 5 units
  lowerTierHeight: number;          // 2 units
  wallHeight: number;               // 3 units
  wallThickness: number;            // 0.2 units
}

interface DropSlot {
  id: number;                       // 0-3
  position: { x: number; y: number; z: number };
  angle: number;                    // Radial angle in degrees
  visualMarker?: THREE.Mesh;        // Optional visual indicator
}

interface PusherConfig {
  width: number;                    // 9.5 units (slightly narrower than machine)
  height: number;                   // 0.5 units
  depth: number;                    // 1.5 units
  startZ: number;                   // Starting Z position (back)
  endZ: number;                     // Ending Z position (front)
  forwardDuration: number;          // 3000 ms
  backwardDuration: number;         // 3000 ms
}

interface EdgeZone {
  type: 'front' | 'left' | 'right';
  position: { x: number; y: number; z: number };
  size: { width: number; depth: number };
  reward: number;                   // 10 for front, 0 for sides
}
```

**Example Machine Config:**
```typescript
const MACHINE_CONFIG: MachineConfig = {
  dimensions: {
    width: 10,
    depth: 15,
    upperTierHeight: 5,
    lowerTierHeight: 2,
    wallHeight: 3,
    wallThickness: 0.2,
  },
  dropSlots: [
    { id: 0, position: { x: -2, y: 8, z: -5 }, angle: 30 },
    { id: 1, position: { x: -0.5, y: 8, z: -5 }, angle: 15 },
    { id: 2, position: { x: 0.5, y: 8, z: -5 }, angle: -15 },
    { id: 3, position: { x: 2, y: 8, z: -5 }, angle: -30 },
  ],
  pusher: {
    width: 9.5,
    height: 0.5,
    depth: 1.5,
    startZ: -2,
    endZ: 5,
    forwardDuration: 3000,
    backwardDuration: 3000,
  },
  edgeZones: [
    {
      type: 'front',
      position: { x: 0, y: 1, z: 7.5 },
      size: { width: 10, depth: 1 },
      reward: 10,
    },
    {
      type: 'left',
      position: { x: -5.5, y: 1, z: 0 },
      size: { width: 1, depth: 15 },
      reward: 0,
    },
    {
      type: 'right',
      position: { x: 5.5, y: 1, z: 0 },
      size: { width: 1, depth: 15 },
      reward: 0,
    },
  ],
};
```

---

## 5. UI State

### UIState
Defines the state of UI elements.

```typescript
interface UIState {
  displayedCoinBalance: number;     // Displayed balance (may animate to match actual)
  cooldownProgress: number;         // [0-1] for cooldown bar
  selectedSlot: number | null;      // Currently selected/highlighted slot
  errorMessage: string | null;      // Error to display (e.g., "Not enough coins")
  errorTimeout: number | null;      // Timeout ID for clearing error
}
```

---

## 6. Game Statistics (Future)

### GameStatistics
Optional statistics tracking for future features.

```typescript
interface GameStatistics {
  totalCoinsDropped: number;        // Lifetime coins dropped by player
  totalCoinsWon: number;            // Lifetime coins won from front edge
  totalCoinsLost: number;           // Lifetime coins lost from sides
  gamesPlayed: number;              // Number of sessions
  longestWinStreak: number;         // Most consecutive front-edge drops
  averageCoinsPerDrop: number;      // Average reward per coin dropped
  highestBalance: number;           // Peak coin balance achieved
  playtimeSeconds: number;          // Total time played
}
```

---

## 7. Configuration Constants

### GameConfig
Global game configuration values.

```typescript
interface GameConfig {
  startingBalance: number;          // 500
  maxBalance: number;               // 999999
  dropCooldownMs: number;           // 1000 ms (1 second)
  maxActiveCoins: number;           // 50
  targetFPS: number;                // 60
  physicsStepRate: number;          // 60 Hz
  coinRewardMultiplier: number;     // 10 (10 coins per 1 that falls)
}

const GAME_CONFIG: GameConfig = {
  startingBalance: 500,
  maxBalance: 999999,
  dropCooldownMs: 1000,
  maxActiveCoins: 50,
  targetFPS: 60,
  physicsStepRate: 60,
  coinRewardMultiplier: 10,
};
```

---

## 8. Debug State (Development Only)

### DebugState
State for Tweakpane debug panel.

```typescript
interface DebugState {
  showWireframes: boolean;
  showPhysicsDebug: boolean;
  coinMass: number;                 // Adjustable coin mass
  coinFriction: number;             // Adjustable friction
  pusherSpeed: number;              // Speed multiplier
  gravity: number;                  // Physics world gravity
  spawnInterval: number;            // Auto-spawn coins (testing)
  freezePhysics: boolean;           // Pause physics
}
```

---

## 9. Object Pool

### CoinPool
Manages reusable coin objects for performance.

```typescript
interface CoinPool {
  available: Coin[];                // Coins ready for reuse
  active: Map<string, Coin>;        // Currently in-scene coins (by ID)
  totalCreated: number;             // Total coins ever created
  reuseCount: number;               // Number of times coins were pooled
}

class CoinPoolManager {
  getCoin(): Coin;                  // Get coin from pool or create new
  returnCoin(coin: Coin): void;     // Return coin to pool
  reset(): void;                    // Clear all coins
  getStats(): PoolStats;            // Get pool usage statistics
}

interface PoolStats {
  availableCount: number;
  activeCount: number;
  totalCreated: number;
  reuseRate: number;                // Percentage of reused vs created
}
```

---

## 10. Event System

### GameEvent
Events emitted during gameplay for loose coupling.

```typescript
enum GameEventType {
  COIN_DROPPED = 'coin_dropped',
  COIN_COLLECTED = 'coin_collected',
  COIN_LOST = 'coin_lost',
  BALANCE_CHANGED = 'balance_changed',
  COOLDOWN_STARTED = 'cooldown_started',
  COOLDOWN_ENDED = 'cooldown_ended',
  GAME_PAUSED = 'game_paused',
  GAME_RESUMED = 'game_resumed',
  ERROR_OCCURRED = 'error_occurred',
}

interface GameEvent {
  type: GameEventType;
  timestamp: number;
  data?: any;
}

// Example events
interface CoinDroppedEvent extends GameEvent {
  type: GameEventType.COIN_DROPPED;
  data: {
    slotId: number;
    coinId: string;
    remainingBalance: number;
  };
}

interface CoinCollectedEvent extends GameEvent {
  type: GameEventType.COIN_COLLECTED;
  data: {
    coinId: string;
    reward: number;
    newBalance: number;
  };
}
```

---

## Data Flow Summary

### localStorage → GameState → RuntimeState → UI
1. On load: Parse localStorage → Restore GameState
2. During play: Update RuntimeState (coins, cooldown, etc.)
3. On balance change: Update GameState → Save to localStorage
4. Every frame: Sync RuntimeState → Update UI display

### Key Relationships
- **GameState** (persisted) ← saves/loads from → **localStorage**
- **RuntimeState** (memory) ← updates → **UI**
- **Coin objects** ← managed by → **CoinPool**
- **Machine config** → defines → **Physics world setup**
- **Events** → notify → **UI Controller, State Manager**

---

## Schema Versioning Strategy

### Version Migration
When GameState schema changes, migrate old data:

```typescript
function migrateGameState(loadedState: any): GameState {
  if (!loadedState.version) {
    // Pre-v1.0.0, add version field
    return { ...loadedState, version: '1.0.0' };
  }
  
  if (loadedState.version === '1.0.0' && CURRENT_VERSION === '1.1.0') {
    // Migrate from 1.0.0 to 1.1.0
    return {
      ...loadedState,
      version: '1.1.0',
      statistics: createEmptyStatistics(),
    };
  }
  
  return loadedState;
}
```

---

## Validation Rules

### State Validation
Before applying loaded state:

```typescript
function validateGameState(state: GameState): boolean {
  if (state.coinBalance < 0 || state.coinBalance > GAME_CONFIG.maxBalance) {
    console.error('Invalid coin balance');
    return false;
  }
  
  if (!state.timestamp || state.timestamp > Date.now()) {
    console.error('Invalid timestamp');
    return false;
  }
  
  return true;
}
```

If validation fails, use default starting state (500 coins).
