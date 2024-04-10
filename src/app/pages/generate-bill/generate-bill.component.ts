import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseDashboardComponent } from '../../components/base-dashboard/base-dashboard.component';
import { CustomerInfoComponent } from '../../components/customer-info/customer-info.component';
import { AddPaymentsComponent } from '../../components/add-payments/add-payments.component';
import { BillSummaryComponent } from '../../components/bill-summary/bill-summary.component';

@Component({
  selector: 'app-generate-bill',
  standalone: true,
  imports: [BaseDashboardComponent, CustomerInfoComponent, AddPaymentsComponent, BillSummaryComponent, CommonModule],
  templateUrl: './generate-bill.component.html',
  styles: ``
})
export class GenerateBillComponent {
  isCustomerAdded: boolean = false;

  handleCustomerAdded(): void {
    this.isCustomerAdded = true;
  }

}
