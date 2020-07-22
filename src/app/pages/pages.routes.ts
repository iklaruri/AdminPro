import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficsComponent } from './grafics/grafics.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfileComponent } from './profile/profile.component';

import { LoginGuardGuard } from '../services/service.index';


const pagesRoutes: Routes = [
  {
     path: '',
     component: PagesComponent,
     canActivate:[LoginGuardGuard],
     children:[
       { path: 'dashboard', component: DashboardComponent, data: {titulo:'Dashboard'} },
       { path: 'progress', component: ProgressComponent, data: {titulo:'Progress'}  },
       { path: 'grafics', component: GraficsComponent, data: {titulo:'Gráficas'}  },
       { path: 'account-settings', component: AccountSettingsComponent, data: {titulo:'Ajustes del tema'}  },
       { path: 'profile', component: ProfileComponent, data: {titulo:'Perfil'}  },
       { path: '', redirectTo:'/dashboard', pathMatch:'full' },
     ]
   }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
