import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Currency } from '../../../types';
import { SymbolCurrency } from '../../../enums';

@Component({
  selector: 'item-report',
  standalone: true,
  imports: [],
  template: `
  
    <td class="px-6 py-4 whitespace-nowrap">
      {{ code }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      {{ bill }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      {{ product }}
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        {{ totalValue }}
      </td>
  `,
  styles: ``,
})
export class ItemReportComponent implements OnInit {
@Input() code: number = 0o234233;
@Input() bill: number = 0o234233;

@Input() setCurrency: Currency = 'USD';
  symbolCurrency: SymbolCurrency = SymbolCurrency[this.setCurrency];

  @Input() product: string = 'Coca-Cola';
  @Input() price: number = 0;
  totalValue: string = '';

  ngOnInit(): void {
    this.getValue();
  }

  getValue() {
    if (this.setCurrency == 'USD') {
      this.symbolCurrency = SymbolCurrency.USD;
      this.totalValue = `${this.symbolCurrency}. ${this.price}`;
    } else if (this.setCurrency == 'VES') {
      this.symbolCurrency = SymbolCurrency.VES;
      this.totalValue = `${this.symbolCurrency}. ${this.#convertBs(
        this.price
      )}`;
    }
  }

  #convertBs(dollars: number) {
    return dollars * 37;
  }


}