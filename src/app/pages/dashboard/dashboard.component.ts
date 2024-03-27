import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseDashboardComponent } from '../../components/base-dashboard/base-dashboard.component';
import { CardInfoComponent } from '../../components/card-info/card-info.component';
import { RecentBillContainerComponent } from '../../components/recent-bill-container/recent-bill-container.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BaseDashboardComponent, CardInfoComponent, RecentBillContainerComponent],
  templateUrl: './dashboard.component.html',
  styles: ``
})
export class DashboardComponent {
  
}
