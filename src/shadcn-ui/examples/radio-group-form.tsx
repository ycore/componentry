import type React from 'react';
import { toast } from 'sonner';
import { Button } from '../components/button';
import { RadioGroup, RadioGroupItem } from '../components/radio-group';
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../custom/form';

export default function RadioGroupForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const type = formData.get('type');

    toast('You submitted the following values', {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify({ type }, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="w-2/3 space-y-6">
      {/* <FormField name="type">
        <FormItem className="space-y-3">
          <FormLabel>Notify me about...</FormLabel>
          <FormControl> */}
      <RadioGroup name="type" className="flex flex-col">
        {/* <FormItem className="flex items-center gap-3">
                <FormControl> */}
        <RadioGroupItem value="all" />
        {/* </FormControl>
                <FormLabel className="font-normal">All new messages</FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-3">
                <FormControl> */}
        <RadioGroupItem value="mentions" />
        {/* </FormControl>
                <FormLabel className="font-normal">Direct messages and mentions</FormLabel>
              </FormItem>
              <FormItem className="flex items-center gap-3">
                <FormControl> */}
        <RadioGroupItem value="none" />
        {/* </FormControl>
                <FormLabel className="font-normal">Nothing</FormLabel>
              </FormItem> */}
      </RadioGroup>
      {/* </FormControl>
          <FormMessage />
        </FormItem>
      </FormField> */}
      <Button type="submit">Submit</Button>
    </form>
  );
}
