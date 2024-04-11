import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-header-table-bill',
  standalone: true,
  imports: [],
  template: `
    <div class="font-bold text-sm text-gray-600 text-center">{{ content }}</div>
  `,
  styles: ``,
})
export class ItemHeaderTableBillComponent {
  @Input() content: string = 'default';
}
