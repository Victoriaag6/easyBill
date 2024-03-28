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
import ModalsCustoms from '../../../utility_components/Modals';
import { OptionsDocument } from '../../../constants';

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

  //TODO: Esto hay que sacarlo directamente al hacer el fetch, o ponerlo en constantes
  optionsDocument = OptionsDocument

  valorInputs: any = null; //TODO: Aqui hay que cambiar el tipo de dato
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
