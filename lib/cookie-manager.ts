export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

export class CookieManager {
  private static instance: CookieManager;
  private preferences: CookiePreferences = {
    essential: true,
    analytics: false,
    functional: false,
    marketing: false
  };

  private constructor() {
    this.loadPreferences();
  }

  public static getInstance(): CookieManager {
    if (!CookieManager.instance) {
      CookieManager.instance = new CookieManager();
    }
    return CookieManager.instance;
  }

  private loadPreferences(): void {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('cookiePreferences');
      if (stored) {
        try {
          this.preferences = JSON.parse(stored);
        } catch (error) {
          console.error('Error loading cookie preferences:', error);
        }
      }
    }
  }

  public setPreferences(preferences: CookiePreferences): void {
    this.preferences = preferences;
    if (typeof window !== 'undefined') {
      localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
      localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    }
    this.applyPreferences();
  }

  public getPreferences(): CookiePreferences {
    return { ...this.preferences };
  }

  public hasConsent(): boolean {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('cookieConsent') !== null;
    }
    return false;
  }

  private applyPreferences(): void {
    // Essential cookies are always enabled
    if (this.preferences.essential) {
      this.enableEssentialCookies();
    }

    // Analytics cookies
    if (this.preferences.analytics) {
      this.enableAnalyticsCookies();
    } else {
      this.disableAnalyticsCookies();
    }

    // Functional cookies
    if (this.preferences.functional) {
      this.enableFunctionalCookies();
    } else {
      this.disableFunctionalCookies();
    }

    // Marketing cookies
    if (this.preferences.marketing) {
      this.enableMarketingCookies();
    } else {
      this.disableMarketingCookies();
    }
  }

  private enableEssentialCookies(): void {
    // Session management cookies
    this.setCookie('session_id', this.generateSessionId(), 1);
    this.setCookie('csrf_token', this.generateCSRFToken(), 1);
  }

  private enableAnalyticsCookies(): void {
    // Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    }
    
    // Set analytics cookies
    this.setCookie('_ga', this.generateAnalyticsId(), 730); // 2 years
    this.setCookie('_gid', this.generateAnalyticsId(), 1); // 24 hours
  }

  private disableAnalyticsCookies(): void {
    // Remove analytics cookies
    this.removeCookie('_ga');
    this.removeCookie('_gid');
    this.removeCookie('_gat');
    
    // Disable Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  }

  private enableFunctionalCookies(): void {
    // Language preference
    this.setCookie('language_pref', 'en', 365);
    
    // Theme preference
    this.setCookie('theme_pref', 'dark', 365);
    
    // Form data retention
    this.setCookie('form_data_retention', 'enabled', 30);
  }

  private disableFunctionalCookies(): void {
    // Remove functional cookies
    this.removeCookie('language_pref');
    this.removeCookie('theme_pref');
    this.removeCookie('form_data_retention');
  }

  private enableMarketingCookies(): void {
    // Facebook Pixel
    this.setCookie('_fbp', this.generateMarketingId(), 90);
    
    // LinkedIn Insight
    this.setCookie('li_gc', this.generateMarketingId(), 730);
    
    // Google Ads
    this.setCookie('_gcl_au', this.generateMarketingId(), 90);
  }

  private disableMarketingCookies(): void {
    // Remove marketing cookies
    this.removeCookie('_fbp');
    this.removeCookie('li_gc');
    this.removeCookie('_gcl_au');
    this.removeCookie('_fbp');
  }

  private setCookie(name: string, value: string, days: number): void {
    if (typeof document !== 'undefined') {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    }
  }

  private removeCookie(name: string): void {
    if (typeof document !== 'undefined') {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
    }
  }

  private generateSessionId(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  private generateCSRFToken(): string {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }

  private generateAnalyticsId(): string {
    return 'GA1.2.' + Math.random().toString(36).substring(2, 15) + '.' + Math.floor(Date.now() / 1000);
  }

  private generateMarketingId(): string {
    return Math.random().toString(36).substring(2, 15) + '.' + Math.floor(Date.now() / 1000);
  }

  public getCookie(name: string): string | null {
    if (typeof document !== 'undefined') {
      const nameEQ = name + "=";
      const ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
    }
    return null;
  }

  public clearAllCookies(): void {
    if (typeof document !== 'undefined') {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
      }
    }
  }

  public exportPreferences(): string {
    return JSON.stringify(this.preferences, null, 2);
  }

  public importPreferences(jsonString: string): boolean {
    try {
      const preferences = JSON.parse(jsonString);
      if (this.validatePreferences(preferences)) {
        this.setPreferences(preferences);
        return true;
      }
    } catch (error) {
      console.error('Error importing preferences:', error);
    }
    return false;
  }

  private validatePreferences(preferences: any): preferences is CookiePreferences {
    return (
      typeof preferences === 'object' &&
      typeof preferences.essential === 'boolean' &&
      typeof preferences.analytics === 'boolean' &&
      typeof preferences.functional === 'boolean' &&
      typeof preferences.marketing === 'boolean'
    );
  }
}

// Export singleton instance
export const cookieManager = CookieManager.getInstance(); 