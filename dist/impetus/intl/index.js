// src/impetus/intl/config.ts
var dateFormatConfigs = {
  short: {
    year: "numeric",
    month: "numeric",
    day: "numeric"
  },
  medium: {
    year: "numeric",
    month: "short",
    day: "numeric"
  },
  long: {
    year: "numeric",
    month: "long",
    day: "numeric"
  },
  full: {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  },
  datetime: {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  },
  timestamp: {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit"
  },
  relative: {
    year: "numeric",
    month: "short",
    day: "numeric"
  }
};
var numberFormatConfigs = {
  integer: {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  },
  decimal: {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  },
  percent: {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2
  },
  compact: {
    style: "decimal",
    notation: "compact",
    compactDisplay: "short"
  },
  scientific: {
    style: "decimal",
    notation: "scientific"
  },
  ordinal: {
    style: "decimal"
  }
};
var currencyFormatConfigs = {
  standard: {
    style: "currency",
    currencyDisplay: "symbol"
  },
  accounting: {
    style: "currency",
    currencyDisplay: "symbol",
    currencySign: "accounting"
  },
  compact: {
    style: "currency",
    currencyDisplay: "symbol",
    notation: "compact",
    compactDisplay: "short"
  },
  name: {
    style: "currency",
    currencyDisplay: "name"
  },
  code: {
    style: "currency",
    currencyDisplay: "code"
  }
};
var defaultIntlConfig = {
  defaultLocale: "en-US",
  defaultCurrency: "USD",
  fallbackLocale: "en-US",
  datePresets: {
    default: "medium",
    fallback: "short"
  },
  numberPresets: {
    default: "decimal",
    fallback: "integer"
  },
  currencyPresets: {
    default: "standard",
    fallback: "standard"
  }
};
var localeCurrencyMap = {
  "en-US": "USD",
  "en-GB": "GBP",
  "en-CA": "CAD",
  "en-AU": "AUD",
  "es-ES": "EUR",
  "es-MX": "MXN",
  "fr-FR": "EUR",
  "fr-CA": "CAD",
  "de-DE": "EUR",
  "it-IT": "EUR",
  "pt-BR": "BRL",
  "ja-JP": "JPY",
  "ko-KR": "KRW",
  "zh-CN": "CNY",
  "zh-TW": "CNY"
};
function getCurrencyForLocale(locale) {
  return localeCurrencyMap[locale] || defaultIntlConfig.defaultCurrency;
}
function isValidLocale(locale) {
  return Object.keys(localeCurrencyMap).includes(locale);
}
function isValidCurrency(currency) {
  return Object.values(localeCurrencyMap).includes(currency);
}

