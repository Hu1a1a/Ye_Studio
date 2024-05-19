import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title: string = 'Ye Studio';
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
  }
}
