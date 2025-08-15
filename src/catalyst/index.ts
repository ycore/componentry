import { Alert as AlertComponent } from './alert';
import * as AlertComponents from './alert';
export const Alert = Object.assign(AlertComponent, {
  Title: AlertComponents.AlertTitle,
  Description: AlertComponents.AlertDescription,
  Body: AlertComponents.AlertBody,
  Actions: AlertComponents.AlertActions,
});

export { AuthLayout } from './auth-layout';

import { Avatar as AvatarComponent } from './avatar';
import * as AvatarComponents from './avatar';
export const Avatar = Object.assign(AvatarComponent, {
  Button: AvatarComponents.AvatarButton,
});

import { Badge as BadgeComponent } from './badge';
import * as BadgeComponents from './badge';
export const Badge = Object.assign(BadgeComponent, {
  Button: BadgeComponents.BadgeButton,
});

import { Button as ButtonComponent } from './button';
import * as ButtonComponents from './button';
export const Button = Object.assign(ButtonComponent, {
  TouchTarget: ButtonComponents.TouchTarget,
});

import { Checkbox as CheckboxComponent } from './checkbox';
import * as CheckboxComponents from './checkbox';
export const Checkbox = Object.assign(CheckboxComponent, {
  Field: CheckboxComponents.CheckboxField,
  Group: CheckboxComponents.CheckboxGroup,
});

import { Combobox as ComboboxComponent } from './combobox';
import * as ComboboxComponents from './combobox';
export const Combobox = Object.assign(ComboboxComponent, {
  Option: ComboboxComponents.ComboboxOption,
  Label: ComboboxComponents.ComboboxLabel,
  Description: ComboboxComponents.ComboboxDescription,
});

import { DescriptionList as DescriptionListComponent } from './description-list';
import * as DescriptionListComponents from './description-list';
export const DescriptionList = Object.assign(DescriptionListComponent, {
  Term: DescriptionListComponents.DescriptionTerm,
  Details: DescriptionListComponents.DescriptionDetails,
});

import { Dialog as DialogComponent } from './dialog';
import * as DialogComponents from './dialog';
export const Dialog = Object.assign(DialogComponent, {
  Title: DialogComponents.DialogTitle,
  Description: DialogComponents.DialogDescription,
  Body: DialogComponents.DialogBody,
  Actions: DialogComponents.DialogActions,
});

export { Divider } from './divider';

import { Dropdown as DropdownComponent } from './dropdown';
import * as DropdownComponents from './dropdown';
export const Dropdown = Object.assign(DropdownComponent, {
  Button: DropdownComponents.DropdownButton,
  Menu: DropdownComponents.DropdownMenu,
  Item: DropdownComponents.DropdownItem,
  Header: DropdownComponents.DropdownHeader,
  Section: DropdownComponents.DropdownSection,
  Heading: DropdownComponents.DropdownHeading,
  Divider: DropdownComponents.DropdownDivider,
  Label: DropdownComponents.DropdownLabel,
  Description: DropdownComponents.DropdownDescription,
  Shortcut: DropdownComponents.DropdownShortcut,
});

import { Field as FieldComponent } from './fieldset';
import * as FieldComponents from './fieldset';
export const Field = Object.assign(FieldComponent, {
  Legend: FieldComponents.Legend,
  Group: FieldComponents.FieldGroup,
  Set: FieldComponents.Fieldset,
  Label: FieldComponents.Label,
  Description: FieldComponents.Description,
  ErrorMessage: FieldComponents.ErrorMessage,
});
export { Label } from './fieldset';
export { ErrorMessage } from './fieldset';

import { Heading as HeadingComponent } from './heading';
import * as HeadingComponents from './heading';
export const Heading = Object.assign(HeadingComponent, {
  Sub: HeadingComponents.Subheading,
});

import { Input as InputComponent } from './input';
import * as InputComponents from './input';
export const Input = Object.assign(InputComponent, {
  Group: InputComponents.InputGroup,
});

export { Link } from './link';

import { Listbox as ListboxComponent } from './listbox';
import * as ListboxComponents from './listbox';
export const Listbox = Object.assign(ListboxComponent, {
  Option: ListboxComponents.ListboxOption,
  Label: ListboxComponents.ListboxLabel,
  Description: ListboxComponents.ListboxDescription,
});

import { Navbar as NavbarComponent } from './navbar';
import * as NavbarComponents from './navbar';
export const Navbar = Object.assign(NavbarComponent, {
  Divider: NavbarComponents.NavbarDivider,
  Section: NavbarComponents.NavbarSection,
  Spacer: NavbarComponents.NavbarSpacer,
  Item: NavbarComponents.NavbarItem,
  Label: NavbarComponents.NavbarLabel,
});

import { Pagination as PaginationComponent } from './pagination';
import * as PaginationComponents from './pagination';
export const Pagination = Object.assign(PaginationComponent, {
  Previous: PaginationComponents.PaginationPrevious,
  Next: PaginationComponents.PaginationNext,
  List: PaginationComponents.PaginationList,
  Page: PaginationComponents.PaginationPage,
  Gap: PaginationComponents.PaginationGap,
});

import { Radio as RadioComponent } from './radio';
import * as RadioComponents from './radio';
export const Radio = Object.assign(RadioComponent, {
  Field: RadioComponents.RadioField,
  Group: RadioComponents.RadioGroup,
});

export { Select } from './select';

export { SidebarLayout } from './sidebar-layout';

import { Sidebar as SidebarComponent } from './sidebar';
import * as SidebarComponents from './sidebar';
export const Sidebar = Object.assign(SidebarComponent, {
  Header: SidebarComponents.SidebarHeader,
  Body: SidebarComponents.SidebarBody,
  Footer: SidebarComponents.SidebarFooter,
  Section: SidebarComponents.SidebarSection,
  Divider: SidebarComponents.SidebarDivider,
  Spacer: SidebarComponents.SidebarSpacer,
  Heading: SidebarComponents.SidebarHeading,
  Item: SidebarComponents.SidebarItem,
  Label: SidebarComponents.SidebarLabel,
});

export { StackedLayout } from './stacked-layout';

import { Switch as SwitchComponent } from './switch';
import * as SwitchComponents from './switch';
export const Switch = Object.assign(SwitchComponent, {
  Field: SwitchComponents.SwitchField,
  Group: SwitchComponents.SwitchGroup,
});

import { Table as TableComponent } from './table';
import * as TableComponents from './table';
export const Table = Object.assign(TableComponent, {
  Head: TableComponents.TableHead,
  Body: TableComponents.TableBody,
  Row: TableComponents.TableRow,
  Header: TableComponents.TableHeader,
  Cell: TableComponents.TableCell,
});

import { Text as TextComponent } from './text';
import * as TextComponents from './text';
export const Text = Object.assign(TextComponent, {
  Link: TextComponents.TextLink,
  Strong: TextComponents.Strong,
  Code: TextComponents.Code,
});

export { Textarea } from './textarea';
