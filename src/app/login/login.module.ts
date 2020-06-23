import { NgModule } from '@angular/core';

import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ]
})
export class LoginModule { }
