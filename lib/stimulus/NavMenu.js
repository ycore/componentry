import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import { toBase } from '@ycore/forge/utils';
import { Fragment, createContext, useContext } from 'react';
import clsx from 'clsx';
import { useLocation } from 'react-router';
import { Dropdown, Navbar, Sidebar, SidebarLayout, StackedLayout } from '../catalyst';
const LocationContext = createContext('');
export const SideMenu = ({ navConfigItems, navFilters, menuClass, ...props }) => {
    const { children, ...rest } = props;
    const location = useLocation();
    const { navbar, sidebar } = NavMenuFactory({ navConfigItems, navFilters });
    return (_jsx(LocationContext.Provider, { value: location.pathname, children: _jsx(SidebarLayout, { navbar: navbar, sidebar: sidebar, className: menuClass, ...rest, children: children }) }));
};
export const StackMenu = ({ navConfigItems, navFilters, menuClass, ...props }) => {
    const { children, ...rest } = props;
    const location = useLocation();
    const { navbar, sidebar } = NavMenuFactory({ navConfigItems, navFilters });
    return (_jsx(LocationContext.Provider, { value: location.pathname, children: _jsx(StackedLayout, { navbar: navbar, sidebar: sidebar, className: menuClass, ...rest, children: children }) }));
};
export const NavMenuFactory = ({ navConfigItems, navFilters = [] }) => {
    const shouldShowItem = (item) => {
        if (!item.filter || item.filter.length === 0)
            return true;
        return item.filter.some(filter => navFilters.includes(filter));
    };
    const filteredItems = navFilters.length === 0
        ? navConfigItems
        : navConfigItems
            .map(section => {
            return {
                section: section.section.filter(shouldShowItem).map(item => {
                    if (item.submenu) {
                        return {
                            ...item,
                            submenu: item.submenu.filter(shouldShowItem),
                        };
                    }
                    return item;
                }),
            };
        })
            .filter(section => section.section.length > 0);
    return {
        navbar: (_jsx(Navbar, { children: filteredItems.map((sections, idx) => {
                const keyIdx = toBase(idx);
                return (_jsxs(Fragment, { children: [idx === 1 && _jsx(Navbar.Spacer, {}, `space-${keyIdx}`), _jsxs(Navbar.Section, { className: "max-lg:hidden", children: [idx !== 0 && _jsx(Navbar.Divider, {}, `div-${keyIdx}`), sections.section.map(sectionitem => {
                                    return _jsx(NavMenuItem, { sectionitem: sectionitem, type: "navbar" }, sectionitem.ref);
                                })] }, `section-${keyIdx}`)] }, `fmt-${keyIdx}`));
            }) })),
        sidebar: (_jsx(Sidebar, { children: _jsx(Sidebar.Body, { children: filteredItems.map((sections, idx) => {
                    const keyIdx = toBase(idx);
                    return (_jsxs(Fragment, { children: [idx !== 0 && _jsx(Sidebar.Divider, {}, `div-${keyIdx}`), idx === filteredItems.length - 1 && _jsx(Sidebar.Spacer, {}, `space-${keyIdx}`), _jsx(Sidebar.Section, { children: sections.section.map((sectionitem, itx) => {
                                    return _jsx(NavMenuItem, { sectionitem: sectionitem, type: "sidebar" }, sectionitem.ref);
                                }) }, `section-${keyIdx}`)] }, `fmt-${keyIdx}`));
                }) }) })),
    };
};
const NavMenuItem = ({ sectionitem, type, navkey, ...props }) => {
    const pathname = useContext(LocationContext);
    const hasActive = sectionitem.submenu?.some(item => item.href && pathname === item.href);
    const isNavbar = type === 'navbar';
    return sectionitem.submenu ? (_jsxs(Dropdown, { children: [_jsxs(Dropdown.Button, { as: isNavbar ? Navbar.Item : Sidebar.Item, className: clsx(isNavbar ? 'max-lg:hidden' : 'lg:mb-2.5', hasActive ? 'rounded-b-none border-b' : 'border-current'), children: [sectionitem.component, 'label' in sectionitem && sectionitem.label && (isNavbar ? _jsx(Navbar.Label, { children: sectionitem.label }) : _jsx(Sidebar.Label, { children: sectionitem.label })), isNavbar ? _jsx(ChevronDownIcon, {}) : _jsx(ChevronRightIcon, {})] }), _jsx(Dropdown.Menu, { className: "min-w-80 lg:min-w-64", ...props, children: sectionitem.submenu.map((submenuitem, ix) => {
                    return (_jsxs(Dropdown.Item, { href: submenuitem.href, className: clsx(submenuitem.href && pathname === submenuitem.href ? 'rounded-l-none border-l-2' : 'border-current'), children: [submenuitem.component, 'label' in submenuitem && submenuitem.label && _jsx(Dropdown.Label, { children: submenuitem.label })] }, `drop-${toBase(ix)}`));
                }) }, navkey)] }, `dd-${navkey}`)) : isNavbar ? (_jsxs(Navbar.Item, { href: sectionitem.href, current: sectionitem.href && pathname === sectionitem.href, children: [sectionitem.component, 'label' in sectionitem && sectionitem.label && _jsx(Navbar.Label, { children: sectionitem.label })] }, navkey)) : (_jsxs(Sidebar.Item, { href: sectionitem.href, current: sectionitem.href && pathname === sectionitem.href, children: [sectionitem.component, 'label' in sectionitem && sectionitem.label && _jsx(Sidebar.Label, { children: sectionitem.label })] }, navkey));
};
