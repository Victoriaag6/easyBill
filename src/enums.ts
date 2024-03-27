export enum RoutesNavigation {
  mainOutside = '/',
  main = '',
  login = 'login',
  loginOutside = `/${RoutesNavigation.login}`,
  register = 'register',
  dashboard = 'dashboard',
  dashboardOutside = `/${RoutesNavigation.dashboard}`,
}

export enum URLS {
  URL_BASE = 'https://easybill-api-prod-2.onrender.com',
  URL_LOGIN = '/api/auth/login',
  URL_REGISTER = '/api/auth/register'
}

export enum IconsCards{
  customers = 'customers'
}