import { SpriteIcon } from '../../images/SpriteIcon';
import { THEME_OPTIONS, ThemeSwitch } from '../../impetus';
import { type IconName, iconNames } from '../@types/lucide-sprites';
import svgSpriteUrl from '../assets/lucide-sprites.svg?url';
import { Tooltip, TooltipContent, TooltipTrigger } from '../components/tooltip';

import AccordionDemo from './accordion-demo';
import AlertDemo from './alert-demo';
import AlertDestructive from './alert-destructive';
import AlertDialogDemo from './alert-dialog-demo';
import AspectRatioDemo from './aspect-ratio-demo';
import AvatarDemo from './avatar-demo';
import BadgeDemo from './badge-demo';
import BadgeDestructive from './badge-destructive';
import BadgeOutline from './badge-outline';
import BadgeSecondary from './badge-secondary';
import BreadcrumbDemo from './breadcrumb-demo';
import BreadcrumbDropdown from './breadcrumb-dropdown';
import BreadcrumbEllipsis from './breadcrumb-ellipsis';
import BreadcrumbLink from './breadcrumb-link';
// import BreadcrumbResponsive from './breadcrumb-responsive';
import BreadcrumbSeparator from './breadcrumb-separator';
import ButtonAsChild from './button-as-child';
import ButtonDemo from './button-demo';
import ButtonDestructive from './button-destructive';
import ButtonGhost from './button-ghost';
import ButtonIcon from './button-icon';
import ButtonLink from './button-link';
import ButtonLoading from './button-loading';
import ButtonOutline from './button-outline';
import ButtonSecondary from './button-secondary';
import ButtonWithIcon from './button-with-icon';
import CardDemo from './card-demo';
import CardWithForm from './card-with-form';
import CheckboxDemo from './checkbox-demo';
import CheckboxDisabled from './checkbox-disabled';
import CheckboxFormMultiple from './checkbox-form-multiple';
import CheckboxFormSingle from './checkbox-form-single';
import CheckboxWithText from './checkbox-with-text';
import CollapsibleDemo from './collapsible-demo';
import ComboboxDemo from './combobox-demo';
import ComboboxDropdownMenu from './combobox-dropdown-menu';
import ComboboxForm from './combobox-form';
import ComboboxPopover from './combobox-popover';
import ContextMenuDemo from './context-menu-demo';
import DialogCloseButton from './dialog-close-button';
import DialogDemo from './dialog-demo';
import DropdownMenuCheckboxes from './dropdown-menu-checkboxes';
import DropdownMenuDemo from './dropdown-menu-demo';
import DropdownMenuRadioGroup from './dropdown-menu-radio-group';
import HoverCardDemo from './hover-card-demo';
import InputDemo from './input-demo';
import InputDisabled from './input-disabled';
import InputFile from './input-file';
import InputForm from './input-form';
import InputWithButton from './input-with-button';
import InputWithLabel from './input-with-label';
import InputWithText from './input-with-text';
import LabelDemo from './label-demo';
import MenubarDemo from './menubar-demo';
import ModeToggle from './mode-toggle';
import NavigationMenuDemo from './navigation-menu-demo';
import PaginationDemo from './pagination-demo';
import PopoverDemo from './popover-demo';
import ProgressDemo from './progress-demo';
import RadioGroupDemo from './radio-group-demo';
import RadioGroupForm from './radio-group-form';
import ScrollAreaDemo from './scroll-area-demo';
import ScrollAreaHorizontalDemo from './scroll-area-horizontal-demo';
import SelectDemo from './select-demo';
import SelectForm from './select-form';
import SelectScrollable from './select-scrollable';
import SeparatorDemo from './separator-demo';
import SheetDemo from './sheet-demo';
import SheetSide from './sheet-side';
import SkeletonCard from './skeleton-card';
import SkeletonDemo from './skeleton-demo';
import SliderDemo from './slider-demo';
import SonnerDemo from './sonner-demo';
import SwitchDemo from './switch-demo';
import SwitchForm from './switch-form';
import TableDemo from './table-demo';
import TabsDemo from './tabs-demo';
import TextareaDemo from './textarea-demo';
import TextareaDisabled from './textarea-disabled';
import TextareaForm from './textarea-form';
import TextareaWithButton from './textarea-with-button';
import TextareaWithLabel from './textarea-with-label';
import TextareaWithText from './textarea-with-text';
import ToggleDemo from './toggle-demo';
import ToggleDisabled from './toggle-disabled';
import ToggleGroupDemo from './toggle-group-demo';
import ToggleGroupDisabled from './toggle-group-disabled';
import ToggleGroupLg from './toggle-group-lg';
import ToggleGroupOutline from './toggle-group-outline';
import ToggleGroupSingle from './toggle-group-single';
import ToggleGroupSm from './toggle-group-sm';
import ToggleLg from './toggle-lg';
import ToggleOutline from './toggle-outline';
import ToggleSm from './toggle-sm';
import ToggleWithText from './toggle-with-text';
import TooltipDemo from './tooltip-demo';
import TypographyBlockquote from './typography-blockquote';
import TypographyDemo from './typography-demo';
import TypographyH1 from './typography-h1';
import TypographyH2 from './typography-h2';
import TypographyH3 from './typography-h3';
import TypographyH4 from './typography-h4';
import TypographyInlineCode from './typography-inline-code';
import TypographyLarge from './typography-large';
import TypographyLead from './typography-lead';
import TypographyList from './typography-list';
import TypographyMuted from './typography-muted';
import TypographyP from './typography-p';
import TypographySmall from './typography-small';
import TypographyTable from './typography-table';

