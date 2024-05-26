import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './layout-footer.component.html',
  styleUrls: ['./layout-footer.component.css']
})
export class LayoutFooterComponent {
  constructor(public router: Router) { }

  Menu: { Name: string, Router: string, Disabled?: boolean }[] = [
    { Name: "Inicio", Router: "home" },
    { Name: "Sobre nosotros", Router: "nosotros" },
    { Name: "Servicios", Router: "servicios" },
    { Name: "Contacto", Router: "contacto" },
  ]

  href(item: any) {
    if (!item.Disabled) this.router.navigate([item.Router])
  }
}
