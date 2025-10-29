import clsx from 'clsx';
import React from 'react';

function Table({ className, ...props }: React.ComponentProps<'table'>): React.JSX.Element | null {
  return (
    <div data-slot="table-container" className="relative w-full overflow-x-auto">
      <table data-slot="table" className={clsx('w-full caption-bottom text-sm', className)} {...props} />
    </div>
  );
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>): React.JSX.Element | null {
  return <thead data-slot="table-header" className={clsx('[&_tr]:border-b', className)} {...props} />;
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>): React.JSX.Element | null {
  return <tbody data-slot="table-body" className={clsx('[&_tr:last-child]:border-0', className)} {...props} />;
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>): React.JSX.Element | null {
  return <tfoot data-slot="table-footer" className={clsx('border-t bg-muted/50 font-medium [&>tr]:last:border-b-0', className)} {...props} />;
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>): React.JSX.Element | null {
  return <tr data-slot="table-row" className={clsx('border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted', className)} {...props} />;
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>): React.JSX.Element | null {
  return <th data-slot="table-head" className={clsx('h-10 whitespace-nowrap px-2 text-left align-middle font-medium text-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className)} {...props} />;
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>): React.JSX.Element | null {
  return <td data-slot="table-cell" className={clsx('whitespace-nowrap p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className)} {...props} />;
}

function TableCaption({ className, ...props }: React.ComponentProps<'caption'>): React.JSX.Element | null {
  return <caption data-slot="table-caption" className={clsx('mt-4 text-muted-foreground text-sm', className)} {...props} />;
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
