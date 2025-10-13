import React from 'react';
import { toast } from 'sonner';

import { Button } from '../components/button';
import { Checkbox } from '../components/checkbox';

// import { Form, FormField } from '../custom/form';
// import { Link } from '../../vibrant/components/link';

type CheckedState = boolean | 'indeterminate';

export default function CheckboxReactHookFormSingle() {
  // const [mobileEnabled, setMobileEnabled] = React.useState(true);
  const [mobileEnabled, setMobileEnabled] = React.useState<CheckedState>(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const mobile = formData.has('mobile');

    toast('You submitted the following values', {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify({ mobile }, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4">
      {/* <FormField name="mobile"> */}
      <Checkbox name="mobile" checked={mobileEnabled} onCheckedChange={setMobileEnabled} />
      {/* <FormItem className="flex flex-row items-start gap-2 rounded-md border p-4 shadow-sm">
          <FormControl>
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>Use different settings for my mobile devices</FormLabel>
            <FormDescription>
              You can manage your mobile notifications in the <Link href="/examples/forms">mobile settings</Link> page.
            </FormDescription>
          </div>
        </FormItem> */}
      {/* </FormField> */}
      <Button type="submit">Submit</Button>
    </form>
  );
}
