import { Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../core/i18n';
import { LAYERS } from '../data/layers';
import { Project, sheetNumber } from '../data/projects';
import { UI } from '../data/ui';
import { Schematic } from './schematic';

/** Proyecto como hoja de plano: dibujo, notas y cajetín. */
@Component({
  selector: 'app-sheet-card',
  imports: [RouterLink, Schematic],
  template: `
    @let p = project();
    <a class="card" [routerLink]="['/proyectos', p.slug]" [attr.data-layer]="p.layers[0]">
      <div class="drawing" [class.is-photo]="!!p.image">
        @if (p.image) {
          <img [src]="'img/projects/' + p.image" alt="" width="1280" height="800" loading="lazy" decoding="async" />
        } @else if (p.diagram) {
          <app-schematic [diagram]="p.diagram" />
        }
      </div>
      <p class="notes">{{ i18n.t(p.summary) }}</p>
      <div class="tb">
        <div class="cell-title">
          <span class="tb-label">{{ i18n.t(ui.block.project) }}</span>
          <h3 class="tb-title">{{ i18n.t(p.title) }}</h3>
        </div>
        <div class="cell-sheet">
          <span class="tb-label">{{ i18n.t(ui.block.sheet) }}</span>
          <span class="sheet-no">{{ sheet() }}</span>
        </div>
        <div class="cell-client">
          <span class="tb-label">{{ p.client ? i18n.t(ui.block.client) : i18n.t(ui.block.sector) }}</span>
          <span class="tb-value">{{ p.client ?? i18n.t(p.sector) }}</span>
        </div>
        <div class="cell-date">
          <span class="tb-label">{{ i18n.t(ui.block.period) }}</span>
          <span class="tb-value">{{ i18n.t(p.period) }}</span>
        </div>
        <div class="cell-layers">
          <span class="visually-hidden">{{ i18n.t(ui.block.layer) }}</span>
          <ul class="layer-names">
            @for (layer of p.layers; track layer) {
              <li [attr.data-layer]="layer"><span class="layer-dot"></span>{{ i18n.t(layers[layer].name) }}</li>
            }
          </ul>
        </div>
      </div>
    </a>
  `,
  styles: `
    :host {
      display: flex;
    }
    .card {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 0.85rem;
      border: 1px solid var(--rule);
      background: var(--sheet);
      color: inherit;
      text-decoration: none;
      transition: border-color 0.15s ease;
    }
    .card:hover {
      border-color: var(--ink);
    }
    .card:hover .tb-title {
      text-decoration: underline;
      text-decoration-thickness: 1px;
      text-underline-offset: 0.18em;
    }
    .drawing {
      display: grid;
      place-items: center;
      aspect-ratio: 16 / 9;
      padding: 1rem 1.25rem;
      border: 1px solid var(--rule-soft);
      background-image:
        linear-gradient(var(--grid) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid) 1px, transparent 1px);
      background-size: 16px 16px;
      overflow: hidden;
    }
    .drawing app-schematic {
      width: 100%;
    }
    .drawing.is-photo {
      padding: 0;
    }
    .drawing img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top;
    }
    .notes {
      flex: 1;
      padding: 0.9rem 0.15rem 1rem;
      color: var(--ink-2);
      font-size: var(--fs-sm);
      line-height: 1.5;
    }
    .tb {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 4.5rem;
    }
    .tb > div {
      border-bottom: 1px solid var(--ink);
    }
    .cell-title {
      grid-column: 1 / 3;
      border-right: 1px solid var(--ink);
    }
    .cell-sheet {
      align-items: center;
      justify-content: center;
    }
    .sheet-no {
      font-family: var(--font-display);
      font-size: 1.6rem;
      font-weight: 600;
      line-height: 1;
    }
    .cell-client {
      border-right: 1px solid var(--rule);
    }
    .cell-date {
      grid-column: 2 / 4;
    }
    .cell-layers {
      grid-column: 1 / -1;
      border-bottom: 0 !important;
    }
  `,
})
export class SheetCard {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;
  protected readonly layers = LAYERS;

  readonly project = input.required<Project>();
  protected readonly sheet = computed(() => sheetNumber(this.project()));
}
