import React from 'react';
import { toast } from 'sonner';
import { Button } from '../components/button';
import { Switch } from '../components/switch';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '../custom/form';

export default function SwitchForm() {
  const [marketingEmails, setMarketingEmails] = React.useState(false);
  const [securityEmails, setSecurityEmails] = React.useState(true);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const marketing_emails = formData.has('marketing_emails');
    const security_emails = formData.has('security_emails');

    toast('You submitted the following values', {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify({ marketing_emails, security_emails }, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form onSubmit={handleSubmit} className="w-full space-y-6">
      <div>
        <h3 className="mb-4 font-medium text-lg">Email Notifications</h3>
        <div className="space-y-4">
          <FormField name="marketing_emails">
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Marketing emails</FormLabel>
                <FormDescription>Receive emails about new products, features, and more.</FormDescription>
              </div>
              <FormControl>
                <Switch name="marketing_emails" checked={marketingEmails} onCheckedChange={setMarketingEmails} />
              </FormControl>
            </FormItem>
          </FormField>
          <FormField name="security_emails">
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <FormLabel>Security emails</FormLabel>
                <FormDescription>Receive emails about your account security.</FormDescription>
              </div>
              <FormControl>
                <Switch name="security_emails" checked={securityEmails} onCheckedChange={setSecurityEmails} disabled aria-readonly />
              </FormControl>
            </FormItem>
          </FormField>
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
