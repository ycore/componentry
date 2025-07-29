import clsx from 'clsx';
import * as React from 'react';
import { toast } from 'sonner';

import { createSpriteIcon } from '../../images/SpriteIcon';
import type { IconName } from '../@types/lucide-sprites';
import svgSpriteUrl from '../assets/lucide-sprites.svg?url';
import { Button } from '../components/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../components/command';
import { Popover, PopoverContent, PopoverTrigger } from '../components/popover';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../custom/form';

const SpriteIcon = createSpriteIcon<IconName>(svgSpriteUrl);

const languages = [
  { label: 'English', value: 'en' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Russian', value: 'ru' },
  { label: 'Japanese', value: 'ja' },
  { label: 'Korean', value: 'ko' },
  { label: 'Chinese', value: 'zh' },
] as const;

export default function ComboboxForm() {
  const [selectedLanguage, setSelectedLanguage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const language = formData.get('language');

    toast('You submitted the following values', {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify({ language }, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form onSubmit={handleSubmit} className="space-y-6">
      <FormField name="language">
        <FormItem className="flex flex-col">
          <FormLabel>Language</FormLabel>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <FormControl>
                <Button variant="outline" role="combobox" aria-expanded={open} className={clsx('w-[200px] justify-between', !selectedLanguage && 'text-muted-foreground')}>
                  {selectedLanguage ? languages.find(language => language.value === selectedLanguage)?.label : 'Select language'}
                  <SpriteIcon id="ChevronsUpDown" className="opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search language..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No language found.</CommandEmpty>
                  <CommandGroup>
                    {languages.map(language => (
                      <CommandItem
                        value={language.label}
                        key={language.value}
                        onSelect={() => {
                          setSelectedLanguage(language.value);
                          setOpen(false);
                        }}
                      >
                        {language.label}
                        <SpriteIcon id="Check" className={clsx('ml-auto', language.value === selectedLanguage ? 'opacity-100' : 'opacity-0')} />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <input type="hidden" name="language" value={selectedLanguage} />
          <FormDescription>This is the language that will be used in the dashboard.</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
