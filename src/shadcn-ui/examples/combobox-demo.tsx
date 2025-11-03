import clsx from 'clsx';
import React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../../vibrant/@types/lucide-sprites';
import { Button } from '../components/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../components/command';
import { Popover, PopoverContent, PopoverTrigger } from '../components/popover';

const frameworks = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

export default function ComboboxDemo({ spriteUrl }: { spriteUrl: string }): React.JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
          {value ? frameworks.find(framework => framework.value === value)?.label : 'Select framework...'}
          <SpriteIcon<IconName> iconId="ChevronsUpDown" className="opacity-50" spriteUrl={spriteUrl} />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map(framework => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={currentValue => {
                    setValue(currentValue === value ? '' : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <SpriteIcon<IconName> iconId="Check" className={clsx('ml-auto', value === framework.value ? 'opacity-100' : 'opacity-0')} spriteUrl={spriteUrl} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
