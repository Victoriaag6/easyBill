import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { nonSidebar } from '../constants';
import { FooterComponent } from './components/footer/footer.component';
import { EasySidebarComponent } from './components/easy-sidebar/easy-sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, EasySidebarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'easyBill';
  nonSidebar = nonSidebar;

  constructor(public router: Router) {}
}
