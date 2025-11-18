/**
 * Manages UI overlay elements and updates
 */
export class UIController {
  private coinCountElement: HTMLElement;
  private cooldownIndicator: HTMLElement;
  private cooldownTimeElement: HTMLElement;
  private errorMessageElement: HTMLElement;
  private loadingScreen: HTMLElement;
  
  private errorTimeout: number | null = null;

  constructor() {
    this.coinCountElement = document.getElementById('coin-count')!;
    this.cooldownIndicator = document.getElementById('cooldown-indicator')!;
    this.cooldownTimeElement = document.getElementById('cooldown-time')!;
    this.errorMessageElement = document.getElementById('error-message')!;
    this.loadingScreen = document.getElementById('loading-screen')!;

    this.setupHelpButton();
  }

  /**
   * Update coin balance display
   */
  public updateCoinCount(balance: number): void {
    this.coinCountElement.textContent = balance.toLocaleString();
  }

  /**
   * Show cooldown indicator with remaining time
   */
  public showCooldown(remainingMs: number): void {
    this.cooldownIndicator.style.display = 'block';
    this.cooldownTimeElement.textContent = `${(remainingMs / 1000).toFixed(1)}s`;
  }

  /**
   * Hide cooldown indicator
   */
  public hideCooldown(): void {
    this.cooldownIndicator.style.display = 'none';
  }

  /**
   * Show error message temporarily
   */
  public showError(message: string, durationMs: number = 3000): void {
    // Clear existing timeout
    if (this.errorTimeout !== null) {
      window.clearTimeout(this.errorTimeout);
    }

    // Show message
    this.errorMessageElement.textContent = message;
    this.errorMessageElement.classList.add('show');

    // Auto-hide after duration
    this.errorTimeout = window.setTimeout(() => {
      this.hideError();
      this.errorTimeout = null;
    }, durationMs);
  }

  /**
   * Hide error message
   */
  public hideError(): void {
    this.errorMessageElement.classList.remove('show');
  }

  /**
   * Hide loading screen
   */
  public hideLoadingScreen(): void {
    this.loadingScreen.classList.add('hidden');
    setTimeout(() => {
      this.loadingScreen.style.display = 'none';
    }, 500); // Wait for fade animation
  }

  /**
   * Show loading screen
   */
  public showLoadingScreen(): void {
    this.loadingScreen.style.display = 'flex';
    this.loadingScreen.classList.remove('hidden');
  }

  /**
   * Setup help button click handler
   */
  private setupHelpButton(): void {
    const helpButton = document.getElementById('help-button');
    if (helpButton) {
      helpButton.addEventListener('click', () => {
        this.showHelp();
      });
    }
  }

  /**
   * Show help modal
   */
  private showHelp(): void {
    const helpText = `
      🎰 COINSLOSH - HOW TO PLAY 🎰
      
      1. Click on one of the 4 drop slots to drop a coin
      2. Each drop costs 1 coin
      3. Coins that fall off the FRONT edge earn you 10 coins
      4. Coins that fall off the SIDES are lost
      5. Wait for cooldown between drops
      6. Try to reach the maximum of 999,999 coins!
      
      TIPS:
      • Watch how the pusher moves coins
      • Experiment with different slot positions
      • Coins stack and push each other
    `;
    
    this.showError(helpText, 8000);
  }

  /**
   * Update UI for maximum balance reached
   */
  public showMaxBalanceReached(): void {
    this.showError('🎉 MAXIMUM BALANCE REACHED! 🎉', 5000);
  }

  /**
   * Update UI for no coins left
   */
  public showNoCoinsLeft(): void {
    this.showError('⚠️ No coins left! Wait for coins to win...', 3000);
  }

  /**
   * Flash coin counter (visual feedback for earning)
   */
  public flashCoinCounter(): void {
    this.coinCountElement.style.animation = 'none';
    // Force reflow
    void this.coinCountElement.offsetWidth;
    this.coinCountElement.style.animation = 'pulse 0.5s ease-out';
  }
}
