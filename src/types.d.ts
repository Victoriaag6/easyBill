import { RoutesNavigation } from './enums';

export type ButtonTypes = 'primary' | 'secondary';

export type InputTypes = 'text' | 'password' | 'email' | 'number' | 'select';

export type InputValues = string | number | boolean;

export interface SelectTypes {
  id?: string | number;
  value: string | number;
  label: string;
}

export interface FetchOptions {
  url: string;
  method: string;
  body?: any;
  headers?: any;
}

export interface LoginInputs {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: {
    description: string;
    code: number | string;
  };
  token: string;
}

export interface LoginResponseError {
  error: {
    description: string;
    code: number | string;
  };
}

export type RegisterResponse = Omit<LoginResponse, 'token'>;

export interface SidebarRoutes {
  title: string;
  path: RoutesNavigation;
}

export type Currency = 'USD' | 'VES';

export type TimeAgoTime = `${number}s` | `${number}m` | `${number}h`

export interface RecentBill{
  srcImage?: string,
  personName: string,
  valueInDolars: number,
  timeAgo: TimeAgoTime
}