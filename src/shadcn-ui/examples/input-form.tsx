import React from 'react';
import { toast } from 'sonner';
import { Button } from '../components/button';
import { Input } from '../components/input';
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../custom/form';

export default function InputForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');

    toast('You submitted the following values', {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify({ username }, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="w-2/3 space-y-6">
      <Input name="username" placeholder="shadcn" />
      {/* <FormField name="username">
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
          </FormControl>
          <FormDescription>This is your public display name.</FormDescription>
          <FormMessage />
        </FormItem>
      </FormField> */}
      <Button type="submit">Submit</Button>
    </form>
  );
}
