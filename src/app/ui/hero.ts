import { Component, ElementRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../core/i18n';
import { UI } from '../data/ui';
import { Diagram, Schematic } from './schematic';

/** Esquema genérico de lo que construyo, de la pantalla al servidor. */
const SYSTEM: Diagram = {
  width: 560,
  height: 330,
  nodes: [
    { id: 'team', label: { es: 'Tu equipo y clientes', en: 'Your team and customers' }, x: 80, y: 60, kind: 'ext', w: 150 },
    { id: 'spa', label: { es: 'App web\nAngular', en: 'Web app\nAngular' }, x: 80, y: 165, layer: 'erp', w: 120 },
    { id: 'api', label: 'API\nNode · Express', x: 270, y: 165, w: 130 },
    { id: 'db', label: 'MySQL', x: 270, y: 285, kind: 'db', w: 110 },
    { id: 'erp', label: { es: 'Tu ERP actual', en: 'Your current ERP' }, x: 80, y: 285, kind: 'ext', w: 120 },
    { id: 'llm', label: { es: 'LLM\nGPU propia o API', en: 'LLM\nown GPU or API' }, x: 465, y: 60, layer: 'ai', w: 140 },
    { id: 'rag', label: { es: 'RAG\ndocs y correo', en: 'RAG\ndocs and email' }, x: 465, y: 165, layer: 'ai', w: 140 },
    { id: 'einv', label: { es: 'Facturación\nelectrónica', en: 'E-invoicing' }, x: 465, y: 285, kind: 'ext', w: 140 },
  ],
  edges: [
    { from: 'team', to: 'spa' },
    { from: 'spa', to: 'api', both: true },
    { from: 'api', to: 'db', both: true },
    { from: 'erp', to: 'db', label: 'ETL' },
    { from: 'api', to: 'llm' },
    { from: 'api', to: 'rag', both: true },
    { from: 'api', to: 'einv' },
  ],
  dims: [
    {
      x1: 10,
      x2: 550,
      y: 8,
      label: { es: 'Un solo responsable, de la pantalla al servidor', en: 'One engineer, from screen to server' },
    },
  ],
};

const BARCELONA = '41.3874° N  2.1686° E';

/**
 * Portada: el «espacio modelo» de un CAD. El puntero se convierte en el cursor en cruz y la barra de estado
 * muestra sus coordenadas; en reposo, las de Barcelona.
 */
@Component({
  selector: 'app-hero',
  imports: [RouterLink, Schematic],
  template: `
    <section
      class="model"
      (pointermove)="track($event)"
      (pointerleave)="leave()"
      aria-labelledby="hero-title"
    >
      <div class="page model-inner">
        <div class="copy">
          <p class="who">{{ i18n.t(ui.hero.who) }}</p>
          <h1 id="hero-title">{{ i18n.t(ui.hero.title) }}</h1>
          <p class="lead-model">{{ i18n.t(ui.hero.lead) }}</p>
          <div class="actions">
            <a routerLink="/proyectos" class="btn btn-primary">{{ i18n.t(ui.hero.primary) }}</a>
            <a routerLink="/contacto" class="btn btn-ghost">{{ i18n.t(ui.hero.secondary) }}</a>
          </div>
        </div>
        <app-schematic class="drawing on-model draw" [diagram]="system" [title]="i18n.t(ui.hero.drawing)" />
      </div>

      <div class="crosshair" [class.is-on]="pointer()" aria-hidden="true">
        <span class="ch-h"></span>
        <span class="ch-v"></span>
        <span class="ch-box"></span>
      </div>

      <div class="status">
        <div class="page status-inner">
          <span class="avail"><span class="dot"></span>{{ i18n.t(ui.hero.status) }}</span>
          <span class="coords" aria-hidden="true">{{ coords() }}</span>
          <span class="modes" aria-hidden="true">
            <span>{{ i18n.lang() === 'es' ? 'Rejilla' : 'Grid' }}</span>
            <span>{{ i18n.lang() === 'es' ? 'Orto' : 'Ortho' }}</span>
            <span>{{ i18n.lang() === 'es' ? 'Refent' : 'Osnap' }}</span>
          </span>
        </div>
      </div>
    </section>
  `,
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;
  protected readonly system = SYSTEM;

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private frame = 0;
  protected readonly pointer = signal(false);
  protected readonly coords = signal(BARCELONA);

  protected track(event: PointerEvent): void {
    if (event.pointerType !== 'mouse') return;
    const section = event.currentTarget as HTMLElement;
    const { clientX, clientY } = event;
    cancelAnimationFrame(this.frame);
    this.frame = requestAnimationFrame(() => {
      const rect = section.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const style = this.host.nativeElement.style;
      style.setProperty('--cx', `${x}px`);
      style.setProperty('--cy', `${y}px`);
      this.pointer.set(true);
      // Como en un CAD, el eje Y crece hacia arriba.
      this.coords.set(`X ${(x / 2).toFixed(2).padStart(7)}  Y ${((rect.height - y) / 2).toFixed(2).padStart(7)}`);
    });
  }

  protected leave(): void {
    cancelAnimationFrame(this.frame);
    this.pointer.set(false);
    this.coords.set(BARCELONA);
  }
}
