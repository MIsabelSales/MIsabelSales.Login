import { ValidarCelComponent } from './components/validar-cel/validar-cel.component';
import { CodigoCelComponent } from './components/codigo-cel/codigo-cel.component';
import { EnviarEmailComponent } from './components/enviar-email/enviar-email.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'enviar-email',component:EnviarEmailComponent},
  {path:'codigo-cel',component:CodigoCelComponent},
  {path:'validar-cel',component:ValidarCelComponent},
  {path:'**',pathMatch:'full',redirectTo:'login'}

  /*{path:'',component:LoginComponent},
  {
    path: 'registro', loadChildren: () => import('./components/registro/registro.component').then(m => m.RegistroComponent)
  }*/
];
/*
const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)
  }];*/


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

