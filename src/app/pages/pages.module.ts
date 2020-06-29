import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficsComponent } from './grafics/grafics.component';
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonutComponent } from '../components/graficos/grafico-donut/grafico-donut.component';

import { SharedModule } from '../shared/shared.module';

import { PAGES_ROUTES } from './pages.routes';

import { ChartsModule } from 'ng2-charts';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficsComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonutComponent,
    AccountSettingsComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    GraficsComponent,
    PagesComponent
  ],
  imports:[
    FormsModule,
    SharedModule,
    ChartsModule,
    PAGES_ROUTES
  ]
})
export class PageModule { }
