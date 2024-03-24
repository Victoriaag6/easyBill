import { Component } from '@angular/core';
import { EasyLogoComponent } from '../../components/easy-logo/easy-logo.component';
import { InputComponent } from '../../components/input/input.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';
import { RoutesNavigation } from '../../../enums';
import { SelectTypes } from '../../../types';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [EasyLogoComponent, InputComponent, RouterModule, ButtonComponent],
  templateUrl: './register.component.html',
  styles: ``,
})
export class RegisterComponent {
  routes = RoutesNavigation;
  optionsDocument: SelectTypes[] = [
    { value: 'a', label: 'V' },
    { value: 'b', label: 'E' },
  ];
}
