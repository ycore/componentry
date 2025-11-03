import React from 'react';
import { Button } from '../components/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/card';
import { Input } from '../components/input';
import { Label } from '../components/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/tabs';

export default function TabsDemo(): React.JSX.Element {
  const nameId = React.useId();
  const usernameId = React.useId();
  const currentPasswordId = React.useId();
  const newPasswordId = React.useId();

  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>Make changes to your account here. Click save when you&apos;re done.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor={nameId}>Name</Label>
                <Input id={nameId} defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor={usernameId}>Username</Label>
                <Input id={usernameId} defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password here. After saving, you&apos;ll be logged out.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor={currentPasswordId}>Current password</Label>
                <Input id={currentPasswordId} type="password" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor={newPasswordId}>New password</Label>
                <Input id={newPasswordId} type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
