import React from 'react';
import { toast } from 'sonner';

import { Button } from '../components/button';
import { Checkbox } from '../components/checkbox';

// import { Form, FormField } from '../custom/form';

const items = [
  {
    id: 'recents',
    label: 'Recents',
  },
  {
    id: 'home',
    label: 'Home',
  },
  {
    id: 'applications',
    label: 'Applications',
  },
  {
    id: 'desktop',
    label: 'Desktop',
  },
  {
    id: 'downloads',
    label: 'Downloads',
  },
  {
    id: 'documents',
    label: 'Documents',
  },
] as const;

export default function CheckboxReactHookFormMultiple() {
  const [selectedItems, setSelectedItems] = React.useState(['recents', 'home']);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const items = formData.getAll('items');

    toast('You submitted the following values', {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify({ items }, null, 2)}</code>
        </pre>
      ),
    });
  }

  function handleCheckboxChange(itemId: string, checked: boolean) {
    if (checked) {
      setSelectedItems(prev => [...prev, itemId]);
    } else {
      setSelectedItems(prev => prev.filter(id => id !== itemId));
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* <FormField name="items"> */}
      <div className="mb-4">
        <div className="text-base">Sidebar</div>
        <div>Select the items you want to display in the sidebar.</div>
      </div>
      {items.map(item => (
        <div key={item.id} className="flex flex-row items-center gap-2">
          <Checkbox name="items" value={item.id} checked={selectedItems.includes(item.id)} onCheckedChange={checked => handleCheckboxChange(item.id, !!checked)} />
          <div className="font-normal text-sm">{item.label}</div>
        </div>
      ))}
      {/* </FormField> */}
      <Button type="submit">Submit</Button>
    </form>
  );
}
