import { Component, Input } from '@angular/core';
import { BreadCrumbComponent } from '../breadcrumb/breadcrumb.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'base-dashboard',
  standalone: true,
  imports: [BreadCrumbComponent, CommonModule],
  templateUrl: './base-dashboard.component.html',
  styles: ``
})
export class BaseDashboardComponent {
  @Input() title: string = 'Dashboard'
  @Input() userName: string = 'Enmanuel Colina'
  @Input() srcAvatar = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/640px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
  
  @Input() background: string = 'white'

  getBackgroundColor = () => `bg-${this.background}`
}
