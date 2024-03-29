import { Component } from '@angular/core';
import { BaseDashboardComponent } from '../../components/base-dashboard/base-dashboard.component';
import { CustomerInfoComponent } from '../../components/customer-info/customer-info.component';
import { AddPaymentsComponent } from '../../components/add-payments/add-payments.component';

@Component({
  selector: 'app-generate-bill',
  standalone: true,
  imports: [BaseDashboardComponent, CustomerInfoComponent, AddPaymentsComponent],
  templateUrl: './generate-bill.component.html',
  styles: ``
})
export class GenerateBillComponent {

}
