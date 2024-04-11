import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { Application } from '@splinetool/runtime';
import { ButtonComponent } from '../../components/button/button.component';
import { RoutesNavigation } from '../../../enums';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: ``,
  imports: [ButtonComponent, LogoComponent],
  standalone: true,
})
export class MainComponent {
  routes = RoutesNavigation;

}
