import { Component } from '@angular/core';
import { EasyLogoComponent } from '../../components/easy-logo/easy-logo.component';
import { InputComponent } from '../../components/input/input.component';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { RoutesNavigation, URLS } from '../../../enums';
import {
  LoginResponseError,
  RegisterResponse,
  SelectTypes,
} from '../../../types';
import { obtainDataForm } from '../../../services/obtainDataForm';
import fetcho from '../../../services/fetcho';
import Swal from 'sweetalert2';
import ModalsCustoms from '../../../utility_components/Modals';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [EasyLogoComponent, InputComponent, RouterModule, ButtonComponent],
  templateUrl: './register.component.html',
  styles: ``,
})
export class RegisterComponent {
  constructor(private router: Router) {}

  routes = RoutesNavigation;
  optionsDocument: SelectTypes[] = [
    { value: '65f9a57a37ca727ace69f4c9', label: 'V' },
    { value: 'b', label: 'E' },
  ];

  valorInputs: any = null; //<! Aqui hay que cambiar el tipo de dato
  responseRegister: LoginResponseError | RegisterResponse | null = null;

  handleSubmit = (e: Event) => (this.valorInputs = obtainDataForm(e));

  async register(e: Event) {
    this.handleSubmit(e);

    console.log(this.valorInputs);

    const response: LoginResponseError | RegisterResponse | null = await fetcho(
      { url: URLS.URL_REGISTER, method: 'POST', body: this.valorInputs }
    );

    console.log(response);

    this.responseRegister = response;
    if (!this.responseRegister || 'error' in this.responseRegister) {
      ModalsCustoms.error({ text: 'No se ha registrado' });
    } else {
      ModalsCustoms.success({
        text: 'Se ha registrado correctamente, se redirecciona al login',
      });

      setTimeout(() => {
        this.router.navigate([RoutesNavigation.loginOutside]);
      }, 1000);
    }
  }
}
