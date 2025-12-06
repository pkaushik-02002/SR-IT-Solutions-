import { useState, useEffect } from 'react';
import { cookieManager, type CookiePreferences } from '@/lib/cookie-manager';

export function useCookiePreferences() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    functional: false,
    marketing: false
  });
  const [hasConsent, setHasConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load preferences from cookie manager
    const currentPreferences = cookieManager.getPreferences();
    setPreferences(currentPreferences);
    setHasConsent(cookieManager.hasConsent());
    setIsLoading(false);
  }, []);

  const updatePreferences = (newPreferences: CookiePreferences) => {
    cookieManager.setPreferences(newPreferences);
    setPreferences(newPreferences);
    setHasConsent(true);
  };

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      functional: true,
      marketing: true
    };
    updatePreferences(allAccepted);
  };

  const rejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      functional: false,
      marketing: false
    };
    updatePreferences(onlyEssential);
  };

  const toggleCategory = (category: keyof CookiePreferences) => {
    const newPreferences = {
      ...preferences,
      [category]: !preferences[category]
    };
    updatePreferences(newPreferences);
  };

  const clearAllCookies = () => {
    cookieManager.clearAllCookies();
    setHasConsent(false);
  };

  const exportPreferences = () => {
    return cookieManager.exportPreferences();
  };

  const importPreferences = (jsonString: string) => {
    const success = cookieManager.importPreferences(jsonString);
    if (success) {
      const currentPreferences = cookieManager.getPreferences();
      setPreferences(currentPreferences);
      setHasConsent(true);
    }
    return success;
  };

  return {
    preferences,
    hasConsent,
    isLoading,
    updatePreferences,
    acceptAll,
    rejectAll,
    toggleCategory,
    clearAllCookies,
    exportPreferences,
    importPreferences
  };
} 