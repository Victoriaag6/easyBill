import { Component } from '@angular/core';
import { EasyLogoComponent } from '../../components/easy-logo/easy-logo.component';
import { InputComponent } from '../../components/input/input.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [EasyLogoComponent, InputComponent, RouterModule, ButtonComponent],
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent {

}
