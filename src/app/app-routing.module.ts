import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './layout/404/404.component';
import { oldHomeComponent } from './view/oldhome/home.component';
import { NosotrosComponent } from './view/Nosotros/app.component';
import { ServiciosComponent } from './view/Servicios/app.component';
import { ContactoComponent } from './view/Contacto/app.component';
import { HomeComponent } from './view/Home/home.component';
import { ProyectosComponente } from './view/Proyectos/app.component';

const routes: Routes = [
  { path: 'oldHome', component: oldHomeComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'nosotros', component: NosotrosComponent, },
  { path: 'proyectos', component: ProyectosComponente, },
  { path: 'servicios', component: ServiciosComponent, },
  { path: 'contacto', component: ContactoComponent, },
  { path: '404', component: Error404Component, },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true, scrollPositionRestoration: 'enabled'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
