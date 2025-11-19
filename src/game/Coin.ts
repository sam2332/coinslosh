import * as THREE from 'three';
import type { SimplePhysics } from '../physics/SimplePhysics';

/**
 * Represents a single coin in the game
 */
export class Coin {
  public mesh: THREE.Mesh;
  public physicsId: string;
  private isActive: boolean = true;

  constructor(position: THREE.Vector3, physics: SimplePhysics) {
    // Create coin geometry (cylinder for a coin)
    const radius = 0.3;
    const thickness = 0.05;
    const geometry = new THREE.CylinderGeometry(radius, radius, thickness, 16);
    
    // Gold metallic material with 70s glow
    const material = new THREE.MeshStandardMaterial({
      color: 0xffdd00,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0xffaa00,
      emissiveIntensity: 0.3
    });

    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.copy(position);
    this.mesh.castShadow = true;
    this.mesh.receiveShadow = true;

    // Coins start lying flat (default cylinder orientation)
    // No rotation needed

    // Add to physics with proper dimensions
    this.physicsId = physics.addCoin(this.mesh, radius, thickness);
  }

  /**
   * Check if coin is still active
   */
  public getIsActive(): boolean {
    return this.isActive;
  }

  /**
   * Deactivate coin (for pooling)
   */
  public deactivate(): void {
    this.isActive = false;
  }
}
