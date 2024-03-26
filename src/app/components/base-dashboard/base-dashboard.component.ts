import { Component } from '@angular/core';
import { BreadCrumbComponent } from '../breadcrumb/breadcrumb.component';

@Component({
  selector: 'base-dashboard',
  standalone: true,
  imports: [BreadCrumbComponent],
  templateUrl: './base-dashboard.component.html',
  styles: ``
})
export class BaseDashboardComponent {

}
