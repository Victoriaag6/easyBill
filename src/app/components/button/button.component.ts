import { Component, Input } from '@angular/core';
import { ButtonTypes } from '../../../types';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RoutesNavigation } from '../../../enums';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html'
})
export class ButtonComponent {
  @Input() content = '';
  @Input() type: ButtonTypes = 'primary';
  @Input() route: RoutesNavigation|null = null
  @Input() action:Function|null = null

  constructor(public router: Router) {}  
  routes = RoutesNavigation

  navigate() {
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }

  onClick() {
    if (this.action) {
      this.action();
    }
    this.navigate();
  }
}
