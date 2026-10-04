import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { I18n } from '../../core/i18n';
import { UI } from '../../data/ui';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;
  protected readonly open = signal(false);

  protected readonly links = [
    { path: '/proyectos', label: UI.nav.projects },
    { path: '/servicios', label: UI.nav.services },
    { path: '/sobre-mi', label: UI.nav.about },
    { path: '/contacto', label: UI.nav.contact },
  ];

  constructor() {
    inject(Router)
      .events.pipe(
        filter((e) => e instanceof NavigationEnd),
        takeUntilDestroyed(),
      )
      .subscribe(() => this.open.set(false));
  }
}
