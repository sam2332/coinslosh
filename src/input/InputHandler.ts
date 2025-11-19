import * as THREE from 'three';
import type { GameManager } from '../game/GameManager';
import { MACHINE_CONFIG } from '../config/constants';

/**
 * Handles user input for dropping coins
 */
export class InputHandler {
  private camera: THREE.Camera;
  private scene: THREE.Scene;
  private gameManager: GameManager;
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;

  constructor(canvas: HTMLCanvasElement, camera: THREE.Camera, scene: THREE.Scene, gameManager: GameManager) {
    this.camera = camera;
    this.scene = scene;
    this.gameManager = gameManager;
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // Setup click handler
    canvas.addEventListener('click', this.onClick.bind(this));
    canvas.addEventListener('touchend', this.onTouch.bind(this));

    console.log('[Input] Input handler initialized');
  }

  /**
   * Handle mouse click
   */
  private onClick(event: MouseEvent): void {
    const canvas = event.target as HTMLCanvasElement;
    const rect = canvas.getBoundingClientRect();
    
    // Convert to normalized device coordinates
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.checkDropSlotClick();
  }

  /**
   * Handle touch
   */
  private onTouch(event: TouchEvent): void {
    event.preventDefault();
    const canvas = event.target as HTMLCanvasElement;
    const rect = canvas.getBoundingClientRect();
    const touch = event.changedTouches[0];
    
    this.mouse.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;

    this.checkDropSlotClick();
  }

  /**
   * Check if a drop slot was clicked
   */
  private checkDropSlotClick(): void {
    // Update raycaster
    this.raycaster.setFromCamera(this.mouse, this.camera);

    // Find all drop slot markers
    const dropSlotMarkers = MACHINE_CONFIG.dropSlots
      .map(slot => this.scene.getObjectByName(`dropSlot_${slot.id}`))
      .filter(obj => obj !== undefined);

    // Check for intersections
    const intersects = this.raycaster.intersectObjects(dropSlotMarkers, false);

    if (intersects.length > 0) {
      const marker = intersects[0].object;
      const slotId = marker.userData.slotId;
      
      console.log(`[Input] Drop slot ${slotId} clicked`);
      this.gameManager.dropCoin(slotId);
    }
  }
}
