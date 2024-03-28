import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CustomerInfoComponent } from '../customer-info/customer-info.component';

@Component({
  selector: 'base-card-action',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './base-card-action.component.html',
  styles: ``
})
export class BaseCardActionComponent {
  @Input() title: string = 'Default title';
}
