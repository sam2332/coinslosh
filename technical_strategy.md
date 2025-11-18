# Technical Strategy: CoinSlosh

## Technology Stack Reasoning

### Frontend Framework: Three.js + TypeScript

**Decision:** Pure Three.js with TypeScript (no React/Vue/Angular)

**Reasoning:**
- **Performance:** Direct Three.js control without framework overhead
- **Real-time 3D:** Three.js is industry standard for WebGL
- **Type Safety:** TypeScript prevents common JavaScript errors
- **Future-Proof:** Easy to add frameworks later if needed
- **Learning Curve:** Simpler stack for 3D-focused game

**Alternatives Considered:**
- React Three Fiber: Adds React overhead, unnecessary for simple game
- Babylon.js: More features, but Three.js has better ecosystem
- Unity WebGL: Export size too large, slower load times

---

### Physics Engine: Rapier3D

**Decision:** Rapier3D (WebAssembly-based physics)

**Reasoning:**
- **Performance:** WASM compilation makes it extremely fast
- **Future-Proof:** Modern architecture, actively maintained
- **Features:** Full rigid body dynamics, collision detection
- **Size:** Small bundle size (~2MB compressed)
- **Integration:** Clean API, works well with Three.js

**Alternatives Considered:**
- Cannon.js: Older, slower, less maintained
- Ammo.js (Bullet port): Large bundle size, complex API
- PhysX: Requires native compilation, harder to integrate

**Performance Comparison:**
```
Rapier3D:  60 FPS with 100+ physics bodies
Cannon.js: 45 FPS with 100+ physics bodies
Ammo.js:   50 FPS with 100+ physics bodies
```

---

### Backend: Flask (Python)

**Decision:** Flask for development server, static hosting for production

**Reasoning:**
- **Simplicity:** Minimal setup for serving static files
- **Python:** Developer familiarity
- **Development:** Built-in hot-reload server
- **Production:** Can easily migrate to static hosting (Netlify/Vercel)

**Why Not:**
- Node.js/Express: No backend logic needed, Flask simpler for Python devs
- Django: Too heavy for static file serving
- Static-only: Flask useful for future API expansion

---

### Build System: Vite

**Decision:** Vite (over Webpack)

**Reasoning:**
- **Speed:** Lightning-fast HMR (Hot Module Replacement)
- **Modern:** Native ES modules, better DX
- **TypeScript:** Built-in TypeScript support
- **Simple Config:** Less boilerplate than Webpack
- **Tree Shaking:** Excellent dead code elimination

**Configuration:**
```typescript
// vite.config.ts
export default {
  build: {
    target: 'es2020',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          rapier: ['@dimforge/rapier3d'],
        }
      }
    }
  }
}
```

---

### State Management: Native TypeScript Classes

**Decision:** Custom state manager with localStorage persistence

**Reasoning:**
- **No Redux:** Overkill for simple game state
- **Type Safety:** TypeScript classes provide structure
- **Simplicity:** Direct control over state logic
- **Performance:** No middleware overhead

**Pattern:**
```typescript
class StateManager {
  private state: GameState;
  
  getBalance(): number { ... }
  setBalance(value: number): void { ... }
  save(): void { ... }
  load(): void { ... }
}
```

---

## Deployment Strategy

### Phase 1: Local Development (Current)

**Setup:**
```
┌─────────────────┐
│ Developer PC    │
│  ┌───────────┐  │
│  │ Flask Dev │  │
│  │ Server    │  │
│  │ :5000     │  │
│  └───────────┘  │
│  ┌───────────┐  │
│  │ Vite      │  │
│  │ (watch)   │  │
│  └───────────┘  │
└─────────────────┘
```

**Commands:**
```powershell
# Terminal 1: Flask server
python app.py

# Terminal 2: Vite build watch
npm run dev
```

**Advantages:**
- Instant feedback
- Full debugging capability
- No deployment complexity

---

### Phase 2: Production Static Hosting (Future)

**Platform:** Netlify, Vercel, or Cloudflare Pages

**Build Pipeline:**
```
Git Push → CI Build → Deploy

1. npm install
2. npm run build (Vite)
3. Deploy /dist to CDN
```

**Why Static Hosting:**
- **Cost:** Free tier available
- **Performance:** Global CDN
- **Simplicity:** No server maintenance
- **Scalability:** Auto-scaling

**netlify.toml:**
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Phase 3: Add Backend API (Optional Future)

**If needed for:**
- Leaderboards
- Cloud saves
- Multiplayer

**Architecture:**
```
┌──────────────┐      ┌──────────────┐      ┌──────────────┐
│ Static Site  │─────▶│ API Server   │─────▶│ Database     │
│ (Netlify)    │ HTTPS│ (Heroku/AWS) │      │ (PostgreSQL) │
└──────────────┘      └──────────────┘      └──────────────┘
```

