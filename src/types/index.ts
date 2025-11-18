import * as THREE from 'three';

/**
 * Game State - Persisted to localStorage
 */
export interface GameState {
  coinBalance: number;
  timestamp: number;
  version: string;
  statistics?: GameStatistics;
}

/**
 * Game Statistics (Future)
 */
export interface GameStatistics {
  totalCoinsDropped: number;
  totalCoinsWon: number;
  totalCoinsLost: number;
  gamesPlayed: number;
  longestWinStreak: number;
  averageCoinsPerDrop: number;
  highestBalance: number;
  playtimeSeconds: number;
}

/**
 * Runtime State (Not Persisted)
 */
export interface RuntimeState {
  isDropCooldownActive: boolean;
  cooldownTimeRemaining: number;
  activeCoins: Coin[];
  pusherPhase: number;
  pusherDirection: 'forward' | 'backward';
  dropSlotHovered: number | null;
  isPaused: boolean;
}

/**
 * Coin States
 */
export enum CoinState {
  SPAWNING = 'spawning',
  ACTIVE = 'active',
  FALLING = 'falling',
  COLLECTED = 'collected'
}

/**
 * Coin Object
 */
export interface Coin {
  id: string;
  mesh: THREE.Mesh;
  rigidBody: any; // RAPIER.RigidBody
  state: CoinState;
  createdAt: number;
  isPooled: boolean;
}

/**
 * Coin Physics Properties
 */
export interface CoinPhysicsProperties {
  radius: number;
  thickness: number;
  mass: number;
  friction: number;
  restitution: number;
  linearDamping: number;
  angularDamping: number;
}

/**
 * Machine Configuration
 */
export interface MachineConfig {
  dimensions: MachineDimensions;
  dropSlots: DropSlot[];
  pusher: PusherConfig;
  edgeZones: EdgeZone[];
}

export interface MachineDimensions {
  width: number;
  depth: number;
  upperTierHeight: number;
  lowerTierHeight: number;
  wallHeight: number;
  wallThickness: number;
}

export interface DropSlot {
  id: number;
  position: { x: number; y: number; z: number };
  angle: number;
  visualMarker?: THREE.Mesh;
}

export interface PusherConfig {
  width: number;
  height: number;
  depth: number;
  startZ: number;
  endZ: number;
  forwardDuration: number;
  backwardDuration: number;
}

export interface EdgeZone {
  type: 'front' | 'left' | 'right';
  position: { x: number; y: number; z: number };
  size: { width: number; depth: number };
  reward: number;
}

/**
 * UI State
 */
export interface UIState {
  displayedCoinBalance: number;
  cooldownProgress: number;
  selectedSlot: number | null;
  errorMessage: string | null;
  errorTimeout: number | null;
}

/**
 * Game Configuration
 */
export interface GameConfig {
  startingBalance: number;
  maxBalance: number;
  dropCooldownMs: number;
  maxActiveCoins: number;
  targetFPS: number;
  physicsStepRate: number;
  coinRewardMultiplier: number;
}

/**
 * Debug State (Development Only)
 */
export interface DebugState {
  showWireframes: boolean;
  showPhysicsDebug: boolean;
  coinMass: number;
  coinFriction: number;
  pusherSpeed: number;
  gravity: number;
  spawnInterval: number;
  freezePhysics: boolean;
}

/**
 * Pool Statistics
 */
export interface PoolStats {
  availableCount: number;
  activeCount: number;
  totalCreated: number;
  reuseRate: number;
}

/**
 * Game Events
 */
export enum GameEventType {
  COIN_DROPPED = 'coin_dropped',
  COIN_COLLECTED = 'coin_collected',
  COIN_LOST = 'coin_lost',
  BALANCE_CHANGED = 'balance_changed',
  COOLDOWN_STARTED = 'cooldown_started',
  COOLDOWN_ENDED = 'cooldown_ended',
  GAME_PAUSED = 'game_paused',
  GAME_RESUMED = 'game_resumed',
  ERROR_OCCURRED = 'error_occurred'
}

export interface GameEvent {
  type: GameEventType;
  timestamp: number;
  data?: any;
}

export interface CoinDroppedEvent extends GameEvent {
  type: GameEventType.COIN_DROPPED;
  data: {
    slotId: number;
    coinId: string;
    remainingBalance: number;
  };
}

export interface CoinCollectedEvent extends GameEvent {
  type: GameEventType.COIN_COLLECTED;
  data: {
    coinId: string;
    reward: number;
    newBalance: number;
  };
}
