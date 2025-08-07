import * as AccordionComponents from './components/accordion';
import { Accordion as AccordionComponent } from './components/accordion';
export const Accordion = Object.assign(AccordionComponent, {
  Item: AccordionComponents.AccordionItem,
  Trigger: AccordionComponents.AccordionTrigger,
  Content: AccordionComponents.AccordionContent,
});

import * as AlertDialogComponents from './components/alert-dialog';
import { AlertDialog as AlertDialogComponent } from './components/alert-dialog';
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

import * as AlertComponents from './components/alert';
import { Alert as AlertComponent } from './components/alert';
export const Alert = Object.assign(AlertComponent, {
  Title: AlertComponents.AlertTitle,
  Description: AlertComponents.AlertDescription,
});

export { AspectRatio } from './components/aspect-ratio';

import * as AvatarComponents from './components/avatar';
import { Avatar as AvatarComponent } from './components/avatar';
export const Avatar = Object.assign(AvatarComponent, {
  Image: AvatarComponents.AvatarImage,
  Fallback: AvatarComponents.AvatarFallback,
});

import * as BadgeComponents from './components/badge';
import { Badge as BadgeComponent } from './components/badge';
export const Badge = Object.assign(BadgeComponent, {
  Variants: BadgeComponents.badgeVariants,
});

import * as BreadcrumbComponents from './components/breadcrumb';
import { Breadcrumb as BreadcrumbComponent } from './components/breadcrumb';
export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  List: BreadcrumbComponents.BreadcrumbList,
  Item: BreadcrumbComponents.BreadcrumbItem,
  Link: BreadcrumbComponents.BreadcrumbLink,
  Page: BreadcrumbComponents.BreadcrumbPage,
  Separator: BreadcrumbComponents.BreadcrumbSeparator,
  Ellipsis: BreadcrumbComponents.BreadcrumbEllipsis,
});

import * as ButtonComponents from './components/button';
import { Button as ButtonComponent } from './components/button';
export const Button = Object.assign(ButtonComponent, {
  Variants: ButtonComponents.buttonVariants,
});

import * as CardComponents from './components/card';
import { Card as CardComponent } from './components/card';
export const Card = Object.assign(CardComponent, {
  Header: CardComponents.CardHeader,
  Footer: CardComponents.CardFooter,
  Title: CardComponents.CardTitle,
  Action: CardComponents.CardAction,
  Description: CardComponents.CardDescription,
  Content: CardComponents.CardContent,
});

export { Checkbox } from './components/checkbox';

import * as CollapsibleComponents from './components/collapsible';
import { Collapsible as CollapsibleComponent } from './components/collapsible';
export const Collapsible = Object.assign(CollapsibleComponent, {
  Trigger: CollapsibleComponents.CollapsibleTrigger,
  Content: CollapsibleComponents.CollapsibleContent,
});

import * as CommandComponents from './components/command';
import { Command as CommandComponent } from './components/command';
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

import * as ContextMenuComponents from './components/context-menu';
import { ContextMenu as ContextMenuComponent } from './components/context-menu';
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

import * as DialogComponents from './components/dialog';
import { Dialog as DialogComponent } from './components/dialog';
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

import * as DropdownMenuComponents from './components/dropdown-menu';
import { DropdownMenu as DropdownMenuComponent } from './components/dropdown-menu';
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

import * as HoverCardComponents from './components/hover-card';
import { HoverCard as HoverCardComponent } from './components/hover-card';
export const HoverCard = Object.assign(HoverCardComponent, {
  Trigger: HoverCardComponents.HoverCardTrigger,
  Content: HoverCardComponents.HoverCardContent,
});

export { Input } from './components/input';

export { Label } from './components/label';

import * as MenubarComponents from './components/menubar';
import { Menubar as MenubarComponent } from './components/menubar';
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

import * as NavigationMenuComponents from './components/navigation-menu';
import { NavigationMenu as NavigationMenuComponent } from './components/navigation-menu';
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

import * as PaginationComponents from './components/pagination';
import { Pagination as PaginationComponent } from './components/pagination';
export const Pagination = Object.assign(PaginationComponent, {
  Content: PaginationComponents.PaginationContent,
  Link: PaginationComponents.PaginationLink,
  Item: PaginationComponents.PaginationItem,
  Previous: PaginationComponents.PaginationPrevious,
  Next: PaginationComponents.PaginationNext,
  Ellipsis: PaginationComponents.PaginationEllipsis,
});

