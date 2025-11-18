import type {
  GameConfig,
  MachineConfig,
  CoinPhysicsProperties
} from '../types';

/**
 * Global Game Configuration
 */
export const GAME_CONFIG: GameConfig = {
  startingBalance: 500,
  maxBalance: 9999999,
  dropCooldownMs: 1000,
  maxActiveCoins: 50,
  targetFPS: 60,
  physicsStepRate: 60,
  coinRewardMultiplier: 10
};

/**
 * Default Coin Physics Properties
 */
export const DEFAULT_COIN_PROPERTIES: CoinPhysicsProperties = {
  radius: 0.05,
  thickness: 0.01,
  mass: 0.5,
  friction: 0.4,
  restitution: 0.2,
  linearDamping: 0.1,
  angularDamping: 0.05
};

/**
 * Machine Configuration
 */
export const MACHINE_CONFIG: MachineConfig = {
  dimensions: {
    width: 10,
    depth: 15,
    upperTierHeight: 5,
    lowerTierHeight: 2,
    wallHeight: 3,
    wallThickness: 0.2
  },
  dropSlots: [
    { id: 0, position: { x: -2, y: 8, z: -5 }, angle: 30 },
    { id: 1, position: { x: -0.5, y: 8, z: -5 }, angle: 15 },
    { id: 2, position: { x: 0.5, y: 8, z: -5 }, angle: -15 },
    { id: 3, position: { x: 2, y: 8, z: -5 }, angle: -30 }
  ],
  pusher: {
    width: 9.5,
    height: 0.5,
    depth: 1.5,
    startZ: -2,
    endZ: 5,
    forwardDuration: 3000,
    backwardDuration: 3000
  },
  edgeZones: [
    {
      type: 'front',
      position: { x: 0, y: 1, z: 7.5 },
      size: { width: 10, depth: 1 },
      reward: 10
    },
    {
      type: 'left',
      position: { x: -5.5, y: 1, z: 0 },
      size: { width: 1, depth: 15 },
      reward: 0
    },
    {
      type: 'right',
      position: { x: 5.5, y: 1, z: 0 },
      size: { width: 1, depth: 15 },
      reward: 0
    }
  ]
};

/**
 * LocalStorage Keys
 */
export const STORAGE_KEY = 'coinslosh_state';

/**
 * Current Version
 */
export const CURRENT_VERSION = '1.0.0';
