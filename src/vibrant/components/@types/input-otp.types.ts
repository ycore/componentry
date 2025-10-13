import type { unstable_OneTimePasswordField as OneTimePasswordFieldPrimitive } from 'radix-ui';
import type * as React from 'react';

/**
 * Props for the main OTPInput component (Root)
 * Extends radix-ui's OneTimePasswordField.Root props
 */
export interface OTPInputProps extends React.ComponentProps<typeof OneTimePasswordFieldPrimitive.Root> {
  /**
   * Additional className for the container
   */
  containerClassName?: string;
}

/**
 * Props for the InputOtpSlot component (individual input)
 * Extends radix-ui's OneTimePasswordField.Input props
 */
export interface InputOtpSlotProps extends Omit<React.ComponentProps<typeof OneTimePasswordFieldPrimitive.Input>, 'data-index'> {
  /**
   * Index of this slot in the OTP sequence
   */
  index: number;
}
