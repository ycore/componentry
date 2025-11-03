import React from 'react';
import { toast } from 'sonner';
import { Button } from '../components/button';
import { Label } from '../components/label';
import { Switch } from '../components/switch';
// import { Form, div, FormDescription, div, div, Label } from '../custom/form';

export default function SwitchForm(): React.JSX.Element {
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
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div>
        <h3 className="mb-4 font-medium text-lg">Email Notifications</h3>
        <div className="space-y-4">
          <div>
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <Label>Marketing emails</Label>
              </div>
              <div>
                <Switch name="marketing_emails" checked={marketingEmails} onCheckedChange={setMarketingEmails} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
              <div className="space-y-0.5">
                <Label>Security emails</Label>
              </div>
              <div>
                <Switch name="security_emails" checked={securityEmails} onCheckedChange={setSecurityEmails} disabled aria-readonly />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}
