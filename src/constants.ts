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
];

export const OptionsDocument: Array<SelectTypes> = [
  { value: '65f9a57a37ca727ace69f4c9', label: 'V' },
  { value: 'b', label: 'E' },
];