function ReturnToTop() {
  return (
    <a
      href="#table-of-contents"
      className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/80 hover:text-foreground"
      aria-label="Return to table of contents"
    >
      <SpriteIcon url={svgSpriteUrl} id="ArrowUp" className="h-4 w-4" />
    </a>
  );
}

function ComponentSection({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12">
      <div className="mb-6 flex items-center justify-between border-b pb-2">
        <h2 className="font-bold text-3xl">{title}</h2>
        <ReturnToTop />
      </div>
      {children}
    </section>
  );
}

function ComponentExample({ name, children }: { name: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-background p-6">
      <h3 className="mb-4 font-semibold text-accent-foreground text-lg">{name}</h3>
      {children}
    </div>
  );
}

function SpriteExamples() {
  return (
    <div className="p-6">
      <h2 className="mb-4 font-bold text-2xl">Lucide Icon Sprites</h2>
      <p className="mb-6 text-gray-600">All {iconNames.length} icons from the lucide sprite sheet</p>

      <div className="flex flex-row flex-wrap gap-4">
        {iconNames.map(iconName => (
          <div key={iconName} className="flex flex-col items-center rounded-lg border p-3 transition-colors hover:bg-gray-800/75 hover:dark:bg-gray-100/75">
            <Tooltip>
              <TooltipTrigger asChild>
                <SpriteIcon<IconName> url={svgSpriteUrl} id={iconName} className="h-6 w-6 text-accent-foreground" viewBox="0 0 24 24" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{iconName}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ComponentExamples() {
  const sections = [
    { id: 'accordion', title: 'Accordion' },
    { id: 'alerts', title: 'Alerts' },
    { id: 'avatar', title: 'Avatar' },
    { id: 'badges', title: 'Badges' },
    { id: 'breadcrumbs', title: 'Breadcrumbs' },
    { id: 'buttons', title: 'Buttons' },
    { id: 'cards', title: 'Cards' },
    { id: 'checkboxes', title: 'Checkboxes' },
    { id: 'collapsible', title: 'Collapsible' },
    { id: 'combobox', title: 'Combobox' },
    { id: 'menus', title: 'Menus' },
    { id: 'data', title: 'Data Display' },
    { id: 'date-picker', title: 'Date Picker' },
    { id: 'dialogs', title: 'Dialogs' },
    { id: 'inputs', title: 'Inputs' },
    { id: 'labels', title: 'Labels' },
    { id: 'navigation', title: 'Navigation' },
    { id: 'overlays', title: 'Overlays' },
    { id: 'radio', title: 'Radio Groups' },
    { id: 'scroll', title: 'Scroll Areas' },
    { id: 'selects', title: 'Selects' },
    { id: 'separators', title: 'Separators' },
    { id: 'sheets', title: 'Sheets' },
    { id: 'skeleton', title: 'Skeleton' },
    { id: 'sliders', title: 'Sliders' },
    { id: 'switches', title: 'Switches' },
    { id: 'tables', title: 'Tables' },
    { id: 'tabs', title: 'Tabs' },
    { id: 'textareas', title: 'Textareas' },
    { id: 'toggles', title: 'Toggles' },
    { id: 'tooltips', title: 'Tooltips' },
    { id: 'typography', title: 'Typography' },
    { id: 'notifications', title: 'Notifications' },
  ];

  return (
    <div className="container mx-auto max-w-7xl px-6 py-8">
      <div className="mb-8">
        <div className="flex flex-row justify-between">
          <h1 className="mb-4 font-bold text-4xl">shadcn/ui Examples</h1>
          <ThemeSwitch theme={THEME_OPTIONS} />
        </div>
        <p className="mb-6 text-lg text-muted-foreground">A comprehensive showcase of all shadcn/ui components with live examples.</p>

        {/* Table of Contents */}
        <div id="table-of-contents" className="mb-8 rounded-lg border bg-muted/10 p-6">
          <h2 className="mb-4 font-semibold text-xl">Table of Contents</h2>
          <div className="columns-1 gap-8 sm:columns-2 lg:columns-4">
            {sections.map(section => (
              <a key={section.id} href={`#${section.id}`} className="mb-4 block text-primary transition-colors hover:text-primary/80 hover:underline">
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-16">
        {/* SpriteExamples */}
        <ComponentSection id="sprites" title="Sprite Examples">
          <div className="max-w-2xl">
            <SpriteExamples />
          </div>
        </ComponentSection>

        <h2 className="mb-4 font-bold text-4xl">Component Examples</h2>

        {/* Accordion */}
        <ComponentSection id="accordion" title="Accordion">
          <div className="max-w-2xl">
            <ComponentExample name="Accordion Demo">
              <AccordionDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Alerts */}
        <ComponentSection id="alerts" title="Alerts">
          <div className="flex max-w-2xl flex-col gap-6">
            <ComponentExample name="Alert Demo">
              <AlertDemo />
            </ComponentExample>
            <ComponentExample name="Alert Destructive">
              <AlertDestructive />
            </ComponentExample>
            <ComponentExample name="Alert Dialog Demo">
              <AlertDialogDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Avatar */}
        <ComponentSection id="avatar" title="Avatar">
          <div className="flex flex-row gap-6">
            <ComponentExample name="Avatar Demo">
              <AvatarDemo />
            </ComponentExample>
            <ComponentExample name="Aspect Ratio Demo">
              <AspectRatioDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Badges */}
        <ComponentSection id="badges" title="Badges">
          <div className="flex flex-row gap-6">
            <ComponentExample name="Badge Demo">
              <BadgeDemo />
            </ComponentExample>
            <ComponentExample name="Badge Destructive">
              <BadgeDestructive />
            </ComponentExample>
            <ComponentExample name="Badge Outline">
              <BadgeOutline />
            </ComponentExample>
            <ComponentExample name="Badge Secondary">
              <BadgeSecondary />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Breadcrumbs */}
        <ComponentSection id="breadcrumbs" title="Breadcrumbs">
          <div className="flex max-w-2xl flex-col gap-6">
            <ComponentExample name="Breadcrumb Demo">
              <BreadcrumbDemo />
            </ComponentExample>
            <ComponentExample name="Breadcrumb Dropdown">
              <BreadcrumbDropdown />
            </ComponentExample>
            <ComponentExample name="Breadcrumb Ellipsis">
              <BreadcrumbEllipsis />
            </ComponentExample>
            <ComponentExample name="Breadcrumb Link">
              <BreadcrumbLink />
            </ComponentExample>
            {/* <ComponentExample name="Breadcrumb Responsive">
              <BreadcrumbResponsive />
            </ComponentExample> */}
            <ComponentExample name="Breadcrumb Separator">
              <BreadcrumbSeparator />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Buttons */}
        <ComponentSection id="buttons" title="Buttons">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ComponentExample name="Button Demo">
              <ButtonDemo />
            </ComponentExample>
            <ComponentExample name="Button As Child">
              <ButtonAsChild />
            </ComponentExample>
            <ComponentExample name="Button Destructive">
              <ButtonDestructive />
            </ComponentExample>
            <ComponentExample name="Button Ghost">
              <ButtonGhost />
            </ComponentExample>
            <ComponentExample name="Button Icon">
              <ButtonIcon />
            </ComponentExample>
            <ComponentExample name="Button Link">
              <ButtonLink />
            </ComponentExample>
            <ComponentExample name="Button Loading">
              <ButtonLoading />
            </ComponentExample>
            <ComponentExample name="Button Outline">
              <ButtonOutline />
            </ComponentExample>
            <ComponentExample name="Button Secondary">
              <ButtonSecondary />
            </ComponentExample>
            <ComponentExample name="Button With Icon">
              <ButtonWithIcon />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Cards */}
        <ComponentSection id="cards" title="Cards">
          <div className="flex flex-col gap-6 lg:flex-row">
            <ComponentExample name="Card Demo">
              <CardDemo />
            </ComponentExample>
            <ComponentExample name="Card With Form">
              <CardWithForm />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Checkboxes */}
        <ComponentSection id="checkboxes" title="Checkboxes">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ComponentExample name="Checkbox Demo">
              <CheckboxDemo />
            </ComponentExample>
            <ComponentExample name="Checkbox Disabled">
              <CheckboxDisabled />
            </ComponentExample>
            <ComponentExample name="Checkbox Form Multiple">
              <CheckboxFormMultiple />
            </ComponentExample>
            <ComponentExample name="Checkbox Form Single">
              <CheckboxFormSingle />
            </ComponentExample>
            <ComponentExample name="Checkbox With Text">
              <CheckboxWithText />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Collapsible */}
        <ComponentSection id="collapsible" title="Collapsible">
          <div className="max-w-md">
            <ComponentExample name="Collapsible Demo">
              <CollapsibleDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Combobox */}
        <ComponentSection id="combobox" title="Combobox">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ComponentExample name="Combobox Demo">
              <ComboboxDemo />
            </ComponentExample>
            <ComponentExample name="Combobox Dropdown Menu">
              <ComboboxDropdownMenu />
            </ComponentExample>
            <ComponentExample name="Combobox Form">
              <ComboboxForm />
            </ComponentExample>
            <ComponentExample name="Combobox Popover">
              <ComboboxPopover />
            </ComponentExample>
            {/* <ComponentExample name="Combobox Responsive">
              <ComboboxResponsive />
            </ComponentExample> */}
          </div>
        </ComponentSection>

        {/* Menus */}
        <ComponentSection id="menus" title="Menus">
          <div className="flex flex-row gap-6">
            <ComponentExample name="Context Menu Demo">
              <ContextMenuDemo />
            </ComponentExample>
            <ComponentExample name="Dropdown Menu Demo">
              <DropdownMenuDemo />
            </ComponentExample>
            <ComponentExample name="Dropdown Menu Checkboxes">
              <DropdownMenuCheckboxes />
            </ComponentExample>
            <ComponentExample name="Dropdown Menu Radio Group">
              <DropdownMenuRadioGroup />
            </ComponentExample>
            <ComponentExample name="Menubar Demo">
              <MenubarDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Data Display */}
        {/* <ComponentSection id="data" title="Data Display">
          <div className="max-w-4xl">
            <ComponentExample name="Data Table Demo">
              <DataTableDemo />
            </ComponentExample>
          </div>
        </ComponentSection> */}

        {/* Date Picker */}
        {/* <ComponentSection id="date-picker" title="Date Picker">
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <ComponentExample name="Date Picker Demo">
              <DatePickerDemo />
            </ComponentExample>
            <ComponentExample name="Date Picker Form">
              <DatePickerForm />
            </ComponentExample>
            <ComponentExample name="Date Picker With Presets">
              <DatePickerWithPresets />
            </ComponentExample>
            <ComponentExample name="Date Picker With Range">
              <DatePickerWithRange />
            </ComponentExample>
          </div>
        </ComponentSection> */}

        {/* Dialogs */}
        <ComponentSection id="dialogs" title="Dialogs">
          <div className="flex flex-row gap-6">
            <ComponentExample name="Dialog Demo">
              <DialogDemo />
            </ComponentExample>
            <ComponentExample name="Dialog Close Button">
              <DialogCloseButton />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Inputs */}
        <ComponentSection id="inputs" title="Inputs">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ComponentExample name="Input Demo">
              <InputDemo />
            </ComponentExample>
            <ComponentExample name="Input Disabled">
              <InputDisabled />
            </ComponentExample>
            <ComponentExample name="Input File">
              <InputFile />
            </ComponentExample>
            <ComponentExample name="Input Form">
              <InputForm />
            </ComponentExample>
            <ComponentExample name="Input With Button">
              <InputWithButton />
            </ComponentExample>
            <ComponentExample name="Input With Label">
              <InputWithLabel />
            </ComponentExample>
            <ComponentExample name="Input With Text">
              <InputWithText />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Labels */}
        <ComponentSection id="labels" title="Labels">
          <div className="max-w-md">
            <ComponentExample name="Label Demo">
              <LabelDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Navigation */}
        <ComponentSection id="navigation" title="Navigation">
          <div className="flex flex-col gap-6">
            <ComponentExample name="Navigation Menu Demo">
              <NavigationMenuDemo />
            </ComponentExample>
            <ComponentExample name="Pagination Demo">
              <PaginationDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Overlays */}
        <ComponentSection id="overlays" title="Overlays">
          <div className="flex flex-row gap-6">
            <ComponentExample name="Hover Card Demo">
              <HoverCardDemo />
            </ComponentExample>
            <ComponentExample name="Popover Demo">
              <PopoverDemo />
            </ComponentExample>
            <ComponentExample name="Mode Toggle">
              <ModeToggle />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Radio Groups */}
        <ComponentSection id="radio" title="Radio Groups">
          <div className="flex flex-row gap-6">
            <ComponentExample name="Radio Group Demo">
              <RadioGroupDemo />
            </ComponentExample>
            <ComponentExample name="Radio Group Form">
              <RadioGroupForm />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Scroll Areas */}
        <ComponentSection id="scroll" title="Scroll Areas">
          <div className="flex flex-col gap-6 lg:flex-row">
            <ComponentExample name="Scroll Area Demo">
              <ScrollAreaDemo />
            </ComponentExample>
            <ComponentExample name="Scroll Area Horizontal Demo">
              <ScrollAreaHorizontalDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Selects */}
        <ComponentSection id="selects" title="Selects">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ComponentExample name="Select Demo">
              <SelectDemo />
            </ComponentExample>
            <ComponentExample name="Select Form">
              <SelectForm />
            </ComponentExample>
            <ComponentExample name="Select Scrollable">
              <SelectScrollable />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Separators */}
        <ComponentSection id="separators" title="Separators">
          <div className="max-w-md">
            <ComponentExample name="Separator Demo">
              <SeparatorDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Sheets */}
        <ComponentSection id="sheets" title="Sheets">
          <div className="flex flex-row gap-6">
            <ComponentExample name="Sheet Demo">
              <SheetDemo />
            </ComponentExample>
            <ComponentExample name="Sheet Side">
              <SheetSide />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Skeleton */}
        <ComponentSection id="skeleton" title="Skeleton">
          <div className="flex flex-col gap-6 lg:flex-row">
            <ComponentExample name="Skeleton Demo">
              <SkeletonDemo />
            </ComponentExample>
            <ComponentExample name="Skeleton Card">
              <SkeletonCard />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Sliders */}
        <ComponentSection id="sliders" title="Sliders">
          <div className="max-w-md">
            <ComponentExample name="Slider Demo">
              <SliderDemo />
            </ComponentExample>
            <ComponentExample name="Progress Demo">
              <ProgressDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Switches */}
        <ComponentSection id="switches" title="Switches">
          <div className="flex flex-row gap-6">
            <ComponentExample name="Switch Demo">
              <SwitchDemo />
            </ComponentExample>
            <ComponentExample name="Switch Form">
              <SwitchForm />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Tables */}
        <ComponentSection id="tables" title="Tables">
          <div className="max-w-4xl">
            <ComponentExample name="Table Demo">
              <TableDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Tabs */}
        <ComponentSection id="tabs" title="Tabs">
          <div className="max-w-2xl">
            <ComponentExample name="Tabs Demo">
              <TabsDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Textareas */}
        <ComponentSection id="textareas" title="Textareas">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ComponentExample name="Textarea Demo">
              <TextareaDemo />
            </ComponentExample>
            <ComponentExample name="Textarea Disabled">
              <TextareaDisabled />
            </ComponentExample>
            <ComponentExample name="Textarea Form">
              <TextareaForm />
            </ComponentExample>
            <ComponentExample name="Textarea With Button">
              <TextareaWithButton />
            </ComponentExample>
            <ComponentExample name="Textarea With Label">
              <TextareaWithLabel />
            </ComponentExample>
            <ComponentExample name="Textarea With Text">
              <TextareaWithText />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Toggles */}
        <ComponentSection id="toggles" title="Toggles">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ComponentExample name="Toggle Demo">
              <ToggleDemo />
            </ComponentExample>
            <ComponentExample name="Toggle Disabled">
              <ToggleDisabled />
            </ComponentExample>
            <ComponentExample name="Toggle Group Demo">
              <ToggleGroupDemo />
            </ComponentExample>
            <ComponentExample name="Toggle Group Disabled">
              <ToggleGroupDisabled />
            </ComponentExample>
            <ComponentExample name="Toggle Group Large">
              <ToggleGroupLg />
            </ComponentExample>
            <ComponentExample name="Toggle Group Outline">
              <ToggleGroupOutline />
            </ComponentExample>
            <ComponentExample name="Toggle Group Single">
              <ToggleGroupSingle />
            </ComponentExample>
            <ComponentExample name="Toggle Group Small">
              <ToggleGroupSm />
            </ComponentExample>
            <ComponentExample name="Toggle Large">
              <ToggleLg />
            </ComponentExample>
            <ComponentExample name="Toggle Outline">
              <ToggleOutline />
            </ComponentExample>
            <ComponentExample name="Toggle Small">
              <ToggleSm />
            </ComponentExample>
            <ComponentExample name="Toggle With Text">
              <ToggleWithText />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Tooltips */}
        <ComponentSection id="tooltips" title="Tooltips">
          <div className="max-w-md">
            <ComponentExample name="Tooltip Demo">
              <TooltipDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Typography */}
        <ComponentSection id="typography" title="Typography">
          <div className="flex max-w-4xl flex-col gap-6">
            <ComponentExample name="Typography Demo">
              <TypographyDemo />
            </ComponentExample>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ComponentExample name="Typography H1">
                <TypographyH1 />
              </ComponentExample>
              <ComponentExample name="Typography H2">
                <TypographyH2 />
              </ComponentExample>
              <ComponentExample name="Typography H3">
                <TypographyH3 />
              </ComponentExample>
              <ComponentExample name="Typography H4">
                <TypographyH4 />
              </ComponentExample>
              <ComponentExample name="Typography Paragraph">
                <TypographyP />
              </ComponentExample>
              <ComponentExample name="Typography Blockquote">
                <TypographyBlockquote />
              </ComponentExample>
              <ComponentExample name="Typography List">
                <TypographyList />
              </ComponentExample>
              <ComponentExample name="Typography Inline Code">
                <TypographyInlineCode />
              </ComponentExample>
              <ComponentExample name="Typography Lead">
                <TypographyLead />
              </ComponentExample>
              <ComponentExample name="Typography Large">
                <TypographyLarge />
              </ComponentExample>
              <ComponentExample name="Typography Small">
                <TypographySmall />
              </ComponentExample>
              <ComponentExample name="Typography Muted">
                <TypographyMuted />
              </ComponentExample>
            </div>
            <ComponentExample name="Typography Table">
              <TypographyTable />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Notifications */}
        <ComponentSection id="notifications" title="Notifications">
          <div className="max-w-md">
            <ComponentExample name="Sonner Demo">
              <SonnerDemo />
            </ComponentExample>
          </div>
        </ComponentSection>
      </div>
    </div>
  );
}
