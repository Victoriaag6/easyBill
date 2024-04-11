import { Component } from '@angular/core';
import { BaseCardActionComponent } from '../base-card-action/base-card-action.component';
import { ButtonComponent } from '../button/button.component';
import { BillInfoComponent } from '../bill-info/bill-info.component';

@Component({
  selector: 'app-bill-summary',
  standalone: true,
  imports : [BaseCardActionComponent, ButtonComponent, BillInfoComponent],
  templateUrl: './bill-summary.component.html',
  styles: ``
})
export class BillSummaryComponent {
  billInfoLabels: Array<string> = ['customer', 'date', 'time'];
  billInfoValues: Array<string> = ['John Doe', '12/12/2012', '12:00 PM'];

}
