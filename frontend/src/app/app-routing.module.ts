import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"", component: InicioComponent},
  {path:"login", component: LoginComponent},
  {path:"inicio", component: InicioComponent},
  {path:"actividades", component: ActividadesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