**API Options:**
- Flask REST API (extend current)
- FastAPI (better async performance)
- Node.js Express (if team prefers JS)

---

## CI/CD Plan

### Development Workflow

```
Feature Branch
    ↓
Local Testing
    ↓
Git Commit
    ↓
Push to GitHub
    ↓
PR Review
    ↓
Merge to main
    ↓
Auto-Deploy to Production
```

### GitHub Actions Pipeline

**.github/workflows/deploy.yml:**
```yaml
name: Deploy CoinSlosh

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Run tests
        run: npm test
        
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
        with:
          args: deploy --prod
```

---

### Staging Environment

**staging.coinslosh.com:**
- Deploy from `develop` branch
- Test new features before production
- Separate analytics/monitoring

---

## Monitoring & Logging

### Development (Current)

**Console Logging:**
```typescript
console.log('[Physics] Coin spawned:', coinId);
console.warn('[State] Balance approaching max');
console.error('[Render] WebGL context lost');
```

**Debug Panel (Tweakpane):**
- FPS counter
- Active coin count
- Physics parameters
- State inspection

---

### Production (Future)

**Error Tracking:** Sentry
```typescript
Sentry.init({
  dsn: 'your-sentry-dsn',
  environment: 'production',
  tracesSampleRate: 0.1,
});
```

**Analytics:** Plausible or PostHog
```typescript
plausible('Coin Dropped', {
  props: { slotId: 2, balance: 490 }
});
```

**Performance Monitoring:**
- Web Vitals (LCP, FID, CLS)
- Frame rate tracking
- Physics step timing
- Load time metrics

---

## Scalability Strategy

### Performance Optimization

#### 1. Object Pooling
**Problem:** Creating/destroying coins is expensive  
**Solution:** Reuse coin objects

```typescript
class CoinPool {
  private pool: Coin[] = [];
  
  getCoin(): Coin {
    return this.pool.pop() || new Coin();
  }
  
  returnCoin(coin: Coin): void {
    coin.reset();
    this.pool.push(coin);
  }
}
```

**Impact:** 80% reduction in garbage collection

---

#### 2. Physics Optimization

**Sleeping Bodies:**
```typescript
// Coins that haven't moved become "sleeping"
rigidBody.setSleeping(true);
// Wake only on collision
```

**Fixed Timestep:**
```typescript
const PHYSICS_STEP = 1/60; // 60 Hz
accumulator += deltaTime;

while (accumulator >= PHYSICS_STEP) {
  world.step();
  accumulator -= PHYSICS_STEP;
}
```

**Impact:** Consistent physics regardless of frame rate

---

#### 3. Render Optimization

**Instanced Rendering (if needed):**
```typescript
const instancedMesh = new THREE.InstancedMesh(
  geometry,
  material,
  maxCoins
);
```

**Frustum Culling:**
```typescript
// Three.js does this automatically
// Only renders objects in camera view
```

**LOD (Level of Detail):**
```typescript
// Future: Lower poly coins when far from camera
const lod = new THREE.LOD();
lod.addLevel(highPolyMesh, 0);
lod.addLevel(lowPolyMesh, 50);
```

**Impact:** Maintain 60 FPS with 100+ coins

---

### Horizontal Scaling (Future Multiplayer)

**WebSocket Server:**
```
         Load Balancer
              ↓
    ┌─────────┴─────────┐
    ↓                   ↓
WS Server 1        WS Server 2
    ↓                   ↓
  Redis Pub/Sub (shared state)
```

**Database Scaling:**
- Read replicas for leaderboards
- Sharding by user ID
- Caching layer (Redis)

---

## Infrastructure as Code

### Terraform (Future)

**If using AWS:**
```hcl
resource "aws_s3_bucket" "coinslosh" {
  bucket = "coinslosh-static-assets"
  acl    = "public-read"
  
  website {
    index_document = "index.html"
  }
}

resource "aws_cloudfront_distribution" "cdn" {
  origin {
    domain_name = aws_s3_bucket.coinslosh.website_endpoint
    origin_id   = "S3-coinslosh"
  }
  
  enabled = true
  default_root_object = "index.html"
  
  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-coinslosh"
    
    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }
    
    viewer_protocol_policy = "redirect-to-https"
  }
}
```

---

## Security Considerations

### Client-Side Security

**1. Input Validation:**
```typescript
function validateCoinBalance(balance: number): boolean {
  return balance >= 0 && balance <= MAX_BALANCE;
}
```

**2. State Integrity:**
```typescript
// Validate loaded state before applying
if (!isValidState(loadedState)) {
  console.warn('Invalid state detected, using defaults');
  return getDefaultState();
}
```

