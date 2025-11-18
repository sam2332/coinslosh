# UX Research & Flows: CoinSlosh

## User Personas

### Persona 1: The Casual Arcade Fan
**Name:** Sarah, 28  
**Background:** Enjoys casual mobile games during commute  
**Goals:**
- Quick, satisfying gameplay sessions (5-10 minutes)
- Nostalgic arcade experience without quarters
- Easy to pick up and play
- Works on phone and desktop

**Pain Points:**
- Frustrated by complex game mechanics
- Dislikes games that require constant attention
- Annoyed by aggressive monetization

**Use Case for CoinSlosh:**
- Plays during lunch breaks on desktop
- Enjoys the tactile satisfaction of dropping coins
- Likes watching coins cascade and build up
- Returns periodically to check progress

---

### Persona 2: The Completionist
**Name:** Marcus, 35  
**Background:** Enjoys optimization and reaching goals  
**Goals:**
- Maximize coin balance
- Find optimal drop strategies
- Track progress and statistics
- Achieve high scores

**Pain Points:**
- Frustrated when game mechanics aren't clear
- Dislikes feeling progress isn't tracked
- Wants to understand probabilities and outcomes

**Use Case for CoinSlosh:**
- Experiments with different slot positions
- Calculates optimal timing for drops
- Aims for maximum coin balance
- Appreciates the 10:1 reward ratio

---

### Persona 3: The Arcade Nostalgist
**Name:** Derek, 42  
**Background:** Grew up in 70s/80s arcade era  
**Goals:**
- Relive childhood arcade memories
- Experience authentic coin pusher mechanics
- Enjoy retro aesthetic
- Share with friends

**Pain Points:**
- Dislikes modern, cluttered UIs
- Prefers authentic physics over artificial difficulty
- Wants genuine arcade experience

**Use Case for CoinSlosh:**
- Plays on desktop with large screen
- Appreciates the 70s retro styling
- Shares link with friends for nostalgia
- Values realistic coin physics

---

## User Stories

### Core Gameplay
1. **As a player**, I want to drop coins into slots, so I can push existing coins toward the edge
2. **As a player**, I want to see my coin balance clearly, so I know how many drops I have left
3. **As a player**, I want coins to fall realistically, so the game feels authentic
4. **As a player**, I want to earn more coins than I spend, so I feel progression
5. **As a player**, I want my progress saved automatically, so I don't lose my balance

### Interaction
6. **As a mobile user**, I want to tap slots easily, so I can play on my phone
7. **As a desktop user**, I want to click slots precisely, so I have fine control
8. **As a player**, I want visual feedback when hovering over slots, so I know where I'm dropping
9. **As a player**, I want a cooldown between drops, so I don't accidentally waste coins
10. **As a player**, I want to see when I can drop again, so I time my actions

### Visual Experience
11. **As a player**, I want a 70s retro aesthetic, so I feel nostalgic
12. **As a player**, I want to clearly see when coins fall off the edge, so I know when I win
13. **As a player**, I want smooth animations, so the game feels polished
14. **As a player**, I want the game to run smoothly even with many coins, so gameplay doesn't lag

### Progression
15. **As a player**, I want my coin balance to persist, so I can continue later
16. **As a player**, I want to know how many coins I earn per drop, so I understand rewards
17. **As a player**, I want a maximum balance cap, so I have a goal to reach

---

## Acceptance Criteria

### User Story 1: Drop Coins
**Given** I have at least 1 coin in my balance  
**When** I click/tap on a drop slot  
**Then** one coin should spawn above that slot and fall with realistic physics  
**And** my balance should decrease by 1  
**And** the cooldown should activate

### User Story 2: See Coin Balance
**Given** I am on the game page  
**Then** I should see my current coin balance prominently displayed  
**And** the balance should update in real-time when it changes  
**And** the number should be large and easy to read

### User Story 5: Auto-Save Progress
**Given** my coin balance changes  
**When** I earn or spend coins  
**Then** the new balance should be saved to localStorage immediately  
**And** if I refresh the page, my balance should persist  
**And** if I'm a new player, I should start with 500 coins

### User Story 8: Visual Feedback on Hover
**Given** I move my cursor over a drop slot  
**Then** the slot should highlight visually  
**And** the cursor should change to indicate interactivity  
**And** if cooldown is active, the slot should appear disabled

### User Story 14: Smooth Performance
**Given** there are 50+ coins on screen  
**When** the game is running  
**Then** the frame rate should remain at 60 FPS  
**And** physics should remain stable  
**And** coin interactions should feel responsive

---

## User Flows

### Flow 1: First-Time Player

