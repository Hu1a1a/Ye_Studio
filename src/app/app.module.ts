import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout/layout-footer/layout-footer.component';
import { HomeComponent } from './view/home/home.component';
import { Error404Component } from './layout/404/404.component';
import { PresentacionCNComponent } from './view/home/presentacion-CN/presentacion.component';
import { PresentacionESComponent } from './view/home/presentacion-ES/presentacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    HomeComponent,
    Error404Component,
    PresentacionCNComponent,
    PresentacionESComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
