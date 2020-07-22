import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//COMPONENTES
import { AppComponent } from './app.component';

// MODULOS
import { PageModule } from './pages/pages.module';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { ServiceModule } from './services/service.module';

// RUTAS
import { APP_ROUTES } from './app.routes';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    PageModule,
    SharedModule,
    ServiceModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
