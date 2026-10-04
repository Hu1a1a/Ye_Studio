import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../../core/i18n';
import { Seo } from '../../core/seo';
import { UI } from '../../data/ui';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  template: `
    <section class="sheet section">
      <div class="page">
        <div class="frame">
          <p class="code" aria-hidden="true">404</p>
          <h1>{{ i18n.t(ui.notFound.title) }}</h1>
          <p class="lead">{{ i18n.t(ui.notFound.lead) }}</p>
          <div class="actions">
            <a routerLink="/home" class="btn btn-primary">{{ i18n.t(ui.notFound.home) }}</a>
            <a routerLink="/proyectos" class="btn btn-ghost">{{ i18n.t(ui.nav.projects) }}</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .frame {
      display: grid;
      gap: 1.25rem;
      max-width: 44rem;
      padding: clamp(1.5rem, 1rem + 3vw, 3rem);
      border: 1.5px dashed var(--redline);
      background: var(--sheet);
    }
    .code {
      font-family: var(--font-mono);
      color: var(--redline);
    }
    .actions {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
  `,
})
export class NotFound {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;

  constructor() {
    inject(Seo).set(UI.notFound.title, UI.notFound.lead);
  }
}