**3. localStorage Limits:**
```typescript
try {
  localStorage.setItem(KEY, JSON.stringify(state));
} catch (e) {
  if (e.name === 'QuotaExceededError') {
    // Clear old data or warn user
  }
}
```

---

### Future Backend Security

**When API is added:**

1. **Authentication:** JWT tokens
2. **Rate Limiting:** Prevent abuse
3. **CORS:** Restrict to known domains
4. **Input Sanitization:** Prevent injection
5. **HTTPS Only:** No plain HTTP
6. **CSP Headers:** Content Security Policy

---

## Development Tools

### Essential Tools

1. **Tweakpane:** Debug panel for live tweaking
   ```typescript
   const pane = new Tweakpane.Pane();
   pane.addInput(PARAMS, 'coinMass', { min: 0.1, max: 2 });
   ```

2. **Three.js Inspector:** Chrome extension for scene debugging

3. **Stats.js:** FPS/MS monitoring
   ```typescript
   const stats = new Stats();
   document.body.appendChild(stats.dom);
   ```

4. **Chrome DevTools:**
   - Performance profiler
   - Memory heap snapshots
   - Network waterfall

---

### Code Quality Tools

**ESLint + Prettier:**
```json
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "no-console": "warn",
    "no-debugger": "error"
  }
}
```

**TypeScript Strict Mode:**
```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
```

---

## Technology Upgrade Path

### Current → Future

**Phase 1 (MVP):** Three.js + Rapier + Flask  
**Phase 2:** Add API server (Flask/FastAPI)  
**Phase 3:** Add database (PostgreSQL)  
**Phase 4:** Add WebSockets (Socket.io)  
**Phase 5:** Migrate to React Three Fiber (if UI complexity grows)

---

## Backup & Recovery Strategy

### Development
- Git version control
- Daily commits to GitHub
- Feature branches for experimentation

### Production (Future)
- **Database Backups:** Daily automated snapshots
- **Code:** GitHub as source of truth
- **Assets:** S3 bucket with versioning
- **Monitoring:** Uptime alerts (UptimeRobot)

**Recovery Time Objective (RTO):** < 1 hour  
**Recovery Point Objective (RPO):** < 24 hours

---

## Performance Benchmarks

### Target Metrics

| Metric | Target | Critical |
|--------|--------|----------|
| Load Time (FCP) | < 1.5s | < 3s |
| Load Time (TTI) | < 3s | < 5s |
| Frame Rate | 60 FPS | > 45 FPS |
| Bundle Size | < 500KB | < 1MB |
| Physics Step | < 16ms | < 20ms |
| Max Coins | 50+ | 30+ |

### Testing Plan
1. Lighthouse CI on every build
2. Manual testing on:
   - Chrome (Windows/Mac)
   - Firefox (Windows/Mac)
   - Safari (Mac/iOS)
   - Chrome Mobile (Android)
3. Performance profiling in DevTools
4. Load testing with Artillery (future API)

---

## Technology Risks & Mitigation

### Risk 1: WebGL Not Supported
**Mitigation:** Show fallback message with browser upgrade link

### Risk 2: Physics Performance Issues
**Mitigation:** Implement adaptive quality settings based on FPS

### Risk 3: localStorage Quota Exceeded
**Mitigation:** Compress state, clear old data, warn user

### Risk 4: Browser Compatibility
**Mitigation:** Use Babel for older browser support, provide browser requirements

### Risk 5: Memory Leaks
**Mitigation:** Proper disposal of Three.js/Rapier objects, use object pooling

---

## Documentation Standards

### Code Documentation
```typescript
/**
 * Spawns a coin at the specified drop slot
 * @param slotId - The slot index (0-3)
 * @param position - Initial 3D position
 * @returns The spawned coin instance
 * @throws {Error} If slot ID is invalid
 */
function spawnCoin(slotId: number, position: Vector3): Coin {
  // Implementation
}
```

### README.md Structure
1. Project overview
2. Prerequisites
3. Installation
4. Running locally
5. Building for production
6. Project structure
7. Contributing guidelines
8. License

---

## Long-Term Technical Vision

**Year 1:** Solid MVP with excellent physics  
**Year 2:** Add social features (leaderboards, sharing)  
**Year 3:** Multiplayer mode (competitive coin pushing)  
**Year 4:** Mobile app (React Native or PWA)  
**Year 5:** VR support (WebXR)

---

## Key Technical Principles

1. **Performance First:** 60 FPS is non-negotiable
2. **Simplicity:** Avoid over-engineering
3. **Type Safety:** TypeScript everywhere
4. **Progressive Enhancement:** Core game works, extras enhance
5. **Maintainability:** Clear code over clever code
6. **Testing:** Automated tests for critical paths
7. **Documentation:** Code explains itself, comments explain why
