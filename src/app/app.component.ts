import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { nonSidebar } from '../constants';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'easyBill';
  nonSidebar = nonSidebar;

  constructor(public router: Router) {}
}
