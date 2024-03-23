import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RoutesNavigation } from '../enums';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path: RoutesNavigation.main,
        component: MainComponent
    },
    {
        path: RoutesNavigation.login,
        component: LoginComponent
    }
];
