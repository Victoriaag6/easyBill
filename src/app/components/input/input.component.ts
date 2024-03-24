import { Component, Input } from '@angular/core';
import { InputTypes, InputValues } from '../../../types';

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
}
