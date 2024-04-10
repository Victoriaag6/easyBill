import { Component } from '@angular/core';
import { BaseCardActionComponent } from '../base-card-action/base-card-action.component';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-bill-summary',
  standalone: true,
  imports : [BaseCardActionComponent, ButtonComponent],
  templateUrl: './bill-summary.component.html',
  styles: ``
})
export class BillSummaryComponent {

}
