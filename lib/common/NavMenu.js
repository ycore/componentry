import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { Fragment } from 'react/jsx-runtime';
import { Dropdown, Navbar, Sidebar, StackedLayout } from '../catalyst/index.js';
export function NavMenu({ className, navConfig, stackClass, filters = [], children }) {
    const activeNav = navFilter.filterNavConfig(navConfig, filters);
    return (activeNav.sections.length > 0 && (_jsx(StackedLayout, { className: stackClass, navbar: _jsx(Navbar, { className: className, children: activeNav.sections.map((section, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: navbar sections remain imutable
            _jsx(Navbar.Section, { className: "max-lg:hidden", children: section.items.map((item, itemIndex) => {
                    if (item.items) {
                        const headingItem = item.items.find(subItem => subItem.heading);
                        const remainderItems = headingItem ? item.items.filter(subItem => subItem !== headingItem) : item.items;
                        return (
                        // biome-ignore lint/suspicious/noArrayIndexKey: navbar items remain imutable
                        _jsxs(Dropdown, { children: [_jsxs(Dropdown.Button, { as: Navbar.Item, className: "hidden lg:block", children: [headingItem?.tag || _jsx(Navbar.Label, { children: headingItem?.heading }), _jsx(ChevronDownIcon, {})] }), _jsx(Dropdown.Menu, { anchor: "bottom start", className: "min-w-80 lg:min-w-64", children: remainderItems.map((subItem, subIndex) => (_jsxs(Dropdown.Item, { href: subItem.url, children: [subItem.tag, subItem.label && _jsx(Dropdown.Label, { children: subItem.label })] }, `dropitem-${subIndex}-${subItem.url}`))) }, `dropdown-menu-${itemIndex}`)] }, `dropdown-${itemIndex}`));
                    }
                    return (_jsxs(Navbar.Item, { href: item.url, children: [item.tag, item.label && _jsx(Navbar.Label, { children: item.label })] }, `navbar-${itemIndex}-${item.url}`));
                }) }, `navbar-section-${index}`))) }), sidebar: _jsx(Sidebar, { children: _jsx(Sidebar.Body, { children: activeNav.sections.map((section, index) => {
                    return (
                    // biome-ignore lint/suspicious/noArrayIndexKey: navbar items remain imutable
                    _jsx(Sidebar.Section, { children: section.items.map((item, index) => {
                            if (item.items) {
                                return (
                                // biome-ignore lint/suspicious/noArrayIndexKey: navbar items remain imutable
                                _jsxs(Fragment, { children: [_jsx(Sidebar.Divider, {}, `sidebar-divider-${index}`), _jsx(Sidebar.Section, { children: item.items.map((item, index) => {
                                                return (_jsxs(Sidebar.Item, { href: item.url, children: [item.tag, item.label && _jsx(Sidebar.Label, { children: item.label })] }, `sidebar-${index}-${item.url}`));
                                            }) }, `sidebar-section2-${index}-${item.url}`)] }, index));
                            }
                            return (_jsxs(Sidebar.Item, { href: item.url ?? '#', children: [item.tag, item.label && _jsx(Sidebar.Label, { children: item.label })] }, `sidebar-${index}-${item.url}`));
                        }) }, `sidebar-section-${index}`));
                }) }) }), children: children })));
}
const navFilter = {
    /**
     * Filters navigation configuration based on provided filter parameters
     * @param navConfig - The navigation configuration object
     * @param filterParams - Array of filter items to include (e.g. ['signed-in'])
     * @returns A filtered copy of the navigation configuration
     */
    filterNavConfig: (navConfig, filterParams) => {
        const filteredNav = {
            sections: navConfig.sections.map(section => {
                if (navFilter.shouldIncludeItemsArray(section.items, filterParams)) {
                    return { ...section, items: navFilter.filterNavItems(section.items, filterParams) };
                }
                return { ...section, items: [] };
            }),
        };
        return filteredNav;
    },
    /**
     * Checks if an items array should be included based on filter parameters
     * If any item in the array has a filter that doesn't match, the entire array should be excluded
     * @param items - Array of navigation items
     * @param filterParams - Filter parameters to match against
     * @returns boolean indicating if the items array should be included
     */
    shouldIncludeItemsArray: (items, filterParams) => {
        if (!items || !Array.isArray(items)) {
            return true;
        }
        for (const item of items) {
            if (item.filter) {
                const hasMatchingFilter = item.filter.some((filterValue) => filterParams.includes(filterValue));
                if (!hasMatchingFilter) {
                    return false;
                }
            }
        }
        return true;
    },
    /**
     * Recursively filters navigation items based on filter parameters
     * @param items - Array of navigation items
     * @param filterParams - Array of filter items to include
     * @returns Filtered array of navigation items
     */
    filterNavItems: (items, filterParams) => {
        if (!items || !Array.isArray(items)) {
            return [];
        }
        const result = [];
        for (const item of items) {
            const newItem = { ...item };
            if (newItem.items && Array.isArray(newItem.items)) {
                if (!navFilter.shouldIncludeItemsArray(newItem.items, filterParams)) {
                    continue;
                }
                newItem.items = navFilter.filterNavItems(newItem.items, filterParams);
            }
            result.push(newItem);
        }
        return result;
    },
};
//# sourceMappingURL=NavMenu.js.map