import { Component, OnInit } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { LogoComponent } from '../logo/logo.component';
import { ButtonComponent } from '../button/button.component';
import { RoutesNavbar } from '../../../constants';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'easy-sidebar',
  standalone: true,
  imports: [NzMenuModule, LogoComponent, ButtonComponent, RouterModule],
  templateUrl: './easy-sidebar.component.html',
  styles: `
  [nz-menu] {
    width: 240px;
  }`
})
export class EasySidebarComponent implements OnInit {
  routes = RoutesNavbar;
  currentUrl: string = '';
  isCollapsed = false

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentUrl = this.router.url.slice(1);
  }

  isSelected(routePath: string): boolean {
    return this.currentUrl === routePath;
  }

  toggleSidebar(){
    this.isCollapsed = !this.isCollapsed
  }

  handleLogOut(){
    localStorage.clear();
    return this.router.navigate(['/login']);
  }
}
