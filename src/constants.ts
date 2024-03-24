import { RoutesNavigation } from "./enums";

export const nonSidebar = [RoutesNavigation.login, RoutesNavigation.main, RoutesNavigation.register].map(element=> `/${element}`)