// ============================================================================
// Internationalization Type Definitions
// ============================================================================

export type SupportedLocale =
  | 'en-US'
  | 'en-GB'
  | 'en-CA'
  | 'en-AU'
  | 'es-ES'
  | 'es-MX'
  | 'fr-FR'
  | 'fr-CA'
  | 'de-DE'
  | 'it-IT'
  | 'pt-BR'
  | 'ja-JP'
  | 'ko-KR'
  | 'zh-CN'
  | 'zh-TW';

export type SupportedCurrency =
  | 'USD'
  | 'EUR'
  | 'GBP'
  | 'CAD'
  | 'AUD'
  | 'JPY'
  | 'KRW'
  | 'CNY'
  | 'BRL'
  | 'MXN';

export type DateFormatPreset =
  | 'short'      // 12/31/2023
  | 'medium'     // Dec 31, 2023
  | 'long'       // December 31, 2023
  | 'full'       // Sunday, December 31, 2023
  | 'datetime'   // Dec 31, 2023, 10:30 AM
  | 'timestamp'  // December 31, 2023 at 10:30:15 AM
  | 'relative';  // 2 days ago (future enhancement)

export type NumberFormatPreset =
  | 'integer'    // 1,234
  | 'decimal'    // 1,234.56
  | 'percent'    // 12.34%
  | 'compact'    // 1.2K, 1.2M
  | 'scientific' // 1.23E+3
  | 'ordinal';   // 1st, 2nd, 3rd

export type CurrencyFormatPreset =
  | 'standard'   // $1,234.56
  | 'accounting' // ($1,234.56) for negatives
  | 'compact'    // $1.2K
  | 'name'       // 1,234.56 US dollars
  | 'code';      // USD 1,234.56

// ============================================================================
// Configuration Interfaces
// ============================================================================

export interface IntlConfig {
  defaultLocale: SupportedLocale;
  defaultCurrency: SupportedCurrency;
  fallbackLocale: SupportedLocale;
  datePresets: {
    default: DateFormatPreset;
    fallback: DateFormatPreset;
  };
  numberPresets: {
    default: NumberFormatPreset;
    fallback: NumberFormatPreset;
  };
  currencyPresets: {
    default: CurrencyFormatPreset;
    fallback: CurrencyFormatPreset;
  };
}

// ============================================================================
// Component Props Types
// ============================================================================

import type React from 'react';

export interface DisplayDateProps {
  /**
   * The date to format - accepts Date object, ISO string, or timestamp
   */
  date: Date | string | number;

  /**
   * Locale to use for formatting. If not provided, uses system default or browser locale
   */
  locale?: SupportedLocale | string;

  /**
   * Preset format configuration
   */
  preset?: DateFormatPreset;

  /**
   * Custom Intl.DateTimeFormatOptions to override preset
   */
  options?: Intl.DateTimeFormatOptions;

  /**
   * Fallback text to display if date is invalid
   */
  fallback?: string;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * HTML time element attributes for semantic markup
   */
  timeProps?: React.TimeHTMLAttributes<HTMLTimeElement>;

  /**
   * Whether to render as a semantic time element (default: true)
   */
  semantic?: boolean;

  /**
   * System configuration - typically passed from app context
   */
  intlConfig?: Partial<IntlConfig>;
}

export interface DisplayNumberProps {
  /**
   * The number to format - accepts number or numeric string
   */
  value: number | string;

  /**
   * Locale to use for formatting. If not provided, uses system default
   */
  locale?: SupportedLocale | string;

  /**
   * Preset format configuration
   */
  preset?: NumberFormatPreset;

  /**
   * Custom Intl.NumberFormatOptions to override preset
   */
  options?: Intl.NumberFormatOptions;

  /**
   * Fallback text to display if number is invalid
   */
  fallback?: string;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * HTML data attributes for semantic markup
   */
  dataAttributes?: Record<string, string>;

  /**
   * System configuration - typically passed from app context
   */
  intlConfig?: Partial<IntlConfig>;

  /**
   * For ordinal numbers, specify the ordinal type
   */
  ordinalType?: 'cardinal' | 'ordinal';
}

export interface DisplayCurrencyProps {
  /**
   * The amount to format - accepts number or numeric string
   */
  amount: number | string;

  /**
   * Currency code (USD, EUR, etc.). If not provided, uses locale default
   */
  currency?: SupportedCurrency | string;

  /**
   * Locale to use for formatting. If not provided, uses system default
   */
  locale?: SupportedLocale | string;

  /**
   * Preset format configuration
   */
  preset?: CurrencyFormatPreset;

  /**
   * Custom Intl.NumberFormatOptions to override preset
   */
  options?: Intl.NumberFormatOptions;

  /**
   * Fallback text to display if amount is invalid
   */
  fallback?: string;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * HTML data attributes for semantic markup
   */
  dataAttributes?: Record<string, string>;

  /**
   * System configuration - typically passed from app context
   */
  intlConfig?: Partial<IntlConfig>;

  /**
   * Whether to show positive/negative indicators (+/-)
   */
  showSign?: boolean;

  /**
   * Minimum number of decimal places to show
   */
  minimumFractionDigits?: number;

  /**
   * Maximum number of decimal places to show
   */
  maximumFractionDigits?: number;
}