```
┌─────────────────────────┐
│  User visits game URL   │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│   Page loads (Flask)    │
│  - HTML template served │
│  - JS bundle loaded     │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Game initializes       │
│  - Three.js scene setup │
│  - Check localStorage   │
│  - No saved state found │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Create default state   │
│  - Balance: 500 coins   │
│  - Save to localStorage │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Display game           │
│  - Show coin count: 500 │
│  - Show coin pusher     │
│  - Enable slot clicks   │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  User explores UI       │
│  - Hovers over slots    │
│  - Sees highlighting    │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  User clicks slot       │
│  - Coin drops           │
│  - Balance: 499         │
│  - Cooldown starts      │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  User watches coin fall │
│  - Coin hits platform   │
│  - Pusher moves coin    │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Coin falls off edge?   │
└────┬─────────────┬──────┘
     │             │
 Yes │             │ No
     │             │
     ▼             ▼
┌────────┐    ┌────────┐
│ Front  │    │ Side   │
│ +10    │    │ -1     │
│ coins  │    │ (lost) │
└────────┘    └────────┘
```

---

### Flow 2: Returning Player

```
┌─────────────────────────┐
│  User returns to site   │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Game loads             │
│  - Check localStorage   │
│  - Found saved state    │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Validate saved state   │
│  - Check balance range  │
│  - Check timestamp      │
│  - Migrate if needed    │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Restore state          │
│  - Balance: 1,250       │
│  - Display on UI        │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Continue playing       │
│  - Drop coins           │
│  - Earn rewards         │
└─────────────────────────┘
```

---

### Flow 3: Coin Drop Interaction

```
┌─────────────────────────┐
│  Cooldown ready?        │
└────┬───────────────┬────┘
     │               │
    Yes             No
     │               │
     ▼               ▼
┌────────┐    ┌──────────────┐
│ Enable │    │ Show cooldown│
│ slots  │    │ indicator    │
└────┬───┘    └──────────────┘
     │
     ▼
┌─────────────────────────┐
│  User hovers slot       │
│  - Highlight slot       │
│  - Change cursor        │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  User clicks slot       │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Check: Balance > 0?    │
└────┬───────────────┬────┘
     │               │
    Yes             No
     │               │
     ▼               ▼
┌────────────┐  ┌─────────────────┐
│ Spawn coin │  │ Show error:     │
│ at slot    │  │ "No coins left" │
└─────┬──────┘  └─────────────────┘
      │
      ▼
┌─────────────────────────┐
│  Deduct 1 coin          │
│  - Update UI            │
│  - Save to localStorage │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Start cooldown (1s)    │
│  - Disable slots        │
│  - Show timer           │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Coin falls & interacts │
│  - Physics simulation   │
│  - Collides with coins  │
│  - Pushed by platform   │
└─────────────────────────┘
```

---

### Flow 4: Winning Coins

```
┌─────────────────────────┐
│  Coin reaches front     │
│  edge of platform       │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Trigger edge detection │
│  - Detect collision     │
│  - Identify zone: FRONT │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Calculate reward       │
│  - Base: 1 coin fell    │
│  - Reward: 10 coins     │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Update balance         │
│  - Add 10 coins         │
│  - Check max (999,999)  │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Update UI              │
│  - Animate number       │
│  - Show new balance     │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Save to localStorage   │
└───────────┬─────────────┘
            │
            ▼
┌─────────────────────────┐
│  Remove coin from scene │
│  - Return to pool       │
└─────────────────────────┘
```

---

## Page States

### State 1: Loading
- Show loading indicator
- Initialize Three.js
- Load localStorage
- Set up physics engine
- Duration: 1-3 seconds

**Visual:**
```
┌────────────────────────────┐
│                            │
│      COINSLOSH             │
│                            │
│     [Loading...]           │
│                            │
└────────────────────────────┘
```

---

### State 2: Ready to Play
- 3D scene fully loaded
- Coin count displayed
- Slots interactive
- Pusher animating
- Cooldown: ready

**Visual:**
```
┌────────────────────────────┐
│ Coins: 500       [?]       │
├────────────────────────────┤
│                            │
│    [Slot1] [Slot2]         │
│    [Slot3] [Slot4]         │
│                            │
│    ┌──────────────┐        │
│    │   PUSHER     │        │
│    │              │        │
│    └──────────────┘        │
│                            │
└────────────────────────────┘
```

---

### State 3: Cooldown Active
- Slots disabled/dimmed
- Cooldown timer visible
- Coin count unchanged
- Physics still running

