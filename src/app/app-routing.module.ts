import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { PresentacionCNComponent } from './view/home/presentacion-CN/presentacion.component';
import { PresentacionESComponent } from './view/home/presentacion-ES/presentacion.component';
import { Error404Component } from './layout/404/404.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'CN', component: PresentacionCNComponent },
      { path: 'ES', component: PresentacionESComponent },
      { path: '', redirectTo: 'ES', pathMatch: 'full' },
      { path: '**', redirectTo: 'ES', pathMatch: 'full' },
    ],
  },
  {
    path: '404',
    component: Error404Component,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '404', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
