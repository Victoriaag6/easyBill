import { Component } from '@angular/core';
import { ItemHeaderTableBillComponent } from '../item-header-table-bill/item-header-table-bill.component';
import { ItemTableBillComponent } from '../item-table-bill/item-table-bill.component';
import { ItemsTableMocks } from '../../mocks/items-table';

@Component({
  selector: 'bill-table',
  standalone: true,
  imports: [ItemHeaderTableBillComponent, ItemTableBillComponent],
  templateUrl: './bill-table.component.html',
  styles: ``,
})
export class BillTableComponent {
  items = [
    {
      name: 'item',
      width: 'w-1/12',
    },
    { name: 'sku', width: 'w-2/12' },
    { name: 'description', width: 'w-2/12' },
    { name: 'price', width: 'w-1/12' },
    { name: 'ammount', width: 'w-2/12' },
    { name: 'tax', width: 'w-1/12' },
    { name: 'total', width: 'w-1/12' },
    { name: 'action', width: 'w-2/12' },
  ];


  itemsTable = ItemsTableMocks

  number = 0;
  upNumber() {
    this.number++;
    return this.number;
  }
}
