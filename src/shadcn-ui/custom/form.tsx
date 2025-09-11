import clsx from 'clsx';
import React from 'react';
import { Label } from '../components/label';
import type { FormErrorProps, FormFieldContextValue, FormFieldProps } from './@types/form.types';

const FormFieldContext = React.createContext<FormFieldContextValue | null>(null);

export { Form } from 'react-router';

export function FormField({ label, description, error, className, children }: FormFieldProps) {
  const id = React.useId();
  const fieldId = `${id}-field`;
  const descriptionId = `${id}-description`;
  const errorId = `${id}-error`;
  const hasError = Boolean(error);

  const contextValue = React.useMemo(
    () => ({ fieldId, descriptionId, errorId, hasError }),
    [fieldId, descriptionId, errorId, hasError]
  );

  const enhancedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;

    // Check if this element has a name attribute (form control)
    if (child.props.name) {
      const ariaDescribedBy = [description && descriptionId, error && errorId].filter(Boolean).join(' ') || undefined;

      return React.cloneElement(child as React.ReactElement<any>, {
        id: child.props.id || fieldId,
        'aria-invalid': hasError || undefined,
        'aria-describedby': ariaDescribedBy,
        'data-error': hasError || undefined,
      });
    }

    // Non-form controls pass through unchanged
    return child;
  });

  return (
    <FormFieldContext.Provider value={contextValue}>
      <div className={className} data-slot="form-field">
        {label && (
          <Label htmlFor={fieldId} data-slot="form-label" data-error={hasError} className={clsx(hasError && 'text-destructive')} >
            {label}
          </Label>
        )}

        {enhancedChildren}

        {description && !error && (
          <p id={descriptionId} data-slot="form-description" className="text-muted-foreground text-sm" >
            {description}
          </p>
        )}

        {error && (
          <FormError id={errorId} error={error} />
        )}
      </div>
    </FormFieldContext.Provider>
  );
}

export function FormError({ error, className, id }: FormErrorProps) {
  if (!error) {
    return null;
  }

  return (
    <p id={id} data-slot="form-error" className={clsx('text-destructive text-sm', className)} >
      {error}
    </p>
  );
}

// Export hook for advanced use cases
export function useFormField() {
  const context = React.useContext(FormFieldContext);
  if (!context) {
    throw new Error('useFormField must be used within Form.Field');
  }
  return context;
}
