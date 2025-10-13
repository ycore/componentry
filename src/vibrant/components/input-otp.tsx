import clsx from 'clsx';
import { unstable_OneTimePasswordField as OneTimePasswordFieldPrimitive } from 'radix-ui';
import * as React from 'react';
import type { InputOtpSlotProps, OTPInputProps } from './@types/input-otp.types';

function InputOtp({ value, onValueChange, containerClassName, children, ...props }: OTPInputProps) {
  return (
    <OneTimePasswordFieldPrimitive.Root data-slot="input-otp" className={containerClassName} value={value} onValueChange={onValueChange} {...props}>
      {children}
    </OneTimePasswordFieldPrimitive.Root>
  );
}

function InputOtpGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return <div data-slot="input-otp-group" className={clsx('flex items-center gap-2', className)} {...props} />;
}

function InputOtpSlot({ className, index, ...props }: InputOtpSlotProps) {
  return (
    <OneTimePasswordFieldPrimitive.Input
      data-slot="input-otp-slot"
      data-index={index}
      className={clsx(
        'relative flex h-10 w-10 items-center justify-center border-2 border-input bg-background text-sm transition-all dark:border',
        'rounded-md',
        'caret-transparent selection:bg-transparent selection:text-foreground',
        'focus-visible:z-10 focus-visible:border-ring focus-visible:outline-none',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'aria-invalid:border-destructive',
        'text-center font-medium',
        className
      )}
      {...props}
    />
  );
}

function InputOtpHiddenInput(props: React.ComponentProps<typeof OneTimePasswordFieldPrimitive.HiddenInput>) {
  return <OneTimePasswordFieldPrimitive.HiddenInput data-slot="input-otp-hidden" {...props} />;
}

export { InputOtp, InputOtpGroup, InputOtpSlot, InputOtpHiddenInput };
