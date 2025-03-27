import * as AlertComponents from './alert.js';
export declare const Alert: typeof AlertComponents.Alert & {
    Title: typeof AlertComponents.AlertTitle;
    Description: typeof AlertComponents.AlertDescription;
    Body: typeof AlertComponents.AlertBody;
    Actions: typeof AlertComponents.AlertActions;
};
import * as AvatarComponents from './avatar.js';
export declare const Avatar: typeof AvatarComponents.Avatar & {
    Button: import("react").ForwardRefExoticComponent<({
        src?: string | null;
        square?: boolean;
        initials?: string;
        alt?: string;
        className?: string;
    } & (Omit<import("@headlessui/react").ButtonProps<"button">, "className" | "as"> | Omit<Omit<{
        href: string | import("react-router").LinkProps["to"];
    } & Omit<import("react-router").LinkProps, "to"> & import("react").RefAttributes<HTMLAnchorElement>, "ref">, "className">)) & import("react").RefAttributes<HTMLElement>>;
};
import * as BadgeComponents from './badge.js';
export declare const Badge: typeof BadgeComponents.Badge & {
    Button: import("react").ForwardRefExoticComponent<({
        color?: "zinc" | "indigo" | "cyan" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "sky" | "blue" | "violet" | "purple" | "fuchsia" | "pink" | "rose";
    } & ({
        className?: string;
        children: React.ReactNode;
    } & (Omit<import("@headlessui/react").ButtonProps<"button">, "className" | "as"> | Omit<Omit<{
        href: string | import("react-router").LinkProps["to"];
    } & Omit<import("react-router").LinkProps, "to"> & import("react").RefAttributes<HTMLAnchorElement>, "ref">, "className">))) & import("react").RefAttributes<HTMLElement>>;
};
import * as ButtonComponents from './button.js';
export declare const Button: import("react").ForwardRefExoticComponent<(({
    color?: "dark/zinc" | "light" | "dark/white" | "dark" | "white" | "zinc" | "indigo" | "cyan" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "sky" | "blue" | "violet" | "purple" | "fuchsia" | "pink" | "rose";
    outline?: never;
    plain?: never;
} | {
    color?: never;
    outline: true;
    plain?: never;
} | {
    color?: never;
    outline?: never;
    plain: true;
}) & ({
    className?: string;
    children: React.ReactNode;
} & (Omit<import("@headlessui/react").ButtonProps<"button">, "className" | "as"> | Omit<Omit<{
    href: string | import("react-router").LinkProps["to"];
} & Omit<import("react-router").LinkProps, "to"> & import("react").RefAttributes<HTMLAnchorElement>, "ref">, "className">))) & import("react").RefAttributes<HTMLElement>> & {
    TouchTarget: typeof ButtonComponents.TouchTarget;
};
import { CheckboxGroup as CheckboxGroupComponent } from './checkbox.js';
import * as CheckboxGroupComponents from './checkbox.js';
export declare const CheckboxGroup: typeof CheckboxGroupComponent & {
    CheckboxField: typeof CheckboxGroupComponents.CheckboxField;
    Checkbox: typeof CheckboxGroupComponents.Checkbox;
};
import { DescriptionList as DescriptionListComponent } from './description-list.js';
import * as DescriptionListComponents from './description-list.js';
export declare const DescriptionList: typeof DescriptionListComponent & {
    Term: typeof DescriptionListComponents.DescriptionTerm;
    Details: typeof DescriptionListComponents.DescriptionDetails;
};
import { Dialog as DialogComponent } from './dialog.js';
import * as DialogComponents from './dialog.js';
export declare const Dialog: typeof DialogComponent & {
    Title: typeof DialogComponents.DialogTitle;
    Description: typeof DialogComponents.DialogDescription;
    Body: typeof DialogComponents.DialogBody;
    Actions: typeof DialogComponents.DialogActions;
};
export { Divider } from './divider.js';
import { Dropdown as DropdownComponent } from './dropdown.js';
import * as DropdownComponents from './dropdown.js';
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
import { Fieldset as FieldsetComponent } from './fieldset.js';
import * as FieldsetComponents from './fieldset.js';
export declare const Fieldset: typeof FieldsetComponent & {
    Legend: typeof FieldsetComponents.Legend;
    FieldGroup: typeof FieldsetComponents.FieldGroup;
    Field: typeof FieldsetComponents.Field;
    Label: typeof FieldsetComponents.Label;
    Description: typeof FieldsetComponents.Description;
    ErrorMessage: typeof FieldsetComponents.ErrorMessage;
};
export { Field } from './fieldset.js';
export { Label } from './fieldset.js';
export { ErrorMessage } from './fieldset.js';
import { Heading as HeadingComponent } from './heading.js';
import * as HeadingComponents from './heading.js';
export declare const Heading: typeof HeadingComponent & {
    Subheading: typeof HeadingComponents.Subheading;
};
import { InputGroup as InputGroupComponent } from './input.js';
export declare const InputGroup: typeof InputGroupComponent & {
    Input: import("react").ForwardRefExoticComponent<{
        className?: string;
        type?: "email" | "number" | "password" | "search" | "tel" | "text" | "url" | string;
    } & Omit<import("@headlessui/react").InputProps<"input">, "className" | "as"> & import("react").RefAttributes<HTMLInputElement>>;
};
export { Input } from './input.js';
export { Link } from './link.js';
import { Listbox as ListboxComponent } from './listbox.js';
import * as ListboxComponents from './listbox.js';
export declare const Listbox: typeof ListboxComponent & {
    Option: typeof ListboxComponents.ListboxOption;
    Label: typeof ListboxComponents.ListboxLabel;
    Description: typeof ListboxComponents.ListboxDescription;
};
import { Navbar as NavbarComponent } from './navbar.js';
import * as NavbarComponents from './navbar.js';
export declare const Navbar: typeof NavbarComponent & {
    Divider: typeof NavbarComponents.NavbarDivider;
    Section: typeof NavbarComponents.NavbarSection;
    Spacer: typeof NavbarComponents.NavbarSpacer;
    Item: import("react").ForwardRefExoticComponent<({
        current?: boolean;
        className?: string;
        children: React.ReactNode;
    } & (Omit<import("@headlessui/react").ButtonProps<"button">, "className" | "as"> | Omit<Omit<{
        href: string | import("react-router").LinkProps["to"];
    } & Omit<import("react-router").LinkProps, "to"> & import("react").RefAttributes<HTMLAnchorElement>, "ref">, "className">)) & import("react").RefAttributes<HTMLAnchorElement | HTMLButtonElement>>;
    Label: typeof NavbarComponents.NavbarLabel;
};
import { Pagination as PaginationComponent } from './pagination.js';
import * as PaginationComponents from './pagination.js';
export declare const Pagination: typeof PaginationComponent & {
    Previous: typeof PaginationComponents.PaginationPrevious;
    Next: typeof PaginationComponents.PaginationNext;
    List: typeof PaginationComponents.PaginationList;
    Page: typeof PaginationComponents.PaginationPage;
    Gap: typeof PaginationComponents.PaginationGap;
};
import { RadioGroup as RadioGroupComponent } from './radio.js';
import * as RadioGroupComponents from './radio.js';
export declare const RadioGroup: typeof RadioGroupComponent & {
    RadioField: typeof RadioGroupComponents.RadioField;
    Radio: typeof RadioGroupComponents.Radio;
};
export { Select } from './select.js';
export { SidebarLayout } from './sidebar-layout.js';
import { Sidebar as SidebarComponent } from './sidebar.js';
import * as SidebarComponents from './sidebar.js';
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
export { StackedLayout } from './stacked-layout.js';
import { SwitchGroup as SwitchGroupComponent } from './switch.js';
import * as SwitchGroupComponents from './switch.js';
export declare const SwitchGroup: typeof SwitchGroupComponent & {
    SwitchField: typeof SwitchGroupComponents.SwitchField;
    Switch: typeof SwitchGroupComponents.Switch;
};
import { Table as TableComponent } from './table.js';
import * as TableComponents from './table.js';
export declare const Table: typeof TableComponent & {
    Head: typeof TableComponents.TableHead;
    Body: typeof TableComponents.TableBody;
    Row: typeof TableComponents.TableRow;
    Header: typeof TableComponents.TableHeader;
    Cell: typeof TableComponents.TableCell;
};
import { Text as TextComponent } from './text.js';
import * as TextComponents from './text.js';
export declare const Text: typeof TextComponent & {
    Link: typeof TextComponents.TextLink;
    Strong: typeof TextComponents.Strong;
    Code: typeof TextComponents.Code;
};
export { Textarea } from './textarea.js';
