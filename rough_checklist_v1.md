# CoinSlosh Development Checklist v1

## Milestone 1: Project Setup & Environment
- [ ] Initialize Flask project structure
  - [ ] Create virtual environment
  - [ ] Install Flask and dependencies
  - [ ] Set up basic Flask app with single route
  - [ ] Configure Flask development server
- [ ] Set up frontend build system
  - [ ] Initialize npm/package.json
  - [ ] Install Three.js and TypeScript
  - [ ] Configure TypeScript compiler (tsconfig.json)
  - [ ] Set up Vite or Webpack for bundling
  - [ ] Create development build script
- [ ] Create basic project structure
  - [ ] `/static` folder for compiled JS/CSS
  - [ ] `/templates` folder for HTML
  - [ ] `/src` folder for TypeScript source
  - [ ] `/public` folder for assets
- [ ] Create basic HTML template
  - [ ] Canvas element for Three.js
  - [ ] UI overlay for coin count
  - [ ] Basic 70s retro styling (CSS)

## Milestone 2: Three.js Scene & Camera Setup
- [ ] Initialize Three.js scene
  - [ ] Create WebGL renderer
  - [ ] Set up scene with lighting (ambient + directional)
  - [ ] Configure fixed camera position/angle
  - [ ] Add basic fog/atmosphere for depth
- [ ] Create placeholder background
  - [ ] Generate placeholder image using tool
  - [ ] Add as scene background or skybox
  - [ ] Style for 70s arcade aesthetic
- [ ] Set up render loop
  - [ ] Basic animation frame loop
  - [ ] Delta time calculation
  - [ ] FPS counter (debug mode)

## Milestone 3: Physics Engine Integration
- [ ] Install and configure physics engine (Rapier3D recommended)
  - [ ] Add physics world initialization
  - [ ] Set gravity and world parameters
  - [ ] Create physics update loop
  - [ ] Sync Three.js meshes with physics bodies
- [ ] Test basic physics
  - [ ] Drop single test sphere
  - [ ] Verify collision detection
  - [ ] Tune friction/restitution values

## Milestone 4: Coin Pusher Machine - Structure
- [ ] Create machine frame/cabinet
  - [ ] Build static geometry (walls, base)
  - [ ] Apply 70s neon materials/colors
  - [ ] Add side walls (10 units wide reference)
  - [ ] Create back wall
- [ ] Build two-tier platform system
  - [ ] Upper collection tier
  - [ ] Lower pusher tier with drop-off edge
  - [ ] Connect tiers with appropriate slope/gap
- [ ] Create physics colliders for all static geometry
  - [ ] Floor colliders for each tier
  - [ ] Wall colliders (sides and back)
  - [ ] Edge detection zones (front and sides)

## Milestone 5: Moving Pusher Platform
- [ ] Create pusher platform geometry
  - [ ] Rectangular pusher blade
  - [ ] Position at back of lower tier initially
  - [ ] Apply materials
- [ ] Implement pusher animation
  - [ ] 3 seconds forward movement
  - [ ] 3 seconds backward movement
  - [ ] Smooth easing/acceleration
  - [ ] Loop continuously
