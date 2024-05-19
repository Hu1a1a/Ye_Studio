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

@NgModule({
  declarations: [
    AppComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    HomeComponent,
    oldHomeComponent,
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