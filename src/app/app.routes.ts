import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RoutesNavigation } from '../enums';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
    {
        path: RoutesNavigation.main,
        component: MainComponent
    },
    {
        path: RoutesNavigation.login,
        component: LoginComponent
    },
    {
        path: RoutesNavigation.register,
        component: RegisterComponent
    },
];