- [ ] Add physics body to pusher
  - [ ] Kinematic body (moves but isn't affected by collisions)
  - [ ] Proper collision shape
  - [ ] Test pushing static objects

## Milestone 6: Coin Physics & Rendering
- [ ] Create coin class/prefab
  - [ ] Cylindrical geometry (pog/slammer proportions)
  - [ ] Heavy mass for physics body
  - [ ] Metallic material (gold/brass color)
  - [ ] Physics cylinder collider
- [ ] Implement coin spawning system
  - [ ] Spawn at specified drop positions
  - [ ] Initial drop velocity/physics
  - [ ] Pool system for performance (reuse coins)
- [ ] Tune coin physics
  - [ ] Weight/mass values
  - [ ] Friction (reduced but realistic)
  - [ ] Restitution (bounciness)
  - [ ] Coin-to-coin collision

## Milestone 7: Drop Slot System
- [ ] Create 4 drop slot positions
  - [ ] Calculate radial spread pattern
  - [ ] Visualize slot indicators (markers/guides)
  - [ ] Position above upper tier
- [ ] Implement slot selection
  - [ ] Pointer event detection (mouse/touch)
  - [ ] Highlight selected slot on hover
  - [ ] Visual feedback for slot selection
- [ ] Add drop cooldown system
  - [ ] Timer between drops
  - [ ] Visual cooldown indicator
  - [ ] Disable dropping during cooldown

## Milestone 8: Coin Collection & Scoring
- [ ] Implement edge detection zones
  - [ ] Front edge (win zone) - awards 10 coins
  - [ ] Side edges (loss zones) - no reward
  - [ ] Trigger zones using physics colliders or raycasting
- [ ] Create coin removal system
  - [ ] Detect coins entering zones
  - [ ] Remove from scene and physics world
  - [ ] Return to pool for reuse
- [ ] Build scoring logic
  - [ ] Track coins collected from front
  - [ ] Award 10 coins per successful drop
  - [ ] Deduct coins when dropped by player
  - [ ] Update coin balance in real-time

## Milestone 9: Game State & UI
- [ ] Create game state manager
  - [ ] Current coin balance (start at 500)
  - [ ] Max balance cap (999,999)
  - [ ] Cooldown state
  - [ ] Active coins on board
- [ ] Build UI overlay
  - [ ] Coin count display (large, readable)
  - [ ] 70s retro font and styling
  - [ ] Responsive layout for mobile/desktop
- [ ] Implement localStorage persistence
  - [ ] Save coin balance on change
  - [ ] Save timestamp
  - [ ] Load on game start
  - [ ] Handle first-time players (default 500 coins)

## Milestone 10: Input Handling (Pointer Events)
- [ ] Set up unified pointer event system
  - [ ] Handle mouse events (desktop)
  - [ ] Handle touch events (mobile)
  - [ ] Raycasting from pointer to 3D scene
- [ ] Implement coin drop interaction
  - [ ] Detect click/tap on drop slots
  - [ ] Check if player has coins available
  - [ ] Check if cooldown is active
  - [ ] Trigger coin spawn
- [ ] Add visual feedback
  - [ ] Cursor changes on hover
  - [ ] Slot highlighting
  - [ ] Disabled state visuals during cooldown

## Milestone 11: Performance Optimization
- [ ] Implement coin limit system
  - [ ] Track active coin count
  - [ ] Target: smooth at 50+ coins
  - [ ] Object pooling for coin reuse
  - [ ] Remove oldest coins if limit exceeded
- [ ] Optimize rendering
  - [ ] Instanced meshes if needed
  - [ ] Frustum culling
  - [ ] LOD system (optional)
- [ ] Optimize physics
  - [ ] Sleeping bodies for stationary coins
  - [ ] Simplified collision shapes where possible
  - [ ] Physics world optimization settings
- [ ] Test on target devices
  - [ ] Desktop browsers (Chrome, Firefox, Safari)
  - [ ] Mobile browsers (iOS Safari, Chrome Android)
  - [ ] Monitor FPS and adjust settings

## Milestone 12: Debug Tools & Polish
- [ ] Add Tweakpane debug panel (development only)
  - [ ] Adjust physics parameters live
  - [ ] Adjust pusher speed
  - [ ] Adjust coin properties
  - [ ] Toggle wireframes
  - [ ] Reset game state
- [ ] Add basic error handling
  - [ ] WebGL not supported fallback
  - [ ] Physics initialization errors
  - [ ] Asset loading errors
- [ ] Final visual polish
  - [ ] Adjust lighting for mood
  - [ ] Fine-tune materials
  - [ ] Add subtle details to cabinet
  - [ ] Ensure 70s aesthetic is consistent

## Milestone 13: Testing & Bug Fixes
- [ ] Functional testing
  - [ ] Test all 4 drop slots
  - [ ] Verify coin physics behavior
  - [ ] Test edge cases (0 coins, max coins)
  - [ ] Verify localStorage persistence
  - [ ] Test cooldown system
- [ ] Cross-browser testing
  - [ ] Chrome/Edge
  - [ ] Firefox
  - [ ] Safari (desktop & iOS)
  - [ ] Mobile Chrome
- [ ] Performance testing
  - [ ] Stress test with many coins
  - [ ] Check memory leaks
  - [ ] Verify smooth 60 FPS target
- [ ] Bug fixes and refinements

## Milestone 14: Documentation & Deployment Prep
- [ ] Code documentation
  - [ ] Comment complex physics logic
  - [ ] Document game state structure
  - [ ] Add README.md with setup instructions
- [ ] Create development documentation
  - [ ] How to run locally
  - [ ] How to build for production
  - [ ] Architecture overview
- [ ] Prepare for future enhancements
  - [ ] Note areas for sound effects
  - [ ] Note areas for visual effects
  - [ ] Note database integration points
  - [ ] Note multiplayer considerations

## Future Enhancements (Post-MVP)
- [ ] Sound effects (coin drops, collisions, wins)
- [ ] Particle effects for wins
- [ ] Screen shake feedback
- [ ] Coin textures and designs
- [ ] Bonus multipliers and special events
- [ ] High score tracking
- [ ] Lifetime statistics
- [ ] Database integration
- [ ] Additional camera angles
- [ ] Mobile UI/UX improvements
- [ ] Progressive Web App (PWA) features
