import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesComponent } from './components/actividades/actividades.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {path:"", component: LoginComponent},
  {path:"inicio", component: InicioComponent},
  {path:"actividades", component: ActividadesComponent, canActivate: [AuthGuard]},
  {path:"registro", component: RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
