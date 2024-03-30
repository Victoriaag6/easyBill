import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { RoutesNavigation } from '../enums';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GenerateBillComponent } from './pages/generate-bill/generate-bill.component';
import { ProfileComponent } from './pages/profile/profile.component';

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
    {
        path: RoutesNavigation.dashboard,
        component: DashboardComponent
    },
    {
        path: RoutesNavigation.generateBill,
        component: GenerateBillComponent
    },
    {
        path: RoutesNavigation.profile,
        component: ProfileComponent
    }
];
