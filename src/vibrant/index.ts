// vibrant

import * as DataPaginationComponents from './components/data-pagination';
import { DataPagination as DataPaginationComponent } from './components/data-pagination';
export const DataPagination = Object.assign(DataPaginationComponent, {
  RecordCountDisplay: DataPaginationComponents.RecordCountDisplay,
  PaginationControls: DataPaginationComponents.PaginationControls,
  RowsPerPageSelector: DataPaginationComponents.RowsPerPageSelector,
});

import * as InputOtpComponents from './components/input-otp';
import { InputOtp as InputOtpComponent } from './components/input-otp';
export const InputOtp = Object.assign(InputOtpComponent, {
  Group: InputOtpComponents.InputOtpGroup,
  Slot: InputOtpComponents.InputOtpSlot,
  HiddenInput: InputOtpComponents.InputOtpHiddenInput,
});

export type { IconName as ExampleIconName } from './@types//example-sprites';
export { type IconName, iconNames } from './@types/lucide-sprites';
export { Link } from './components/link';
export { SvgIcon } from './components/svg-icon';

// shadcn-ui

export { ComponentExamples } from '../shadcn-ui/examples/examples-page';

import * as AccordionComponents from '../shadcn-ui/components/accordion';
import { Accordion as AccordionComponent } from '../shadcn-ui/components/accordion';
export const Accordion = Object.assign(AccordionComponent, {
  Item: AccordionComponents.AccordionItem,
  Trigger: AccordionComponents.AccordionTrigger,
  Content: AccordionComponents.AccordionContent,
});

import * as AlertDialogComponents from '../shadcn-ui/components/alert-dialog';
import { AlertDialog as AlertDialogComponent } from '../shadcn-ui/components/alert-dialog';
export const AlertDialog = Object.assign(AlertDialogComponent, {
  Portal: AlertDialogComponents.AlertDialogPortal,
  Overlay: AlertDialogComponents.AlertDialogOverlay,
  Trigger: AlertDialogComponents.AlertDialogTrigger,
  Content: AlertDialogComponents.AlertDialogContent,
  Header: AlertDialogComponents.AlertDialogHeader,
  Footer: AlertDialogComponents.AlertDialogFooter,
  Title: AlertDialogComponents.AlertDialogTitle,
  Description: AlertDialogComponents.AlertDialogDescription,
  Action: AlertDialogComponents.AlertDialogAction,
  Cancel: AlertDialogComponents.AlertDialogCancel,
});

import * as AlertComponents from '../shadcn-ui/components/alert';
import { Alert as AlertComponent } from '../shadcn-ui/components/alert';
export const Alert = Object.assign(AlertComponent, {
  Title: AlertComponents.AlertTitle,
  Description: AlertComponents.AlertDescription,
});

export { AspectRatio } from '../shadcn-ui/components/aspect-ratio';

import * as AvatarComponents from '../shadcn-ui/components/avatar';
import { Avatar as AvatarComponent } from '../shadcn-ui/components/avatar';
export const Avatar = Object.assign(AvatarComponent, {
  Image: AvatarComponents.AvatarImage,
  Fallback: AvatarComponents.AvatarFallback,
});

import * as BadgeComponents from '../shadcn-ui/components/badge';
import { Badge as BadgeComponent } from '../shadcn-ui/components/badge';
export const Badge = Object.assign(BadgeComponent, {
  Variants: BadgeComponents.badgeVariants,
});

import * as BreadcrumbComponents from '../shadcn-ui/components/breadcrumb';
import { Breadcrumb as BreadcrumbComponent } from '../shadcn-ui/components/breadcrumb';
export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  List: BreadcrumbComponents.BreadcrumbList,
  Item: BreadcrumbComponents.BreadcrumbItem,
  Link: BreadcrumbComponents.BreadcrumbLink,
  Page: BreadcrumbComponents.BreadcrumbPage,
  Separator: BreadcrumbComponents.BreadcrumbSeparator,
  Ellipsis: BreadcrumbComponents.BreadcrumbEllipsis,
});

import * as ButtonGroupComponents from '../shadcn-ui/components/button-group';
import { ButtonGroup as ButtonGroupComponent } from '../shadcn-ui/components/button-group';
export const ButtonGroup = Object.assign(ButtonGroupComponent, {
  Separator: ButtonGroupComponents.ButtonGroupSeparator,
  Text: ButtonGroupComponents.ButtonGroupText,
  ButtonGroupVariants: ButtonGroupComponents.buttonGroupVariants,
});

