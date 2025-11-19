import * as THREE from 'three';
import { MACHINE_CONFIG } from '../config/constants';
import type { SimplePhysics } from '../physics/SimplePhysics';

/**
 * Builds the 3D coin pusher machine geometry and physics
 */
export class MachineBuilder {
  private scene: THREE.Scene;
  private physics: SimplePhysics;

  constructor(scene: THREE.Scene, physics: SimplePhysics) {
    this.scene = scene;
    this.physics = physics;
  }

  /**
   * Build complete machine
   */
  public build(): void {
    console.log('[Machine] Building coin pusher machine...');

    this.buildCabinet();
    this.buildWalls();
    this.buildPlatforms();
    this.buildDropSlotMarkers();

    // Setup physics boundaries
    this.setupPhysics();

    console.log('[Machine] Machine built successfully');
  }

  /**
   * Setup physics platforms and boundaries
   */
  private setupPhysics(): void {
    const { width, depth, upperTierHeight, lowerTierHeight } = MACHINE_CONFIG.dimensions;

    // Add platform levels
    this.physics.addPlatform(upperTierHeight);
    this.physics.addPlatform(lowerTierHeight);

    // Add wall boundaries
    this.physics.addWalls(-width / 2, width / 2, -depth / 2, depth / 2);

    console.log('[Machine] Physics boundaries configured');
  }

  /**
   * Build machine cabinet frame
   */
  private buildCabinet(): void {
    const { width, depth, wallHeight } = MACHINE_CONFIG.dimensions;

    // Create decorative cabinet frame (70s style)
    const frameGeometry = new THREE.BoxGeometry(width + 2, wallHeight + 2, depth + 2);
    const frameMaterial = new THREE.MeshStandardMaterial({
      color: 0x330066,
      metalness: 0.6,
      roughness: 0.4,
      emissive: 0xff00ff,
      emissiveIntensity: 0.2
    });

    const frame = new THREE.Mesh(frameGeometry, frameMaterial);
    frame.position.set(0, wallHeight / 2, 0);
    this.scene.add(frame);

    // Add neon strip lights
    this.addNeonStrips(width, depth, wallHeight);
  }

  /**
   * Add decorative neon strips
   */
  private addNeonStrips(width: number, depth: number, height: number): void {
    const stripGeometry = new THREE.BoxGeometry(width + 2.5, 0.1, 0.1);
    const magentaMaterial = new THREE.MeshStandardMaterial({
      color: 0xff00ff,
      emissive: 0xff00ff,
      emissiveIntensity: 1
    });
    const cyanMaterial = new THREE.MeshStandardMaterial({
      color: 0x00ffff,
      emissive: 0x00ffff,
      emissiveIntensity: 1
    });

    // Top strips
    const topStrip1 = new THREE.Mesh(stripGeometry, magentaMaterial);
    topStrip1.position.set(0, height + 1, -depth / 2 - 1);
    this.scene.add(topStrip1);

    const topStrip2 = new THREE.Mesh(stripGeometry, cyanMaterial);
    topStrip2.position.set(0, height + 1, depth / 2 + 1);
    this.scene.add(topStrip2);
  }

  /**
   * Build side and back walls
   */
  private buildWalls(): void {
    const { width, depth, wallHeight, wallThickness } = MACHINE_CONFIG.dimensions;

    // Wall material (semi-transparent acrylic look)
    const wallMaterial = new THREE.MeshStandardMaterial({
      color: 0x8844ff,
      transparent: true,
      opacity: 0.3,
      metalness: 0.1,
      roughness: 0.2
    });

    // Left wall
    const leftWallGeometry = new THREE.BoxGeometry(wallThickness, wallHeight, depth);
    const leftWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
    leftWall.position.set(-width / 2, wallHeight / 2, 0);
    leftWall.castShadow = true;
    leftWall.receiveShadow = true;
    this.scene.add(leftWall);

    // Right wall
    const rightWall = new THREE.Mesh(leftWallGeometry, wallMaterial);
    rightWall.position.set(width / 2, wallHeight / 2, 0);
    rightWall.castShadow = true;
    rightWall.receiveShadow = true;
    this.scene.add(rightWall);

    // Back wall
    const backWallGeometry = new THREE.BoxGeometry(width, wallHeight, wallThickness);
    const backWall = new THREE.Mesh(backWallGeometry, wallMaterial);
    backWall.position.set(0, wallHeight / 2, -depth / 2);
    backWall.castShadow = true;
    backWall.receiveShadow = true;
    this.scene.add(backWall);
  }

