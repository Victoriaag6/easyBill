import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseDashboardComponent } from '../../components/base-dashboard/base-dashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BaseDashboardComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {

}
