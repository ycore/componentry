import * as AccordionComponents from './components/accordion';
export declare const Accordion: typeof AccordionComponents.Accordion & {
    Item: typeof AccordionComponents.AccordionItem;
    Trigger: typeof AccordionComponents.AccordionTrigger;
    Content: typeof AccordionComponents.AccordionContent;
};
import * as AlertDialogComponents from './components/alert-dialog';
export declare const AlertDialog: typeof AlertDialogComponents.AlertDialog & {
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
import * as AlertComponents from './components/alert';
export declare const Alert: typeof AlertComponents.Alert & {
    Title: typeof AlertComponents.AlertTitle;
    Description: typeof AlertComponents.AlertDescription;
};
export { AspectRatio } from './components/aspect-ratio';
import * as AvatarComponents from './components/avatar';
export declare const Avatar: typeof AvatarComponents.Avatar & {
    Image: typeof AvatarComponents.AvatarImage;
    Fallback: typeof AvatarComponents.AvatarFallback;
};
import * as BadgeComponents from './components/badge';
export declare const Badge: typeof BadgeComponents.Badge & {
    Variants: (props?: ({
        variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
    } & import("class-variance-authority/types").ClassProp) | undefined) => string;
};
import * as BreadcrumbComponents from './components/breadcrumb';
export declare const Breadcrumb: typeof BreadcrumbComponents.Breadcrumb & {
    List: typeof BreadcrumbComponents.BreadcrumbList;
    Item: typeof BreadcrumbComponents.BreadcrumbItem;
    Link: typeof BreadcrumbComponents.BreadcrumbLink;
    Page: typeof BreadcrumbComponents.BreadcrumbPage;
    Separator: typeof BreadcrumbComponents.BreadcrumbSeparator;
    Ellipsis: typeof BreadcrumbComponents.BreadcrumbEllipsis;
};
import * as ButtonComponents from './components/button';
export declare const Button: typeof ButtonComponents.Button & {
    Variants: (props?: ({
        variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
        size?: "default" | "sm" | "lg" | "icon" | null | undefined;
    } & import("class-variance-authority/types").ClassProp) | undefined) => string;
};
import * as CardComponents from './components/card';
export declare const Card: typeof CardComponents.Card & {
    Header: typeof CardComponents.CardHeader;
    Footer: typeof CardComponents.CardFooter;
    Title: typeof CardComponents.CardTitle;
    Action: typeof CardComponents.CardAction;
    Description: typeof CardComponents.CardDescription;
    Content: typeof CardComponents.CardContent;
};
export { Checkbox } from './components/checkbox';
import * as CollapsibleComponents from './components/collapsible';
export declare const Collapsible: typeof CollapsibleComponents.Collapsible & {
    Trigger: typeof CollapsibleComponents.CollapsibleTrigger;
    Content: typeof CollapsibleComponents.CollapsibleContent;
};
import * as CommandComponents from './components/command';
export declare const Command: typeof CommandComponents.Command & {
    Dialog: typeof CommandComponents.CommandDialog;
    Input: typeof CommandComponents.CommandInput;
    List: typeof CommandComponents.CommandList;
    Empty: typeof CommandComponents.CommandEmpty;
    Group: typeof CommandComponents.CommandGroup;
    Item: typeof CommandComponents.CommandItem;
    Shortcut: typeof CommandComponents.CommandShortcut;
    Separator: typeof CommandComponents.CommandSeparator;
};
import * as ContextMenuComponents from './components/context-menu';
export declare const ContextMenu: typeof ContextMenuComponents.ContextMenu & {
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
import * as DialogComponents from './components/dialog';
export declare const Dialog: typeof DialogComponents.Dialog & {
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
import * as DropdownMenuComponents from './components/dropdown-menu';
export declare const DropdownMenu: typeof DropdownMenuComponents.DropdownMenu & {
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
import * as HoverCardComponents from './components/hover-card';
export declare const HoverCard: typeof HoverCardComponents.HoverCard & {
    Trigger: typeof HoverCardComponents.HoverCardTrigger;
    Content: typeof HoverCardComponents.HoverCardContent;
};
export { Input } from './components/input';
export { Label } from './components/label';
import * as MenubarComponents from './components/menubar';
export declare const Menubar: typeof MenubarComponents.Menubar & {
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
import * as NavigationMenuComponents from './components/navigation-menu';
export declare const NavigationMenu: typeof NavigationMenuComponents.NavigationMenu & {
    List: typeof NavigationMenuComponents.NavigationMenuList;
    Item: typeof NavigationMenuComponents.NavigationMenuItem;
    Content: typeof NavigationMenuComponents.NavigationMenuContent;
    Trigger: typeof NavigationMenuComponents.NavigationMenuTrigger;
    Link: typeof NavigationMenuComponents.NavigationMenuLink;
    Indicator: typeof NavigationMenuComponents.NavigationMenuIndicator;
    Viewport: typeof NavigationMenuComponents.NavigationMenuViewport;
    NavigationMenuTriggerStyle: (props?: import("class-variance-authority/types").ClassProp | undefined) => string;
};
import * as PaginationComponents from './components/pagination';
export declare const Pagination: typeof PaginationComponents.Pagination & {
    Content: typeof PaginationComponents.PaginationContent;
    Link: typeof PaginationComponents.PaginationLink;
    Item: typeof PaginationComponents.PaginationItem;
    Previous: typeof PaginationComponents.PaginationPrevious;
    Next: typeof PaginationComponents.PaginationNext;
    Ellipsis: typeof PaginationComponents.PaginationEllipsis;
};
import * as PopoverComponents from './components/popover';
export declare const Popover: typeof PopoverComponents.Popover & {
    Trigger: typeof PopoverComponents.PopoverTrigger;
    Content: typeof PopoverComponents.PopoverContent;
    Anchor: typeof PopoverComponents.PopoverAnchor;
};
export { Progress } from './components/progress';
import * as RadioGroupComponents from './components/radio-group';
export declare const RadioGroup: typeof RadioGroupComponents.RadioGroup & {
    Item: typeof RadioGroupComponents.RadioGroupItem;
};
import * as ScrollAreaComponents from './components/scroll-area';
export declare const ScrollArea: typeof ScrollAreaComponents.ScrollArea & {
    ScrollBar: typeof ScrollAreaComponents.ScrollBar;
};
import * as SelectComponents from './components/select';
export declare const Select: typeof SelectComponents.Select & {
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
export { Separator } from './components/separator';
import * as SheetComponents from './components/sheet';
export declare const Sheet: typeof SheetComponents.Sheet & {
    Trigger: typeof SheetComponents.SheetTrigger;
    Close: typeof SheetComponents.SheetClose;
    Content: typeof SheetComponents.SheetContent;
    Header: typeof SheetComponents.SheetHeader;
    Footer: typeof SheetComponents.SheetFooter;
    Title: typeof SheetComponents.SheetTitle;
    Description: typeof SheetComponents.SheetDescription;
};
export { useSidebar } from './components/sidebar';
import * as SidebarComponents from './components/sidebar';
export declare const Sidebar: typeof SidebarComponents.Sidebar & {
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
export { Skeleton } from './components/skeleton';
export { Slider } from './components/slider';
export { Toaster } from './components/sonner';
export { Switch } from './components/switch';
import * as TableComponents from './components/table';
export declare const Table: typeof TableComponents.Table & {
    Header: typeof TableComponents.TableHeader;
    Body: typeof TableComponents.TableBody;
    Footer: typeof TableComponents.TableFooter;
    Head: typeof TableComponents.TableHead;
    Row: typeof TableComponents.TableRow;
    Cell: typeof TableComponents.TableCell;
    Caption: typeof TableComponents.TableCaption;
};
import * as TabsComponents from './components/tabs';
export declare const Tabs: typeof TabsComponents.Tabs & {
    List: typeof TabsComponents.TabsList;
    Trigger: typeof TabsComponents.TabsTrigger;
    Content: typeof TabsComponents.TabsContent;
};
export { Textarea } from './components/textarea';
import * as ToggleGroupComponents from './components/toggle-group';
export declare const ToggleGroup: typeof ToggleGroupComponents.ToggleGroup & {
    Item: typeof ToggleGroupComponents.ToggleGroupItem;
};
import * as ToggleComponents from './components/toggle';
export declare const Toggle: typeof ToggleComponents.Toggle & {
    Variants: (props?: ({
        variant?: "default" | "outline" | null | undefined;
        size?: "default" | "sm" | "lg" | null | undefined;
    } & import("class-variance-authority/types").ClassProp) | undefined) => string;
};
import * as TooltipComponents from './components/tooltip';
export declare const Tooltip: typeof TooltipComponents.Tooltip & {
    Trigger: typeof TooltipComponents.TooltipTrigger;
    Content: typeof TooltipComponents.TooltipContent;
    Provider: typeof TooltipComponents.TooltipProvider;
};
export { useFormField } from './custom/form';
import * as FormComponents from './custom/form';
export declare const Form: import("react").ForwardRefExoticComponent<import("react-router").FormProps & import("react").RefAttributes<HTMLFormElement>> & {
    Item: typeof FormComponents.FormItem;
    Label: typeof FormComponents.FormLabel;
    Control: typeof FormComponents.FormControl;
    Description: typeof FormComponents.FormDescription;
    Message: typeof FormComponents.FormMessage;
    Field: ({ name, children }: import("./custom/@types/form.types").FormFieldProps) => import("react/jsx-runtime").JSX.Element;
};
export type { IconName as ExampleIconName } from './@types/example-sprites';
export { type IconName, iconNames } from './@types/lucide-sprites';
export { Intent } from './custom/intent';
export { Link } from './custom/link';
export { Spinner } from './custom/spinner';
export { useMediaQuery } from './hooks/use-media-query';
export { useIsMobile } from './hooks/use-mobile';
