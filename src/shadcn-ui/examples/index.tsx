import type React from 'react';
import { SpriteIcon } from '../../images/SpriteIcon';
import { ThemeSwitch } from '../../impetus/theme/ThemeSwitch';
import { type IconName, iconNames } from '../@types/lucide-sprites';
import { Tooltip, TooltipContent, TooltipTrigger } from '../components/tooltip';
import { Link } from '../custom/link';
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

function ReturnToTop({ spriteUrl }: { spriteUrl: string }) {
  return (
    <a
      href="#table-of-contents"
      className="inline-flex items-center gap-2 rounded-md bg-primary px-3 py-2 font-medium text-primary-foreground text-sm transition-colors hover:bg-primary/80 hover:text-foreground"
      aria-label="Return to table of contents"
    >
      <SpriteIcon url={spriteUrl} id="ArrowUp" className="h-4 w-4" />
    </a>
  );
}

function ComponentSection({ id, title, spriteUrl, children }: { id: string; title: string; spriteUrl: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-12">
      <div className="mb-6 flex items-center justify-between border-b pb-2">
        <h2 className="font-bold text-3xl">{title}</h2>
        <ReturnToTop spriteUrl={spriteUrl} />
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

function SpriteExamples({ spriteUrl }: { spriteUrl: string }) {
  return (
    <div className="p-6">
      <h2 className="mb-4 font-bold text-2xl">Lucide Icon Sprites</h2>
      <p className="mb-6 text-gray-600">All {iconNames.length} icons from the lucide sprite sheet</p>

      <div className="flex flex-row flex-wrap gap-4">
        {iconNames.map(iconName => (
          <div key={iconName} className="flex flex-col items-center rounded-lg border bg-background p-3 transition-colors hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50">
            <Tooltip>
              <TooltipTrigger asChild>
                <SpriteIcon<IconName> url={spriteUrl} id={iconName} className="h-6 w-6 text-accent-foreground" viewBox="0 0 24 24" />
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

export function ComponentExamples({ spriteUrl, exampleUrl }: { spriteUrl: string; exampleUrl: string }) {
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
          <div className='flex items-center gap-x-4'>
            <ThemeSwitch spriteUrl={spriteUrl} />
            <Link href="/">
              <SpriteIcon<IconName> url={spriteUrl} id="House" className="size-5 text-accent-foreground" viewBox="0 0 24 24" />
            </Link>
          </div>
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
        <ComponentSection id="sprites" title="Sprite Examples" spriteUrl={spriteUrl}>
          <div className="max-w-2xl">
            <SpriteExamples spriteUrl={spriteUrl} />
          </div>
        </ComponentSection>

        <h2 className="mb-4 font-bold text-4xl">Component Examples</h2>

        {/* Accordion */}
        <ComponentSection id="accordion" title="Accordion" spriteUrl={spriteUrl}>
          <div className="max-w-2xl">
            <ComponentExample name="Accordion Demo">
              <AccordionDemo spriteUrl={spriteUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Alerts */}
        <ComponentSection id="alerts" title="Alerts" spriteUrl={spriteUrl}>
          <div className="flex max-w-2xl flex-col gap-6">
            <ComponentExample name="Alert Demo">
              <AlertDemo spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Alert Destructive">
              <AlertDestructive spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Alert Dialog Demo">
              <AlertDialogDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Avatar */}
        <ComponentSection id="avatar" title="Avatar" spriteUrl={spriteUrl}>
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
        <ComponentSection id="badges" title="Badges" spriteUrl={spriteUrl}>
          <div className="flex flex-row gap-6">
            <ComponentExample name="Badge Demo">
              <BadgeDemo spriteUrl={spriteUrl} />
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
        <ComponentSection id="breadcrumbs" title="Breadcrumbs" spriteUrl={spriteUrl}>
          <div className="flex max-w-2xl flex-col gap-6">
            <ComponentExample name="Breadcrumb Demo">
              <BreadcrumbDemo spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Breadcrumb Dropdown">
              <BreadcrumbDropdown spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Breadcrumb Ellipsis">
              <BreadcrumbEllipsis spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Breadcrumb Link">
              <BreadcrumbLink spriteUrl={spriteUrl} />
            </ComponentExample>
            {/* <ComponentExample name="Breadcrumb Responsive">
              <BreadcrumbResponsive />
            </ComponentExample> */}
            <ComponentExample name="Breadcrumb Separator">
              <BreadcrumbSeparator spriteUrl={spriteUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Buttons */}
        <ComponentSection id="buttons" title="Buttons" spriteUrl={spriteUrl}>
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
              <ButtonIcon spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Button Link">
              <ButtonLink />
            </ComponentExample>
            <ComponentExample name="Button Loading">
              <ButtonLoading spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Button Outline">
              <ButtonOutline />
            </ComponentExample>
            <ComponentExample name="Button Secondary">
              <ButtonSecondary />
            </ComponentExample>
            <ComponentExample name="Button With Icon">
              <ButtonWithIcon spriteUrl={spriteUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Cards */}
        <ComponentSection id="cards" title="Cards" spriteUrl={spriteUrl}>
          <div className="flex flex-col gap-6 lg:flex-row">
            <ComponentExample name="Card Demo">
              <CardDemo />
            </ComponentExample>
            <ComponentExample name="Card With Form">
              <CardWithForm spriteUrl={spriteUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Checkboxes */}
        <ComponentSection id="checkboxes" title="Checkboxes" spriteUrl={spriteUrl}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ComponentExample name="Checkbox Demo">
              <CheckboxDemo spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Checkbox Disabled">
              <CheckboxDisabled spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Checkbox Form Multiple">
              <CheckboxFormMultiple spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Checkbox Form Single">
              <CheckboxFormSingle spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Checkbox With Text">
              <CheckboxWithText spriteUrl={spriteUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Collapsible */}
        <ComponentSection id="collapsible" title="Collapsible" spriteUrl={spriteUrl}>
          <div className="max-w-md">
            <ComponentExample name="Collapsible Demo">
              <CollapsibleDemo spriteUrl={spriteUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Combobox */}
        <ComponentSection id="combobox" title="Combobox" spriteUrl={spriteUrl}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ComponentExample name="Combobox Demo">
              <ComboboxDemo spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Combobox Dropdown Menu">
              <ComboboxDropdownMenu spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Combobox Form">
              <ComboboxForm spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Combobox Popover">
              <ComboboxPopover spriteUrl={spriteUrl} />
            </ComponentExample>
            {/* <ComponentExample name="Combobox Responsive">
              <ComboboxResponsive />
            </ComponentExample> */}
          </div>
        </ComponentSection>

        {/* Menus */}
        <ComponentSection id="menus" title="Menus" spriteUrl={spriteUrl}>
          <div className="flex flex-row gap-6">
            <ComponentExample name="Context Menu Demo">
              <ContextMenuDemo spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Dropdown Menu Demo">
              <DropdownMenuDemo spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Dropdown Menu Checkboxes">
              <DropdownMenuCheckboxes spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Dropdown Menu Radio Group">
              <DropdownMenuRadioGroup spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Menubar Demo">
              <MenubarDemo spriteUrl={spriteUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Data Display */}
        {/* <ComponentSection id="data" title="Data Display" spriteUrl={spriteUrl}>
          <div className="max-w-4xl">
            <ComponentExample name="Data Table Demo">
              <DataTableDemo />
            </ComponentExample>
          </div>
        </ComponentSection> */}

        {/* Date Picker */}
        {/* <ComponentSection id="date-picker" title="Date Picker" spriteUrl={spriteUrl}>
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
        <ComponentSection id="dialogs" title="Dialogs" spriteUrl={spriteUrl}>
          <div className="flex flex-row gap-6">
            <ComponentExample name="Dialog Demo">
              <DialogDemo spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Dialog Close Button">
              <DialogCloseButton spriteUrl={spriteUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Inputs */}
        <ComponentSection id="inputs" title="Inputs" spriteUrl={spriteUrl}>
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
        <ComponentSection id="labels" title="Labels" spriteUrl={spriteUrl}>
          <div className="max-w-md">
            <ComponentExample name="Label Demo">
              <LabelDemo spriteUrl={spriteUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Navigation */}
        <ComponentSection id="navigation" title="Navigation" spriteUrl={spriteUrl}>
          <div className="flex flex-col gap-6">
            <ComponentExample name="Navigation Menu Demo">
              <NavigationMenuDemo spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Pagination Demo">
              <PaginationDemo spriteUrl={spriteUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Overlays */}
        <ComponentSection id="overlays" title="Overlays" spriteUrl={spriteUrl}>
          <div className="flex flex-row gap-6">
            <ComponentExample name="Hover Card Demo">
              <HoverCardDemo />
            </ComponentExample>
            <ComponentExample name="Popover Demo">
              <PopoverDemo />
            </ComponentExample>
            <ComponentExample name="Mode Toggle">
              <ModeToggle spriteUrl={spriteUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Radio Groups */}
        <ComponentSection id="radio" title="Radio Groups" spriteUrl={spriteUrl}>
          <div className="flex flex-row gap-6">
            <ComponentExample name="Radio Group Demo">
              <RadioGroupDemo spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Radio Group Form">
              <RadioGroupForm spriteUrl={spriteUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Scroll Areas */}
        <ComponentSection id="scroll" title="Scroll Areas" spriteUrl={spriteUrl}>
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
        <ComponentSection id="selects" title="Selects" spriteUrl={spriteUrl}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ComponentExample name="Select Demo">
              <SelectDemo spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Select Form">
              <SelectForm spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Select Scrollable">
              <SelectScrollable spriteUrl={spriteUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Separators */}
        <ComponentSection id="separators" title="Separators" spriteUrl={spriteUrl}>
          <div className="max-w-md">
            <ComponentExample name="Separator Demo">
              <SeparatorDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Sheets */}
        <ComponentSection id="sheets" title="Sheets" spriteUrl={spriteUrl}>
          <div className="flex flex-row gap-6">
            <ComponentExample name="Sheet Demo">
              <SheetDemo spriteUrl={spriteUrl} />
            </ComponentExample>
            <ComponentExample name="Sheet Side">
              <SheetSide spriteUrl={spriteUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Skeleton */}
        <ComponentSection id="skeleton" title="Skeleton" spriteUrl={spriteUrl}>
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
        <ComponentSection id="sliders" title="Sliders" spriteUrl={spriteUrl}>
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
        <ComponentSection id="switches" title="Switches" spriteUrl={spriteUrl}>
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
        <ComponentSection id="tables" title="Tables" spriteUrl={spriteUrl}>
          <div className="max-w-4xl">
            <ComponentExample name="Table Demo">
              <TableDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Tabs */}
        <ComponentSection id="tabs" title="Tabs" spriteUrl={spriteUrl}>
          <div className="max-w-2xl">
            <ComponentExample name="Tabs Demo">
              <TabsDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Textareas */}
        <ComponentSection id="textareas" title="Textareas" spriteUrl={spriteUrl}>
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
        <ComponentSection id="toggles" title="Toggles" spriteUrl={spriteUrl}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ComponentExample name="Toggle Demo">
              <ToggleDemo spriteUrl={exampleUrl} />
            </ComponentExample>
            <ComponentExample name="Toggle Disabled">
              <ToggleDisabled spriteUrl={exampleUrl} />
            </ComponentExample>
            <ComponentExample name="Toggle Group Demo">
              <ToggleGroupDemo spriteUrl={exampleUrl} />
            </ComponentExample>
            <ComponentExample name="Toggle Group Disabled">
              <ToggleGroupDisabled spriteUrl={exampleUrl} />
            </ComponentExample>
            <ComponentExample name="Toggle Group Large">
              <ToggleGroupLg spriteUrl={exampleUrl} />
            </ComponentExample>
            <ComponentExample name="Toggle Group Outline">
              <ToggleGroupOutline spriteUrl={exampleUrl} />
            </ComponentExample>
            <ComponentExample name="Toggle Group Single">
              <ToggleGroupSingle spriteUrl={exampleUrl} />
            </ComponentExample>
            <ComponentExample name="Toggle Group Small">
              <ToggleGroupSm spriteUrl={exampleUrl} />
            </ComponentExample>
            <ComponentExample name="Toggle Large">
              <ToggleLg spriteUrl={exampleUrl} />
            </ComponentExample>
            <ComponentExample name="Toggle Outline">
              <ToggleOutline spriteUrl={exampleUrl} />
            </ComponentExample>
            <ComponentExample name="Toggle Small">
              <ToggleSm spriteUrl={exampleUrl} />
            </ComponentExample>
            <ComponentExample name="Toggle With Text">
              <ToggleWithText spriteUrl={exampleUrl} />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Tooltips */}
        <ComponentSection id="tooltips" title="Tooltips" spriteUrl={spriteUrl}>
          <div className="max-w-md">
            <ComponentExample name="Tooltip Demo">
              <TooltipDemo />
            </ComponentExample>
          </div>
        </ComponentSection>

        {/* Typography */}
        <ComponentSection id="typography" title="Typography" spriteUrl={spriteUrl}>
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
        <ComponentSection id="notifications" title="Notifications" spriteUrl={spriteUrl}>
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
