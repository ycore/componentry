import type { DisplayCurrencyProps, DisplayDateProps, DisplayNumberProps } from './@types/intl.types';
import { DisplayCurrency, DisplayDate, DisplayNumber } from './Display';
declare const DateShort: React.FC<Omit<DisplayDateProps, 'preset'>>;
declare const DateMedium: React.FC<Omit<DisplayDateProps, 'preset'>>;
declare const DateLong: React.FC<Omit<DisplayDateProps, 'preset'>>;
declare const DateFull: React.FC<Omit<DisplayDateProps, 'preset'>>;
declare const DateTime: React.FC<Omit<DisplayDateProps, 'preset'>>;
declare const Timestamp: React.FC<Omit<DisplayDateProps, 'preset'>>;
export declare const DateFormat: typeof DisplayDate & {
    Short: typeof DateShort;
    Medium: typeof DateMedium;
    Long: typeof DateLong;
    Full: typeof DateFull;
    DateTime: typeof DateTime;
    Timestamp: typeof Timestamp;
};
export { DateFormat as Date };
declare const NumberInteger: React.FC<Omit<DisplayNumberProps, 'preset'>>;
declare const NumberDecimal: React.FC<Omit<DisplayNumberProps, 'preset'>>;
declare const NumberPercent: React.FC<Omit<DisplayNumberProps, 'preset'>>;
declare const NumberCompact: React.FC<Omit<DisplayNumberProps, 'preset'>>;
declare const NumberScientific: React.FC<Omit<DisplayNumberProps, 'preset'>>;
declare const NumberOrdinal: React.FC<Omit<DisplayNumberProps, 'preset'>>;
export declare const NumberFormat: typeof DisplayNumber & {
    Integer: typeof NumberInteger;
    Decimal: typeof NumberDecimal;
    Percent: typeof NumberPercent;
    Compact: typeof NumberCompact;
    Scientific: typeof NumberScientific;
    Ordinal: typeof NumberOrdinal;
};
export { NumberFormat as Number };
declare const CurrencyStandard: React.FC<Omit<DisplayCurrencyProps, 'preset'>>;
declare const CurrencyAccounting: React.FC<Omit<DisplayCurrencyProps, 'preset'>>;
declare const CurrencyCompact: React.FC<Omit<DisplayCurrencyProps, 'preset'>>;
declare const CurrencyName: React.FC<Omit<DisplayCurrencyProps, 'preset'>>;
declare const CurrencyCode: React.FC<Omit<DisplayCurrencyProps, 'preset'>>;
export declare const Currency: typeof DisplayCurrency & {
    Standard: typeof CurrencyStandard;
    Accounting: typeof CurrencyAccounting;
    Compact: typeof CurrencyCompact;
    Name: typeof CurrencyName;
    Code: typeof CurrencyCode;
};
/**
 * Component for displaying monetary amounts with automatic currency detection
 */
export declare const Money: React.FC<Omit<DisplayCurrencyProps, 'currency' | 'preset'>>;
/**
 * Component for displaying prices (always positive, with currency symbol)
 */
export declare const Price: React.FC<Omit<DisplayCurrencyProps, 'preset'>>;
export type { CurrencyFormatPreset, DateFormatPreset, DisplayCurrencyProps, DisplayDateProps, DisplayNumberProps, IntlConfig, NumberFormatPreset, SupportedCurrency, SupportedLocale } from './@types/intl.types';
export { defaultIntlConfig } from './config';
