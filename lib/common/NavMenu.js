import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { Fragment } from 'react/jsx-runtime';
import { Dropdown, Navbar, Sidebar, StackedLayout } from '../catalyst/index.js';
export function NavMenu({ className, navConfig }) {
    return (navConfig.sections && (_jsx(StackedLayout, { navbar: _jsx(Navbar, { className: className, children: navConfig.sections.map((section, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey:
            _jsx(Navbar.Section, { className: "max-lg:hidden", children: section.items.map((item, itemIndex) => {
                    if (item.items) {
                        return (
                        //  biome-ignore lint/suspicious/noArrayIndexKey:
                        _jsxs(Dropdown, { children: [_jsxs(Dropdown.Button, { as: Navbar.Item, className: "hidden lg:block", children: [item.items[0]?.heading && _jsx(Navbar.Label, { children: item.items[0].heading }), _jsx(ChevronDownIcon, {})] }), _jsx(Dropdown.Menu, { anchor: "bottom start", className: "min-w-80 lg:min-w-64", children: item.items.map((subItem, subIndex) => (_jsxs(Dropdown.Item, { href: subItem.url, children: [subItem.tag, subItem.label && _jsx(Dropdown.Label, { children: subItem.label })] }, `dropitem-${subIndex}-${subItem.url}`))) }, `dropdown-menu-${itemIndex}`)] }, `dropdown-${itemIndex}`));
                    }
                    return (_jsxs(Navbar.Item, { href: item.url, children: [item.tag, item.label && _jsx(Navbar.Label, { children: item.label })] }, `navbar-${itemIndex}-${item.url}`));
                }) }, `navbar-section-${index}`))) }), sidebar: _jsx(Sidebar, { children: _jsx(Sidebar.Body, { children: navConfig.sections.map((section, index) => {
                    return (
                    // biome-ignore lint/suspicious/noArrayIndexKey:
                    _jsx(Sidebar.Section, { children: section.items.map((item, index) => {
                            if ('items' in item && item.items) {
                                return (
                                // biome-ignore lint/suspicious/noArrayIndexKey:
                                _jsxs(Fragment, { children: [_jsx(Sidebar.Divider, {}, `sidebar-divider-${index}`), _jsx(Sidebar.Section, { children: item.items.map((item, index) => {
                                                return (_jsxs(Sidebar.Item, { href: item.url, children: [item.tag, item.label && _jsx(Sidebar.Label, { children: item.label })] }, `sidebar-${index}-${item.url}`));
                                            }) }, `sidebar-section2-${index}-${item.url}`)] }, index));
                            }
                            return (_jsxs(Sidebar.Item, { href: item.url ?? '#', children: [item.tag, item.label && _jsx(Sidebar.Label, { children: item.label })] }, `sidebar-${index}-${item.url}`));
                        }) }, `sidebar-section-${index}`));
                }) }) }) })));
}
//# sourceMappingURL=NavMenu.js.map