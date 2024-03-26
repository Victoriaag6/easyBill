import { Token } from '@angular/compiler';
import { RoutesNavigation } from './enums';
import { SidebarRoutes } from './types';

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
    title: 'Main',
    path: RoutesNavigation.main,
  },
  {
    title: 'Login',
    path: RoutesNavigation.login,
  },
  {
    title: 'Register',
    path: RoutesNavigation.register,
  }
]