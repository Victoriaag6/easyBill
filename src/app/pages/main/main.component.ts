import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { Application } from '@splinetool/runtime';
import { ButtonComponent } from '../../components/button/button.component';
import { RoutesNavigation } from '../../../enums';
import { LogoComponent } from '../../components/logo/logo.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: ``,
  imports: [ButtonComponent, LogoComponent],
  standalone: true,
})
export class MainComponent implements AfterViewInit {
  @ViewChild('canvas3d') canvas3d: any;
  isLoadingCanvas = true;

  routes = RoutesNavigation;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const app = new Application(this.canvas3d.nativeElement);
      app.load('https://prod.spline.design/5PTlTfYEOzWPR1q4/scene.splinecode');
    }

    setTimeout(() => {
      this.isLoadingCanvas = false; 
    }, 500);
  }
}
