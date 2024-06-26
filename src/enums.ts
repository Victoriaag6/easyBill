export enum RoutesNavigation {
  mainOutside = '/',
  main = '',
  login = 'login',
  loginOutside = `/${RoutesNavigation.login}`,
  register = 'register',
  dashboard = 'dashboard',
  dashboardOutside = `/${RoutesNavigation.dashboard}`,
  generateBill = 'generate-bill',
  generateBillOutside = `/${RoutesNavigation.generateBill}`,
  profile = 'profile',
  profileOutside = `/${RoutesNavigation.profile}`,
  reports = 'reports',
  reportsOutside = `/${RoutesNavigation.reports}`,
}

export enum URLS {
  URL_BASE = 'https://easybill-api-dev-nhct.1.us-1.fl0.io',
  URL_LOGIN = '/api/auth/login',
  URL_REGISTER = '/api/auth/register',
  URL_ADD_CUSTOMER = '/api/customer/add',
}

export enum IconsCards{
  customers = 'customers'
}

export enum Currencys{
  USD = 'USD',
  VES = 'VES'
}

export enum SymbolCurrency{
  USD = '$',
  VES = 'Bs'
}

export enum ProfileTypeEnum{
  cashier = 'cashier',
  admin = 'admin'
}