import clsx from 'clsx';
import { Tabs as TabsPrimitive } from 'radix-ui';
import React from 'react';

function Tabs({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Root>): React.JSX.Element | null {
  return <TabsPrimitive.Root data-slot="tabs" className={clsx('flex flex-col gap-2', className)} {...props} />;
}

function TabsList({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>): React.JSX.Element | null {
  return <TabsPrimitive.List data-slot="tabs-list" className={clsx('inline-flex h-9 w-fit items-center justify-center rounded-lg bg-muted p-[3px] text-muted-foreground', className)} {...props} />;
}

function TabsTrigger({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Trigger>): React.JSX.Element | null {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={clsx(
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-md border border-transparent px-2 py-1 font-medium text-foreground text-sm transition-[color,box-shadow] focus-visible:border-ring focus-visible:outline-1 focus-visible:outline-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:shadow-sm dark:text-muted-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.Content>): React.JSX.Element | null {
  return <TabsPrimitive.Content data-slot="tabs-content" className={clsx('flex-1 outline-none', className)} {...props} />;
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
