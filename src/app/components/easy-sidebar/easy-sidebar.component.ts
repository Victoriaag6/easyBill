import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';


@Component({
  selector: 'easy-sidebar',
  standalone: true,
  imports: [NzMenuModule],
  templateUrl: './easy-sidebar.component.html',
  styles: `
  [nz-menu] {
    width: 240px;
  }`
})
export class EasySidebarComponent {

}
