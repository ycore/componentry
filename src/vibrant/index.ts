// vibrant

// Variant utilities
export { createVariants, type VariantProps } from './utils/variants';

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

// shadcn-ui examples

export { ComponentExamples } from '../shadcn-ui/examples/examples-page';

// shadcn-ui components

import * as AccordionComponents from '../shadcn-ui/components/accordion';
import { Accordion as AccordionComponent } from '../shadcn-ui/components/accordion';
export const Accordion: typeof AccordionComponent & {
  Item: typeof AccordionComponents.AccordionItem;
  Trigger: typeof AccordionComponents.AccordionTrigger;
  Content: typeof AccordionComponents.AccordionContent;
} = Object.assign(AccordionComponent, {
  Item: AccordionComponents.AccordionItem,
  Trigger: AccordionComponents.AccordionTrigger,
  Content: AccordionComponents.AccordionContent,
});

import * as AlertDialogComponents from '../shadcn-ui/components/alert-dialog';
import { AlertDialog as AlertDialogComponent } from '../shadcn-ui/components/alert-dialog';
export const AlertDialog: typeof AlertDialogComponent & {
  Portal: typeof AlertDialogComponents.AlertDialogPortal;
  Overlay: typeof AlertDialogComponents.AlertDialogOverlay;
  Trigger: typeof AlertDialogComponents.AlertDialogTrigger;
  Content: typeof AlertDialogComponents.AlertDialogContent;
  Header: typeof AlertDialogComponents.AlertDialogHeader;
  Footer: typeof AlertDialogComponents.AlertDialogFooter;
  Title: typeof AlertDialogComponents.AlertDialogTitle;
  Description: typeof AlertDialogComponents.AlertDialogDescription;
  Action: typeof AlertDialogComponents.AlertDialogAction;
  Cancel: typeof AlertDialogComponents.AlertDialogCancel;
} = Object.assign(AlertDialogComponent, {
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
export const Alert: typeof AlertComponent & {
  Title: typeof AlertComponents.AlertTitle;
  Description: typeof AlertComponents.AlertDescription;
} = Object.assign(AlertComponent, {
  Title: AlertComponents.AlertTitle,
  Description: AlertComponents.AlertDescription,
});

export { AspectRatio } from '../shadcn-ui/components/aspect-ratio';

import * as AvatarComponents from '../shadcn-ui/components/avatar';
import { Avatar as AvatarComponent } from '../shadcn-ui/components/avatar';
export const Avatar: typeof AvatarComponent & {
  Image: typeof AvatarComponents.AvatarImage;
  Fallback: typeof AvatarComponents.AvatarFallback;
} = Object.assign(AvatarComponent, {
  Image: AvatarComponents.AvatarImage,
  Fallback: AvatarComponents.AvatarFallback,
});

import * as BadgeComponents from '../shadcn-ui/components/badge';
import { Badge as BadgeComponent } from '../shadcn-ui/components/badge';
export const Badge: typeof BadgeComponent & {
  Variants: typeof BadgeComponents.badgeVariants;
} = Object.assign(BadgeComponent, {
  Variants: BadgeComponents.badgeVariants,
});

import * as BreadcrumbComponents from '../shadcn-ui/components/breadcrumb';
import { Breadcrumb as BreadcrumbComponent } from '../shadcn-ui/components/breadcrumb';
export const Breadcrumb: typeof BreadcrumbComponent & {
  List: typeof BreadcrumbComponents.BreadcrumbList;
  Item: typeof BreadcrumbComponents.BreadcrumbItem;
  Link: typeof BreadcrumbComponents.BreadcrumbLink;
  Page: typeof BreadcrumbComponents.BreadcrumbPage;
  Separator: typeof BreadcrumbComponents.BreadcrumbSeparator;
  Ellipsis: typeof BreadcrumbComponents.BreadcrumbEllipsis;
} = Object.assign(BreadcrumbComponent, {
  List: BreadcrumbComponents.BreadcrumbList,
  Item: BreadcrumbComponents.BreadcrumbItem,
  Link: BreadcrumbComponents.BreadcrumbLink,
  Page: BreadcrumbComponents.BreadcrumbPage,
  Separator: BreadcrumbComponents.BreadcrumbSeparator,
  Ellipsis: BreadcrumbComponents.BreadcrumbEllipsis,
});

import * as ButtonGroupComponents from '../shadcn-ui/components/button-group';
import { ButtonGroup as ButtonGroupComponent } from '../shadcn-ui/components/button-group';
export const ButtonGroup: typeof ButtonGroupComponent & {
  Separator: typeof ButtonGroupComponents.ButtonGroupSeparator;
  Text: typeof ButtonGroupComponents.ButtonGroupText;
  ButtonGroupVariants: typeof ButtonGroupComponents.buttonGroupVariants;
} = Object.assign(ButtonGroupComponent, {
  Separator: ButtonGroupComponents.ButtonGroupSeparator,
  Text: ButtonGroupComponents.ButtonGroupText,
  ButtonGroupVariants: ButtonGroupComponents.buttonGroupVariants,
});

import * as ButtonComponents from '../shadcn-ui/components/button';
import { Button as ButtonComponent } from '../shadcn-ui/components/button';
export const Button: typeof ButtonComponent & {
  Variants: typeof ButtonComponents.buttonVariants;
} = Object.assign(ButtonComponent, {
  Variants: ButtonComponents.buttonVariants,
});

import * as CardComponents from '../shadcn-ui/components/card';
import { Card as CardComponent } from '../shadcn-ui/components/card';
export const Card: typeof CardComponent & {
  Header: typeof CardComponents.CardHeader;
  Footer: typeof CardComponents.CardFooter;
  Title: typeof CardComponents.CardTitle;
  Action: typeof CardComponents.CardAction;
  Description: typeof CardComponents.CardDescription;
  Content: typeof CardComponents.CardContent;
} = Object.assign(CardComponent, {
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
export const Collapsible: typeof CollapsibleComponent & {
  Trigger: typeof CollapsibleComponents.CollapsibleTrigger;
  Content: typeof CollapsibleComponents.CollapsibleContent;
} = Object.assign(CollapsibleComponent, {
  Trigger: CollapsibleComponents.CollapsibleTrigger,
  Content: CollapsibleComponents.CollapsibleContent,
});

import * as CommandComponents from '../shadcn-ui/components/command';
import { Command as CommandComponent } from '../shadcn-ui/components/command';
export const Command: typeof CommandComponent & {
  Dialog: typeof CommandComponents.CommandDialog;
  Input: typeof CommandComponents.CommandInput;
  List: typeof CommandComponents.CommandList;
  Empty: typeof CommandComponents.CommandEmpty;
  Group: typeof CommandComponents.CommandGroup;
  Item: typeof CommandComponents.CommandItem;
  Shortcut: typeof CommandComponents.CommandShortcut;
  Separator: typeof CommandComponents.CommandSeparator;
} = Object.assign(CommandComponent, {
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
export const ContextMenu: typeof ContextMenuComponent & {
  Trigger: typeof ContextMenuComponents.ContextMenuTrigger;
  Content: typeof ContextMenuComponents.ContextMenuContent;
  Item: typeof ContextMenuComponents.ContextMenuItem;
  CheckboxItem: typeof ContextMenuComponents.ContextMenuCheckboxItem;
  RadioItem: typeof ContextMenuComponents.ContextMenuRadioItem;
  Label: typeof ContextMenuComponents.ContextMenuLabel;
  Separator: typeof ContextMenuComponents.ContextMenuSeparator;
  Shortcut: typeof ContextMenuComponents.ContextMenuShortcut;
  Group: typeof ContextMenuComponents.ContextMenuGroup;
  Portal: typeof ContextMenuComponents.ContextMenuPortal;
  Sub: typeof ContextMenuComponents.ContextMenuSub;
  SubContent: typeof ContextMenuComponents.ContextMenuSubContent;
  SubTrigger: typeof ContextMenuComponents.ContextMenuSubTrigger;
  RadioGroup: typeof ContextMenuComponents.ContextMenuRadioGroup;
} = Object.assign(ContextMenuComponent, {
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
export const Dialog: typeof DialogComponent & {
  Close: typeof DialogComponents.DialogClose;
  Content: typeof DialogComponents.DialogContent;
  Description: typeof DialogComponents.DialogDescription;
  Footer: typeof DialogComponents.DialogFooter;
  Header: typeof DialogComponents.DialogHeader;
  Overlay: typeof DialogComponents.DialogOverlay;
  Portal: typeof DialogComponents.DialogPortal;
  Title: typeof DialogComponents.DialogTitle;
  Trigger: typeof DialogComponents.DialogTrigger;
} = Object.assign(DialogComponent, {
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
export const DropdownMenu: typeof DropdownMenuComponent & {
  Portal: typeof DropdownMenuComponents.DropdownMenuPortal;
  Trigger: typeof DropdownMenuComponents.DropdownMenuTrigger;
  Content: typeof DropdownMenuComponents.DropdownMenuContent;
  Group: typeof DropdownMenuComponents.DropdownMenuGroup;
  Label: typeof DropdownMenuComponents.DropdownMenuLabel;
  Item: typeof DropdownMenuComponents.DropdownMenuItem;
  CheckboxItem: typeof DropdownMenuComponents.DropdownMenuCheckboxItem;
  RadioGroup: typeof DropdownMenuComponents.DropdownMenuRadioGroup;
  RadioItem: typeof DropdownMenuComponents.DropdownMenuRadioItem;
  Separator: typeof DropdownMenuComponents.DropdownMenuSeparator;
  Shortcut: typeof DropdownMenuComponents.DropdownMenuShortcut;
  Sub: typeof DropdownMenuComponents.DropdownMenuSub;
  SubTrigger: typeof DropdownMenuComponents.DropdownMenuSubTrigger;
  SubContent: typeof DropdownMenuComponents.DropdownMenuSubContent;
} = Object.assign(DropdownMenuComponent, {
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
export const Empty: typeof EmptyComponent & {
  Header: typeof EmptyComponents.EmptyHeader;
  Title: typeof EmptyComponents.EmptyTitle;
  Description: typeof EmptyComponents.EmptyDescription;
  Content: typeof EmptyComponents.EmptyContent;
  Media: typeof EmptyComponents.EmptyMedia;
} = Object.assign(EmptyComponent, {
  Header: EmptyComponents.EmptyHeader,
  Title: EmptyComponents.EmptyTitle,
  Description: EmptyComponents.EmptyDescription,
  Content: EmptyComponents.EmptyContent,
  Media: EmptyComponents.EmptyMedia,
});

import * as FieldComponents from '../shadcn-ui/components/field';
import { Field as FieldComponent } from '../shadcn-ui/components/field';
export const Field: typeof FieldComponent & {
  Label: typeof FieldComponents.FieldLabel;
  Description: typeof FieldComponents.FieldDescription;
  Error: typeof FieldComponents.FieldError;
  Group: typeof FieldComponents.FieldGroup;
  Legend: typeof FieldComponents.FieldLegend;
  Separator: typeof FieldComponents.FieldSeparator;
  Set: typeof FieldComponents.FieldSet;
  Content: typeof FieldComponents.FieldContent;
  Title: typeof FieldComponents.FieldTitle;
} = Object.assign(FieldComponent, {
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
export const Form: typeof FormComponent & {
  Item: typeof FormComponents.FormItem;
  Label: typeof FormComponents.FormLabel;
  Control: typeof FormComponents.FormControl;
  Description: typeof FormComponents.FormDescription;
  Message: typeof FormComponents.FormMessage;
  Field: typeof FormComponents.FormField;
} = Object.assign(FormComponent, {
  Item: FormComponents.FormItem,
  Label: FormComponents.FormLabel,
  Control: FormComponents.FormControl,
  Description: FormComponents.FormDescription,
  Message: FormComponents.FormMessage,
  Field: FormComponents.FormField,
});

import * as HoverCardComponents from '../shadcn-ui/components/hover-card';
import { HoverCard as HoverCardComponent } from '../shadcn-ui/components/hover-card';
export const HoverCard: typeof HoverCardComponent & {
  Trigger: typeof HoverCardComponents.HoverCardTrigger;
  Content: typeof HoverCardComponents.HoverCardContent;
} = Object.assign(HoverCardComponent, {
  Trigger: HoverCardComponents.HoverCardTrigger,
  Content: HoverCardComponents.HoverCardContent,
});

import * as InputGroupComponents from '../shadcn-ui/components/input-group';
import { InputGroup as InputGroupComponent } from '../shadcn-ui/components/input-group';
export const InputGroup: typeof InputGroupComponent & {
  Addon: typeof InputGroupComponents.InputGroupAddon;
  Button: typeof InputGroupComponents.InputGroupButton;
  Text: typeof InputGroupComponents.InputGroupText;
  Input: typeof InputGroupComponents.InputGroupInput;
  Textarea: typeof InputGroupComponents.InputGroupTextarea;
} = Object.assign(InputGroupComponent, {
  Addon: InputGroupComponents.InputGroupAddon,
  Button: InputGroupComponents.InputGroupButton,
  Text: InputGroupComponents.InputGroupText,
  Input: InputGroupComponents.InputGroupInput,
  Textarea: InputGroupComponents.InputGroupTextarea,
});

export { Input } from '../shadcn-ui/components/input';

import * as ItemComponents from '../shadcn-ui/components/item';
import { Item as ItemComponent } from '../shadcn-ui/components/item';
export const Item: typeof ItemComponent & {
  Media: typeof ItemComponents.ItemMedia;
  Content: typeof ItemComponents.ItemContent;
  Actions: typeof ItemComponents.ItemActions;
  Group: typeof ItemComponents.ItemGroup;
  Separator: typeof ItemComponents.ItemSeparator;
  Title: typeof ItemComponents.ItemTitle;
  Description: typeof ItemComponents.ItemDescription;
  Header: typeof ItemComponents.ItemHeader;
  Footer: typeof ItemComponents.ItemFooter;
} = Object.assign(ItemComponent, {
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
export const Kbd: typeof KbdComponent & {
  Group: typeof KbdComponents.KbdGroup;
} = Object.assign(KbdComponent, {
  Group: KbdComponents.KbdGroup,
});

export { Label } from '../shadcn-ui/components/label';

import * as MenubarComponents from '../shadcn-ui/components/menubar';
import { Menubar as MenubarComponent } from '../shadcn-ui/components/menubar';
export const Menubar: typeof MenubarComponent & {
  Portal: typeof MenubarComponents.MenubarPortal;
  Menu: typeof MenubarComponents.MenubarMenu;
  Trigger: typeof MenubarComponents.MenubarTrigger;
  Content: typeof MenubarComponents.MenubarContent;
  Group: typeof MenubarComponents.MenubarGroup;
  Separator: typeof MenubarComponents.MenubarSeparator;
  Label: typeof MenubarComponents.MenubarLabel;
  Item: typeof MenubarComponents.MenubarItem;
  Shortcut: typeof MenubarComponents.MenubarShortcut;
  CheckboxItem: typeof MenubarComponents.MenubarCheckboxItem;
  RadioGroup: typeof MenubarComponents.MenubarRadioGroup;
  RadioItem: typeof MenubarComponents.MenubarRadioItem;
  Sub: typeof MenubarComponents.MenubarSub;
  SubTrigger: typeof MenubarComponents.MenubarSubTrigger;
  SubContent: typeof MenubarComponents.MenubarSubContent;
} = Object.assign(MenubarComponent, {
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

import * as NativeSelectComponents from '../shadcn-ui/components/native-select';
import { NativeSelect as NativeSelectComponent } from '../shadcn-ui/components/native-select';
export const NativeSelect: typeof NativeSelectComponent & {
  OptGroup: typeof NativeSelectComponents.NativeSelectOptGroup;
  Option: typeof NativeSelectComponents.NativeSelectOption;
} = Object.assign(NativeSelectComponent, {
  OptGroup: NativeSelectComponents.NativeSelectOptGroup,
  Option: NativeSelectComponents.NativeSelectOption,
});

import * as NavigationMenuComponents from '../shadcn-ui/components/navigation-menu';
import { NavigationMenu as NavigationMenuComponent } from '../shadcn-ui/components/navigation-menu';
export const NavigationMenu: typeof NavigationMenuComponent & {
  List: typeof NavigationMenuComponents.NavigationMenuList;
  Item: typeof NavigationMenuComponents.NavigationMenuItem;
  Content: typeof NavigationMenuComponents.NavigationMenuContent;
  Trigger: typeof NavigationMenuComponents.NavigationMenuTrigger;
  Link: typeof NavigationMenuComponents.NavigationMenuLink;
  Indicator: typeof NavigationMenuComponents.NavigationMenuIndicator;
  Viewport: typeof NavigationMenuComponents.NavigationMenuViewport;
  NavigationMenuTriggerStyle: typeof NavigationMenuComponents.navigationMenuTriggerStyle;
} = Object.assign(NavigationMenuComponent, {
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
export const Pagination: typeof PaginationComponent & {
  Content: typeof PaginationComponents.PaginationContent;
  Link: typeof PaginationComponents.PaginationLink;
  Item: typeof PaginationComponents.PaginationItem;
  Previous: typeof PaginationComponents.PaginationPrevious;
  Next: typeof PaginationComponents.PaginationNext;
  Ellipsis: typeof PaginationComponents.PaginationEllipsis;
} = Object.assign(PaginationComponent, {
  Content: PaginationComponents.PaginationContent,
  Link: PaginationComponents.PaginationLink,
  Item: PaginationComponents.PaginationItem,
  Previous: PaginationComponents.PaginationPrevious,
  Next: PaginationComponents.PaginationNext,
  Ellipsis: PaginationComponents.PaginationEllipsis,
});

import * as PopoverComponents from '../shadcn-ui/components/popover';
import { Popover as PopoverComponent } from '../shadcn-ui/components/popover';
export const Popover: typeof PopoverComponent & {
  Trigger: typeof PopoverComponents.PopoverTrigger;
  Content: typeof PopoverComponents.PopoverContent;
  Anchor: typeof PopoverComponents.PopoverAnchor;
} = Object.assign(PopoverComponent, {
  Trigger: PopoverComponents.PopoverTrigger,
  Content: PopoverComponents.PopoverContent,
  Anchor: PopoverComponents.PopoverAnchor,
});

export { Progress } from '../shadcn-ui/components/progress';

import * as RadioGroupComponents from '../shadcn-ui/components/radio-group';
import { RadioGroup as RadioGroupComponent } from '../shadcn-ui/components/radio-group';
export const RadioGroup: typeof RadioGroupComponent & {
  Item: typeof RadioGroupComponents.RadioGroupItem;
} = Object.assign(RadioGroupComponent, {
  Item: RadioGroupComponents.RadioGroupItem,
});

import * as ScrollAreaComponents from '../shadcn-ui/components/scroll-area';
import { ScrollArea as ScrollAreaComponent } from '../shadcn-ui/components/scroll-area';
export const ScrollArea: typeof ScrollAreaComponent & {
  ScrollBar: typeof ScrollAreaComponents.ScrollBar;
} = Object.assign(ScrollAreaComponent, {
  ScrollBar: ScrollAreaComponents.ScrollBar,
});

import * as SelectComponents from '../shadcn-ui/components/select';
import { Select as SelectComponent } from '../shadcn-ui/components/select';
export const Select: typeof SelectComponent & {
  Content: typeof SelectComponents.SelectContent;
  Group: typeof SelectComponents.SelectGroup;
  Item: typeof SelectComponents.SelectItem;
  Label: typeof SelectComponents.SelectLabel;
  ScrollDownButton: typeof SelectComponents.SelectScrollDownButton;
  ScrollUpButton: typeof SelectComponents.SelectScrollUpButton;
  Separator: typeof SelectComponents.SelectSeparator;
  Trigger: typeof SelectComponents.SelectTrigger;
  Value: typeof SelectComponents.SelectValue;
} = Object.assign(SelectComponent, {
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
export const Sheet: typeof SheetComponent & {
  Trigger: typeof SheetComponents.SheetTrigger;
  Close: typeof SheetComponents.SheetClose;
  Content: typeof SheetComponents.SheetContent;
  Header: typeof SheetComponents.SheetHeader;
  Footer: typeof SheetComponents.SheetFooter;
  Title: typeof SheetComponents.SheetTitle;
  Description: typeof SheetComponents.SheetDescription;
} = Object.assign(SheetComponent, {
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
export const Sidebar: typeof SidebarComponent & {
  Content: typeof SidebarComponents.SidebarContent;
  Footer: typeof SidebarComponents.SidebarFooter;
  Group: typeof SidebarComponents.SidebarGroup;
  GroupAction: typeof SidebarComponents.SidebarGroupAction;
  GroupContent: typeof SidebarComponents.SidebarGroupContent;
  GroupLabel: typeof SidebarComponents.SidebarGroupLabel;
  Header: typeof SidebarComponents.SidebarHeader;
  Input: typeof SidebarComponents.SidebarInput;
  Inset: typeof SidebarComponents.SidebarInset;
  Menu: typeof SidebarComponents.SidebarMenu;
  MenuAction: typeof SidebarComponents.SidebarMenuAction;
  MenuBadge: typeof SidebarComponents.SidebarMenuBadge;
  MenuButton: typeof SidebarComponents.SidebarMenuButton;
  MenuItem: typeof SidebarComponents.SidebarMenuItem;
  MenuSkeleton: typeof SidebarComponents.SidebarMenuSkeleton;
  MenuSub: typeof SidebarComponents.SidebarMenuSub;
  MenuSubButton: typeof SidebarComponents.SidebarMenuSubButton;
  MenuSubItem: typeof SidebarComponents.SidebarMenuSubItem;
  Provider: typeof SidebarComponents.SidebarProvider;
  Rail: typeof SidebarComponents.SidebarRail;
  Separator: typeof SidebarComponents.SidebarSeparator;
  Trigger: typeof SidebarComponents.SidebarTrigger;
} = Object.assign(SidebarComponent, {
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
export const Table: typeof TableComponent & {
  Header: typeof TableComponents.TableHeader;
  Body: typeof TableComponents.TableBody;
  Footer: typeof TableComponents.TableFooter;
  Head: typeof TableComponents.TableHead;
  Row: typeof TableComponents.TableRow;
  Cell: typeof TableComponents.TableCell;
  Caption: typeof TableComponents.TableCaption;
} = Object.assign(TableComponent, {
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
export const Tabs: typeof TabsComponent & {
  List: typeof TabsComponents.TabsList;
  Trigger: typeof TabsComponents.TabsTrigger;
  Content: typeof TabsComponents.TabsContent;
} = Object.assign(TabsComponent, {
  List: TabsComponents.TabsList,
  Trigger: TabsComponents.TabsTrigger,
  Content: TabsComponents.TabsContent,
});

export { Textarea } from '../shadcn-ui/components/textarea';

import * as ToggleGroupComponents from '../shadcn-ui/components/toggle-group';
import { ToggleGroup as ToggleGroupComponent } from '../shadcn-ui/components/toggle-group';
export const ToggleGroup: typeof ToggleGroupComponent & {
  Item: typeof ToggleGroupComponents.ToggleGroupItem;
} = Object.assign(ToggleGroupComponent, {
  Item: ToggleGroupComponents.ToggleGroupItem,
});

import * as ToggleComponents from '../shadcn-ui/components/toggle';
import { Toggle as ToggleComponent } from '../shadcn-ui/components/toggle';
export const Toggle: typeof ToggleComponent & {
  Variants: typeof ToggleComponents.toggleVariants;
} = Object.assign(ToggleComponent, {
  Variants: ToggleComponents.toggleVariants,
});

import * as TooltipComponents from '../shadcn-ui/components/tooltip';
import { Tooltip as TooltipComponent } from '../shadcn-ui/components/tooltip';
export const Tooltip: typeof TooltipComponent & {
  Trigger: typeof TooltipComponents.TooltipTrigger;
  Content: typeof TooltipComponents.TooltipContent;
  Provider: typeof TooltipComponents.TooltipProvider;
} = Object.assign(TooltipComponent, {
  Trigger: TooltipComponents.TooltipTrigger,
  Content: TooltipComponents.TooltipContent,
  Provider: TooltipComponents.TooltipProvider,
});