// src/impetus/intl/Display.tsx
import { jsx } from "react/jsx-runtime";
function parseDate(input) {
  try {
    if (input instanceof Date) {
      return Number.isNaN(input.getTime()) ? null : input;
    }
    if (typeof input === "string") {
      const parsed = new Date(input);
      return Number.isNaN(parsed.getTime()) ? null : parsed;
    }
    if (typeof input === "number") {
      const parsed = new Date(input);
      return Number.isNaN(parsed.getTime()) ? null : parsed;
    }
    return null;
  } catch {
    return null;
  }
}
function parseNumber(input) {
  try {
    if (typeof input === "number") {
      return Number.isNaN(input) || !Number.isFinite(input) ? null : input;
    }
    if (typeof input === "string") {
      if (input.trim() === "")
        return null;
      const parsed = Number(input);
      return Number.isNaN(parsed) || !Number.isFinite(parsed) ? null : parsed;
    }
    return null;
  } catch {
    return null;
  }
}
function parseAmount(input) {
  try {
    if (typeof input === "number") {
      return Number.isNaN(input) || !Number.isFinite(input) ? null : input;
    }
    if (typeof input === "string") {
      if (input.trim() === "")
        return null;
      const cleaned = input.replace(/[$€£¥₹,\\s]/g, "");
      const parsed = Number(cleaned);
      return Number.isNaN(parsed) || !Number.isFinite(parsed) ? null : parsed;
    }
    return null;
  } catch {
    return null;
  }
}
function getEffectiveLocale(locale, intlConfig) {
  if (locale && isValidLocale(locale)) {
    return locale;
  }
  if (intlConfig?.defaultLocale) {
    return intlConfig.defaultLocale;
  }
  return defaultIntlConfig.defaultLocale;
}
function getEffectiveDateOptions(preset, customOptions, intlConfig) {
  if (customOptions) {
    return customOptions;
  }
  if (preset && dateFormatConfigs[preset]) {
    return dateFormatConfigs[preset];
  }
  const defaultPreset = intlConfig?.datePresets?.default || defaultIntlConfig.datePresets.default;
  if (dateFormatConfigs[defaultPreset]) {
    return dateFormatConfigs[defaultPreset];
  }
  const fallbackPreset = intlConfig?.datePresets?.fallback || defaultIntlConfig.datePresets.fallback;
  return dateFormatConfigs[fallbackPreset];
}
function formatDateSafely(date, locale, options) {
  try {
    return new Intl.DateTimeFormat(locale, options).format(date);
  } catch {
    try {
      return new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      }).format(date);
    } catch {
      return date.toLocaleDateString();
    }
  }
}
function DisplayDate({ date, locale, preset, options, fallback = "N/A", className, timeProps, semantic = true, intlConfig }) {
  const parsedDate = parseDate(date);
  if (!parsedDate) {
    const content2 = /* @__PURE__ */ jsx("span", {
      className,
      children: fallback
    });
    return semantic ? /* @__PURE__ */ jsx("time", {
      ...timeProps,
      children: content2
    }) : content2;
  }
  const effectiveLocale = getEffectiveLocale(locale, intlConfig);
  const effectiveOptions = getEffectiveDateOptions(preset, options, intlConfig);
  const formattedDate = formatDateSafely(parsedDate, effectiveLocale, effectiveOptions);
  const content = /* @__PURE__ */ jsx("span", {
    className,
    children: formattedDate
  });
  if (semantic) {
    return /* @__PURE__ */ jsx("time", {
      dateTime: parsedDate.toISOString(),
      ...timeProps,
      children: content
    });
  }
  return content;
}
function getEffectiveNumberOptions(preset, customOptions, intlConfig, ordinalType) {
  if (customOptions) {
    return customOptions;
  }
  if (preset === "ordinal" && ordinalType) {
    return {
      ...numberFormatConfigs.ordinal
    };
  }
  if (preset && numberFormatConfigs[preset]) {
    return numberFormatConfigs[preset];
  }
  const defaultPreset = intlConfig?.numberPresets?.default || defaultIntlConfig.numberPresets.default;
  if (numberFormatConfigs[defaultPreset]) {
    return numberFormatConfigs[defaultPreset];
  }
  const fallbackPreset = intlConfig?.numberPresets?.fallback || defaultIntlConfig.numberPresets.fallback;
  return numberFormatConfigs[fallbackPreset];
}
function formatOrdinal(num, locale) {
  try {
    if (typeof Intl !== "undefined" && "PluralRules" in Intl) {
      const pr = new Intl.PluralRules(locale, { type: "ordinal" });
      const rule = pr.select(num);
      const suffixes = {
        one: "st",
        two: "nd",
        few: "rd",
        other: "th"
      };
      if (locale.startsWith("en")) {
        const suffix = suffixes[rule] || "th";
        return `${num}${suffix}`;
      }
    }
    if (locale.startsWith("en")) {
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
    return num.toString();
  } catch {
    return num.toString();
  }
}
function formatNumberSafely(num, locale, options, preset, _ordinalType) {
  try {
    if (preset === "ordinal") {
      return formatOrdinal(num, locale);
    }
    return new Intl.NumberFormat(locale, options).format(num);
  } catch {
    try {
      return new Intl.NumberFormat("en-US", {
        style: "decimal",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2
      }).format(num);
    } catch {
      return num.toString();
    }
  }
}
function DisplayNumber({ value, locale, preset, options, fallback = "N/A", className, dataAttributes, intlConfig, ordinalType = "ordinal" }) {
  const parsedNumber = parseNumber(value);
  if (parsedNumber === null) {
    return /* @__PURE__ */ jsx("span", {
      className,
      ...dataAttributes,
      children: fallback
    });
  }
  const effectiveLocale = getEffectiveLocale(locale, intlConfig);
  const effectiveOptions = getEffectiveNumberOptions(preset, options, intlConfig, ordinalType);
  const formattedNumber = formatNumberSafely(parsedNumber, effectiveLocale, effectiveOptions, preset, ordinalType);
  const allDataAttributes = {
    "data-value": parsedNumber.toString(),
    ...dataAttributes
  };
  return /* @__PURE__ */ jsx("span", {
    className,
    ...allDataAttributes,
    children: formattedNumber
  });
}
function getEffectiveCurrency(currency, locale, intlConfig) {
  if (currency && isValidCurrency(currency)) {
    return currency;
  }
  if (locale && isValidLocale(locale)) {
    return getCurrencyForLocale(locale);
  }
  if (intlConfig?.defaultCurrency) {
    return intlConfig.defaultCurrency;
  }
  return defaultIntlConfig.defaultCurrency;
}
function getEffectiveCurrencyOptions(preset, customOptions, intlConfig, currency, showSign, minimumFractionDigits, maximumFractionDigits) {
  let baseOptions;
  if (customOptions) {
    baseOptions = { ...customOptions };
  } else if (preset && currencyFormatConfigs[preset]) {
    baseOptions = { ...currencyFormatConfigs[preset] };
  } else {
    const defaultPreset = intlConfig?.currencyPresets?.default || defaultIntlConfig.currencyPresets.default;
    baseOptions = { ...currencyFormatConfigs[defaultPreset] };
  }
  if (currency && !baseOptions.currency) {
    baseOptions.currency = currency;
  }
  if (showSign) {
    baseOptions.signDisplay = "always";
  }
  if (minimumFractionDigits !== undefined) {
    baseOptions.minimumFractionDigits = minimumFractionDigits;
  }
  if (maximumFractionDigits !== undefined) {
    baseOptions.maximumFractionDigits = maximumFractionDigits;
  }
  return baseOptions;
}
function formatCurrencySafely(amount, locale, options) {
  try {
    return new Intl.NumberFormat(locale, options).format(amount);
  } catch {
    try {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: options.currency || "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(amount);
    } catch {
      const symbol = options.currency === "EUR" ? "€" : options.currency === "GBP" ? "£" : options.currency === "JPY" ? "¥" : "$";
      return `${symbol}${amount.toFixed(2)}`;
    }
  }
}
function DisplayCurrency({ amount, currency, locale, preset, options, fallback = "N/A", className, dataAttributes, intlConfig, showSign = false, minimumFractionDigits, maximumFractionDigits }) {
  const parsedAmount = parseAmount(amount);
  if (parsedAmount === null) {
    return /* @__PURE__ */ jsx("span", {
      className,
      ...dataAttributes,
      children: fallback
    });
  }
  const effectiveLocale = getEffectiveLocale(locale, intlConfig);
  const effectiveCurrency = getEffectiveCurrency(currency, effectiveLocale, intlConfig);
  const effectiveOptions = getEffectiveCurrencyOptions(preset, options, intlConfig, effectiveCurrency, showSign, minimumFractionDigits, maximumFractionDigits);
  const formattedCurrency = formatCurrencySafely(parsedAmount, effectiveLocale, effectiveOptions);
  const allDataAttributes = {
    "data-amount": parsedAmount.toString(),
    "data-currency": effectiveCurrency,
    "data-locale": effectiveLocale,
    ...dataAttributes
  };
  return /* @__PURE__ */ jsx("span", {
    className,
    ...allDataAttributes,
    children: formattedCurrency
  });
}

// src/impetus/intl/index.ts
var DateShort = (props) => DisplayDate({ ...props, preset: "short" });
var DateMedium = (props) => DisplayDate({ ...props, preset: "medium" });
var DateLong = (props) => DisplayDate({ ...props, preset: "long" });
var DateFull = (props) => DisplayDate({ ...props, preset: "full" });
var DateTime = (props) => DisplayDate({ ...props, preset: "datetime" });
var Timestamp = (props) => DisplayDate({ ...props, preset: "timestamp" });
var DateFormat = Object.assign(DisplayDate, {
  Short: DateShort,
  Medium: DateMedium,
  Long: DateLong,
  Full: DateFull,
  DateTime,
  Timestamp
});
var NumberInteger = (props) => DisplayNumber({ ...props, preset: "integer" });
var NumberDecimal = (props) => DisplayNumber({ ...props, preset: "decimal" });
var NumberPercent = (props) => DisplayNumber({ ...props, preset: "percent" });
var NumberCompact = (props) => DisplayNumber({ ...props, preset: "compact" });
var NumberScientific = (props) => DisplayNumber({ ...props, preset: "scientific" });
var NumberOrdinal = (props) => DisplayNumber({ ...props, preset: "ordinal" });
var NumberFormat = Object.assign(DisplayNumber, {
  Integer: NumberInteger,
  Decimal: NumberDecimal,
  Percent: NumberPercent,
  Compact: NumberCompact,
  Scientific: NumberScientific,
  Ordinal: NumberOrdinal
});
var CurrencyStandard = (props) => DisplayCurrency({ ...props, preset: "standard" });
var CurrencyAccounting = (props) => DisplayCurrency({ ...props, preset: "accounting" });
var CurrencyCompact = (props) => DisplayCurrency({ ...props, preset: "compact" });
var CurrencyName = (props) => DisplayCurrency({ ...props, preset: "name" });
var CurrencyCode = (props) => DisplayCurrency({ ...props, preset: "code" });
var Currency = Object.assign(DisplayCurrency, {
  Standard: CurrencyStandard,
  Accounting: CurrencyAccounting,
  Compact: CurrencyCompact,
  Name: CurrencyName,
  Code: CurrencyCode
});
var Money = ({ amount, locale, className, intlConfig, ...props }) => DisplayCurrency({
  amount,
  locale,
  className,
  intlConfig,
  preset: "standard",
  ...props
});
var Price = ({ amount, className, ...props }) => {
  const numericAmount = typeof amount === "string" ? Number.parseFloat(amount) : amount;
  const positiveAmount = typeof numericAmount === "number" && !Number.isNaN(numericAmount) ? Math.abs(numericAmount) : amount;
  return DisplayCurrency({
    amount: positiveAmount,
    className,
    preset: "standard",
    ...props
  });
};
export {
  defaultIntlConfig,
  Price,
  NumberFormat,
  NumberFormat as Number,
  Money,
  DateFormat,
  DateFormat as Date,
  Currency
};

//# debugId=36F52DD4901B54D364756E2164756E21
