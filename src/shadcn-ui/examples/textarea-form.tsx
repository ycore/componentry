import React from 'react';
import { toast } from 'sonner';

import { Button } from '../components/button';
import { Textarea } from '../components/textarea';
// import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../custom/form';

export default function TextareaForm() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const bio = formData.get('bio');

    toast('You submitted the following values', {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify({ bio }, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="w-2/3 space-y-6">
      {/* <FormField name="bio">
        <FormItem>
          <FormLabel>Bio</FormLabel>
          <FormControl> */}
      <Textarea name="bio" placeholder="Tell us a little bit about yourself" className="resize-none" />
      {/* </FormControl>
          <FormDescription>
            You can <span>@mention</span> other users and organizations.
          </FormDescription>
          <FormMessage />
        </FormItem>
      </FormField> */}
      <Button type="submit">Submit</Button>
    </form>
  );
}
