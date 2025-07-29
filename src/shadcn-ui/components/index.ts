import * as AccordionComponents from './accordion.js';
import { Accordion as AccordionComponent } from './accordion.js';
export const Accordion = Object.assign(AccordionComponent, {
  Item: AccordionComponents.AccordionItem,
  Trigger: AccordionComponents.AccordionTrigger,
  Content: AccordionComponents.AccordionContent,
});

import * as AlertDialogComponents from './alert-dialog.js';
import { AlertDialog as AlertDialogComponent } from './alert-dialog.js';
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

import * as AlertComponents from './alert.js';
import { Alert as AlertComponent } from './alert.js';
export const Alert = Object.assign(AlertComponent, {
  Title: AlertComponents.AlertTitle,
  Description: AlertComponents.AlertDescription,
});

export { AspectRatio } from './aspect-ratio.js';

import * as AvatarComponents from './avatar.js';
import { Avatar as AvatarComponent } from './avatar.js';
export const Avatar = Object.assign(AvatarComponent, {
  Image: AvatarComponents.AvatarImage,
  Fallback: AvatarComponents.AvatarFallback,
});

import * as BadgeComponents from './badge.js';
import { Badge as BadgeComponent } from './badge.js';
export const Badge = Object.assign(BadgeComponent, {
  Variants: BadgeComponents.badgeVariants,
});

import * as BreadcrumbComponents from './breadcrumb.js';
import { Breadcrumb as BreadcrumbComponent } from './breadcrumb.js';
export const Breadcrumb = Object.assign(BreadcrumbComponent, {
  List: BreadcrumbComponents.BreadcrumbList,
  Item: BreadcrumbComponents.BreadcrumbItem,
  Link: BreadcrumbComponents.BreadcrumbLink,
  Page: BreadcrumbComponents.BreadcrumbPage,
  Separator: BreadcrumbComponents.BreadcrumbSeparator,
  Ellipsis: BreadcrumbComponents.BreadcrumbEllipsis,
});

import * as ButtonComponents from './button.js';
import { Button as ButtonComponent } from './button.js';
export const Button = Object.assign(ButtonComponent, {
  Variants: ButtonComponents.buttonVariants,
});

import * as CardComponents from './card.js';
import { Card as CardComponent } from './card.js';
export const Card = Object.assign(CardComponent, {
  Header: CardComponents.CardHeader,
  Footer: CardComponents.CardFooter,
  Title: CardComponents.CardTitle,
  Action: CardComponents.CardAction,
  Description: CardComponents.CardDescription,
  Content: CardComponents.CardContent,
});

export { Checkbox } from './checkbox.js';

import * as CollapsibleComponents from './collapsible.js';
import { Collapsible as CollapsibleComponent } from './collapsible.js';
export const Collapsible = Object.assign(CollapsibleComponent, {
  Trigger: CollapsibleComponents.CollapsibleTrigger,
  Content: CollapsibleComponents.CollapsibleContent,
});

import * as CommandComponents from './command.js';
import { Command as CommandComponent } from './command.js';
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

import * as ContextMenuComponents from './context-menu.js';
import { ContextMenu as ContextMenuComponent } from './context-menu.js';
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

import * as DialogComponents from './dialog.js';
import { Dialog as DialogComponent } from './dialog.js';
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

import * as DropdownMenuComponents from './dropdown-menu.js';
import { DropdownMenu as DropdownMenuComponent } from './dropdown-menu.js';
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

import * as HoverCardComponents from './hover-card.js';
import { HoverCard as HoverCardComponent } from './hover-card.js';
export const HoverCard = Object.assign(HoverCardComponent, {
  Trigger: HoverCardComponents.HoverCardTrigger,
  Content: HoverCardComponents.HoverCardContent,
});

export { Input } from './input.js';

export { Label } from './label.js';

import * as MenubarComponents from './menubar.js';
import { Menubar as MenubarComponent } from './menubar.js';
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

import * as NavigationMenuComponents from './navigation-menu.js';
import { NavigationMenu as NavigationMenuComponent } from './navigation-menu.js';
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

import * as PaginationComponents from './pagination.js';
import { Pagination as PaginationComponent } from './pagination.js';
export const Pagination = Object.assign(PaginationComponent, {
  Content: PaginationComponents.PaginationContent,
  Link: PaginationComponents.PaginationLink,
  Item: PaginationComponents.PaginationItem,
  Previous: PaginationComponents.PaginationPrevious,
  Next: PaginationComponents.PaginationNext,
  Ellipsis: PaginationComponents.PaginationEllipsis,
});

