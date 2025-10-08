import type React from 'react';
import type { CurrencyFormatPreset, DateFormatPreset, DisplayCurrencyProps, DisplayDateProps, DisplayNumberProps, IntlConfig, NumberFormatPreset, SupportedCurrency, SupportedLocale } from './@types/intl.types';

import { currencyFormatConfigs, dateFormatConfigs, defaultIntlConfig, getCurrencyForLocale, isValidCurrency, isValidLocale, numberFormatConfigs } from './config';

// ============================================================================
// Shared Utility Functions
// ============================================================================

/**
 * Safely parse various date inputs into a Date object
 */
function parseDate(input: Date | string | number): Date | null {
  try {
    if (input instanceof Date) {
      return Number.isNaN(input.getTime()) ? null : input;
    }

    if (typeof input === 'string') {
      const parsed = new Date(input);
      return Number.isNaN(parsed.getTime()) ? null : parsed;
    }

    if (typeof input === 'number') {
      const parsed = new Date(input);
      return Number.isNaN(parsed.getTime()) ? null : parsed;
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Safely parse various number inputs
 */
function parseNumber(input: number | string): number | null {
  try {
    if (typeof input === 'number') {
      return Number.isNaN(input) || !Number.isFinite(input) ? null : input;
    }

    if (typeof input === 'string') {
      // Handle empty strings
      if (input.trim() === '') return null;

      const parsed = Number(input);
      return Number.isNaN(parsed) || !Number.isFinite(parsed) ? null : parsed;
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Safely parse various amount inputs
 */
function parseAmount(input: number | string): number | null {
  try {
    if (typeof input === 'number') {
      return Number.isNaN(input) || !Number.isFinite(input) ? null : input;
    }

    if (typeof input === 'string') {
      // Handle empty strings
      if (input.trim() === '') return null;

      // Remove common currency symbols and commas for parsing
      const cleaned = input.replace(/[$€£¥₹,\\s]/g, '');
      const parsed = Number(cleaned);
      return Number.isNaN(parsed) || !Number.isFinite(parsed) ? null : parsed;
    }

    return null;
  } catch {
    return null;
  }
}

/**
 * Get effective locale with fallback chain
 */
function getEffectiveLocale(locale?: SupportedLocale | string, intlConfig?: Partial<IntlConfig>): SupportedLocale {
  // Use provided locale if valid
  if (locale && isValidLocale(locale)) {
    return locale;
  }

  // Use config default
  if (intlConfig?.defaultLocale) {
    return intlConfig.defaultLocale;
  }

  // Use system default
  return defaultIntlConfig.defaultLocale;
}

// ============================================================================
// Date Display Component
// ============================================================================

/**
 * Get effective date format options with fallback chain
 */
function getEffectiveDateOptions(preset?: DateFormatPreset, customOptions?: Intl.DateTimeFormatOptions, intlConfig?: Partial<IntlConfig>): Intl.DateTimeFormatOptions {
  // Custom options override everything
  if (customOptions) {
    return customOptions;
  }

  // Use preset if provided
  if (preset && dateFormatConfigs[preset]) {
    return dateFormatConfigs[preset];
  }

  // Use config default preset
  const defaultPreset = intlConfig?.datePresets?.default || defaultIntlConfig.datePresets.default;
  if (dateFormatConfigs[defaultPreset]) {
    return dateFormatConfigs[defaultPreset];
  }

  // Final fallback
  const fallbackPreset = intlConfig?.datePresets?.fallback || defaultIntlConfig.datePresets.fallback;
  return dateFormatConfigs[fallbackPreset];
}

/**
 * Format date with safe error handling for hydration consistency
 */
function formatDateSafely(date: Date, locale: SupportedLocale, options: Intl.DateTimeFormatOptions): string {
  try {
    return new Intl.DateTimeFormat(locale, options).format(date);
  } catch {
    // Fallback to basic formatting if Intl fails
    try {
      return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(date);
    } catch {
      // Last resort fallback
      return date.toLocaleDateString();
    }
  }
}

/**
 * DisplayDate - A hydration-safe date formatting component
 */
export function DisplayDate({ date, locale, preset, options, fallback = 'N/A', className, timeProps, semantic = true, intlConfig }: DisplayDateProps) {
  // Parse and validate the input date
  const parsedDate = parseDate(date);

  if (!parsedDate) {
    const content = <span className={className}>{fallback}</span>;
    return semantic ? <time {...timeProps}>{content}</time> : content;
  }

  // Determine effective locale and format options
  const effectiveLocale = getEffectiveLocale(locale, intlConfig);
  const effectiveOptions = getEffectiveDateOptions(preset, options, intlConfig);

  // Format the date with safe error handling
  const formattedDate = formatDateSafely(parsedDate, effectiveLocale, effectiveOptions);

  // Create the formatted content
  const content = <span className={className}>{formattedDate}</span>;

  // Render with semantic time element if requested
  if (semantic) {
    return (
      <time dateTime={parsedDate.toISOString()} {...timeProps}>
        {content}
      </time>
    );
  }

  return content;
}

// ============================================================================
// Number Display Component
// ============================================================================

/**
 * Get effective number format options with fallback chain
 */
function getEffectiveNumberOptions(preset?: NumberFormatPreset, customOptions?: Intl.NumberFormatOptions, intlConfig?: Partial<IntlConfig>, ordinalType?: 'cardinal' | 'ordinal'): Intl.NumberFormatOptions {
  // Custom options override everything
  if (customOptions) {
    return customOptions;
  }

  // Handle ordinal preset with type
  if (preset === 'ordinal' && ordinalType) {
    return {
      ...numberFormatConfigs.ordinal,
      // Note: Ordinal formatting in Intl API is limited
      // We'll handle this in the formatting function
    };
  }

  // Use preset if provided
  if (preset && numberFormatConfigs[preset]) {
    return numberFormatConfigs[preset];
  }

  // Use config default preset
  const defaultPreset = intlConfig?.numberPresets?.default || defaultIntlConfig.numberPresets.default;
  if (numberFormatConfigs[defaultPreset]) {
    return numberFormatConfigs[defaultPreset];
  }

  // Final fallback
  const fallbackPreset = intlConfig?.numberPresets?.fallback || defaultIntlConfig.numberPresets.fallback;
  return numberFormatConfigs[fallbackPreset];
}

/**
 * Format ordinal numbers (1st, 2nd, 3rd, etc.)
 */
function formatOrdinal(num: number, locale: SupportedLocale): string {
  try {
    // Modern browsers support Intl.PluralRules for ordinals
    if (typeof Intl !== 'undefined' && 'PluralRules' in Intl) {
      const pr = new Intl.PluralRules(locale, { type: 'ordinal' });
      const rule = pr.select(num);

      // English ordinal suffixes
      const suffixes: Record<string, string> = {
        one: 'st',
        two: 'nd',
        few: 'rd',
        other: 'th',
      };

      // For English locales, use proper ordinal logic
      if (locale.startsWith('en')) {
        const suffix = suffixes[rule] || 'th';
        return `${num}${suffix}`;
      }
    }

    // Fallback for English
    if (locale.startsWith('en')) {
      const lastDigit = num % 10;
      const lastTwoDigits = num % 100;

      if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        return `${num}th`;
      }

      switch (lastDigit) {
        case 1:
          return `${num}st`;
        case 2:
          return `${num}nd`;
        case 3:
          return `${num}rd`;
        default:
          return `${num}th`;
      }
    }

    // For non-English locales, just return the number
    return num.toString();
  } catch {
    return num.toString();
  }
}

/**
 * Format number with safe error handling for hydration consistency
 */
function formatNumberSafely(num: number, locale: SupportedLocale, options: Intl.NumberFormatOptions, preset?: NumberFormatPreset, _ordinalType?: 'cardinal' | 'ordinal'): string {
  try {
    // Handle ordinal formatting specially
    if (preset === 'ordinal') {
      return formatOrdinal(num, locale);
    }

    return new Intl.NumberFormat(locale, options).format(num);
  } catch {
    // Fallback to basic formatting if Intl fails
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      }).format(num);
    } catch {
      // Last resort fallback
      return num.toString();
    }
  }
}

/**
 * DisplayNumber - A hydration-safe number formatting component
 */
export function DisplayNumber({ value, locale, preset, options, fallback = 'N/A', className, dataAttributes, intlConfig, ordinalType = 'ordinal' }: DisplayNumberProps) {
  // Parse and validate the input number
  const parsedNumber = parseNumber(value);

  if (parsedNumber === null) {
    return (
      <span className={className} {...dataAttributes}>
        {fallback}
      </span>
    );
  }

  // Determine effective locale and format options
  const effectiveLocale = getEffectiveLocale(locale, intlConfig);
  const effectiveOptions = getEffectiveNumberOptions(preset, options, intlConfig, ordinalType);

  // Format the number with safe error handling
  const formattedNumber = formatNumberSafely(parsedNumber, effectiveLocale, effectiveOptions, preset, ordinalType);

  // Create data attributes including the raw value
  const allDataAttributes = {
    'data-value': parsedNumber.toString(),
    ...dataAttributes,
  };

  return (
    <span className={className} {...allDataAttributes}>
      {formattedNumber}
    </span>
  );
}

// ============================================================================
// Currency Display Component
// ============================================================================

/**
 * Get effective currency with fallback chain
 */
function getEffectiveCurrency(currency?: SupportedCurrency | string, locale?: SupportedLocale, intlConfig?: Partial<IntlConfig>): SupportedCurrency {
  // Use provided currency if valid
  if (currency && isValidCurrency(currency)) {
    return currency;
  }

  // Use locale's default currency
  if (locale && isValidLocale(locale)) {
    return getCurrencyForLocale(locale);
  }

  // Use config default
  if (intlConfig?.defaultCurrency) {
    return intlConfig.defaultCurrency;
  }

  // Use system default
  return defaultIntlConfig.defaultCurrency;
}

/**
 * Get effective currency format options with fallback chain
 */
function getEffectiveCurrencyOptions(
  preset?: CurrencyFormatPreset,
  customOptions?: Intl.NumberFormatOptions,
  intlConfig?: Partial<IntlConfig>,
  currency?: SupportedCurrency,
  showSign?: boolean,
  minimumFractionDigits?: number,
  maximumFractionDigits?: number
): Intl.NumberFormatOptions {
  // Start with preset or default options
  let baseOptions: Intl.NumberFormatOptions;

  if (customOptions) {
    baseOptions = { ...customOptions };
  } else if (preset && currencyFormatConfigs[preset]) {
    baseOptions = { ...currencyFormatConfigs[preset] };
  } else {
    const defaultPreset = intlConfig?.currencyPresets?.default || defaultIntlConfig.currencyPresets.default;
    baseOptions = { ...currencyFormatConfigs[defaultPreset] };
  }

  // Add currency if not already set
  if (currency && !baseOptions.currency) {
    baseOptions.currency = currency;
  }

  // Add sign display if requested
  if (showSign) {
    baseOptions.signDisplay = 'always';
  }

  // Override fraction digits if specified
  if (minimumFractionDigits !== undefined) {
    baseOptions.minimumFractionDigits = minimumFractionDigits;
  }

  if (maximumFractionDigits !== undefined) {
    baseOptions.maximumFractionDigits = maximumFractionDigits;
  }

  return baseOptions;
}

/**
 * Format currency with safe error handling for hydration consistency
 */
function formatCurrencySafely(amount: number, locale: SupportedLocale, options: Intl.NumberFormatOptions): string {
  try {
    return new Intl.NumberFormat(locale, options).format(amount);
  } catch {
    // Fallback to basic currency formatting if Intl fails
    try {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: options.currency || 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount);
    } catch {
      // Last resort fallback with currency symbol
      const symbol = options.currency === 'EUR' ? '€' : options.currency === 'GBP' ? '£' : options.currency === 'JPY' ? '¥' : '$';
      return `${symbol}${amount.toFixed(2)}`;
    }
  }
}

/**
 * DisplayCurrency - A hydration-safe currency formatting component
 */
export function DisplayCurrency({ amount, currency, locale, preset, options, fallback = 'N/A', className, dataAttributes, intlConfig, showSign = false, minimumFractionDigits, maximumFractionDigits }: DisplayCurrencyProps) {
  // Parse and validate the input amount
  const parsedAmount = parseAmount(amount);

  if (parsedAmount === null) {
    return (
      <span className={className} {...dataAttributes}>
        {fallback}
      </span>
    );
  }

  // Determine effective locale, currency, and format options
  const effectiveLocale = getEffectiveLocale(locale, intlConfig);
  const effectiveCurrency = getEffectiveCurrency(currency, effectiveLocale, intlConfig);
  const effectiveOptions = getEffectiveCurrencyOptions(preset, options, intlConfig, effectiveCurrency, showSign, minimumFractionDigits, maximumFractionDigits);

  // Format the currency with safe error handling
  const formattedCurrency = formatCurrencySafely(parsedAmount, effectiveLocale, effectiveOptions);

  // Create data attributes including the raw value and currency
  const allDataAttributes = {
    'data-amount': parsedAmount.toString(),
    'data-currency': effectiveCurrency,
    'data-locale': effectiveLocale,
    ...dataAttributes,
  };

  return (
    <span className={className} {...allDataAttributes}>
      {formattedCurrency}
    </span>
  );
}
