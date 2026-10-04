import { Component, computed, inject, signal } from '@angular/core';
import { I18n } from '../../core/i18n';
import { Seo } from '../../core/seo';
import { LAYERS, LAYER_ORDER, Layer } from '../../data/layers';
import { PROJECTS } from '../../data/projects';
import { UI } from '../../data/ui';
import { CtaBand } from '../../ui/cta-band';
import { SheetCard } from '../../ui/sheet-card';

@Component({
  selector: 'app-projects',
  imports: [SheetCard, CtaBand],
  template: `
    <section class="sheet section" aria-labelledby="projects-title">
      <div class="page">
        <header class="section-head">
          <h1 id="projects-title">{{ i18n.t(ui.projects.title) }}</h1>
          <p>{{ i18n.t(ui.projects.lead) }}</p>
        </header>

        <div class="filters" role="group" [attr.aria-label]="i18n.t(ui.projects.filter)">
          <button type="button" [attr.aria-pressed]="layer() === null" (click)="layer.set(null)">
            {{ i18n.t(ui.projects.all) }} <span class="count">{{ projects.length }}</span>
          </button>
          @for (l of layerOrder; track l) {
            <button type="button" [attr.data-layer]="l" [attr.aria-pressed]="layer() === l" (click)="layer.set(l)">
              <span class="layer-dot"></span>{{ i18n.t(layers[l].name) }} <span class="count">{{ count(l) }}</span>
            </button>
          }
        </div>

        <div class="cards" aria-live="polite">
          @for (project of visible(); track project.slug) {
            <app-sheet-card [project]="project" />
          }
        </div>
      </div>
    </section>
    <app-cta-band />
  `,
  styles: `
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-bottom: 2rem;
    }
    .filters button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      min-height: 2.5rem;
      padding: 0.35rem 0.85rem;
      border: 1px solid var(--rule);
      border-radius: var(--radius);
      background: var(--sheet);
      color: var(--ink);
      font: 500 var(--fs-sm) / 1.2 var(--font-text);
      cursor: pointer;
    }
    .filters button:hover {
      border-color: var(--ink);
    }
    .filters button[aria-pressed='true'] {
      border-color: var(--ink);
      box-shadow: inset 0 -2px 0 var(--layer, var(--ink));
    }
    .count {
      font-family: var(--font-mono);
      font-size: 0.78rem;
      color: var(--ink-3);
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
      gap: clamp(1rem, 0.5rem + 1.5vw, 1.75rem);
    }
  `,
})
export class Projects {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;
  protected readonly layers = LAYERS;
  protected readonly layerOrder = LAYER_ORDER;
  protected readonly projects = PROJECTS;
  protected readonly layer = signal<Layer | null>(null);
  protected readonly visible = computed(() => {
    const layer = this.layer();
    return layer ? PROJECTS.filter((p) => p.layers.includes(layer)) : PROJECTS;
  });

  constructor() {
    inject(Seo).set(UI.projects.title, UI.projects.lead);
  }

  protected count(layer: Layer): number {
    return PROJECTS.filter((p) => p.layers.includes(layer)).length;
  }
}
