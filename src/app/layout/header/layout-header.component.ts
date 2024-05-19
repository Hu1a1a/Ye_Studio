import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-layout-header',
  templateUrl: './layout-header.component.html',
  styleUrls: ['./layout-header.component.css']
})
export class LayoutHeaderComponent {

  constructor(public translate: TranslateService, public router: Router) { }

  Menu: { Name: string, Router: string, Disabled?: boolean }[] = [
    { Name: "Inicio", Router: "home" },
    { Name: "Sobre nosotros", Router: "nosotros" },
    { Name: "Servicios", Router: "servicios" },
    { Name: "Contacto", Router: "contacto" },
  ]

  href(item: any) {
    if (!item.Disabled) this.router.navigate([item.Router])
  }
  doTranslate(language: string) {
    localStorage.setItem('i18n', language)
    this.translate.use(language);
  }
}