**Visual:**
```
┌────────────────────────────┐
│ Coins: 499     Cooldown: 1s│
├────────────────────────────┤
│                            │
│  [Slot1] [Slot2] (dimmed)  │
│  [Slot3] [Slot4]           │
│                            │
│    ┌──────────────┐        │
│    │   PUSHER     │        │
│    │   [coins]    │        │
│    └──────────────┘        │
│                            │
└────────────────────────────┘
```

---

### State 4: No Coins Left
- Balance: 0
- Slots disabled
- Show message
- Wait for coins to fall off front

**Visual:**
```
┌────────────────────────────┐
│ Coins: 0                   │
│ "Wait for coins to win!"   │
├────────────────────────────┤
│                            │
│  [Slot1] [Slot2] (disabled)│
│  [Slot3] [Slot4]           │
│                            │
│    ┌──────────────┐        │
│    │   PUSHER     │        │
│    │   [coins]    │        │
│    └──────────────┘        │
│                            │
└────────────────────────────┘
```

---

### State 5: Maximum Balance Reached
- Balance: 999,999
- Slots disabled
- Show achievement message
- Can still watch coins

**Visual:**
```
┌────────────────────────────┐
│ Coins: 999,999 [MAX! 🎉]   │
├────────────────────────────┤
│                            │
│  [Slot1] [Slot2] (disabled)│
│  [Slot3] [Slot4]           │
│                            │
│   "You've reached max!"    │
│                            │
└────────────────────────────┘
```

---

## Wireframe Descriptions

### Desktop Layout (1920x1080)

```
┌──────────────────────────────────────────────────────────────┐
│  ┌────────────────────────────────────────────────────────┐  │
│  │  COINSLOSH                           Coins: 500    [?] │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │                                                        │  │
│  │              [Background: Placeholder Image]          │  │
│  │                                                        │  │
│  │    ┌─┐  ┌─┐  ┌─┐  ┌─┐                                │  │
│  │    │1│  │2│  │3│  │4│  ← Drop Slots                  │  │
│  │    └─┘  └─┘  └─┘  └─┘                                │  │
│  │                                                        │  │
│  │         ┌──────────────────┐                          │  │
│  │         │  Upper Platform  │                          │  │
│  │         │      [coins]     │                          │  │
│  │         └──────────────────┘                          │  │
│  │                                                        │  │
│  │    ┌────────────────────────────┐                     │  │
│  │    │       PUSHER BLADE         │                     │  │
│  │    │                            │                     │  │
│  │    │        [coins]             │                     │  │
│  │    │                            │                     │  │
│  │    └────────────────────────────┘                     │  │
│  │                                                        │  │
│  │             [Front Edge] ← Win Zone                   │  │
│  │                                                        │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  Cooldown: Ready                                       │  │
│  └────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────┘
```

### Mobile Layout (375x812)

```
┌──────────────────────────┐
│ Coins: 500         [?]   │
├──────────────────────────┤
│                          │
│   ┌─┐ ┌─┐ ┌─┐ ┌─┐       │
│   │1│ │2│ │3│ │4│       │
│   └─┘ └─┘ └─┘ └─┘       │
│                          │
│    ┌──────────────┐      │
│    │  Platform    │      │
│    │   [coins]    │      │
│    └──────────────┘      │
│                          │
│   ┌────────────────┐     │
│   │    PUSHER      │     │
│   │    [coins]     │     │
│   └────────────────┘     │
│                          │
│      [Win Zone]          │
│                          │
├──────────────────────────┤
│ Cooldown: Ready          │
└──────────────────────────┘
```

---

## Interaction Patterns

### Pointer Events
- **Mouse (Desktop):**
  - Hover: Highlight slot
  - Click: Drop coin
  - Cursor: pointer on interactive elements

- **Touch (Mobile):**
  - Tap: Drop coin (no hover state)
  - Visual feedback on touch down
  - Prevent accidental double-taps with cooldown

### Feedback Mechanisms
- **Visual:** Slot highlighting, balance updates
- **Behavioral:** Cooldown prevents spam
- **Systemic:** Coins lost from sides, won from front

---

## Accessibility Considerations (Future)

- High contrast mode for visibility
- Keyboard controls (1-4 keys for slots)
- Screen reader announcements for balance changes
- Reduced motion option
- Clear focus indicators
- Alt text for visual elements

---

## Design Principles

1. **Clarity:** Balance always visible and prominent
2. **Simplicity:** One primary action (drop coin)
3. **Feedback:** Immediate visual response to actions
4. **Authenticity:** Realistic physics and arcade feel
5. **Nostalgia:** 70s retro aesthetic throughout
6. **Performance:** Smooth 60 FPS regardless of coin count
