import { Token } from '@angular/compiler';
import { RoutesNavigation } from './enums';
import { SelectTypes, SidebarRoutes } from './types';

export const nonSidebar = [
  RoutesNavigation.login,
  RoutesNavigation.main,
  RoutesNavigation.register,
].map((element) => `/${element}`);

export const HeaderAuth = (token: string) => `Authorization': Bearer ${token}`;

export const RoutesNavbar: Array<SidebarRoutes> = [
  {
    title: 'Dashboard',
    path: RoutesNavigation.dashboard,
  },
  {
    title: 'Generate Bill',
    path: RoutesNavigation.generateBill,
  },
  {
    title: 'Profile',
    path: RoutesNavigation.profile,
  },
  {
    title: 'Reports',
    path: RoutesNavigation.reports,
  },
];

export const OptionsDocument: Array<SelectTypes> = [
  { value: '65f9a57a37ca727ace69f4c9', label: 'V' },
  { value: 'b', label: 'E' },
];