import * as ButtonComponents from '../shadcn-ui/components/button';
import { Button as ButtonComponent } from '../shadcn-ui/components/button';
export const Button = Object.assign(ButtonComponent, {
  Variants: ButtonComponents.buttonVariants,
});

import * as CardComponents from '../shadcn-ui/components/card';
import { Card as CardComponent } from '../shadcn-ui/components/card';
export const Card = Object.assign(CardComponent, {
  Header: CardComponents.CardHeader,
  Footer: CardComponents.CardFooter,
  Title: CardComponents.CardTitle,
  Action: CardComponents.CardAction,
  Description: CardComponents.CardDescription,
  Content: CardComponents.CardContent,
});

export { Checkbox } from '../shadcn-ui/components/checkbox';

import * as CollapsibleComponents from '../shadcn-ui/components/collapsible';
import { Collapsible as CollapsibleComponent } from '../shadcn-ui/components/collapsible';
export const Collapsible = Object.assign(CollapsibleComponent, {
  Trigger: CollapsibleComponents.CollapsibleTrigger,
  Content: CollapsibleComponents.CollapsibleContent,
});

import * as CommandComponents from '../shadcn-ui/components/command';
import { Command as CommandComponent } from '../shadcn-ui/components/command';
export const Command = Object.assign(CommandComponent, {
  Dialog: CommandComponents.CommandDialog,
  Input: CommandComponents.CommandInput,
  List: CommandComponents.CommandList,
  Empty: CommandComponents.CommandEmpty,
  Group: CommandComponents.CommandGroup,
  Item: CommandComponents.CommandItem,
  Shortcut: CommandComponents.CommandShortcut,
  Separator: CommandComponents.CommandSeparator,
});

import * as ContextMenuComponents from '../shadcn-ui/components/context-menu';
import { ContextMenu as ContextMenuComponent } from '../shadcn-ui/components/context-menu';
export const ContextMenu = Object.assign(ContextMenuComponent, {
  Trigger: ContextMenuComponents.ContextMenuTrigger,
  Content: ContextMenuComponents.ContextMenuContent,
  Item: ContextMenuComponents.ContextMenuItem,
  CheckboxItem: ContextMenuComponents.ContextMenuCheckboxItem,
  RadioItem: ContextMenuComponents.ContextMenuRadioItem,
  Label: ContextMenuComponents.ContextMenuLabel,
  Separator: ContextMenuComponents.ContextMenuSeparator,
  Shortcut: ContextMenuComponents.ContextMenuShortcut,
  Group: ContextMenuComponents.ContextMenuGroup,
  Portal: ContextMenuComponents.ContextMenuPortal,
  Sub: ContextMenuComponents.ContextMenuSub,
  SubContent: ContextMenuComponents.ContextMenuSubContent,
  SubTrigger: ContextMenuComponents.ContextMenuSubTrigger,
  RadioGroup: ContextMenuComponents.ContextMenuRadioGroup,
});

import * as DialogComponents from '../shadcn-ui/components/dialog';
import { Dialog as DialogComponent } from '../shadcn-ui/components/dialog';
export const Dialog = Object.assign(DialogComponent, {
  Close: DialogComponents.DialogClose,
  Content: DialogComponents.DialogContent,
  Description: DialogComponents.DialogDescription,
  Footer: DialogComponents.DialogFooter,
  Header: DialogComponents.DialogHeader,
  Overlay: DialogComponents.DialogOverlay,
  Portal: DialogComponents.DialogPortal,
  Title: DialogComponents.DialogTitle,
  Trigger: DialogComponents.DialogTrigger,
});

