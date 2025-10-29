import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { Label } from './label';
import { Separator } from './separator';

function FieldSet({ className, ...props }: React.ComponentProps<'fieldset'>): React.JSX.Element | null {
  return <fieldset data-slot="field-set" className={clsx('flex flex-col gap-6', 'has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3', className)} {...props} />;
}

function FieldLegend({ className, variant = 'legend', ...props }: React.ComponentProps<'legend'> & { variant?: 'legend' | 'label' }): React.JSX.Element | null {
  return <legend data-slot="field-legend" data-variant={variant} className={clsx('mb-3 font-medium', 'data-[variant=legend]:text-base', 'data-[variant=label]:text-sm', className)} {...props} />;
}

function FieldGroup({ className, ...props }: React.ComponentProps<'div'>): React.JSX.Element | null {
  return <div data-slot="field-group" className={clsx('group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4', className)} {...props} />;
}

const fieldVariants = cva('group/field flex w-full gap-3 data-[invalid=true]:text-destructive', {
  variants: {
    orientation: {
      vertical: ['flex-col [&>*]:w-full [&>.sr-only]:w-auto'],
      horizontal: ['flex-row items-center', '[&>[data-slot=field-label]]:flex-auto', 'has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px'],
      responsive: [
        'flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto',
        '@md/field-group:[&>[data-slot=field-label]]:flex-auto',
        '@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
      ],
    },
  },
  defaultVariants: {
    orientation: 'vertical',
  },
});

function Field({ className, orientation = 'vertical', ...props }: React.ComponentProps<'div'> & VariantProps<typeof fieldVariants>): React.JSX.Element | null {
  return <div role="group" data-slot="field" data-orientation={orientation} className={clsx(fieldVariants({ orientation }), className)} {...props} />;
}

function FieldContent({ className, ...props }: React.ComponentProps<'div'>): React.JSX.Element | null {
  return <div data-slot="field-content" className={clsx('group/field-content flex flex-1 flex-col gap-1.5 leading-snug', className)} {...props} />;
}

function FieldLabel({ className, ...props }: React.ComponentProps<typeof Label>): React.JSX.Element | null {
  return (
    <Label
      data-slot="field-label"
      className={clsx(
        'group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50',
        'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4',
        'has-data-[state=checked]:border-primary has-data-[state=checked]:bg-primary/5 dark:has-data-[state=checked]:bg-primary/10',
        className
      )}
      {...props}
    />
  );
}

function FieldTitle({ className, ...props }: React.ComponentProps<'div'>): React.JSX.Element | null {
  return <div data-slot="field-label" className={clsx('flex w-fit items-center gap-2 font-medium text-sm leading-snug group-data-[disabled=true]/field:opacity-50', className)} {...props} />;
}

function FieldDescription({ className, ...props }: React.ComponentProps<'p'>): React.JSX.Element | null {
  return (
    <p
      data-slot="field-description"
      className={clsx(
        'font-normal text-muted-foreground text-sm leading-normal group-has-[[data-orientation=horizontal]]/field:text-balance',
        'nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5 last:mt-0',
        '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
        className
      )}
      {...props}
    />
  );
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  children?: React.ReactNode;
}): React.JSX.Element | null {
  return (
    <div data-slot="field-separator" data-content={!!children} className={clsx('-my-2 group-data-[variant=outline]/field-group:-mb-2 relative h-5 text-sm', className)} {...props}>
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span className="relative mx-auto block w-fit bg-background px-2 text-muted-foreground" data-slot="field-separator-content">
          {children}
        </span>
      )}
    </div>
  );
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<'div'> & {
  errors?: Array<{ message?: string } | undefined>;
}): React.JSX.Element | null {
  const content = useMemo(() => {
    if (children) {
      return children;
    }

    if (!errors?.length) {
      return null;
    }

    const uniqueErrors = [...new Map(errors.map(error => [error?.message, error])).values()];

    if (uniqueErrors?.length == 1) {
      return uniqueErrors[0]?.message;
    }

    return <ul className="ml-4 flex list-disc flex-col gap-1">{uniqueErrors.map((error, index) => error?.message && <li key={index}>{error.message}</li>)}</ul>;
  }, [children, errors]);

  if (!content) {
    return null;
  }

  return (
    <div role="alert" data-slot="field-error" className={clsx('font-normal text-destructive text-sm', className)} {...props}>
      {content}
    </div>
  );
}

export { Field, FieldLabel, FieldDescription, FieldError, FieldGroup, FieldLegend, FieldSeparator, FieldSet, FieldContent, FieldTitle };
