import { SceneManager } from '../rendering/SceneManager';
import { MachineBuilder } from '../rendering/MachineBuilder';
import { PhysicsManager } from '../physics/PhysicsManager';
import { StateManager } from './StateManager';
import { UIController } from '../ui/UIController';
import { GAME_CONFIG } from '../config/constants';

/**
 * Main game manager - orchestrates all subsystems
 */
export class GameManager {
  private sceneManager!: SceneManager;
  private physicsManager!: PhysicsManager;
  private stateManager!: StateManager;
  private uiController!: UIController;

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
      this.uiController = new UIController();

      // Initialize state manager
      this.stateManager = new StateManager();
      this.stateManager.initialize();
      this.uiController.updateCoinCount(this.stateManager.getBalance());

      // Initialize scene
      console.log('[Game] Setting up Three.js scene...');
      this.sceneManager = new SceneManager(canvas);

      // Initialize physics
      console.log('[Game] Loading Rapier3D physics engine...');
      this.physicsManager = new PhysicsManager();
      await this.physicsManager.initialize();

      // Build machine geometry
      console.log('[Game] Building machine...');
      const machineBuilder = new MachineBuilder(this.sceneManager.scene, this.physicsManager);
      machineBuilder.build();

      // TODO: Setup coin system
      // TODO: Setup input handlers

      console.log('[Game] ✅ Initialization complete!');
      this.uiController.hideLoadingScreen();

      // Start game loop
      this.start();
    } catch (error) {
      console.error('[Game] Initialization failed:', error);
      this.uiController.showError('Failed to initialize game. Please refresh.');
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
    if (this.physicsManager.isReady()) {
      this.physicsManager.step(deltaTime);
    }

    // TODO: Update pusher animation
    // TODO: Update coins
    // TODO: Check edge collisions

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

    // TODO: Spawn coin at slot position

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
   * Get physics manager (for external access)
   */
  public getPhysicsManager(): PhysicsManager {
    return this.physicsManager;
  }

  /**
   * Get state manager (for external access)
   */
  public getStateManager(): StateManager {
    return this.stateManager;
  }
}
