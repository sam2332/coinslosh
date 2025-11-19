import * as THREE from 'three';
import { Coin } from './Coin';
import type { SimplePhysics } from '../physics/SimplePhysics';
import { MACHINE_CONFIG } from '../config/constants';

/**
 * Manages coin spawning, pooling, and lifecycle
 */
export class CoinManager {
  private scene: THREE.Scene;
  private physics: SimplePhysics;
  private coins: Coin[] = [];

  constructor(scene: THREE.Scene, physics: SimplePhysics) {
    this.scene = scene;
    this.physics = physics;
  }

  /**
   * Spawn a coin at a drop slot
   */
  public spawnCoin(slotId: number): Coin | null {
    const slot = MACHINE_CONFIG.dropSlots.find(s => s.id === slotId);
    if (!slot) {
      console.error(`[CoinManager] Invalid slot ID: ${slotId}`);
      return null;
    }

    // Create spawn position (slightly above the slot)
    const spawnPos = new THREE.Vector3(
      slot.position.x,
      slot.position.y + 0.5,
      slot.position.z
    );

    // Create new coin
    const coin = new Coin(spawnPos, this.physics);
    
    // Add to scene and tracking
    this.scene.add(coin.mesh);
    this.coins.push(coin);

    console.log(`[CoinManager] Spawned coin at slot ${slotId}, position:`, spawnPos);

    return coin;
  }

  /**
   * Check if any coins have fallen off edges
   */
  public checkEdges(): { front: Coin[], sides: Coin[] } {
    const { width, depth } = MACHINE_CONFIG.dimensions;
    const frontEdgeZ = depth / 2;
    const sideEdgeX = width / 2;
    const minY = -2; // Coins below this are considered fallen

    const frontCoins: Coin[] = [];
    const sideCoins: Coin[] = [];

    for (let i = this.coins.length - 1; i >= 0; i--) {
      const coin = this.coins[i];
      const pos = coin.mesh.position;

      // Check if coin fell below the machine
      if (pos.y < minY) {
        // Check which edge it fell from
        if (pos.z > frontEdgeZ - 1) {
          frontCoins.push(coin);
        } else if (Math.abs(pos.x) > sideEdgeX - 1) {
          sideCoins.push(coin);
        }

        // Remove coin
        this.removeCoin(coin);
        this.coins.splice(i, 1);
      }
    }

    return { front: frontCoins, sides: sideCoins };
  }

  /**
   * Remove a coin from the game
   */
  private removeCoin(coin: Coin): void {
    this.scene.remove(coin.mesh);
    this.physics.removeBody(coin.physicsId);
    coin.deactivate();
  }

  /**
   * Get all active coins
   */
  public getCoins(): Coin[] {
    return this.coins;
  }

  /**
   * Get coin count
   */
  public getCoinCount(): number {
    return this.coins.length;
  }

  /**
   * Clear all coins
   */
  public clear(): void {
    for (const coin of this.coins) {
      this.removeCoin(coin);
    }
    this.coins = [];
  }
}
