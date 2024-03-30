import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-profile',
  standalone: true,
  imports: [],
  template: `
    <div class="flex w-full">
      <label class="w-1/4 text-gray-600 font-bold font-DM">{{ label }}:</label>
      <p class="w-3/4 font-DM   text-blue-input font-bold">{{ value }}</p>
    </div>
  `,
  styles: ``,
})
export class ItemProfileComponent {
  @Input() label = 'ID';
  @Input() value = '110A';
}
