import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutHeaderComponent } from './layout/header/layout-header.component';
import { LayoutFooterComponent } from './layout/footer/layout-footer.component';
import { HomeComponent } from './view/home/home.component';
import { Error404Component } from './layout/404/404.component';
import { Home2Component } from './view/newHome/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    HomeComponent,
    Home2Component,
    Error404Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
