import type { GameState } from '../types';
import { GAME_CONFIG, STORAGE_KEY, CURRENT_VERSION } from '../config/constants';

/**
 * Manages game state and persistence to localStorage
 */
export class StateManager {
  private state: GameState;

  constructor() {
    this.state = this.getDefaultState();
  }

  /**
   * Initialize state manager - loads from localStorage or creates default
   */
  public initialize(): void {
    const loaded = this.load();
    if (loaded) {
      console.log('[State] Loaded saved state:', loaded);
      this.state = loaded;
    } else {
      console.log('[State] Using default state');
      this.state = this.getDefaultState();
      this.save();
    }
  }

  /**
   * Get current coin balance
   */
  public getBalance(): number {
    return this.state.coinBalance;
  }

  /**
   * Set coin balance with validation
   */
  public setBalance(value: number): void {
    // Clamp between 0 and max
    const clampedValue = Math.max(0, Math.min(value, GAME_CONFIG.maxBalance));
    
    if (this.state.coinBalance !== clampedValue) {
      this.state.coinBalance = clampedValue;
      this.state.timestamp = Date.now();
      this.save();
      console.log('[State] Balance updated:', clampedValue);
    }
  }

  /**
   * Add coins to balance
   */
  public addCoins(amount: number): void {
    this.setBalance(this.state.coinBalance + amount);
  }

  /**
   * Subtract coins from balance
   */
  public subtractCoins(amount: number): void {
    this.setBalance(this.state.coinBalance - amount);
  }

  /**
   * Check if player can afford to drop a coin
   */
  public canDropCoin(): boolean {
    return this.state.coinBalance > 0;
  }

  /**
   * Check if balance is at maximum
   */
  public isMaxBalance(): boolean {
    return this.state.coinBalance >= GAME_CONFIG.maxBalance;
  }

  /**
   * Save state to localStorage
   */
  public save(): void {
    try {
      const serialized = JSON.stringify(this.state);
      localStorage.setItem(STORAGE_KEY, serialized);
    } catch (error) {
      console.error('[State] Failed to save:', error);
      if (error instanceof Error && error.name === 'QuotaExceededError') {
        console.warn('[State] localStorage quota exceeded');
        // Could implement cleanup here
      }
    }
  }

  /**
   * Load state from localStorage
   */
  public load(): GameState | null {
    try {
      const serialized = localStorage.getItem(STORAGE_KEY);
      if (!serialized) {
        return null;
      }

      const parsed = JSON.parse(serialized);
      
      // Validate the loaded state
      if (!this.validateState(parsed)) {
        console.warn('[State] Invalid state in localStorage, using defaults');
        return null;
      }

      // Migrate if needed
      const migrated = this.migrateState(parsed);
      
      return migrated;
    } catch (error) {
      console.error('[State] Failed to load:', error);
      return null;
    }
  }

  /**
   * Reset to default state
   */
  public reset(): void {
    this.state = this.getDefaultState();
    this.save();
    console.log('[State] Reset to defaults');
  }

  /**
   * Get default starting state
   */
  private getDefaultState(): GameState {
    return {
      coinBalance: GAME_CONFIG.startingBalance,
      timestamp: Date.now(),
      version: CURRENT_VERSION,
      statistics: undefined
    };
  }

  /**
   * Validate loaded state
   */
  private validateState(state: any): boolean {
    if (typeof state !== 'object' || state === null) {
      return false;
    }

    if (typeof state.coinBalance !== 'number' ||
        state.coinBalance < 0 ||
        state.coinBalance > GAME_CONFIG.maxBalance) {
      return false;
    }

    if (typeof state.timestamp !== 'number' || state.timestamp > Date.now()) {
      return false;
    }

    return true;
  }

  /**
   * Migrate state from older versions
   */
  private migrateState(state: any): GameState {
    let migrated = { ...state };

    // Add version if missing (pre-v1.0.0)
    if (!migrated.version) {
      migrated.version = CURRENT_VERSION;
    }

    // Future migrations would go here
    // if (migrated.version === '1.0.0' && CURRENT_VERSION === '1.1.0') { ... }

    return migrated as GameState;
  }

  /**
   * Get full state (for debugging)
   */
  public getState(): GameState {
    return { ...this.state };
  }
}
