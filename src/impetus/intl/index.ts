// ============================================================================
// Internationalization Components Export
// ============================================================================

import type { DisplayCurrencyProps, DisplayDateProps, DisplayNumberProps } from './@types/intl.types';
import { DisplayCurrency, DisplayDate, DisplayNumber } from './Display';

// ============================================================================
// Date Component with Preset Shortcuts
// ============================================================================

const DateShort = (props: Omit<DisplayDateProps, 'preset'>) => DisplayDate({ ...props, preset: 'short' });
const DateMedium = (props: Omit<DisplayDateProps, 'preset'>) => DisplayDate({ ...props, preset: 'medium' });
const DateLong = (props: Omit<DisplayDateProps, 'preset'>) => DisplayDate({ ...props, preset: 'long' });
const DateFull = (props: Omit<DisplayDateProps, 'preset'>) => DisplayDate({ ...props, preset: 'full' });
const DateTime = (props: Omit<DisplayDateProps, 'preset'>) => DisplayDate({ ...props, preset: 'datetime' });
const Timestamp = (props: Omit<DisplayDateProps, 'preset'>) => DisplayDate({ ...props, preset: 'timestamp' });

export const DateFormat = Object.assign(DisplayDate, {
  Short: DateShort,
  Medium: DateMedium,
  Long: DateLong,
  Full: DateFull,
  DateTime: DateTime,
  Timestamp: Timestamp,
});

// For backwards compatibility
export { DateFormat as Date };

// ============================================================================
// Number Component with Preset Shortcuts
// ============================================================================

const NumberInteger = (props: Omit<DisplayNumberProps, 'preset'>) => DisplayNumber({ ...props, preset: 'integer' });
const NumberDecimal = (props: Omit<DisplayNumberProps, 'preset'>) => DisplayNumber({ ...props, preset: 'decimal' });
const NumberPercent = (props: Omit<DisplayNumberProps, 'preset'>) => DisplayNumber({ ...props, preset: 'percent' });
const NumberCompact = (props: Omit<DisplayNumberProps, 'preset'>) => DisplayNumber({ ...props, preset: 'compact' });
const NumberScientific = (props: Omit<DisplayNumberProps, 'preset'>) => DisplayNumber({ ...props, preset: 'scientific' });
const NumberOrdinal = (props: Omit<DisplayNumberProps, 'preset'>) => DisplayNumber({ ...props, preset: 'ordinal' });

export const NumberFormat = Object.assign(DisplayNumber, {
  Integer: NumberInteger,
  Decimal: NumberDecimal,
  Percent: NumberPercent,
  Compact: NumberCompact,
  Scientific: NumberScientific,
  Ordinal: NumberOrdinal,
});

// For backwards compatibility
export { NumberFormat as Number };

// ============================================================================
// Currency Component with Preset Shortcuts
// ============================================================================

const CurrencyStandard = (props: Omit<DisplayCurrencyProps, 'preset'>) => DisplayCurrency({ ...props, preset: 'standard' });
const CurrencyAccounting = (props: Omit<DisplayCurrencyProps, 'preset'>) => DisplayCurrency({ ...props, preset: 'accounting' });
const CurrencyCompact = (props: Omit<DisplayCurrencyProps, 'preset'>) => DisplayCurrency({ ...props, preset: 'compact' });
const CurrencyName = (props: Omit<DisplayCurrencyProps, 'preset'>) => DisplayCurrency({ ...props, preset: 'name' });
const CurrencyCode = (props: Omit<DisplayCurrencyProps, 'preset'>) => DisplayCurrency({ ...props, preset: 'code' });

export const Currency = Object.assign(DisplayCurrency, {
  Standard: CurrencyStandard,
  Accounting: CurrencyAccounting,
  Compact: CurrencyCompact,
  Name: CurrencyName,
  Code: CurrencyCode,
});

// ============================================================================
// Specialized Components
// ============================================================================

/**
 * Component for displaying monetary amounts with automatic currency detection
 */
export const Money = ({ amount, locale, className, intlConfig, ...props }: Omit<DisplayCurrencyProps, 'currency' | 'preset'>) =>
  DisplayCurrency({
    amount,
    locale,
    className,
    intlConfig,
    preset: 'standard',
    ...props,
  });

/**
 * Component for displaying prices (always positive, with currency symbol)
 */
export const Price = ({ amount, className, ...props }: Omit<DisplayCurrencyProps, 'preset'>) => {
  // Parse amount and make positive
  const numericAmount = typeof amount === 'string' ? Number.parseFloat(amount) : amount;
  const positiveAmount = typeof numericAmount === 'number' && !Number.isNaN(numericAmount) ? Math.abs(numericAmount) : amount;

  return DisplayCurrency({
    amount: positiveAmount,
    className,
    preset: 'standard',
    ...props,
  });
};

// ============================================================================
// Configuration and Utility Exports
// ============================================================================

export type { CurrencyFormatPreset, DateFormatPreset, DisplayCurrencyProps, DisplayDateProps, DisplayNumberProps, IntlConfig, NumberFormatPreset, SupportedCurrency, SupportedLocale } from './@types/intl.types';
export { defaultIntlConfig } from './config';
