import { Component, Input } from '@angular/core';
import { ButtonTypes } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() content = '';
  @Input() type: ButtonTypes = 'primary';
}
