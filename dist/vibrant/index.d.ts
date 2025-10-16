import * as DataPaginationComponents from './components/data-pagination';
import { DataPagination as DataPaginationComponent } from './components/data-pagination';
export declare const DataPagination: typeof DataPaginationComponent & {
    RecordCountDisplay: typeof DataPaginationComponents.RecordCountDisplay;
    PaginationControls: typeof DataPaginationComponents.PaginationControls;
    RowsPerPageSelector: typeof DataPaginationComponents.RowsPerPageSelector;
};
import * as InputOtpComponents from './components/input-otp';
import { InputOtp as InputOtpComponent } from './components/input-otp';
export declare const InputOtp: typeof InputOtpComponent & {
    InputOtpGroup: typeof InputOtpComponents.InputOtpGroup;
    InputOtpSlot: typeof InputOtpComponents.InputOtpSlot;
    InputOtpHiddenInput: typeof InputOtpComponents.InputOtpHiddenInput;
};
export type { IconName as ExampleIconName } from './@types//example-sprites';
export { type IconName, iconNames } from './@types/lucide-sprites';
export { Link } from './components/link';
export { SvgIcon } from './components/svg-icon';
export { ComponentExamples } from '../shadcn-ui/examples/examples-page';
import * as AccordionComponents from '../shadcn-ui/components/accordion';
import { Accordion as AccordionComponent } from '../shadcn-ui/components/accordion';
export declare const Accordion: typeof AccordionComponent & {
    Item: typeof AccordionComponents.AccordionItem;
    Trigger: typeof AccordionComponents.AccordionTrigger;
    Content: typeof AccordionComponents.AccordionContent;
};
import * as AlertDialogComponents from '../shadcn-ui/components/alert-dialog';
import { AlertDialog as AlertDialogComponent } from '../shadcn-ui/components/alert-dialog';
export declare const AlertDialog: typeof AlertDialogComponent & {
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
};
import * as AlertComponents from '../shadcn-ui/components/alert';
import { Alert as AlertComponent } from '../shadcn-ui/components/alert';
export declare const Alert: typeof AlertComponent & {
    Title: typeof AlertComponents.AlertTitle;
    Description: typeof AlertComponents.AlertDescription;
};
export { AspectRatio } from '../shadcn-ui/components/aspect-ratio';
import * as AvatarComponents from '../shadcn-ui/components/avatar';
import { Avatar as AvatarComponent } from '../shadcn-ui/components/avatar';
export declare const Avatar: typeof AvatarComponent & {
    Image: typeof AvatarComponents.AvatarImage;
    Fallback: typeof AvatarComponents.AvatarFallback;
};
import { Badge as BadgeComponent } from '../shadcn-ui/components/badge';
export declare const Badge: typeof BadgeComponent & {
    Variants: (props?: ({
        variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
    } & import("class-variance-authority/types").ClassProp) | undefined) => string;
};
import * as BreadcrumbComponents from '../shadcn-ui/components/breadcrumb';
import { Breadcrumb as BreadcrumbComponent } from '../shadcn-ui/components/breadcrumb';
export declare const Breadcrumb: typeof BreadcrumbComponent & {
    List: typeof BreadcrumbComponents.BreadcrumbList;
    Item: typeof BreadcrumbComponents.BreadcrumbItem;
    Link: typeof BreadcrumbComponents.BreadcrumbLink;
    Page: typeof BreadcrumbComponents.BreadcrumbPage;
    Separator: typeof BreadcrumbComponents.BreadcrumbSeparator;
    Ellipsis: typeof BreadcrumbComponents.BreadcrumbEllipsis;
};
import * as ButtonGroupComponents from '../shadcn-ui/components/button-group';
import { ButtonGroup as ButtonGroupComponent } from '../shadcn-ui/components/button-group';
export declare const ButtonGroup: typeof ButtonGroupComponent & {
    Separator: typeof ButtonGroupComponents.ButtonGroupSeparator;
    Text: typeof ButtonGroupComponents.ButtonGroupText;
    ButtonGroupVariants: (props?: ({
        orientation?: "horizontal" | "vertical" | null | undefined;
    } & import("class-variance-authority/types").ClassProp) | undefined) => string;
};
import { Button as ButtonComponent } from '../shadcn-ui/components/button';
export declare const Button: typeof ButtonComponent & {
    Variants: (props?: ({
        variant?: "default" | "destructive" | "ghost" | "link" | "outline" | "secondary" | null | undefined;
        size?: "default" | "icon" | "icon-lg" | "icon-sm" | "lg" | "sm" | null | undefined;
    } & import("class-variance-authority/types").ClassProp) | undefined) => string;
};
import * as CardComponents from '../shadcn-ui/components/card';
import { Card as CardComponent } from '../shadcn-ui/components/card';
export declare const Card: typeof CardComponent & {
    Header: typeof CardComponents.CardHeader;
    Footer: typeof CardComponents.CardFooter;
    Title: typeof CardComponents.CardTitle;
    Action: typeof CardComponents.CardAction;
    Description: typeof CardComponents.CardDescription;
    Content: typeof CardComponents.CardContent;
};
export { Checkbox } from '../shadcn-ui/components/checkbox';
import * as CollapsibleComponents from '../shadcn-ui/components/collapsible';
import { Collapsible as CollapsibleComponent } from '../shadcn-ui/components/collapsible';
export declare const Collapsible: typeof CollapsibleComponent & {
    Trigger: typeof CollapsibleComponents.CollapsibleTrigger;
    Content: typeof CollapsibleComponents.CollapsibleContent;
};
import * as CommandComponents from '../shadcn-ui/components/command';
import { Command as CommandComponent } from '../shadcn-ui/components/command';
export declare const Command: typeof CommandComponent & {
    Dialog: typeof CommandComponents.CommandDialog;
    Input: typeof CommandComponents.CommandInput;
    List: typeof CommandComponents.CommandList;
    Empty: typeof CommandComponents.CommandEmpty;
    Group: typeof CommandComponents.CommandGroup;
    Item: typeof CommandComponents.CommandItem;
    Shortcut: typeof CommandComponents.CommandShortcut;
    Separator: typeof CommandComponents.CommandSeparator;
};
import * as ContextMenuComponents from '../shadcn-ui/components/context-menu';
import { ContextMenu as ContextMenuComponent } from '../shadcn-ui/components/context-menu';
export declare const ContextMenu: typeof ContextMenuComponent & {
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
};
import * as DialogComponents from '../shadcn-ui/components/dialog';
import { Dialog as DialogComponent } from '../shadcn-ui/components/dialog';
export declare const Dialog: typeof DialogComponent & {
    Close: typeof DialogComponents.DialogClose;
    Content: typeof DialogComponents.DialogContent;
    Description: typeof DialogComponents.DialogDescription;
    Footer: typeof DialogComponents.DialogFooter;
    Header: typeof DialogComponents.DialogHeader;
    Overlay: typeof DialogComponents.DialogOverlay;
    Portal: typeof DialogComponents.DialogPortal;
    Title: typeof DialogComponents.DialogTitle;
    Trigger: typeof DialogComponents.DialogTrigger;
};
import * as DropdownMenuComponents from '../shadcn-ui/components/dropdown-menu';
import { DropdownMenu as DropdownMenuComponent } from '../shadcn-ui/components/dropdown-menu';
export declare const DropdownMenu: typeof DropdownMenuComponent & {
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
};
import * as EmptyComponents from '../shadcn-ui/components/empty';
import { Empty as EmptyComponent } from '../shadcn-ui/components/empty';
export declare const Empty: typeof EmptyComponent & {
    Header: typeof EmptyComponents.EmptyHeader;
    Title: typeof EmptyComponents.EmptyTitle;
    Description: typeof EmptyComponents.EmptyDescription;
    Content: typeof EmptyComponents.EmptyContent;
    Media: typeof EmptyComponents.EmptyMedia;
};
import * as FieldComponents from '../shadcn-ui/components/field';
import { Field as FieldComponent } from '../shadcn-ui/components/field';
export declare const Field: typeof FieldComponent & {
    Label: typeof FieldComponents.FieldLabel;
    Description: typeof FieldComponents.FieldDescription;
    Error: typeof FieldComponents.FieldError;
    Group: typeof FieldComponents.FieldGroup;
    Legend: typeof FieldComponents.FieldLegend;
    Separator: typeof FieldComponents.FieldSeparator;
    Set: typeof FieldComponents.FieldSet;
    Content: typeof FieldComponents.FieldContent;
    Title: typeof FieldComponents.FieldTitle;
};
export { useFormField } from '../shadcn-ui/components/form';
import * as FormComponents from '../shadcn-ui/components/form';
export declare const Form: (<TFieldValues extends import("react-hook-form").FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: import("react-hook-form").FormProviderProps<TFieldValues, TContext, TTransformedValues>) => import("react").JSX.Element) & {
    Item: typeof FormComponents.FormItem;
    Label: typeof FormComponents.FormLabel;
    Control: typeof FormComponents.FormControl;
    Description: typeof FormComponents.FormDescription;
    Message: typeof FormComponents.FormMessage;
    Field: <TFieldValues extends import("react-hook-form").FieldValues = import("react-hook-form").FieldValues, TName extends import("react-hook-form").FieldPath<TFieldValues> = import("react-hook-form").FieldPath<TFieldValues>>({ ...props }: import("react-hook-form").ControllerProps<TFieldValues, TName>) => import("react/jsx-runtime").JSX.Element;
};
import * as HoverCardComponents from '../shadcn-ui/components/hover-card';
import { HoverCard as HoverCardComponent } from '../shadcn-ui/components/hover-card';
export declare const HoverCard: typeof HoverCardComponent & {
    Trigger: typeof HoverCardComponents.HoverCardTrigger;
    Content: typeof HoverCardComponents.HoverCardContent;
};
import * as InputGroupComponents from '../shadcn-ui/components/input-group';
import { InputGroup as InputGroupComponent } from '../shadcn-ui/components/input-group';
export declare const InputGroup: typeof InputGroupComponent & {
    Addon: typeof InputGroupComponents.InputGroupAddon;
    Button: typeof InputGroupComponents.InputGroupButton;
    Text: typeof InputGroupComponents.InputGroupText;
    Input: typeof InputGroupComponents.InputGroupInput;
    Textarea: typeof InputGroupComponents.InputGroupTextarea;
};
export { Input } from '../shadcn-ui/components/input';
import * as ItemComponents from '../shadcn-ui/components/item';
import { Item as ItemComponent } from '../shadcn-ui/components/item';
export declare const Item: typeof ItemComponent & {
    Media: typeof ItemComponents.ItemMedia;
    Content: typeof ItemComponents.ItemContent;
    Actions: typeof ItemComponents.ItemActions;
    Group: typeof ItemComponents.ItemGroup;
    Separator: typeof ItemComponents.ItemSeparator;
    Title: typeof ItemComponents.ItemTitle;
    Description: typeof ItemComponents.ItemDescription;
    Header: typeof ItemComponents.ItemHeader;
    Footer: typeof ItemComponents.ItemFooter;
};
import * as KbdComponents from '../shadcn-ui/components/kbd';
import { Kbd as KbdComponent } from '../shadcn-ui/components/kbd';
export declare const Kbd: typeof KbdComponent & {
    Group: typeof KbdComponents.KbdGroup;
};
export { Label } from '../shadcn-ui/components/label';
import * as MenubarComponents from '../shadcn-ui/components/menubar';
import { Menubar as MenubarComponent } from '../shadcn-ui/components/menubar';
export declare const Menubar: typeof MenubarComponent & {
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
};
import * as NavigationMenuComponents from '../shadcn-ui/components/navigation-menu';
import { NavigationMenu as NavigationMenuComponent } from '../shadcn-ui/components/navigation-menu';
export declare const NavigationMenu: typeof NavigationMenuComponent & {
    List: typeof NavigationMenuComponents.NavigationMenuList;
    Item: typeof NavigationMenuComponents.NavigationMenuItem;
    Content: typeof NavigationMenuComponents.NavigationMenuContent;
    Trigger: typeof NavigationMenuComponents.NavigationMenuTrigger;
    Link: typeof NavigationMenuComponents.NavigationMenuLink;
    Indicator: typeof NavigationMenuComponents.NavigationMenuIndicator;
    Viewport: typeof NavigationMenuComponents.NavigationMenuViewport;
    NavigationMenuTriggerStyle: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
};
import * as PaginationComponents from '../shadcn-ui/components/pagination';
import { Pagination as PaginationComponent } from '../shadcn-ui/components/pagination';
export declare const Pagination: typeof PaginationComponent & {
    Content: typeof PaginationComponents.PaginationContent;
    Link: typeof PaginationComponents.PaginationLink;
    Item: typeof PaginationComponents.PaginationItem;
    Previous: typeof PaginationComponents.PaginationPrevious;
    Next: typeof PaginationComponents.PaginationNext;
    Ellipsis: typeof PaginationComponents.PaginationEllipsis;
};
import * as PopoverComponents from '../shadcn-ui/components/popover';
import { Popover as PopoverComponent } from '../shadcn-ui/components/popover';
export declare const Popover: typeof PopoverComponent & {
    Trigger: typeof PopoverComponents.PopoverTrigger;
    Content: typeof PopoverComponents.PopoverContent;
    Anchor: typeof PopoverComponents.PopoverAnchor;
};
export { Progress } from '../shadcn-ui/components/progress';
import * as RadioGroupComponents from '../shadcn-ui/components/radio-group';
import { RadioGroup as RadioGroupComponent } from '../shadcn-ui/components/radio-group';
export declare const RadioGroup: typeof RadioGroupComponent & {
    Item: typeof RadioGroupComponents.RadioGroupItem;
};
import * as ScrollAreaComponents from '../shadcn-ui/components/scroll-area';
import { ScrollArea as ScrollAreaComponent } from '../shadcn-ui/components/scroll-area';
export declare const ScrollArea: typeof ScrollAreaComponent & {
    ScrollBar: typeof ScrollAreaComponents.ScrollBar;
};
import * as SelectComponents from '../shadcn-ui/components/select';
import { Select as SelectComponent } from '../shadcn-ui/components/select';
export declare const Select: typeof SelectComponent & {
    Content: typeof SelectComponents.SelectContent;
    Group: typeof SelectComponents.SelectGroup;
    Item: typeof SelectComponents.SelectItem;
    Label: typeof SelectComponents.SelectLabel;
    ScrollDownButton: typeof SelectComponents.SelectScrollDownButton;
    ScrollUpButton: typeof SelectComponents.SelectScrollUpButton;
    Separator: typeof SelectComponents.SelectSeparator;
    Trigger: typeof SelectComponents.SelectTrigger;
    Value: typeof SelectComponents.SelectValue;
};
export { Separator } from '../shadcn-ui/components/separator';
import * as SheetComponents from '../shadcn-ui/components/sheet';
import { Sheet as SheetComponent } from '../shadcn-ui/components/sheet';
export declare const Sheet: typeof SheetComponent & {
    Trigger: typeof SheetComponents.SheetTrigger;
    Close: typeof SheetComponents.SheetClose;
    Content: typeof SheetComponents.SheetContent;
    Header: typeof SheetComponents.SheetHeader;
    Footer: typeof SheetComponents.SheetFooter;
    Title: typeof SheetComponents.SheetTitle;
    Description: typeof SheetComponents.SheetDescription;
};
export { useSidebar } from '../shadcn-ui/components/sidebar';
import * as SidebarComponents from '../shadcn-ui/components/sidebar';
import { Sidebar as SidebarComponent } from '../shadcn-ui/components/sidebar';
export declare const Sidebar: typeof SidebarComponent & {
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
};
export { Skeleton } from '../shadcn-ui/components/skeleton';
export { Slider } from '../shadcn-ui/components/slider';
export { Toaster } from '../shadcn-ui/components/sonner';
export { Spinner } from '../shadcn-ui/components/spinner';
export { Switch } from '../shadcn-ui/components/switch';
import * as TableComponents from '../shadcn-ui/components/table';
import { Table as TableComponent } from '../shadcn-ui/components/table';
export declare const Table: typeof TableComponent & {
    Header: typeof TableComponents.TableHeader;
    Body: typeof TableComponents.TableBody;
    Footer: typeof TableComponents.TableFooter;
    Head: typeof TableComponents.TableHead;
    Row: typeof TableComponents.TableRow;
    Cell: typeof TableComponents.TableCell;
    Caption: typeof TableComponents.TableCaption;
};
import * as TabsComponents from '../shadcn-ui/components/tabs';
import { Tabs as TabsComponent } from '../shadcn-ui/components/tabs';
export declare const Tabs: typeof TabsComponent & {
    List: typeof TabsComponents.TabsList;
    Trigger: typeof TabsComponents.TabsTrigger;
    Content: typeof TabsComponents.TabsContent;
};
export { Textarea } from '../shadcn-ui/components/textarea';
import * as ToggleGroupComponents from '../shadcn-ui/components/toggle-group';
import { ToggleGroup as ToggleGroupComponent } from '../shadcn-ui/components/toggle-group';
export declare const ToggleGroup: typeof ToggleGroupComponent & {
    Item: typeof ToggleGroupComponents.ToggleGroupItem;
};
import { Toggle as ToggleComponent } from '../shadcn-ui/components/toggle';
export declare const Toggle: typeof ToggleComponent & {
    Variants: (props?: ({
        variant?: "default" | "outline" | null | undefined;
        size?: "default" | "lg" | "sm" | null | undefined;
    } & import("class-variance-authority/types").ClassProp) | undefined) => string;
};
import * as TooltipComponents from '../shadcn-ui/components/tooltip';
import { Tooltip as TooltipComponent } from '../shadcn-ui/components/tooltip';
export declare const Tooltip: typeof TooltipComponent & {
    Trigger: typeof TooltipComponents.TooltipTrigger;
    Content: typeof TooltipComponents.TooltipContent;
    Provider: typeof TooltipComponents.TooltipProvider;
};
