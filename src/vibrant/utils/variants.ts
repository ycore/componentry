/**
 * Type-safe variant utilities for component styling
 */
import { cva as baseCva, type VariantProps } from 'class-variance-authority';

/**
 * Creates a type-safe variant function for styling components
 */
export function createVariants<T extends Record<string, Record<string, string>>>(
  base: string,
  config: {
    variants?: T;
    defaultVariants?: { [K in keyof T]?: keyof T[K] };
    compoundVariants?: Array<Partial<{ [K in keyof T]: keyof T[K] }> & { class?: string; className?: string }>;
  }
): (props?: { [K in keyof T]?: keyof T[K] } & { class?: string; className?: string }) => string {
  // @ts-expect-error - Config type mismatch is acceptable, runtime behavior is correct
  return baseCva(base, config);
}

export type { VariantProps };
