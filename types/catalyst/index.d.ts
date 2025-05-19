import { Alert as AlertComponent } from './alert';
import * as AlertComponents from './alert';
export declare const Alert: typeof AlertComponent & {
    Title: typeof AlertComponents.AlertTitle;
    Description: typeof AlertComponents.AlertDescription;
    Body: typeof AlertComponents.AlertBody;
    Actions: typeof AlertComponents.AlertActions;
};
export { AuthLayout } from './auth-layout';
import { Avatar as AvatarComponent } from './avatar';
export declare const Avatar: typeof AvatarComponent & {
    Button: import("react").ForwardRefExoticComponent<(import("./@types/avatar.types").AvatarProps & (Omit<import("@headlessui/react").ButtonProps<"button">, "className" | "as"> | Omit<Omit<{
        href: string | import("react-router").LinkProps["to"];
    } & Omit<import("react-router").LinkProps, "to"> & import("react").RefAttributes<HTMLAnchorElement>, "ref">, "className">)) & import("react").RefAttributes<HTMLElement>>;
};
import { Badge as BadgeComponent } from './badge';
export declare const Badge: typeof BadgeComponent & {
    Button: import("react").ForwardRefExoticComponent<(import("./@types/badge.types").BadgeProps & ({
        className?: string;
        children: import("react").ReactNode;
    } & (Omit<import("@headlessui/react").ButtonProps<"button">, "className" | "as"> | Omit<Omit<{
        href: string | import("react-router").LinkProps["to"];
    } & Omit<import("react-router").LinkProps, "to"> & import("react").RefAttributes<HTMLAnchorElement>, "ref">, "className">))) & import("react").RefAttributes<HTMLElement>>;
};
import * as ButtonComponents from './button';
export declare const Button: import("react").ForwardRefExoticComponent<import("./@types/button.types").ButtonProps & import("react").RefAttributes<HTMLElement>> & {
    TouchTarget: typeof ButtonComponents.TouchTarget;
};
import { CheckboxGroup as CheckboxGroupComponent } from './checkbox';
import * as CheckboxGroupComponents from './checkbox';
export declare const CheckboxGroup: typeof CheckboxGroupComponent & {
    CheckboxField: typeof CheckboxGroupComponents.CheckboxField;
    Checkbox: typeof CheckboxGroupComponents.Checkbox;
};
import { Combobox as ComboboxComponent } from './combobox';
import * as ComboboxComponents from './combobox';
export declare const Combobox: typeof ComboboxComponent & {
    Option: typeof ComboboxComponents.ComboboxOption;
    Label: typeof ComboboxComponents.ComboboxLabel;
    Description: typeof ComboboxComponents.ComboboxDescription;
};
import { DescriptionList as DescriptionListComponent } from './description-list';
import * as DescriptionListComponents from './description-list';
export declare const DescriptionList: typeof DescriptionListComponent & {
    Term: typeof DescriptionListComponents.DescriptionTerm;
    Details: typeof DescriptionListComponents.DescriptionDetails;
};
import { Dialog as DialogComponent } from './dialog';
import * as DialogComponents from './dialog';
export declare const Dialog: typeof DialogComponent & {
    Title: typeof DialogComponents.DialogTitle;
    Description: typeof DialogComponents.DialogDescription;
    Body: typeof DialogComponents.DialogBody;
    Actions: typeof DialogComponents.DialogActions;
};
export { Divider } from './divider';
import { Dropdown as DropdownComponent } from './dropdown';
import * as DropdownComponents from './dropdown';
export declare const Dropdown: typeof DropdownComponent & {
    Button: typeof DropdownComponents.DropdownButton;
    Menu: typeof DropdownComponents.DropdownMenu;
    Item: typeof DropdownComponents.DropdownItem;
    Header: typeof DropdownComponents.DropdownHeader;
    Section: typeof DropdownComponents.DropdownSection;
    Heading: typeof DropdownComponents.DropdownHeading;
    Divider: typeof DropdownComponents.DropdownDivider;
    Label: typeof DropdownComponents.DropdownLabel;
    Description: typeof DropdownComponents.DropdownDescription;
    Shortcut: typeof DropdownComponents.DropdownShortcut;
};
import { Fieldset as FieldsetComponent } from './fieldset';
import * as FieldsetComponents from './fieldset';
export declare const Fieldset: typeof FieldsetComponent & {
    Legend: typeof FieldsetComponents.Legend;
    FieldGroup: typeof FieldsetComponents.FieldGroup;
    Field: typeof FieldsetComponents.Field;
    Label: typeof FieldsetComponents.Label;
    Description: typeof FieldsetComponents.Description;
    ErrorMessage: typeof FieldsetComponents.ErrorMessage;
};
export { Field } from './fieldset';
export { Label } from './fieldset';
export { ErrorMessage } from './fieldset';
import { Heading as HeadingComponent } from './heading';
import * as HeadingComponents from './heading';
export declare const Heading: typeof HeadingComponent & {
    Subheading: typeof HeadingComponents.Subheading;
};
import { InputGroup as InputGroupComponent } from './input';
export declare const InputGroup: typeof InputGroupComponent & {
    Input: import("react").ForwardRefExoticComponent<{
        className?: string;
        type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url" | import("./@types/input.types").DateType;
    } & Omit<import("@headlessui/react").InputProps<"input">, "className" | "as"> & import("react").RefAttributes<HTMLInputElement>>;
};
export { Input } from './input';
export { Link } from './link';
import { Listbox as ListboxComponent } from './listbox';
import * as ListboxComponents from './listbox';
export declare const Listbox: typeof ListboxComponent & {
    Option: typeof ListboxComponents.ListboxOption;
    Label: typeof ListboxComponents.ListboxLabel;
    Description: typeof ListboxComponents.ListboxDescription;
};
import { Navbar as NavbarComponent } from './navbar';
import * as NavbarComponents from './navbar';
export declare const Navbar: typeof NavbarComponent & {
    Divider: typeof NavbarComponents.NavbarDivider;
    Section: typeof NavbarComponents.NavbarSection;
    Spacer: typeof NavbarComponents.NavbarSpacer;
    Item: import("react").ForwardRefExoticComponent<({
        current?: boolean;
        className?: string;
        children: import("react").ReactNode;
    } & (Omit<import("@headlessui/react").ButtonProps<"button">, "className" | "as"> | Omit<Omit<{
        href: string | import("react-router").LinkProps["to"];
    } & Omit<import("react-router").LinkProps, "to"> & import("react").RefAttributes<HTMLAnchorElement>, "ref">, "className">)) & import("react").RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
    Label: typeof NavbarComponents.NavbarLabel;
};
import { Pagination as PaginationComponent } from './pagination';
import * as PaginationComponents from './pagination';
export declare const Pagination: typeof PaginationComponent & {
    Previous: typeof PaginationComponents.PaginationPrevious;
    Next: typeof PaginationComponents.PaginationNext;
    List: typeof PaginationComponents.PaginationList;
    Page: typeof PaginationComponents.PaginationPage;
    Gap: typeof PaginationComponents.PaginationGap;
};
import { RadioGroup as RadioGroupComponent } from './radio';
import * as RadioGroupComponents from './radio';
export declare const RadioGroup: typeof RadioGroupComponent & {
    RadioField: typeof RadioGroupComponents.RadioField;
    Radio: typeof RadioGroupComponents.Radio;
};
export { Select } from './select';
export { SidebarLayout } from './sidebar-layout';
import { Sidebar as SidebarComponent } from './sidebar';
import * as SidebarComponents from './sidebar';
export declare const Sidebar: typeof SidebarComponent & {
    Header: typeof SidebarComponents.SidebarHeader;
    Body: typeof SidebarComponents.SidebarBody;
    Footer: typeof SidebarComponents.SidebarFooter;
    Section: typeof SidebarComponents.SidebarSection;
    Divider: typeof SidebarComponents.SidebarDivider;
    Spacer: typeof SidebarComponents.SidebarSpacer;
    Heading: typeof SidebarComponents.SidebarHeading;
    Item: import("react").ForwardRefExoticComponent<({
        current?: boolean;
        className?: string;
        children: React.ReactNode;
    } & (Omit<import("@headlessui/react").ButtonProps<"button">, "className" | "as"> | Omit<import("@headlessui/react").ButtonProps<import("react").ForwardRefExoticComponent<{
        href: string | import("react-router").LinkProps["to"];
    } & Omit<import("react-router").LinkProps, "to"> & import("react").RefAttributes<HTMLAnchorElement>>>, "className" | "as">)) & import("react").RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
    Label: typeof SidebarComponents.SidebarLabel;
};
export { StackedLayout } from './stacked-layout';
import { SwitchGroup as SwitchGroupComponent } from './switch';
import * as SwitchGroupComponents from './switch';
export declare const SwitchGroup: typeof SwitchGroupComponent & {
    SwitchField: typeof SwitchGroupComponents.SwitchField;
    Switch: typeof SwitchGroupComponents.Switch;
};
import { Table as TableComponent } from './table';
import * as TableComponents from './table';
export declare const Table: typeof TableComponent & {
    Head: typeof TableComponents.TableHead;
    Body: typeof TableComponents.TableBody;
    Row: typeof TableComponents.TableRow;
    Header: typeof TableComponents.TableHeader;
    Cell: typeof TableComponents.TableCell;
};
import { Text as TextComponent } from './text';
import * as TextComponents from './text';
export declare const Text: typeof TextComponent & {
    Link: typeof TextComponents.TextLink;
    Strong: typeof TextComponents.Strong;
    Code: typeof TextComponents.Code;
};
export { Textarea } from './textarea';
//# sourceMappingURL=index.d.ts.map