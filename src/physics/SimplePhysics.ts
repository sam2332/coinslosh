import * as THREE from 'three';

/**
 * Simple physics engine for coin pusher game
 * No WASM, no external dependencies - just what we need
 */

export interface PhysicsBody {
  id: string;
  mesh: THREE.Mesh;
  velocity: THREE.Vector3;
  angularVelocity: THREE.Vector3;
  mass: number;
  radius: number;
  height: number; // For cylinder height
  isStatic: boolean;
  restitution: number; // bounciness (0-1)
  friction: number;
}

export interface PhysicsPlane {
  y: number;
  friction: number;
}

export class SimplePhysics {
  private bodies: Map<string, PhysicsBody> = new Map();
  private planes: PhysicsPlane[] = [];
  private gravity = new THREE.Vector3(0, -9.8, 0);
  private nextId = 0;

  /**
   * Add a dynamic coin body
   */
  public addCoin(mesh: THREE.Mesh, radius: number = 0.3, height: number = 0.05): string {
    const id = `coin_${this.nextId++}`;
    const body: PhysicsBody = {
      id,
      mesh,
      velocity: new THREE.Vector3(0, 0, 0),
      angularVelocity: new THREE.Vector3(0, 0, 0),
      mass: 0.01, // 10 grams for thin coin
      radius,
      height,
      isStatic: false,
      restitution: 0.2, // minimal bounce
      friction: 0.7 // higher friction for stacking
    };
    this.bodies.set(id, body);
    return id;
  }

  /**
   * Add a horizontal platform
   */
  public addPlatform(y: number, friction: number = 0.8): void {
    this.planes.push({ y, friction });
  }

  /**
   * Add wall boundaries
   */
  public addWalls(minX: number, maxX: number, minZ: number, maxZ: number): void {
    // Store as body data for collision checks
    (this as any).bounds = { minX, maxX, minZ, maxZ };
  }

  /**
   * Update physics simulation
   */
  public step(deltaTime: number): void {
    const dt = Math.min(deltaTime, 0.033); // Cap at 30fps to prevent instability

    for (const body of this.bodies.values()) {
      if (body.isStatic) continue;

      // Apply gravity
      body.velocity.add(this.gravity.clone().multiplyScalar(dt));

      // Apply velocity
      const movement = body.velocity.clone().multiplyScalar(dt);
      body.mesh.position.add(movement);

      // Check platform collisions (use half height for cylinder bottom)
      let onPlatform = false;
      for (const plane of this.planes) {
        const bottomY = body.mesh.position.y - body.height / 2;
        
        if (bottomY <= plane.y + 0.01 && body.velocity.y <= 0) {
          // Hit or resting on platform
          body.mesh.position.y = plane.y + body.height / 2;
          onPlatform = true;
          
          // Bounce
          body.velocity.y *= -body.restitution;
          
          // Apply strong friction when resting on surface
          const isResting = Math.abs(body.velocity.y) < 0.5;
          if (isResting) {
            body.velocity.x *= Math.pow(1 - plane.friction, dt * 60);
            body.velocity.z *= Math.pow(1 - plane.friction, dt * 60);
            body.angularVelocity.multiplyScalar(Math.pow(1 - plane.friction * 0.5, dt * 60));
          }
          
          // Stop if moving very slowly
          if (Math.abs(body.velocity.y) < 0.05) {
            body.velocity.y = 0;
          }
          if (body.velocity.length() < 0.02) {
            body.velocity.set(0, 0, 0);
            body.angularVelocity.set(0, 0, 0);
          }
          
          break; // Only collide with one platform
        }
      }

      // Wall collisions
      const bounds = (this as any).bounds;
      if (bounds) {
        const pos = body.mesh.position;
        
        if (pos.x - body.radius < bounds.minX) {
          pos.x = bounds.minX + body.radius;
          body.velocity.x *= -body.restitution;
        }
        if (pos.x + body.radius > bounds.maxX) {
          pos.x = bounds.maxX - body.radius;
          body.velocity.x *= -body.restitution;
        }
        if (pos.z - body.radius < bounds.minZ) {
          pos.z = bounds.minZ + body.radius;
          body.velocity.z *= -body.restitution;
        }
        if (pos.z + body.radius > bounds.maxZ) {
          pos.z = bounds.maxZ - body.radius;
          body.velocity.z *= -body.restitution;
        }
      }
    }

    // Coin-to-coin collisions
    this.checkCoinCollisions();
  }

  /**
   * Cylinder-to-cylinder collision detection and response
   */
  private checkCoinCollisions(): void {
    const bodyArray = Array.from(this.bodies.values());
    
    for (let i = 0; i < bodyArray.length; i++) {
      const bodyA = bodyArray[i];
      if (bodyA.isStatic) continue;

      for (let j = i + 1; j < bodyArray.length; j++) {
        const bodyB = bodyArray[j];
        if (bodyB.isStatic) continue;

        const posA = bodyA.mesh.position;
        const posB = bodyB.mesh.position;
        
        // Check horizontal distance (XZ plane)
        const dx = posA.x - posB.x;
        const dz = posA.z - posB.z;
        const horizontalDist = Math.sqrt(dx * dx + dz * dz);
        const minHorizontalDist = bodyA.radius + bodyB.radius;
        
        // Check vertical overlap
        const dy = Math.abs(posA.y - posB.y);
        const minVerticalDist = (bodyA.height + bodyB.height) / 2;

        if (horizontalDist < minHorizontalDist && dy < minVerticalDist && horizontalDist > 0.001) {
          // Collision detected!
          const overlap = minHorizontalDist - horizontalDist;
          
          // Separate horizontally
          const angle = Math.atan2(dz, dx);
          const separationX = Math.cos(angle) * overlap * 0.5;
          const separationZ = Math.sin(angle) * overlap * 0.5;
          
          posA.x += separationX;
          posA.z += separationZ;
          posB.x -= separationX;
          posB.z -= separationZ;

          // Calculate relative velocity
          const relVelX = bodyA.velocity.x - bodyB.velocity.x;
          const relVelZ = bodyA.velocity.z - bodyB.velocity.z;
          const normalX = Math.cos(angle);
          const normalZ = Math.sin(angle);
          const velocityAlongNormal = relVelX * normalX + relVelZ * normalZ;

          // Don't resolve if velocities are separating
          if (velocityAlongNormal > 0) continue;

          // Calculate impulse (simplified for coins)
          const restitution = 0.1; // Coins don't bounce much against each other
          const impulseScalar = -(1 + restitution) * velocityAlongNormal * 0.5;

          bodyA.velocity.x += impulseScalar * normalX;
          bodyA.velocity.z += impulseScalar * normalZ;
          bodyB.velocity.x -= impulseScalar * normalX;
          bodyB.velocity.z -= impulseScalar * normalZ;
          
          // Dampen velocities for stability
          bodyA.velocity.multiplyScalar(0.95);
          bodyB.velocity.multiplyScalar(0.95);
        }
      }
    }
  }

  /**
   * Remove a body from simulation
   */
  public removeBody(id: string): void {
    this.bodies.delete(id);
  }

  /**
   * Get body by ID
   */
  public getBody(id: string): PhysicsBody | undefined {
    return this.bodies.get(id);
  }

  /**
   * Get all bodies
   */
  public getBodies(): PhysicsBody[] {
    return Array.from(this.bodies.values());
  }

  /**
   * Clear all bodies
   */
  public clear(): void {
    this.bodies.clear();
  }
}
