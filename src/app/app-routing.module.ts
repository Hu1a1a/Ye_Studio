import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { Error404Component } from './layout/404/404.component';
import { Home2Component } from './view/newHome/home.component';
const routes: Routes = [
  { path: 'oldHome', component: HomeComponent, },
  { path: 'home', component: Home2Component, },
  { path: '404', component: Error404Component, },
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
export class AppRoutingModule { }
