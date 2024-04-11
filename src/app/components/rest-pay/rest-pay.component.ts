import { Component , Input} from '@angular/core';

@Component({
  selector: 'rest-pay',
  standalone: true,
  imports: [],
  templateUrl: './rest-pay.component.html',
  styles: ``
})
export class RestPayComponent {
 @Input() amount: number;
 @Input() icon: string;

constructor() {
    this.amount = 87;
    this.icon = '../../../assets/item-default-bill.jpg';

  }}