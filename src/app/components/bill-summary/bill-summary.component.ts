import { Component, Output, EventEmitter } from '@angular/core';
import { BaseCardActionComponent } from '../base-card-action/base-card-action.component';
import { ButtonComponent } from '../button/button.component';
import { BillInfoComponent } from '../bill-info/bill-info.component';
import { BillTableComponent } from '../../bill-table/bill-table.component';

@Component({
  selector: 'app-bill-summary',
  standalone: true,
  imports : [BaseCardActionComponent, ButtonComponent, BillInfoComponent, BillTableComponent],
  templateUrl: './bill-summary.component.html',
  styles: ``
})
export class BillSummaryComponent {
  date: string = this.getCurrentDate();
  time: string = this.getCurrentTime();
  billInfoLabels: Array<string> = ['customer', 'date', 'time'];
  billInfoValues: Array<string> = ['John Doe', this.date, this.time];

  @Output() billDeleted: EventEmitter<void> = new EventEmitter<void>();

  handleCancelBill(){
    this.billDeleted.emit();
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }

  getCurrentTime(): string {
    return new Date().toLocaleTimeString();
  }

}
