import { Component, Input } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'easy-logo',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './easy-logo.component.html',
  styles: ``,
})
export class EasyLogoComponent {
  @Input() title = 'EASYBILL'
  @Input() imgRoute:string|null = null
}
