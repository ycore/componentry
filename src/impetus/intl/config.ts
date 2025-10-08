// ============================================================================
// Default Internationalization Configuration
// ============================================================================

import type { CurrencyFormatPreset, DateFormatPreset, IntlConfig, NumberFormatPreset, SupportedCurrency, SupportedLocale } from './@types/intl.types';

// ============================================================================
// Date Format Configurations
// ============================================================================

export const dateFormatConfigs: Record<DateFormatPreset, Intl.DateTimeFormatOptions> = {
  short: {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  },
  medium: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
  long: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  full: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  },
  datetime: {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  },
  timestamp: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  },
  relative: {
    // Placeholder for future relative time formatting
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  },
};

// ============================================================================
// Number Format Configurations
// ============================================================================

export const numberFormatConfigs: Record<NumberFormatPreset, Intl.NumberFormatOptions> = {
  integer: {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  },
  decimal: {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  },
  percent: {
    style: 'percent',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  },
  compact: {
    style: 'decimal',
    notation: 'compact',
    compactDisplay: 'short',
  },
  scientific: {
    style: 'decimal',
    notation: 'scientific',
  },
  ordinal: {
    style: 'decimal',
    // Note: Ordinal formatting requires additional logic in component
  },
};

// ============================================================================
// Currency Format Configurations
// ============================================================================

export const currencyFormatConfigs: Record<CurrencyFormatPreset, Intl.NumberFormatOptions> = {
  standard: {
    style: 'currency',
    currencyDisplay: 'symbol',
  },
  accounting: {
    style: 'currency',
    currencyDisplay: 'symbol',
    currencySign: 'accounting',
  },
  compact: {
    style: 'currency',
    currencyDisplay: 'symbol',
    notation: 'compact',
    compactDisplay: 'short',
  },
  name: {
    style: 'currency',
    currencyDisplay: 'name',
  },
  code: {
    style: 'currency',
    currencyDisplay: 'code',
  },
};

// ============================================================================
// Default Configuration
// ============================================================================

export const defaultIntlConfig: IntlConfig = {
  defaultLocale: 'en-US',
  defaultCurrency: 'USD',
  fallbackLocale: 'en-US',
  datePresets: {
    default: 'medium',
    fallback: 'short',
  },
  numberPresets: {
    default: 'decimal',
    fallback: 'integer',
  },
  currencyPresets: {
    default: 'standard',
    fallback: 'standard',
  },
};

// ============================================================================
// Locale-Currency Mapping
// ============================================================================

export const localeCurrencyMap: Record<SupportedLocale, SupportedCurrency> = {
  'en-US': 'USD',
  'en-GB': 'GBP',
  'en-CA': 'CAD',
  'en-AU': 'AUD',
  'es-ES': 'EUR',
  'es-MX': 'MXN',
  'fr-FR': 'EUR',
  'fr-CA': 'CAD',
  'de-DE': 'EUR',
  'it-IT': 'EUR',
  'pt-BR': 'BRL',
  'ja-JP': 'JPY',
  'ko-KR': 'KRW',
  'zh-CN': 'CNY',
  'zh-TW': 'CNY',
};

// ============================================================================
// Utility Functions
// ============================================================================

export function getLocaleFromBrowser(): SupportedLocale {
  if (typeof window === 'undefined') {
    return defaultIntlConfig.defaultLocale;
  }

  const browserLocale = navigator.language;
  const supportedLocales = Object.keys(localeCurrencyMap) as SupportedLocale[];

  // Try exact match first
  if (supportedLocales.includes(browserLocale as SupportedLocale)) {
    return browserLocale as SupportedLocale;
  }

  // Try language match (e.g., 'en' matches 'en-US')
  const languageCode = browserLocale.split('-')[0];
  const languageMatch = supportedLocales.find(locale => locale.startsWith(languageCode));

  return languageMatch || defaultIntlConfig.fallbackLocale;
}

export function getCurrencyForLocale(locale: SupportedLocale): SupportedCurrency {
  return localeCurrencyMap[locale] || defaultIntlConfig.defaultCurrency;
}

export function isValidLocale(locale: string): locale is SupportedLocale {
  return Object.keys(localeCurrencyMap).includes(locale);
}

export function isValidCurrency(currency: string): currency is SupportedCurrency {
  return Object.values(localeCurrencyMap).includes(currency as SupportedCurrency);
}
