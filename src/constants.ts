import { Token } from '@angular/compiler';
import { RoutesNavigation } from './enums';

export const nonSidebar = [
  RoutesNavigation.login,
  RoutesNavigation.main,
  RoutesNavigation.register,
].map((element) => `/${element}`);

export const HeaderAuth = (token: string) => `Authorization': Bearer ${token}`;
