import { Component, OnInit } from '@angular/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import getBreadcrumbs from '../../../services/getBreadcrumbs';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [NzBreadCrumbModule],
  template: `
    <nz-breadcrumb>
      @for(breadcrumb of breadcrumbs; track breadcrumb){
      <nz-breadcrumb-item>{{ breadcrumb }}</nz-breadcrumb-item>
      }
    </nz-breadcrumb>
  `,
  styles: ``,
})
export class BreadCrumbComponent implements OnInit {
  breadcrumbs: string[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    let url = this.router.url;
    this.breadcrumbs = getBreadcrumbs({ url });
  }
}
