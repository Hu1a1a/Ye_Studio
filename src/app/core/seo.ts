import { Injectable, Injector, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { I18n, L } from './i18n';

const SITE = 'Ye Studio · Yang Ye';

const DEFAULT_DESCRIPTION: L = {
  es: 'Yang Ye, desarrollador full-stack e ingeniero industrial en Barcelona: CRM y ERP a medida, cotizadores, facturación electrónica e IA aplicada (LLM, RAG, agentes, IA privada).',
  en: 'Yang Ye, full-stack developer and industrial engineer in Barcelona: custom CRM and ERP, quoting engines, e-invoicing and applied AI (LLMs, RAG, agents, private AI).',
};

/** Título y descripción de cada página, en el idioma activo. */
@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly i18n = inject(I18n);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly injector = inject(Injector);
  private readonly page = signal<{ title: L | null; description: L }>({
    title: null,
    description: DEFAULT_DESCRIPTION,
  });

  init(): void {
    effect(
      () => {
        const { title, description } = this.page();
        const text = title ? `${this.i18n.t(title)} · ${SITE}` : SITE;
        this.title.setTitle(text);
        this.meta.updateTag({ name: 'description', content: this.i18n.t(description) });
        this.meta.updateTag({ property: 'og:title', content: text });
        this.meta.updateTag({ property: 'og:description', content: this.i18n.t(description) });
      },
      { injector: this.injector },
    );
  }

  set(title: L | null, description: L = DEFAULT_DESCRIPTION): void {
    this.page.set({ title, description });
  }
}