import * as DropdownMenuComponents from '../shadcn-ui/components/dropdown-menu';
import { DropdownMenu as DropdownMenuComponent } from '../shadcn-ui/components/dropdown-menu';
export const DropdownMenu = Object.assign(DropdownMenuComponent, {
  Portal: DropdownMenuComponents.DropdownMenuPortal,
  Trigger: DropdownMenuComponents.DropdownMenuTrigger,
  Content: DropdownMenuComponents.DropdownMenuContent,
  Group: DropdownMenuComponents.DropdownMenuGroup,
  Label: DropdownMenuComponents.DropdownMenuLabel,
  Item: DropdownMenuComponents.DropdownMenuItem,
  CheckboxItem: DropdownMenuComponents.DropdownMenuCheckboxItem,
  RadioGroup: DropdownMenuComponents.DropdownMenuRadioGroup,
  RadioItem: DropdownMenuComponents.DropdownMenuRadioItem,
  Separator: DropdownMenuComponents.DropdownMenuSeparator,
  Shortcut: DropdownMenuComponents.DropdownMenuShortcut,
  Sub: DropdownMenuComponents.DropdownMenuSub,
  SubTrigger: DropdownMenuComponents.DropdownMenuSubTrigger,
  SubContent: DropdownMenuComponents.DropdownMenuSubContent,
});

import * as EmptyComponents from '../shadcn-ui/components/empty';
import { Empty as EmptyComponent } from '../shadcn-ui/components/empty';
export const Empty = Object.assign(EmptyComponent, {
  Header: EmptyComponents.EmptyHeader,
  Title: EmptyComponents.EmptyTitle,
  Description: EmptyComponents.EmptyDescription,
  Content: EmptyComponents.EmptyContent,
  Media: EmptyComponents.EmptyMedia,
});

import * as FieldComponents from '../shadcn-ui/components/field';
import { Field as FieldComponent } from '../shadcn-ui/components/field';
export const Field = Object.assign(FieldComponent, {
  Label: FieldComponents.FieldLabel,
  Description: FieldComponents.FieldDescription,
  Error: FieldComponents.FieldError,
  Group: FieldComponents.FieldGroup,
  Legend: FieldComponents.FieldLegend,
  Separator: FieldComponents.FieldSeparator,
  Set: FieldComponents.FieldSet,
  Content: FieldComponents.FieldContent,
  Title: FieldComponents.FieldTitle,
});

export { useFormField } from '../shadcn-ui/components/form';

import * as FormComponents from '../shadcn-ui/components/form';
import { Form as FormComponent } from '../shadcn-ui/components/form';
export const Form = Object.assign(FormComponent, {
  Item: FormComponents.FormItem,
  Label: FormComponents.FormLabel,
  Control: FormComponents.FormControl,
  Description: FormComponents.FormDescription,
  Message: FormComponents.FormMessage,
  Field: FormComponents.FormField,
});

import * as HoverCardComponents from '../shadcn-ui/components/hover-card';
import { HoverCard as HoverCardComponent } from '../shadcn-ui/components/hover-card';
export const HoverCard = Object.assign(HoverCardComponent, {
  Trigger: HoverCardComponents.HoverCardTrigger,
  Content: HoverCardComponents.HoverCardContent,
});

import * as InputGroupComponents from '../shadcn-ui/components/input-group';
import { InputGroup as InputGroupComponent } from '../shadcn-ui/components/input-group';
export const InputGroup = Object.assign(InputGroupComponent, {
  Addon: InputGroupComponents.InputGroupAddon,
  Button: InputGroupComponents.InputGroupButton,
  Text: InputGroupComponents.InputGroupText,
  Input: InputGroupComponents.InputGroupInput,
  Textarea: InputGroupComponents.InputGroupTextarea,
});

export { Input } from '../shadcn-ui/components/input';

import * as ItemComponents from '../shadcn-ui/components/item';
import { Item as ItemComponent } from '../shadcn-ui/components/item';
export const Item = Object.assign(ItemComponent, {
  Media: ItemComponents.ItemMedia,
  Content: ItemComponents.ItemContent,
  Actions: ItemComponents.ItemActions,
  Group: ItemComponents.ItemGroup,
  Separator: ItemComponents.ItemSeparator,
  Title: ItemComponents.ItemTitle,
  Description: ItemComponents.ItemDescription,
  Header: ItemComponents.ItemHeader,
  Footer: ItemComponents.ItemFooter,
});

import * as KbdComponents from '../shadcn-ui/components/kbd';
import { Kbd as KbdComponent } from '../shadcn-ui/components/kbd';
export const Kbd = Object.assign(KbdComponent, {
  Group: KbdComponents.KbdGroup,
});

export { Label } from '../shadcn-ui/components/label';

