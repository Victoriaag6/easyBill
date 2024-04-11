import { Component, OnInit } from '@angular/core';
import { EasyLogoComponent } from '../../components/easy-logo/easy-logo.component';
import { InputComponent } from '../../components/input/input.component';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { RoutesNavigation } from '../../../enums';
import fetcho from '../../../services/fetcho';
import { URLS } from '../../../enums';
import { LoginResponse, LoginResponseError } from '../../../types';
import LocalChanges from '../../../services/localChanges';
import { obtainDataForm } from '../../../services/obtainDataForm';
import ModalsCustoms from '../../../utility_components/Modals';

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
  token: string = '';

  constructor(private router: Router) {}

  handleSubmit = (e: Event) => (this.valorInputs = obtainDataForm(e));

  async login(e: Event) {
    ModalsCustoms.success({ text: 'Se ha logueado correctamente' });
    this.router.navigate([RoutesNavigation.dashboardOutside]);
  }

  // async login(e: Event) {
  //   this.handleSubmit(e);
  //   const response = await fetcho({
  //     url: URLS.URL_LOGIN,
  //     method: 'POST',
  //     body: this.valorInputs,
  //   });

  //   this.responseLogin = response;

  //   if (!this.responseLogin || 'error' in this.responseLogin) {
  //     ModalsCustoms.error({ text: 'No se ha logueado' });
  //   } else {
  //     LocalChanges.setItem('token', this.responseLogin.token);
  //     ModalsCustoms.success({ text: 'Se ha logueado correctamente' });
  //     this.router.navigate([RoutesNavigation.dashboardOutside]);
  //   }
  // }
}
