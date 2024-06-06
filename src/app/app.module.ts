import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutHeaderComponent } from './layout/header/layout-header.component';
import { LayoutFooterComponent } from './layout/footer/layout-footer.component';
import { Error404Component } from './layout/404/404.component';
import { HomeComponent } from './view/Home/home.component';
import { oldHomeComponent } from './view/oldhome/home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactoComponent } from './view/Contacto/app.component';
import { NosotrosComponent } from './view/Nosotros/app.component';
import { ServiciosComponent } from './view/Servicios/app.component';
import { ProyectosComponente } from './view/Proyectos/app.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactoComponent,
    NosotrosComponent,
    ServiciosComponent,
    oldHomeComponent,
    ProyectosComponente,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    Error404Component,
  ],
  imports: [BrowserModule, AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, 'assets/i18n/');
} 