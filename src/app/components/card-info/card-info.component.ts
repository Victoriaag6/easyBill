import { Component, Input } from '@angular/core';
import { IconsCards } from '../../../enums';

@Component({
  selector: 'card-info',
  standalone: true,
  imports: [],
  templateUrl: './card-info.component.html',
  styles: ``
})
export class CardInfoComponent {
  @Input() typeIcon : IconsCards = IconsCards.customers;
  @Input() srcIcon = `../../../assets/icons/${this.typeIcon}.svg`
  @Input() title: string = 'Customers'
  @Input() content: string | number = 45
}
