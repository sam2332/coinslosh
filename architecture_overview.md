# Architecture Overview: CoinSlosh

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Client Browser                        │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                     HTML/CSS Layer                      │ │
│  │  - Index.html (70s retro styling)                      │ │
│  │  - UI Overlay (coin count display)                     │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │              TypeScript Application Layer              │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │ │
│  │  │ Game Manager │  │ Input Handler│  │ State Manager│ │ │
│  │  └──────────────┘  └──────────────┘  └─────────────┘ │ │
│  │  ┌──────────────┐  ┌──────────────┐  ┌─────────────┐ │ │
│  │  │Scene Manager │  │Physics Engine│  │ UI Controller│ │ │
│  │  └──────────────┘  └──────────────┘  └─────────────┘ │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                  Three.js Render Layer                  │ │
│  │  - WebGL Renderer                                       │ │
│  │  - Scene Graph (machine, coins, lighting)              │ │
│  │  - Camera (fixed perspective)                          │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │               Rapier3D Physics Engine                   │ │
│  │  - Physics World                                        │ │
│  │  - Rigid Bodies (coins, pusher, surfaces)              │ │
│  │  - Collision Detection & Response                      │ │
│  └────────────────────────────────────────────────────────┘ │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                  Browser Storage Layer                  │ │
│  │  - localStorage (game state persistence)               │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                              ▲
                              │ HTTP Request
                              │ (Static Assets)
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                      Flask Server (Dev)                      │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                    Flask Application                    │ │
│  │  - Static file serving (/static, /public)              │ │
│  │  - Template rendering (index.html)                     │ │
│  │  - Development hot-reload                              │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

## System Components

### 1. Frontend Application (Client-Side)

#### Three.js Scene Manager
**Responsibility:** Manages 3D scene, camera, lighting, and rendering
- Initializes WebGL renderer with appropriate settings
- Creates and manages scene graph
- Sets up fixed camera perspective
- Configures ambient and directional lighting for 70s aesthetic
- Runs render loop (requestAnimationFrame)
- Handles window resize events

#### Rapier3D Physics Engine
**Responsibility:** Simulates realistic physics for coins and pusher
- Initializes physics world with gravity
- Creates rigid bodies for coins (dynamic), pusher (kinematic), surfaces (static)
- Steps physics simulation each frame (fixed timestep)
- Provides collision detection and response
- Syncs physics body positions with Three.js mesh positions
- Manages sleeping/waking of static coins

#### Game Manager
**Responsibility:** Core game logic orchestration
- Initializes all subsystems
- Manages game loop timing
- Coordinates between physics, rendering, and UI
- Handles coin spawning logic
- Manages coin drop cooldown timer
- Implements edge detection zones (front/side)
- Calculates rewards/losses
- Enforces game rules (coin limits, balance caps)

#### State Manager
**Responsibility:** Game state and persistence
- Maintains current game state (coin balance, active coins, cooldown status)
- Provides getters/setters for state access
- Saves state to localStorage on changes
- Loads state from localStorage on initialization
- Handles state validation and migration
- Enforces maximum balance (999,999 coins)
- Provides state reset functionality

#### Input Handler (Pointer Events)
**Responsibility:** Unified input handling for mouse and touch
- Listens for pointer events (down, move, up)
- Performs raycasting to detect 3D object interactions
- Identifies clicked drop slot
- Validates drop action (coins available, cooldown status)
- Triggers coin spawn on valid drop
- Provides visual feedback (hover states)

#### Coin System
**Responsibility:** Coin lifecycle management
- Object pooling for performance (reuse coins)
- Spawns coins at specified drop positions
- Applies initial physics properties
- Manages active coin tracking
- Removes coins when they fall off edges
- Returns coins to pool for reuse
- Limits maximum active coins (50+ target)

#### Pusher Controller
**Responsibility:** Animated pusher platform
- Manages pusher position animation (3s forward, 3s back)
- Updates kinematic physics body position
- Provides smooth easing/interpolation
- Loops continuously
- Ensures proper collision with coins

#### Machine Builder
**Responsibility:** Constructs 3D coin pusher machine
- Creates cabinet frame with 70s aesthetic
- Builds two-tier platform system
- Creates side walls and back wall
- Positions drop slot markers
- Applies retro materials and colors
- Sets up static physics colliders for all surfaces

#### UI Controller
**Responsibility:** 2D overlay interface
- Displays coin count (updates in real-time)
- Shows drop cooldown indicator
- Provides slot selection feedback
- Applies 70s retro styling
- Handles responsive layout
- Shows error messages if needed

### 2. Backend (Flask Server)

#### Flask Application
**Responsibility:** Serves static assets during development
- Serves HTML template (index.html)
- Serves compiled JavaScript bundles (/static)
- Serves assets (images, fonts) from /public
- Provides development server with hot-reload
- No game logic (purely client-side game)
- No API endpoints (future expansion point)