import * as PopoverComponents from './popover.js';
import { Popover as PopoverComponent } from './popover.js';
export const Popover = Object.assign(PopoverComponent, {
  Trigger: PopoverComponents.PopoverTrigger,
  Content: PopoverComponents.PopoverContent,
  Anchor: PopoverComponents.PopoverAnchor,
});

export { Progress } from './progress.js';

import * as RadioGroupComponents from './radio-group.js';
import { RadioGroup as RadioGroupComponent } from './radio-group.js';
export const RadioGroup = Object.assign(RadioGroupComponent, {
  Item: RadioGroupComponents.RadioGroupItem,
});

import * as ScrollAreaComponents from './scroll-area.js';
import { ScrollArea as ScrollAreaComponent } from './scroll-area.js';
export const ScrollArea = Object.assign(ScrollAreaComponent, {
  ScrollBar: ScrollAreaComponents.ScrollBar,
});

import * as SelectComponents from './select.js';
import { Select as SelectComponent } from './select.js';
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

export { Separator } from './separator.js';

import * as SheetComponents from './sheet.js';
import { Sheet as SheetComponent } from './sheet.js';
export const Sheet = Object.assign(SheetComponent, {
  Trigger: SheetComponents.SheetTrigger,
  Close: SheetComponents.SheetClose,
  Content: SheetComponents.SheetContent,
  Header: SheetComponents.SheetHeader,
  Footer: SheetComponents.SheetFooter,
  Title: SheetComponents.SheetTitle,
  Description: SheetComponents.SheetDescription,
});

export { useSidebar } from './sidebar.js';

import * as SidebarComponents from './sidebar.js';
import { Sidebar as SidebarComponent } from './sidebar.js';
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

export { Skeleton } from './skeleton.js';

export { Slider } from './slider.js';

export { Toaster } from './sonner.js';

export { Switch } from './switch.js';

import * as TableComponents from './table.js';
import { Table as TableComponent } from './table.js';
export const Table = Object.assign(TableComponent, {
  Header: TableComponents.TableHeader,
  Body: TableComponents.TableBody,
  Footer: TableComponents.TableFooter,
  Head: TableComponents.TableHead,
  Row: TableComponents.TableRow,
  Cell: TableComponents.TableCell,
  Caption: TableComponents.TableCaption,
});

import * as TabsComponents from './tabs.js';
import { Tabs as TabsComponent } from './tabs.js';
export const Tabs = Object.assign(TabsComponent, {
  List: TabsComponents.TabsList,
  Trigger: TabsComponents.TabsTrigger,
  Content: TabsComponents.TabsContent,
});

export { Textarea } from './textarea.js';

import * as ToggleGroupComponents from './toggle-group.js';
import { ToggleGroup as ToggleGroupComponent } from './toggle-group.js';
export const ToggleGroup = Object.assign(ToggleGroupComponent, {
  Item: ToggleGroupComponents.ToggleGroupItem,
});

import * as ToggleComponents from './toggle.js';
import { Toggle as ToggleComponent } from './toggle.js';
export const Toggle = Object.assign(ToggleComponent, {
  Variants: ToggleComponents.toggleVariants,
});

import * as TooltipComponents from './tooltip.js';
import { Tooltip as TooltipComponent } from './tooltip.js';
export const Tooltip = Object.assign(TooltipComponent, {
  Trigger: TooltipComponents.TooltipTrigger,
  Content: TooltipComponents.TooltipContent,
  Provider: TooltipComponents.TooltipProvider,
});

export { useFormField } from '../custom/form.js';

import * as FormComponents from '../custom/form.js';
import { Form as FormComponent } from '../custom/form.js';
export const Form = Object.assign(FormComponent, {
  Item: FormComponents.FormItem,
  Label: FormComponents.FormLabel,
  Control: FormComponents.FormControl,
  Description: FormComponents.FormDescription,
  Message: FormComponents.FormMessage,
  Field: FormComponents.FormField,
});

export { Link } from '../custom/link.js';

export { Spinner } from '../custom/spinner.js';

export { ComponentExamples } from '../examples/index.js';

export type { IconName } from '../@types/lucide-sprites.js';
