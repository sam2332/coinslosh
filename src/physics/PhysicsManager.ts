import RAPIER from '@dimforge/rapier3d';

/**
 * Physics world manager using Rapier3D
 */
export class PhysicsManager {
  public world: RAPIER.World | null = null;
  private RAPIER: typeof RAPIER | null = null;
  private accumulator: number = 0;
  private readonly fixedTimeStep: number = 1 / 60; // 60 Hz

  /**
   * Initialize physics engine (async - WASM loading)
   */
  public async initialize(): Promise<void> {
    console.log('[Physics] Initializing Rapier3D...');
    
    try {
      // Import Rapier (WASM auto-initializes in newer versions)
      this.RAPIER = RAPIER;

      // Create physics world with gravity
      const gravity = { x: 0.0, y: -9.81, z: 0.0 };
      this.world = new this.RAPIER.World(gravity);

      console.log('[Physics] Rapier3D initialized successfully');
    } catch (error) {
      console.error('[Physics] Failed to initialize:', error);
      throw error;
    }
  }

  /**
   * Step physics simulation with fixed timestep
   */
  public step(deltaTime: number): void {
    if (!this.world) return;

    // Accumulate time
    this.accumulator += deltaTime;

    // Run fixed timestep updates
    while (this.accumulator >= this.fixedTimeStep) {
      this.world.step();
      this.accumulator -= this.fixedTimeStep;
    }
  }

  /**
   * Create a dynamic rigid body (for coins)
   */
  public createDynamicBody(
    position: { x: number; y: number; z: number },
    shape: RAPIER.ColliderDesc
  ): RAPIER.RigidBody {
    if (!this.world || !this.RAPIER) {
      throw new Error('Physics not initialized');
    }

    const rigidBodyDesc = this.RAPIER.RigidBodyDesc.dynamic()
      .setTranslation(position.x, position.y, position.z);

    const rigidBody = this.world.createRigidBody(rigidBodyDesc);
    this.world.createCollider(shape, rigidBody);

    return rigidBody;
  }

  /**
   * Create a kinematic rigid body (for pusher)
   */
  public createKinematicBody(
    position: { x: number; y: number; z: number },
    shape: RAPIER.ColliderDesc
  ): RAPIER.RigidBody {
    if (!this.world || !this.RAPIER) {
      throw new Error('Physics not initialized');
    }

    const rigidBodyDesc = this.RAPIER.RigidBodyDesc.kinematicPositionBased()
      .setTranslation(position.x, position.y, position.z);

    const rigidBody = this.world.createRigidBody(rigidBodyDesc);
    this.world.createCollider(shape, rigidBody);

    return rigidBody;
  }

  /**
   * Create a static rigid body (for walls/floors)
   */
  public createStaticBody(
    position: { x: number; y: number; z: number },
    shape: RAPIER.ColliderDesc
  ): void {
    if (!this.world || !this.RAPIER) {
      throw new Error('Physics not initialized');
    }

    const rigidBodyDesc = this.RAPIER.RigidBodyDesc.fixed()
      .setTranslation(position.x, position.y, position.z);

    const rigidBody = this.world.createRigidBody(rigidBodyDesc);
    this.world.createCollider(shape, rigidBody);
  }

  /**
   * Create cylinder collider descriptor
   */
  public createCylinderCollider(
    radius: number,
    halfHeight: number,
    friction: number = 0.4,
    restitution: number = 0.2
  ): RAPIER.ColliderDesc {
    if (!this.RAPIER) {
      throw new Error('Physics not initialized');
    }

    return this.RAPIER.ColliderDesc.cylinder(halfHeight, radius)
      .setFriction(friction)
      .setRestitution(restitution);
  }

  /**
   * Create cuboid collider descriptor
   */
  public createCuboidCollider(
    halfWidth: number,
    halfHeight: number,
    halfDepth: number,
    friction: number = 0.5,
    restitution: number = 0.1
  ): RAPIER.ColliderDesc {
    if (!this.RAPIER) {
      throw new Error('Physics not initialized');
    }

    return this.RAPIER.ColliderDesc.cuboid(halfWidth, halfHeight, halfDepth)
      .setFriction(friction)
      .setRestitution(restitution);
  }

  /**
   * Remove rigid body from world
   */
  public removeBody(body: RAPIER.RigidBody): void {
    if (!this.world) return;
    this.world.removeRigidBody(body);
  }

  /**
   * Check if physics is ready
   */
  public isReady(): boolean {
    return this.world !== null && this.RAPIER !== null;
  }

  /**
   * Get Rapier API (for advanced usage)
   */
  public getRapier(): typeof RAPIER | null {
    return this.RAPIER;
  }
}
