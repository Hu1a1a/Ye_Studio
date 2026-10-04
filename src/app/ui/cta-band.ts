import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../core/i18n';
import { mailto, PROFILE, whatsapp } from '../data/profile';
import { UI } from '../data/ui';

/** Cierre de página en el espacio modelo: invitación a escribir, con correo y WhatsApp directos. */
@Component({
  selector: 'app-cta-band',
  imports: [RouterLink],
  template: `
    <section class="band" aria-labelledby="cta-title">
      <div class="page band-inner">
        <div class="copy">
          <h2 id="cta-title">{{ i18n.t(ui.home.ctaTitle) }}</h2>
          <p>{{ i18n.t(ui.home.ctaLead) }}</p>
        </div>
        <div class="actions">
          <a routerLink="/contacto" class="btn btn-primary">{{ i18n.t(ui.nav.cta) }}</a>
          <a [href]="mail()" class="btn btn-ghost">{{ profile.email }}</a>
          <a [href]="wa()" class="btn btn-ghost" target="_blank" rel="noopener">WhatsApp {{ profile.phone }}</a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .band {
      background-color: var(--model);
      background-image:
        linear-gradient(var(--model-grid) 1px, transparent 1px),
        linear-gradient(90deg, var(--model-grid) 1px, transparent 1px);
      background-size: 24px 24px;
      color: var(--model-ink);
    }
    .band-inner {
      display: grid;
      grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
      gap: 2rem 4rem;
      align-items: end;
      padding-block: clamp(3rem, 2rem + 4vw, 5rem);
    }
    .copy {
      display: grid;
      gap: 1rem;
    }
    h2 {
      font-size: var(--fs-3xl);
      max-width: 22ch;
    }
    p {
      color: #c3ccd5;
      font-size: var(--fs-lg);
      max-width: 36rem;
    }
    .actions {
      display: grid;
      gap: 0.6rem;
      justify-items: stretch;
    }
    .btn-ghost {
      color: var(--model-ink);
      border-color: var(--model-line);
      font-weight: 500;
    }
    @media (max-width: 52rem) {
      .band-inner {
        grid-template-columns: minmax(0, 1fr);
      }
    }
  `,
})
export class CtaBand {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;
  protected readonly profile = PROFILE;

  protected mail(): string {
    return mailto(this.i18n.t(UI.nav.cta));
  }

  protected wa(): string {
    return whatsapp(this.i18n.lang() === 'es' ? 'Hola Yang, tengo un proyecto en mente.' : 'Hi Yang, I have a project in mind.');
  }
}
