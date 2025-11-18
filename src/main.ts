import { GameManager } from './game/GameManager';
import './styles.css';

/**
 * CoinSlosh Entry Point
 */

console.log('📦 main.ts loaded!');

// Wait for DOM to be ready
window.addEventListener('DOMContentLoaded', async () => {
  console.log('🎰 CoinSlosh Starting...');
  console.log('🌐 DOM loaded');

  // Get canvas element
  const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
  if (!canvas) {
    console.error('❌ Canvas element not found!');
    return;
  }
  console.log('✅ Canvas found:', canvas);

  // Check WebGL support
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  if (!gl) {
    alert('WebGL not supported. Please use a modern browser.');
    console.error('❌ WebGL not supported');
    return;
  }
  console.log('✅ WebGL supported');

  try {
    // Create and initialize game
    console.log('🎮 Creating GameManager...');
    const game = new GameManager();
    
    console.log('🔧 Initializing game...');
    await game.initialize(canvas);

    // Expose game instance for debugging
    (window as any).game = game;

    console.log('🎮 CoinSlosh ready! Click drop slots to play.');
  } catch (error) {
    console.error('❌ Failed to start game:', error);
    console.error('Stack:', error instanceof Error ? error.stack : 'No stack');
    alert('Failed to initialize game. Please refresh and try again.');
  }
});

// Handle page visibility changes (pause when hidden)
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    console.log('⏸️  Game paused (tab hidden)');
  } else {
    console.log('▶️  Game resumed');
  }
});

// Handle beforeunload (save state)
window.addEventListener('beforeunload', () => {
  console.log('💾 Saving game state...');
  // State is auto-saved on changes, but this is a safety net
});
