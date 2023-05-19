import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout/layout-footer/layout-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PresentacionComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
