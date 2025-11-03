// ============================================================================
// Internationalization Components Export
// ============================================================================

import type { DisplayCurrencyProps, DisplayDateProps, DisplayNumberProps } from './@types/intl.types';
import { DisplayCurrency, DisplayDate, DisplayNumber } from './Display';

// ============================================================================
// Date Component with Preset Shortcuts
// ============================================================================

const DateShort: React.FC<Omit<DisplayDateProps, 'preset'>> = props => DisplayDate({ ...props, preset: 'short' });
const DateMedium: React.FC<Omit<DisplayDateProps, 'preset'>> = props => DisplayDate({ ...props, preset: 'medium' });
const DateLong: React.FC<Omit<DisplayDateProps, 'preset'>> = props => DisplayDate({ ...props, preset: 'long' });
const DateFull: React.FC<Omit<DisplayDateProps, 'preset'>> = props => DisplayDate({ ...props, preset: 'full' });
const DateTime: React.FC<Omit<DisplayDateProps, 'preset'>> = props => DisplayDate({ ...props, preset: 'datetime' });
const Timestamp: React.FC<Omit<DisplayDateProps, 'preset'>> = props => DisplayDate({ ...props, preset: 'timestamp' });

export const DateFormat: typeof DisplayDate & {
  Short: typeof DateShort;
  Medium: typeof DateMedium;
  Long: typeof DateLong;
  Full: typeof DateFull;
  DateTime: typeof DateTime;
  Timestamp: typeof Timestamp;
} = Object.assign(DisplayDate, {
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

const NumberInteger: React.FC<Omit<DisplayNumberProps, 'preset'>> = props => DisplayNumber({ ...props, preset: 'integer' });
const NumberDecimal: React.FC<Omit<DisplayNumberProps, 'preset'>> = props => DisplayNumber({ ...props, preset: 'decimal' });
const NumberPercent: React.FC<Omit<DisplayNumberProps, 'preset'>> = props => DisplayNumber({ ...props, preset: 'percent' });
const NumberCompact: React.FC<Omit<DisplayNumberProps, 'preset'>> = props => DisplayNumber({ ...props, preset: 'compact' });
const NumberScientific: React.FC<Omit<DisplayNumberProps, 'preset'>> = props => DisplayNumber({ ...props, preset: 'scientific' });
const NumberOrdinal: React.FC<Omit<DisplayNumberProps, 'preset'>> = props => DisplayNumber({ ...props, preset: 'ordinal' });

export const NumberFormat: typeof DisplayNumber & {
  Integer: typeof NumberInteger;
  Decimal: typeof NumberDecimal;
  Percent: typeof NumberPercent;
  Compact: typeof NumberCompact;
  Scientific: typeof NumberScientific;
  Ordinal: typeof NumberOrdinal;
} = Object.assign(DisplayNumber, {
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

const CurrencyStandard: React.FC<Omit<DisplayCurrencyProps, 'preset'>> = props => DisplayCurrency({ ...props, preset: 'standard' });
const CurrencyAccounting: React.FC<Omit<DisplayCurrencyProps, 'preset'>> = props => DisplayCurrency({ ...props, preset: 'accounting' });
const CurrencyCompact: React.FC<Omit<DisplayCurrencyProps, 'preset'>> = props => DisplayCurrency({ ...props, preset: 'compact' });
const CurrencyName: React.FC<Omit<DisplayCurrencyProps, 'preset'>> = props => DisplayCurrency({ ...props, preset: 'name' });
const CurrencyCode: React.FC<Omit<DisplayCurrencyProps, 'preset'>> = props => DisplayCurrency({ ...props, preset: 'code' });

export const Currency: typeof DisplayCurrency & {
  Standard: typeof CurrencyStandard;
  Accounting: typeof CurrencyAccounting;
  Compact: typeof CurrencyCompact;
  Name: typeof CurrencyName;
  Code: typeof CurrencyCode;
} = Object.assign(DisplayCurrency, {
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
export const Money: React.FC<Omit<DisplayCurrencyProps, 'currency' | 'preset'>> = ({ amount, locale, className, intlConfig, ...props }) =>
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
export const Price: React.FC<Omit<DisplayCurrencyProps, 'preset'>> = ({ amount, className, ...props }) => {
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
