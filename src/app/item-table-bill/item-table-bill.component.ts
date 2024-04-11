import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-table-bill',
  standalone: true,
  imports: [],
  template: `
    <div class="flex w-full gap-4 items-center">
      <div class="w-1/12 font-bold text-sm text-black text-center">
        {{ item }}
      </div>
      <div class="w-2/12 font-bold text-sm text-black text-center">
        {{ sku }}
      </div>
      <div class="w-2/12 font-bold text-sm text-black text-center">
        {{ description }}
      </div>
      <div class="w-1/12 font-bold text-sm text-black text-center">
        {{ price }}
    </div>
      <div class="w-2/12 font-bold text-sm text-black text-center">
        {{ ammount }}
      </div>
      <div class="w-1/12 font-bold text-sm text-black text-center">
        {{ tax }}
      </div>
      <div class="w-1/12 font-bold text-sm text-black text-center">
        {{ total }}
      </div>
      <div class="w-2/12 flex justify-around gap-0">
        <button class="rounded-lg p-1 bg-blue-500">Edit</button>
        <button class="rounded-lg p-1 bg-red-500">Erase</button>
      </div>
    </div>
  `,
  styles: ``,
})
export class ItemTableBillComponent {
  @Input() item: number = 1;
  @Input() sku: string = '1d1vd6f';
  @Input() description: string = 'Coca-Cola';
  @Input() price: number = 1.5;
  @Input() ammount: number = 2;
  @Input() tax: number = 0.1;
  @Input() total: number = 3.3;
}
