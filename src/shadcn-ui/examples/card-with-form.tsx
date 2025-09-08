import React from 'react';
import { Button } from '../components/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/card';
import { Input } from '../components/input';
import { Label } from '../components/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/select';

export default function CardWithForm({ spriteUrl }: { spriteUrl: string }) {
  const nameId = React.useId();
  const frameworkId = React.useId();
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-6">
            <div className="flex flex-col gap-3">
              <Label htmlFor={nameId}>Name</Label>
              <Input id={nameId} placeholder="Name of your project" />
            </div>
            <div className="flex flex-col gap-3">
              <Label htmlFor={frameworkId}>Framework</Label>
              <Select>
                <SelectTrigger spriteUrl={spriteUrl} id={frameworkId} className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent spriteUrl={spriteUrl} position="popper">
                  <SelectItem spriteUrl={spriteUrl} value="next">
                    Next.js
                  </SelectItem>
                  <SelectItem spriteUrl={spriteUrl} value="sveltekit">
                    SvelteKit
                  </SelectItem>
                  <SelectItem spriteUrl={spriteUrl} value="astro">
                    Astro
                  </SelectItem>
                  <SelectItem spriteUrl={spriteUrl} value="nuxt">
                    Nuxt.js
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  );
}
