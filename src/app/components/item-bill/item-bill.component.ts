import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Currency, TimeAgoTime } from '../../../types';
import { SymbolCurrency } from '../../../enums';

@Component({
  selector: 'item-bill',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full flex justify-between">

      <div class="flex gap-3 w-9/12 items-center justify-start">
        <img [src]="itemRoute" alt="Item Bill" class="aspect-square max-w-14">
        <p class="font-semibold font-DM text-black">{{personName}}</p>
      </div>

      <div class="w-2/12">
        <p class=" text-black font-semibold font-DM">{{totalValue}}</p>
      </div>

      <div class="w-1/12">
        <p class="font-semibold text-gray-600 font-Poppins">
        {{totalLastTime}}
        </p>
      </div>
    </div>
  `,
  styles: ``
})
export class ItemBillComponent implements OnInit, OnChanges{
  @Input() itemRoute: string = "../../../assets/item-default-bill.jpg"
  @Input() personName: string = "Lionel Messi"

  @Input() setCurrency: Currency = 'USD'
  symbolCurrency: SymbolCurrency = SymbolCurrency[this.setCurrency] 

  @Input() valueInDolars: number = 0

  totalValue: string = ''

  @Input() lastTime: TimeAgoTime = '1m'
  totalLastTime: string = ''

  ngOnInit(): void {
    this.getValue()
  }

  ngOnChanges(): void{
    this.totalLastTime = `${this.lastTime} ago`
  }

  getValue(){
    if(this.setCurrency == 'USD'){
      this.symbolCurrency = SymbolCurrency.USD
      this.totalValue = `${this.symbolCurrency}. ${this.valueInDolars}`
    }else if(this.setCurrency == 'VES'){
      this.symbolCurrency = SymbolCurrency.VES
      this.totalValue = `${this.symbolCurrency}. ${this.#convertBs(this.valueInDolars)}`
    }
  }

  #convertBs(dollars: number){
    return dollars * 37
  }

}
