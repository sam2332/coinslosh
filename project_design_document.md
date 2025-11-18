# Project Design Document: CoinSlosh - 3D Coin Pusher Game

## Project Overview
A web-based 3D coin pusher arcade game built with Flask backend and Three.js frontend. Players drop coins into one of 4 slots at the top, which fall onto a pusher platform. The pusher moves back and forth, pushing coins toward the edge. When coins fall off the front edge, players earn rewards (10 coins for every 1 that falls).

## Initial Questions & Requirements Gathering

### Phase 1: Core Gameplay Mechanics

**Coin Drop Mechanics:**
1. Should there be a cooldown/delay between coin drops to prevent spam?
Yes
2. Should all 4 slots drop coins at the same angle, or should slot position affect trajectory?
different angles but in a radial sun out from center witha  wide bottom
3. What should the initial coin count be for new players?
500 coins
4. Should there be a maximum coin inventory limit?
999999 coins 
**Physics & Collision:**
5. What size should the coins be (radius and thickness)?
coin thickness like a pog flipper(Slammer?)
6. Should coins have weight/mass variations or all be uniform?
all be uniform but heavyish
7. Should there be friction between coins and surfaces?
yes realistic but less frictions
8. What should the pusher speed/frequency be?
3 seconds in 3 seconds out

**Win Conditions:**
9. Should coins that fall off the sides be lost (common in real machines)?
they should be lost
10. Should there be any bonus multipliers or special events?
skip for now
11. Should the game track high scores or lifetime statistics?
skip for now

### Phase 2: Visual & User Experience

**3D Environment:**
12. What visual style are you aiming for (realistic, cartoon, neon arcade)?
arcade cabnite can be neon but im aim ing for 70s retro
13. Should there be background scenery or just focus on the machine?
yes use placeholder generator tool
14. What camera angle(s) should be available (fixed, rotatable, multiple presets)?
no other angles
15. Should coins have textures/designs on them?
skip for now

**UI Elements:**
16. Should there be sound effects (coin drops, collisions, wins)?
skip
17. Should there be visual feedback for successful drops (particle effects, screen shake)?
skip
18. What information should be displayed on screen (coin count, recent wins, etc.)?
coin count

**Game Table Design:**
19. What should the dimensions of the pusher platform be?
10 units wide? idk like inches?
20. Should there be walls on the sides?
yes
21. Should there be multiple levels/tiers in the machine?
2 tiers with moving platform

### Phase 3: Technical Architecture

**Backend (Flask):**
22. Should game state be stored server-side or client-side?
client
23. Should there be any anti-cheat measures?
no
24. Do you want session persistence (players can resume if they refresh)?
yes but localstorage

**Frontend (Three.js):**
25. What physics engine should we use (Cannon.js, Ammo.js, Rapier)?
i dont care, i was gonna say three.js but i dont know whats best i want to imporve the graphics from this point so it needs to be future proof
26. What performance targets (how many coins should be supported simultaneously)?
50 coins on screen with no limit to max
27. Should the game work on mobile devices or desktop only?
desktop and mobile, i want to use pointer events

**Deployment:**
28. Where will this be hosted?
locally in a dev envionment to test and build
29. Should there be any database for statistics?
sure but uneeded at first

## Finalized Specifications

### Game Mechanics
- **Starting Balance:** 500 coins
- **Maximum Balance:** 999,999 coins
- **Coin Drop:** Cooldown enabled to prevent spam
- **Drop Slots:** 4 slots arranged in radial pattern (sun-like spread from center, wide at bottom)
- **Coin Dimensions:** Pog/Slammer thickness (heavy cylinders)
- **Physics:** Uniform weight, realistic friction (slightly reduced for better gameplay)
- **Pusher Cycle:** 3 seconds forward, 3 seconds back (6 second total cycle)
- **Side Coins:** Lost permanently when falling off sides
- **Front Coins:** Award 10 coins per 1 coin that falls off front

### Visual Design
- **Style:** 70s retro arcade cabinet with neon accents
- **Background:** Placeholder images (using generator tool)
- **Camera:** Fixed angle only (no rotation)
- **Coin Textures:** Plain for now (future enhancement)
- **Effects:** None initially (particles/screen shake deferred)
- **UI Display:** Coin count only

### Machine Design
- **Platform Width:** 10 units (approximately 10 inches scale)
- **Side Walls:** Yes, to contain coins
- **Levels:** 2 tiers with moving pusher platform
- **Architecture:** Multi-level coin pusher design

### Technical Implementation
- **State Storage:** Client-side with localStorage persistence
- **Anti-cheat:** Not implemented
- **Session Persistence:** Yes via localStorage
- **Physics Engine:** To be determined (Cannon.js, Ammo.js, or Rapier) - prioritize future graphics upgrades
- **Performance Target:** Smooth operation with 50+ coins simultaneously
- **Platform Support:** Desktop and mobile (pointer events for universal input)
- **Development:** Local Flask server for testing
- **Database:** Optional for future statistics

## Technology Stack (Final)

**Backend:**
- Flask (Python 3.10+)
- Flask development server
- Optional: Flask-CORS for API endpoints

**Frontend:**
- Three.js (latest stable)
- Physics engine: Rapier3D (recommended for future-proofing and performance)
- TypeScript (compiled to JavaScript)
- HTML5/CSS3
- LocalStorage API for state persistence
- Tweakpane for debug controls during development

**Additional Libraries:**
- Pointer Events API (unified mouse/touch handling)
- Three.js GLTFLoader (for future asset loading)
- Vite or Webpack for TypeScript bundling