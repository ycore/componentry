import type { DisplayCurrencyProps, DisplayDateProps, DisplayNumberProps } from './@types/intl.types';
import { DisplayCurrency, DisplayDate, DisplayNumber } from './Display';
export declare const DateFormat: typeof DisplayDate & {
    Short: (props: Omit<DisplayDateProps, "preset">) => import("react/jsx-runtime").JSX.Element;
    Medium: (props: Omit<DisplayDateProps, "preset">) => import("react/jsx-runtime").JSX.Element;
    Long: (props: Omit<DisplayDateProps, "preset">) => import("react/jsx-runtime").JSX.Element;
    Full: (props: Omit<DisplayDateProps, "preset">) => import("react/jsx-runtime").JSX.Element;
    DateTime: (props: Omit<DisplayDateProps, "preset">) => import("react/jsx-runtime").JSX.Element;
    Timestamp: (props: Omit<DisplayDateProps, "preset">) => import("react/jsx-runtime").JSX.Element;
};
export { DateFormat as Date };
export declare const NumberFormat: typeof DisplayNumber & {
    Integer: (props: Omit<DisplayNumberProps, "preset">) => import("react/jsx-runtime").JSX.Element;
    Decimal: (props: Omit<DisplayNumberProps, "preset">) => import("react/jsx-runtime").JSX.Element;
    Percent: (props: Omit<DisplayNumberProps, "preset">) => import("react/jsx-runtime").JSX.Element;
    Compact: (props: Omit<DisplayNumberProps, "preset">) => import("react/jsx-runtime").JSX.Element;
    Scientific: (props: Omit<DisplayNumberProps, "preset">) => import("react/jsx-runtime").JSX.Element;
    Ordinal: (props: Omit<DisplayNumberProps, "preset">) => import("react/jsx-runtime").JSX.Element;
};
export { NumberFormat as Number };
export declare const Currency: typeof DisplayCurrency & {
    Standard: (props: Omit<DisplayCurrencyProps, "preset">) => import("react/jsx-runtime").JSX.Element;
    Accounting: (props: Omit<DisplayCurrencyProps, "preset">) => import("react/jsx-runtime").JSX.Element;
    Compact: (props: Omit<DisplayCurrencyProps, "preset">) => import("react/jsx-runtime").JSX.Element;
    Name: (props: Omit<DisplayCurrencyProps, "preset">) => import("react/jsx-runtime").JSX.Element;
    Code: (props: Omit<DisplayCurrencyProps, "preset">) => import("react/jsx-runtime").JSX.Element;
};
/**
 * Component for displaying monetary amounts with automatic currency detection
 */
export declare const Money: ({ amount, locale, className, intlConfig, ...props }: Omit<DisplayCurrencyProps, "currency" | "preset">) => import("react/jsx-runtime").JSX.Element;
/**
 * Component for displaying prices (always positive, with currency symbol)
 */
export declare const Price: ({ amount, className, ...props }: Omit<DisplayCurrencyProps, "preset">) => import("react/jsx-runtime").JSX.Element;
export type { CurrencyFormatPreset, DateFormatPreset, DisplayCurrencyProps, DisplayDateProps, DisplayNumberProps, IntlConfig, NumberFormatPreset, SupportedCurrency, SupportedLocale } from './@types/intl.types';
export { defaultIntlConfig } from './config';
