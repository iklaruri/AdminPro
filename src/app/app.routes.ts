import { Routes, RouterModule } from "@angular/router";
import { NoPageComponent } from './shared/no-page/no-page.component';



const appRoutes: Routes = [
   { path: '**', component: NoPageComponent }
]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash:true});
