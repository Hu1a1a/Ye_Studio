import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'Ye Studio';
  constructor(public translate: TranslateService, public router: Router) {
    const i = localStorage.getItem('i18n')
    translate.setDefaultLang('es');
    i ? translate.use(i) : translate.use('es')
  }
}
