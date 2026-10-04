import { ViewportScroller } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { I18n } from './core/i18n';
import { Seo } from './core/seo';
import { UI } from './data/ui';
import { Footer } from './layout/footer/footer';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  template: `
    <a class="skip-link" href="#main" (click)="skip($event)">{{ i18n.t(ui.nav.skip) }}</a>
    <app-header />
    <main id="main" tabindex="-1">
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: `
    .skip-link {
      position: absolute;
      left: 1rem;
      top: -4rem;
      z-index: 100;
      padding: 0.6rem 1rem;
      background: var(--redline);
      color: var(--on-redline);
      font-weight: 600;
    }
    .skip-link:focus {
      top: 0.5rem;
    }
    main:focus {
      outline: none;
    }
  `,
})
export class App {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;

  constructor() {
    inject(Seo).init();
    // Las anclas (#/servicios#crm-erp) no deben quedar debajo de la cabecera fija.
    inject(ViewportScroller).setOffset(() => [0, (document.querySelector('app-header')?.clientHeight ?? 64) + 16]);
  }

  // Con rutas en el hash, un enlace a «#main» cambiaría de página: se mueve el foco a mano.
  protected skip(event: Event): void {
    event.preventDefault();
    document.getElementById('main')?.focus();
  }
}
