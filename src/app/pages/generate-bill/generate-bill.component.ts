import { Component } from '@angular/core';
import { BaseDashboardComponent } from '../../components/base-dashboard/base-dashboard.component';
import { CustomerInfoComponent } from '../../components/customer-info/customer-info.component';

@Component({
  selector: 'app-generate-bill',
  standalone: true,
  imports: [BaseDashboardComponent, CustomerInfoComponent],
  templateUrl: './generate-bill.component.html',
  styles: ``
})
export class GenerateBillComponent {

}
