import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficsComponent } from './grafics/grafics.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const pagesRoutes: Routes = [
  {
     path: '',
     component: PagesComponent,
     children:[
       { path: 'dashboard', component: DashboardComponent },
       { path: 'progress', component: ProgressComponent },
       { path: 'grafics', component: GraficsComponent },
       { path: 'account-settings', component: AccountSettingsComponent },
       { path: '', redirectTo:'/dashboard', pathMatch:'full' },
     ]
   }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);