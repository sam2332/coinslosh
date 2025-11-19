import { SceneManager } from '../rendering/SceneManager';
import { MachineBuilder } from '../rendering/MachineBuilder';
import { SimplePhysics } from '../physics/SimplePhysics';
import { StateManager } from './StateManager';
import { UIController } from '../ui/UIController';
import { CoinManager } from './CoinManager';
import { InputHandler } from '../input/InputHandler';
import { GAME_CONFIG } from '../config/constants';

/**
 * Main game manager - orchestrates all subsystems
 */
export class GameManager {
  private sceneManager!: SceneManager;
  private physics!: SimplePhysics;
  private stateManager!: StateManager;
  private uiController!: UIController;
  private coinManager!: CoinManager;
  private _inputHandler!: InputHandler; // Underscore indicates it's used for side effects

  private isRunning: boolean = false;
  private lastTime: number = 0;
  private cooldownEndTime: number = 0;

  /**
   * Initialize all game subsystems
   */
  public async initialize(canvas: HTMLCanvasElement): Promise<void> {
    console.log('[Game] Initializing CoinSlosh...');

    try {
      // Initialize UI first (for loading screen)
      console.log('[Game] Step 1: UI Controller');
      this.uiController = new UIController();

      // Initialize state manager
      console.log('[Game] Step 2: State Manager');
      this.stateManager = new StateManager();
      this.stateManager.initialize();
      this.uiController.updateCoinCount(this.stateManager.getBalance());

      // Initialize scene
      console.log('[Game] Step 3: Three.js Scene');
      this.sceneManager = new SceneManager(canvas);

      // Initialize simple physics
      console.log('[Game] Step 4: Simple Physics Engine');
      this.physics = new SimplePhysics();
      console.log('[Game] Physics initialized');

      // Build machine geometry
      console.log('[Game] Step 5: Building Machine');
      const machineBuilder = new MachineBuilder(this.sceneManager.scene, this.physics);
      machineBuilder.build();
      console.log('[Game] Machine built');

      // Setup coin system
      console.log('[Game] Step 6: Coin System');
      this.coinManager = new CoinManager(this.sceneManager.scene, this.physics);
      console.log('[Game] Coin system ready');

      // Setup input handlers
      console.log('[Game] Step 7: Input Handlers');
      this._inputHandler = new InputHandler(canvas, this.sceneManager.camera, this.sceneManager.scene, this);
      console.log('[Game] Input handlers ready');

      console.log('[Game] ✅ Initialization complete!');
      this.uiController.hideLoadingScreen();

      // Start game loop
      this.start();
    } catch (error) {
      console.error('[Game] ❌ Initialization failed at step:', error);
      console.error('[Game] Error stack:', error instanceof Error ? error.stack : 'No stack trace');
      if (this.uiController) {
        this.uiController.showError('Failed to initialize game. Check console for details.');
      }
      throw error;
    }
  }

  /**
   * Start game loop
   */
  public start(): void {
    this.isRunning = true;
    this.lastTime = performance.now();
    this.gameLoop(this.lastTime);
    console.log('[Game] Game loop started');
  }

  /**
   * Stop game loop
   */
  public stop(): void {
    this.isRunning = false;
    console.log('[Game] Game loop stopped');
  }

  /**
   * Main game loop
   */
  private gameLoop(currentTime: number): void {
    if (!this.isRunning) return;

    // Calculate delta time
    const deltaTime = Math.min((currentTime - this.lastTime) / 1000, 0.1); // Cap at 100ms
    this.lastTime = currentTime;

    // Update cooldown
    this.updateCooldown();

    // Update physics
    if (this.physics) {
      this.physics.step(deltaTime);
    }

    // Check for coins falling off edges
    if (this.coinManager) {
      const { front, sides } = this.coinManager.checkEdges();
      
      // Award coins that fell off front
      if (front.length > 0) {
        this.awardCoins(front.length * 10);
      }
      
      // Lose coins that fell off sides
      if (sides.length > 0) {
        console.log(`[Game] Lost ${sides.length} coins off the sides`);
      }
    }

    // TODO: Update pusher animation

    // Render scene
    this.sceneManager.render();

    // Continue loop
    requestAnimationFrame((time) => this.gameLoop(time));
  }

  /**
   * Update cooldown timer and UI
   */
  private updateCooldown(): void {
    const now = Date.now();
    
    if (this.cooldownEndTime > now) {
      const remaining = this.cooldownEndTime - now;
      this.uiController.showCooldown(remaining);
    } else if (this.cooldownEndTime > 0) {
      this.cooldownEndTime = 0;
      this.uiController.hideCooldown();
    }
  }

  /**
   * Check if cooldown is active
   */
  public isCooldownActive(): boolean {
    return Date.now() < this.cooldownEndTime;
  }

  /**
   * Start cooldown timer
   */
  private startCooldown(): void {
    this.cooldownEndTime = Date.now() + GAME_CONFIG.dropCooldownMs;
    console.log('[Game] Cooldown started');
  }

  /**
   * Attempt to drop a coin in specified slot
   */
  public dropCoin(slotId: number): boolean {
    // Check if cooldown is active
    if (this.isCooldownActive()) {
      console.log('[Game] Drop rejected: cooldown active');
      return false;
    }

    // Check if player has coins
    if (!this.stateManager.canDropCoin()) {
      console.log('[Game] Drop rejected: no coins');
      this.uiController.showNoCoinsLeft();
      return false;
    }

    // Check if at max balance
    if (this.stateManager.isMaxBalance()) {
      console.log('[Game] Drop rejected: max balance');
      this.uiController.showMaxBalanceReached();
      return false;
    }

    console.log(`[Game] Dropping coin in slot ${slotId}`);

    // Deduct coin
    this.stateManager.subtractCoins(1);
    this.uiController.updateCoinCount(this.stateManager.getBalance());

    // Start cooldown
    this.startCooldown();

    // Spawn coin at slot position
    if (this.coinManager) {
      this.coinManager.spawnCoin(slotId);
    }

    return true;
  }

  /**
   * Award coins to player
   */
  public awardCoins(amount: number): void {
    this.stateManager.addCoins(amount);
    this.uiController.updateCoinCount(this.stateManager.getBalance());
    this.uiController.flashCoinCounter();
    console.log(`[Game] Awarded ${amount} coins`);
  }

  /**
   * Get scene manager (for external access)
   */
  public getSceneManager(): SceneManager {
    return this.sceneManager;
  }

  /**
   * Get physics engine (for external access)
   */
  public getPhysics(): SimplePhysics {
    return this.physics;
  }

  /**
   * Get state manager (for external access)
   */
  public getStateManager(): StateManager {
    return this.stateManager;
  }
}
