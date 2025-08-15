import type React from 'react';
import { toast } from 'sonner';

import { Button } from '../components/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../custom/form';
import { Link } from '../custom/link';

export default function SelectForm({ spriteUrl }: { spriteUrl: string }) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');

    toast('You submitted the following values', {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify({ email }, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form onSubmit={handleSubmit} className="w-2/3 space-y-6">
      <FormField name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <Select name="email">
            <FormControl>
              <SelectTrigger spriteUrl={spriteUrl}>
                <SelectValue placeholder="Select a verified email to display" />
              </SelectTrigger>
            </FormControl>
            <SelectContent spriteUrl={spriteUrl}>
              <SelectItem spriteUrl={spriteUrl} value="joe@example.com">
                joe@example.com
              </SelectItem>
              <SelectItem spriteUrl={spriteUrl} value="joe@google.com">
                joe@google.com
              </SelectItem>
              <SelectItem spriteUrl={spriteUrl} value="joe@support.com">
                joe@support.com
              </SelectItem>
            </SelectContent>
          </Select>
          <FormDescription>
            You can manage email addresses in your <Link href="/examples/forms">email settings</Link>.
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