import * as MenubarComponents from '../shadcn-ui/components/menubar';
import { Menubar as MenubarComponent } from '../shadcn-ui/components/menubar';
export const Menubar = Object.assign(MenubarComponent, {
  Portal: MenubarComponents.MenubarPortal,
  Menu: MenubarComponents.MenubarMenu,
  Trigger: MenubarComponents.MenubarTrigger,
  Content: MenubarComponents.MenubarContent,
  Group: MenubarComponents.MenubarGroup,
  Separator: MenubarComponents.MenubarSeparator,
  Label: MenubarComponents.MenubarLabel,
  Item: MenubarComponents.MenubarItem,
  Shortcut: MenubarComponents.MenubarShortcut,
  CheckboxItem: MenubarComponents.MenubarCheckboxItem,
  RadioGroup: MenubarComponents.MenubarRadioGroup,
  RadioItem: MenubarComponents.MenubarRadioItem,
  Sub: MenubarComponents.MenubarSub,
  SubTrigger: MenubarComponents.MenubarSubTrigger,
  SubContent: MenubarComponents.MenubarSubContent,
});

import * as NavigationMenuComponents from '../shadcn-ui/components/navigation-menu';
import { NavigationMenu as NavigationMenuComponent } from '../shadcn-ui/components/navigation-menu';
export const NavigationMenu = Object.assign(NavigationMenuComponent, {
  List: NavigationMenuComponents.NavigationMenuList,
  Item: NavigationMenuComponents.NavigationMenuItem,
  Content: NavigationMenuComponents.NavigationMenuContent,
  Trigger: NavigationMenuComponents.NavigationMenuTrigger,
  Link: NavigationMenuComponents.NavigationMenuLink,
  Indicator: NavigationMenuComponents.NavigationMenuIndicator,
  Viewport: NavigationMenuComponents.NavigationMenuViewport,
  NavigationMenuTriggerStyle: NavigationMenuComponents.navigationMenuTriggerStyle,
});

import * as PaginationComponents from '../shadcn-ui/components/pagination';
import { Pagination as PaginationComponent } from '../shadcn-ui/components/pagination';
export const Pagination = Object.assign(PaginationComponent, {
  Content: PaginationComponents.PaginationContent,
  Link: PaginationComponents.PaginationLink,
  Item: PaginationComponents.PaginationItem,
  Previous: PaginationComponents.PaginationPrevious,
  Next: PaginationComponents.PaginationNext,
  Ellipsis: PaginationComponents.PaginationEllipsis,
});

import * as PopoverComponents from '../shadcn-ui/components/popover';
import { Popover as PopoverComponent } from '../shadcn-ui/components/popover';
export const Popover = Object.assign(PopoverComponent, {
  Trigger: PopoverComponents.PopoverTrigger,
  Content: PopoverComponents.PopoverContent,
  Anchor: PopoverComponents.PopoverAnchor,
});

export { Progress } from '../shadcn-ui/components/progress';

import * as RadioGroupComponents from '../shadcn-ui/components/radio-group';
import { RadioGroup as RadioGroupComponent } from '../shadcn-ui/components/radio-group';
export const RadioGroup = Object.assign(RadioGroupComponent, {
  Item: RadioGroupComponents.RadioGroupItem,
});

import * as ScrollAreaComponents from '../shadcn-ui/components/scroll-area';
import { ScrollArea as ScrollAreaComponent } from '../shadcn-ui/components/scroll-area';
export const ScrollArea = Object.assign(ScrollAreaComponent, {
  ScrollBar: ScrollAreaComponents.ScrollBar,
});

import * as SelectComponents from '../shadcn-ui/components/select';
import { Select as SelectComponent } from '../shadcn-ui/components/select';
export const Select = Object.assign(SelectComponent, {
  Content: SelectComponents.SelectContent,
  Group: SelectComponents.SelectGroup,
  Item: SelectComponents.SelectItem,
  Label: SelectComponents.SelectLabel,
  ScrollDownButton: SelectComponents.SelectScrollDownButton,
  ScrollUpButton: SelectComponents.SelectScrollUpButton,
  Separator: SelectComponents.SelectSeparator,
  Trigger: SelectComponents.SelectTrigger,
  Value: SelectComponents.SelectValue,
});

export { Separator } from '../shadcn-ui/components/separator';

