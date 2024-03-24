import { Component, Input, SimpleChanges } from '@angular/core';
import { InputTypes, InputValues, SelectTypes } from '../../../types';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styles: ``,
})
export class InputComponent {
  @Input() type: InputTypes = 'text';
  @Input() placeholder = 'Este es el placeholder del input';
  @Input() value: InputValues = '';
  @Input() title = 'Este es el titulo del input';
  @Input() id: string | number = '';
  @Input() options: Array<SelectTypes> = [];

  selectOption: string | number | undefined;

  ngOnInit() {
    this.selectOption = this.options[0]?.value;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['options']) {
      this.selectOption = this.options[0]?.value;
    }
  }
}
