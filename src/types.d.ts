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
}
