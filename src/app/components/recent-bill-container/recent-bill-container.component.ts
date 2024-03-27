import { Component, Input } from '@angular/core';
import { RecentBill } from '../../../types';
import { ItemBillComponent } from '../item-bill/item-bill.component';
import { recentBills } from '../../../mocks/recents-bills';

@Component({
  selector: 'recent-bill-container',
  standalone: true,
  imports: [ItemBillComponent],
  templateUrl: './recent-bill-container.component.html',
  styles: ``
})
export class RecentBillContainerComponent {
  @Input() recentBills: Array<RecentBill> = recentBills

  
}