import * as SheetComponents from '../shadcn-ui/components/sheet';
import { Sheet as SheetComponent } from '../shadcn-ui/components/sheet';
export const Sheet = Object.assign(SheetComponent, {
  Trigger: SheetComponents.SheetTrigger,
  Close: SheetComponents.SheetClose,
  Content: SheetComponents.SheetContent,
  Header: SheetComponents.SheetHeader,
  Footer: SheetComponents.SheetFooter,
  Title: SheetComponents.SheetTitle,
  Description: SheetComponents.SheetDescription,
});

export { useSidebar } from '../shadcn-ui/components/sidebar';

import * as SidebarComponents from '../shadcn-ui/components/sidebar';
import { Sidebar as SidebarComponent } from '../shadcn-ui/components/sidebar';
export const Sidebar = Object.assign(SidebarComponent, {
  Content: SidebarComponents.SidebarContent,
  Footer: SidebarComponents.SidebarFooter,
  Group: SidebarComponents.SidebarGroup,
  GroupAction: SidebarComponents.SidebarGroupAction,
  GroupContent: SidebarComponents.SidebarGroupContent,
  GroupLabel: SidebarComponents.SidebarGroupLabel,
  Header: SidebarComponents.SidebarHeader,
  Input: SidebarComponents.SidebarInput,
  Inset: SidebarComponents.SidebarInset,
  Menu: SidebarComponents.SidebarMenu,
  MenuAction: SidebarComponents.SidebarMenuAction,
  MenuBadge: SidebarComponents.SidebarMenuBadge,
  MenuButton: SidebarComponents.SidebarMenuButton,
  MenuItem: SidebarComponents.SidebarMenuItem,
  MenuSkeleton: SidebarComponents.SidebarMenuSkeleton,
  MenuSub: SidebarComponents.SidebarMenuSub,
  MenuSubButton: SidebarComponents.SidebarMenuSubButton,
  MenuSubItem: SidebarComponents.SidebarMenuSubItem,
  Provider: SidebarComponents.SidebarProvider,
  Rail: SidebarComponents.SidebarRail,
  Separator: SidebarComponents.SidebarSeparator,
  Trigger: SidebarComponents.SidebarTrigger,
});

export { Skeleton } from '../shadcn-ui/components/skeleton';

export { Slider } from '../shadcn-ui/components/slider';

export { Toaster } from '../shadcn-ui/components/sonner';

export { Spinner } from '../shadcn-ui/components/spinner';

export { Switch } from '../shadcn-ui/components/switch';

import * as TableComponents from '../shadcn-ui/components/table';
import { Table as TableComponent } from '../shadcn-ui/components/table';
export const Table = Object.assign(TableComponent, {
  Header: TableComponents.TableHeader,
  Body: TableComponents.TableBody,
  Footer: TableComponents.TableFooter,
  Head: TableComponents.TableHead,
  Row: TableComponents.TableRow,
  Cell: TableComponents.TableCell,
  Caption: TableComponents.TableCaption,
});

import * as TabsComponents from '../shadcn-ui/components/tabs';
import { Tabs as TabsComponent } from '../shadcn-ui/components/tabs';
export const Tabs = Object.assign(TabsComponent, {
  List: TabsComponents.TabsList,
  Trigger: TabsComponents.TabsTrigger,
  Content: TabsComponents.TabsContent,
});

export { Textarea } from '../shadcn-ui/components/textarea';

import * as ToggleGroupComponents from '../shadcn-ui/components/toggle-group';
import { ToggleGroup as ToggleGroupComponent } from '../shadcn-ui/components/toggle-group';
export const ToggleGroup = Object.assign(ToggleGroupComponent, {
  Item: ToggleGroupComponents.ToggleGroupItem,
});

import * as ToggleComponents from '../shadcn-ui/components/toggle';
import { Toggle as ToggleComponent } from '../shadcn-ui/components/toggle';
export const Toggle = Object.assign(ToggleComponent, {
  Variants: ToggleComponents.toggleVariants,
});

import * as TooltipComponents from '../shadcn-ui/components/tooltip';
import { Tooltip as TooltipComponent } from '../shadcn-ui/components/tooltip';
export const Tooltip = Object.assign(TooltipComponent, {
  Trigger: TooltipComponents.TooltipTrigger,
  Content: TooltipComponents.TooltipContent,
  Provider: TooltipComponents.TooltipProvider,
});
