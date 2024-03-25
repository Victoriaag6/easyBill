import { Component, OnInit } from '@angular/core';
import { EasyLogoComponent } from '../../components/easy-logo/easy-logo.component';
import { InputComponent } from '../../components/input/input.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { RoutesNavigation } from '../../../enums';
import fetcho from '../../../services/fetcho';
import { URLS } from '../../../enums';
import { LoginResponse, LoginResponseError } from '../../../types';
import e from 'express';
import LocalChanges from '../../../services/localChanges';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [EasyLogoComponent, InputComponent, RouterModule, ButtonComponent],
  templateUrl: './login.component.html',
  styles: ``,
})
export class LoginComponent {
  routes = RoutesNavigation;
  responseLogin: LoginResponse | LoginResponseError | null = null;
  valorInputs: any = null;
  token: string = ''

  handleSubmit = (e: Event) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const formData = new FormData(target);

    const valor: { [key: string]: FormDataEntryValue } = {};
    formData.forEach((value, key) => {
      valor[key] = value;
    });

    this.valorInputs = valor
  };

  async login(e: Event) {
    this.handleSubmit(e)
    console.log(this.valorInputs)
    const response = await fetcho({
      url: URLS.URL_LOGIN,
      method: 'POST',
      body: this.valorInputs,
    });

    this.responseLogin = response

    if (!this.responseLogin || 'error' in this.responseLogin) {
      alert('No se ha logueado');
    } else {
      LocalChanges.setItem('token', this.responseLogin.token);
      alert('Se logueo');
    }

  }
}