  /**
   * Build two-tier platform system
   */
  private buildPlatforms(): void {
    const { width, depth, upperTierHeight, lowerTierHeight } = MACHINE_CONFIG.dimensions;

    // Platform material (metallic gold)
    const platformMaterial = new THREE.MeshStandardMaterial({
      color: 0xffdd88,
      metalness: 0.8,
      roughness: 0.3
    });

    // Upper tier (collection area)
    const upperTierDepth = depth * 0.4;
    const upperTierGeometry = new THREE.BoxGeometry(width, 0.2, upperTierDepth);
    const upperTier = new THREE.Mesh(upperTierGeometry, platformMaterial);
    upperTier.position.set(0, upperTierHeight, -depth / 2 + upperTierDepth / 2);
    upperTier.castShadow = true;
    upperTier.receiveShadow = true;
    this.scene.add(upperTier);

    // Lower tier (pusher area)
    const lowerTierDepth = depth * 0.6;
    const lowerTierGeometry = new THREE.BoxGeometry(width, 0.2, lowerTierDepth);
    const lowerTier = new THREE.Mesh(lowerTierGeometry, platformMaterial);
    lowerTier.position.set(0, lowerTierHeight, depth / 2 - lowerTierDepth / 2);
    lowerTier.castShadow = true;
    lowerTier.receiveShadow = true;
    this.scene.add(lowerTier);

    // Ramp between tiers
    this.buildRamp(upperTierHeight, lowerTierHeight, width, -depth / 2 + upperTierDepth);
  }

  /**
   * Build ramp connecting tiers
   */
  private buildRamp(upperY: number, lowerY: number, width: number, startZ: number): void {
    const rampLength = 2;
    const rampGeometry = new THREE.BoxGeometry(width, 0.1, rampLength);
    const rampMaterial = new THREE.MeshStandardMaterial({
      color: 0xffdd88,
      metalness: 0.8,
      roughness: 0.3
    });

    const ramp = new THREE.Mesh(rampGeometry, rampMaterial);
    const midY = (upperY + lowerY) / 2;
    const angle = Math.atan2(upperY - lowerY, rampLength);
    
    ramp.position.set(0, midY, startZ + rampLength / 2);
    ramp.rotation.x = -angle;
    ramp.castShadow = true;
    ramp.receiveShadow = true;
    this.scene.add(ramp);

    // Physics collider for ramp (tilted)
    // Note: For simplicity, we'll skip the ramp collider for now
    // Coins will drop from upper to lower tier
  }

  /**
   * Build visual markers for drop slots
   */
  private buildDropSlotMarkers(): void {
    MACHINE_CONFIG.dropSlots.forEach((slot) => {
      // Create glowing sphere marker
      const markerGeometry = new THREE.SphereGeometry(0.15, 16, 16);
      const markerMaterial = new THREE.MeshStandardMaterial({
        color: 0xff00ff,
        emissive: 0xff00ff,
        emissiveIntensity: 1,
        transparent: true,
        opacity: 0.8
      });

      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.set(slot.position.x, slot.position.y, slot.position.z);
      marker.userData.slotId = slot.id;
      marker.name = `dropSlot_${slot.id}`;
      this.scene.add(marker);

      // Store reference
      slot.visualMarker = marker;

      // Add pulsing animation
      this.addPulseAnimation(marker);
    });
  }

  /**
   * Add pulsing animation to marker
   */
  private addPulseAnimation(marker: THREE.Mesh): void {
    const originalScale = marker.scale.clone();
    let time = Math.random() * Math.PI * 2;

    const animate = () => {
      time += 0.05;
      const scale = 1 + Math.sin(time) * 0.2;
      marker.scale.set(originalScale.x * scale, originalScale.y * scale, originalScale.z * scale);
      requestAnimationFrame(animate);
    };

    animate();
  }
}
