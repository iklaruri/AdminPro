import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';


// COMPONENTES
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficsComponent } from './grafics/grafics.component';
import { PagesComponent } from './pages.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonutComponent } from '../components/graficos/grafico-donut/grafico-donut.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ModalUploadComponent } from '../components/modal-upload/modal-upload.component';

// MODULOS
import { SharedModule } from '../shared/shared.module';
import { PipesModule } from '../pipes/pipes.module';

//RUTAS
import { PAGES_ROUTES } from './pages.routes';





@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficsComponent,
    PagesComponent,
    IncrementadorComponent,
    GraficoDonutComponent,
    AccountSettingsComponent,
    ProfileComponent,
    UsuariosComponent,
    ModalUploadComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    GraficsComponent,
    PagesComponent
  ],
  imports:[
    CommonModule,
    FormsModule,
    SharedModule,
    ChartsModule,
    PipesModule,
    PAGES_ROUTES
  ]
})
export class PageModule { }
