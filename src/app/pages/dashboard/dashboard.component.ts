import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseDashboardComponent } from '../../components/base-dashboard/base-dashboard.component';
import { CardInfoComponent } from '../../components/card-info/card-info.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BaseDashboardComponent, CardInfoComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {
  
}
