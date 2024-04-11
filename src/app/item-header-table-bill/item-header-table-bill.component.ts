import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-header-table-bill',
  standalone: true,
  imports: [],
  template: `
    <div class="font-bold text-sm text-white text-center">{{ content }}</div>
  `,
  styles: ``,
})
export class ItemHeaderTableBillComponent {
  @Input() content: string = 'default';
}
