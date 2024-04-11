import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bill-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bill-info.component.html',
  styles: ``
})
export class BillInfoComponent {
  @Input() label: string;
  @Input() value: string;

  constructor() {
    this.label = '';
    this.value = '';
  }
}
