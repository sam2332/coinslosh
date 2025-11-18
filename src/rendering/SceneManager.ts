import * as THREE from 'three';

/**
 * Manages Three.js scene, camera, renderer, and lighting
 */
export class SceneManager {
  public scene: THREE.Scene;
  public camera: THREE.PerspectiveCamera;
  public renderer: THREE.WebGLRenderer;
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.scene = new THREE.Scene();
    this.camera = this.createCamera();
    this.renderer = this.createRenderer();
    
    this.setupLighting();
    this.setupBackground();
    this.handleResize();
    
    window.addEventListener('resize', () => this.handleResize());
  }

  /**
   * Create and configure camera
   */
  private createCamera(): THREE.PerspectiveCamera {
    const camera = new THREE.PerspectiveCamera(
      60, // FOV
      window.innerWidth / window.innerHeight, // Aspect
      0.1, // Near plane
      1000 // Far plane
    );

    // Position camera to view the coin pusher machine
    camera.position.set(0, 10, 15);
    camera.lookAt(0, 2, 0);

    return camera;
  }

  /**
   * Create and configure WebGL renderer
   */
  private createRenderer(): THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    return renderer;
  }

  /**
   * Setup scene lighting (70s arcade aesthetic)
   */
  private setupLighting(): void {
    // Ambient light for base illumination
    const ambientLight = new THREE.AmbientLight(0x8855ff, 0.4);
    this.scene.add(ambientLight);

    // Main directional light (warm tone)
    const mainLight = new THREE.DirectionalLight(0xffdd88, 0.8);
    mainLight.position.set(5, 10, 5);
    mainLight.castShadow = true;
    mainLight.shadow.camera.left = -15;
    mainLight.shadow.camera.right = 15;
    mainLight.shadow.camera.top = 15;
    mainLight.shadow.camera.bottom = -15;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    this.scene.add(mainLight);

    // Neon accent lights (magenta and cyan for 70s vibe)
    const neonMagenta = new THREE.PointLight(0xff00ff, 1, 20);
    neonMagenta.position.set(-8, 5, 0);
    this.scene.add(neonMagenta);

    const neonCyan = new THREE.PointLight(0x00ffff, 1, 20);
    neonCyan.position.set(8, 5, 0);
    this.scene.add(neonCyan);

    // Back rim light
    const rimLight = new THREE.DirectionalLight(0xff00ff, 0.3);
    rimLight.position.set(0, 5, -10);
    this.scene.add(rimLight);
  }

  /**
   * Setup scene background
   */
  private setupBackground(): void {
    // Gradient background (purple to dark blue)
    const gradientTexture = this.createGradientTexture();
    this.scene.background = gradientTexture;
    
    // Add fog for depth
    this.scene.fog = new THREE.Fog(0x1a0033, 10, 50);
  }

  /**
   * Create gradient texture for background
   */
  private createGradientTexture(): THREE.Texture {
    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 256;
    
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createLinearGradient(0, 0, 0, 256);
    gradient.addColorStop(0, '#1a0033');
    gradient.addColorStop(0.5, '#330066');
    gradient.addColorStop(1, '#1a0033');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 2, 256);
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    
    return texture;
  }

  /**
   * Handle window resize
   */
  private handleResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  }

  /**
   * Render the scene
   */
  public render(): void {
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * Add object to scene
   */
  public add(object: THREE.Object3D): void {
    this.scene.add(object);
  }

  /**
   * Remove object from scene
   */
  public remove(object: THREE.Object3D): void {
    this.scene.remove(object);
  }

  /**
   * Cleanup resources
   */
  public dispose(): void {
    this.renderer.dispose();
    window.removeEventListener('resize', () => this.handleResize());
  }
}
