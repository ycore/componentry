import * as AlertComponents from './alert.js';
import { Alert as AlertComponent } from './alert.js';
export const Alert = Object.assign(AlertComponent, {
    Title: AlertComponents.AlertTitle,
    Description: AlertComponents.AlertDescription,
    Body: AlertComponents.AlertBody,
    Actions: AlertComponents.AlertActions,
});
import * as AvatarComponents from './avatar.js';
import { Avatar as AvatarComponent } from './avatar.js';
export const Avatar = Object.assign(AvatarComponent, {
    Button: AvatarComponents.AvatarButton,
});
import * as BadgeComponents from './badge.js';
import { Badge as BadgeComponent } from './badge.js';
export const Badge = Object.assign(BadgeComponent, {
    Button: BadgeComponents.BadgeButton,
});
import * as ButtonComponents from './button.js';
import { Button as ButtonComponent } from './button.js';
export const Button = Object.assign(ButtonComponent, {
    TouchTarget: ButtonComponents.TouchTarget,
});
import { CheckboxGroup as CheckboxGroupComponent } from './checkbox.js';
import * as CheckboxGroupComponents from './checkbox.js';
export const CheckboxGroup = Object.assign(CheckboxGroupComponent, {
    CheckboxField: CheckboxGroupComponents.CheckboxField,
    Checkbox: CheckboxGroupComponents.Checkbox,
});
import { DescriptionList as DescriptionListComponent } from './description-list.js';
import * as DescriptionListComponents from './description-list.js';
export const DescriptionList = Object.assign(DescriptionListComponent, {
    Term: DescriptionListComponents.DescriptionTerm,
    Details: DescriptionListComponents.DescriptionDetails,
});
import { Dialog as DialogComponent } from './dialog.js';
import * as DialogComponents from './dialog.js';
export const Dialog = Object.assign(DialogComponent, {
    Title: DialogComponents.DialogTitle,
    Description: DialogComponents.DialogDescription,
    Body: DialogComponents.DialogBody,
    Actions: DialogComponents.DialogActions,
});
export { Divider } from './divider.js';
import { Dropdown as DropdownComponent } from './dropdown.js';
import * as DropdownComponents from './dropdown.js';
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
import { Fieldset as FieldsetComponent } from './fieldset.js';
import * as FieldsetComponents from './fieldset.js';
export const Fieldset = Object.assign(FieldsetComponent, {
    Legend: FieldsetComponents.Legend,
    FieldGroup: FieldsetComponents.FieldGroup,
    Field: FieldsetComponents.Field,
    Label: FieldsetComponents.Label,
    Description: FieldsetComponents.Description,
    ErrorMessage: FieldsetComponents.ErrorMessage,
});
export { Field } from './fieldset.js';
export { Label } from './fieldset.js';
export { ErrorMessage } from './fieldset.js';
import { Heading as HeadingComponent } from './heading.js';
import * as HeadingComponents from './heading.js';
export const Heading = Object.assign(HeadingComponent, {
    Subheading: HeadingComponents.Subheading,
});
import { InputGroup as InputGroupComponent } from './input.js';
import * as InputGroupComponents from './input.js';
export const InputGroup = Object.assign(InputGroupComponent, {
    Input: InputGroupComponents.Input,
});
export { Input } from './input.js';
export { Link } from './link.js';
import { Listbox as ListboxComponent } from './listbox.js';
import * as ListboxComponents from './listbox.js';
export const Listbox = Object.assign(ListboxComponent, {
    Option: ListboxComponents.ListboxOption,
    Label: ListboxComponents.ListboxLabel,
    Description: ListboxComponents.ListboxDescription,
});
import { Navbar as NavbarComponent } from './navbar.js';
import * as NavbarComponents from './navbar.js';
export const Navbar = Object.assign(NavbarComponent, {
    Divider: NavbarComponents.NavbarDivider,
    Section: NavbarComponents.NavbarSection,
    Spacer: NavbarComponents.NavbarSpacer,
    Item: NavbarComponents.NavbarItem,
    Label: NavbarComponents.NavbarLabel,
});
import { Pagination as PaginationComponent } from './pagination.js';
import * as PaginationComponents from './pagination.js';
export const Pagination = Object.assign(PaginationComponent, {
    Previous: PaginationComponents.PaginationPrevious,
    Next: PaginationComponents.PaginationNext,
    List: PaginationComponents.PaginationList,
    Page: PaginationComponents.PaginationPage,
    Gap: PaginationComponents.PaginationGap,
});
import { RadioGroup as RadioGroupComponent } from './radio.js';
import * as RadioGroupComponents from './radio.js';
export const RadioGroup = Object.assign(RadioGroupComponent, {
    RadioField: RadioGroupComponents.RadioField,
    Radio: RadioGroupComponents.Radio,
});
export { Select } from './select.js';
export { SidebarLayout } from './sidebar-layout.js';
import { Sidebar as SidebarComponent } from './sidebar.js';
import * as SidebarComponents from './sidebar.js';
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
export { StackedLayout } from './stacked-layout.js';
import { SwitchGroup as SwitchGroupComponent } from './switch.js';
import * as SwitchGroupComponents from './switch.js';
export const SwitchGroup = Object.assign(SwitchGroupComponent, {
    SwitchField: SwitchGroupComponents.SwitchField,
    Switch: SwitchGroupComponents.Switch,
});
import { Table as TableComponent } from './table.js';
import * as TableComponents from './table.js';
export const Table = Object.assign(TableComponent, {
    Head: TableComponents.TableHead,
    Body: TableComponents.TableBody,
    Row: TableComponents.TableRow,
    Header: TableComponents.TableHeader,
    Cell: TableComponents.TableCell,
});
import { Text as TextComponent } from './text.js';
import * as TextComponents from './text.js';
export const Text = Object.assign(TextComponent, {
    Link: TextComponents.TextLink,
    Strong: TextComponents.Strong,
    Code: TextComponents.Code,
});
export { Textarea } from './textarea.js';
//# sourceMappingURL=index.js.map