### 3. Build System

#### Vite/Webpack Bundler
**Responsibility:** TypeScript compilation and bundling
- Compiles TypeScript to JavaScript
- Bundles modules for browser
- Provides development hot-reload
- Minifies production builds
- Handles asset imports
- Source map generation

## Data Flow

### Coin Drop Flow
```
User Input (Click/Touch)
    ↓
Input Handler (Pointer Event Detection)
    ↓
Validate (Coins Available? Cooldown Active?)
    ↓
Game Manager (Spawn Coin)
    ↓
Coin System (Get from Pool)
    ↓
Physics Engine (Create Rigid Body)
    ↓
Scene Manager (Add to Scene)
    ↓
State Manager (Decrement Balance, Save to localStorage)
    ↓
UI Controller (Update Display)
```

### Physics Update Flow (Every Frame)
```
Game Loop (requestAnimationFrame)
    ↓
Pusher Controller (Update Position)
    ↓
Physics Engine (Step Simulation)
    ↓
Collision Detection (Check Edge Zones)
    ↓
Game Manager (Process Collisions)
    ├─→ Front Edge? → Award 10 Coins → State Manager
    ├─→ Side Edge? → Remove Coin → Coin System
    └─→ No Edge? → Continue
    ↓
Scene Manager (Render Frame)
```

### State Persistence Flow
```
State Change (Balance Update)
    ↓
State Manager (Update Internal State)
    ↓
localStorage.setItem('coinslosh_state', JSON)
    ↓
Browser Storage (Persisted)

--- On Page Load ---

Game Initialization
    ↓
State Manager (Load State)
    ↓
localStorage.getItem('coinslosh_state')
    ↓
Parse JSON, Validate, Apply Defaults
    ↓
Game Starts with Restored State
```

## Security Boundaries

### Client-Side Only
- All game logic runs in browser
- No server-side validation
- State stored in localStorage (client can modify)
- No anti-cheat measures (accepted trade-off)
- Future: Can add server-side state validation if needed

### Content Security
- Static assets served over HTTP (dev) or HTTPS (production)
- No user-generated content
- No external API calls
- CORS not required (same-origin)

## Scaling Considerations

### Performance Optimization
- **Object Pooling:** Reuse coin instances instead of creating/destroying
- **Physics Optimization:** Use sleeping bodies for stationary coins
- **Render Optimization:** Frustum culling, instanced rendering if needed
- **Coin Limit:** Cap active coins to maintain 60 FPS

### Future Scalability
- **Multiplayer:** Add WebSocket server for real-time sync
- **Leaderboards:** Add database (SQLite → PostgreSQL)
- **Analytics:** Add event tracking (custom or third-party)
- **CDN:** Serve static assets from CDN for production
- **Progressive Web App:** Add service worker for offline play

### Mobile Performance
- Reduce physics simulation quality on low-end devices
- Adjust coin limit based on device capabilities
- Use lower-resolution textures on mobile
- Optimize render settings for mobile GPUs

## Technology Integration Points

### Three.js ↔ Rapier3D
- Three.js meshes positioned to match Rapier rigid body transforms
- Rapier provides physics simulation
- Three.js provides visualization
- Sync happens every frame in game loop

### TypeScript ↔ Flask
- Flask serves compiled JavaScript bundle
- No runtime communication (static serving only)
- Future: Can add REST API or WebSocket endpoints

### Browser APIs
- **localStorage:** State persistence
- **Pointer Events API:** Input handling
- **requestAnimationFrame:** Game loop timing
- **WebGL:** 3D rendering

## Development Workflow

```
Developer writes TypeScript code
    ↓
Vite/Webpack watches for changes
    ↓
Compile & bundle to JavaScript
    ↓
Output to /static directory
    ↓
Flask serves updated bundle
    ↓
Browser auto-reloads (hot-reload)
    ↓
Developer tests in browser
```

## Deployment Architecture (Future)

### Local Development
```
Flask Dev Server (localhost:5000)
  ├─ Serves HTML template
  ├─ Serves /static (JS bundles)
  └─ Serves /public (assets)
```

### Production (Future)
```
Static Hosting (Netlify/Vercel/S3)
  ├─ index.html
  ├─ /static (minified bundles)
  └─ /public (optimized assets)

Optional Backend (if needed later)
  └─ API Server (Node.js/Flask)
      └─ Database (PostgreSQL)
```

## Error Handling Strategy

### Client-Side Errors
- WebGL not supported: Show fallback message
- Physics engine initialization failure: Log and provide reset option
- Asset loading errors: Use fallback assets or show error state
- localStorage quota exceeded: Clear old data or warn user

### Development Debugging
- Tweakpane for live parameter adjustment
- Console logging for physics events
- FPS counter for performance monitoring
- Wireframe mode toggle