import * as PopoverComponents from './components/popover';
import { Popover as PopoverComponent } from './components/popover';
export const Popover = Object.assign(PopoverComponent, {
  Trigger: PopoverComponents.PopoverTrigger,
  Content: PopoverComponents.PopoverContent,
  Anchor: PopoverComponents.PopoverAnchor,
});

export { Progress } from './components/progress';

import * as RadioGroupComponents from './components/radio-group';
import { RadioGroup as RadioGroupComponent } from './components/radio-group';
export const RadioGroup = Object.assign(RadioGroupComponent, {
  Item: RadioGroupComponents.RadioGroupItem,
});

import * as ScrollAreaComponents from './components/scroll-area';
import { ScrollArea as ScrollAreaComponent } from './components/scroll-area';
export const ScrollArea = Object.assign(ScrollAreaComponent, {
  ScrollBar: ScrollAreaComponents.ScrollBar,
});

import * as SelectComponents from './components/select';
import { Select as SelectComponent } from './components/select';
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

export { Separator } from './components/separator';

import * as SheetComponents from './components/sheet';
import { Sheet as SheetComponent } from './components/sheet';
export const Sheet = Object.assign(SheetComponent, {
  Trigger: SheetComponents.SheetTrigger,
  Close: SheetComponents.SheetClose,
  Content: SheetComponents.SheetContent,
  Header: SheetComponents.SheetHeader,
  Footer: SheetComponents.SheetFooter,
  Title: SheetComponents.SheetTitle,
  Description: SheetComponents.SheetDescription,
});

export { useSidebar } from './components/sidebar';

import * as SidebarComponents from './components/sidebar';
import { Sidebar as SidebarComponent } from './components/sidebar';
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

export { Skeleton } from './components/skeleton';

export { Slider } from './components/slider';

export { Toaster } from './components/sonner';

export { Switch } from './components/switch';

import * as TableComponents from './components/table';
import { Table as TableComponent } from './components/table';
export const Table = Object.assign(TableComponent, {
  Header: TableComponents.TableHeader,
  Body: TableComponents.TableBody,
  Footer: TableComponents.TableFooter,
  Head: TableComponents.TableHead,
  Row: TableComponents.TableRow,
  Cell: TableComponents.TableCell,
  Caption: TableComponents.TableCaption,
});

import * as TabsComponents from './components/tabs';
import { Tabs as TabsComponent } from './components/tabs';
export const Tabs = Object.assign(TabsComponent, {
  List: TabsComponents.TabsList,
  Trigger: TabsComponents.TabsTrigger,
  Content: TabsComponents.TabsContent,
});

export { Textarea } from './components/textarea';

import * as ToggleGroupComponents from './components/toggle-group';
import { ToggleGroup as ToggleGroupComponent } from './components/toggle-group';
export const ToggleGroup = Object.assign(ToggleGroupComponent, {
  Item: ToggleGroupComponents.ToggleGroupItem,
});

import * as ToggleComponents from './components/toggle';
import { Toggle as ToggleComponent } from './components/toggle';
export const Toggle = Object.assign(ToggleComponent, {
  Variants: ToggleComponents.toggleVariants,
});

import * as TooltipComponents from './components/tooltip';
import { Tooltip as TooltipComponent } from './components/tooltip';
export const Tooltip = Object.assign(TooltipComponent, {
  Trigger: TooltipComponents.TooltipTrigger,
  Content: TooltipComponents.TooltipContent,
  Provider: TooltipComponents.TooltipProvider,
});

export { useFormField } from './custom/form';

import * as FormComponents from './custom/form';
import { Form as FormComponent } from './custom/form';
export const Form = Object.assign(FormComponent, {
  Item: FormComponents.FormItem,
  Label: FormComponents.FormLabel,
  Control: FormComponents.FormControl,
  Description: FormComponents.FormDescription,
  Message: FormComponents.FormMessage,
  Field: FormComponents.FormField,
});

export type { IconName as ExampleIconName } from './@types/example-sprites';
export { type IconName, iconNames } from './@types/lucide-sprites';
export { Link } from './custom/link';
export { Spinner } from './custom/spinner';
