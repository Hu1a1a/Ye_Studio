import { Component, computed, inject, input } from '@angular/core';
import { I18n, L } from '../core/i18n';
import { Layer } from '../data/layers';

/** Bloque de un esquema. `x`/`y` es el centro, en unidades del viewBox (por defecto 520 × 260). */
export interface DiagramNode {
  id: string;
  label: L | string;
  x: number;
  y: number;
  w?: number;
  layer?: Layer;
  /** box: componente propio · db: base de datos · ext: sistema de terceros (línea discontinua). */
  kind?: 'box' | 'db' | 'ext';
}

export interface DiagramEdge {
  from: string;
  to: string;
  label?: L | string;
  /** Flecha en los dos sentidos. */
  both?: boolean;
}

/** Cota: una medida real del proyecto dibujada como en un plano (p. ej. «+70 tablas»). */
export interface DiagramDim {
  x1: number;
  x2: number;
  y: number;
  label: L | string;
}

export interface Diagram {
  width?: number;
  height?: number;
  nodes: DiagramNode[];
  edges: DiagramEdge[];
  dims?: DiagramDim[];
}

interface Box extends DiagramNode {
  w: number;
  h: number;
  lines: string[];
}

const BOX_H = 44;

/**
 * Dibuja el esquema de arquitectura de un proyecto con el lenguaje de un plano de CAD: bloques por capa,
 * conexiones ortogonales con flecha y cotas con las cifras del proyecto.
 */
@Component({
  selector: 'app-schematic',
  template: `
    <svg
      [attr.viewBox]="'0 0 ' + width() + ' ' + height()"
      [attr.role]="title() ? 'img' : null"
      [attr.aria-label]="title() || null"
      [attr.aria-hidden]="title() ? null : 'true'"
      class="schematic"
    >
      <defs>
        <marker [attr.id]="markerId" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0 1 L9 5 L0 9 z" class="arrow" />
        </marker>
      </defs>

      @for (edge of edges(); track $index) {
        <path
          class="edge"
          [style.--i]="$index"
          [attr.d]="edge.d"
          [attr.marker-end]="'url(#' + markerId + ')'"
          [attr.marker-start]="edge.both ? 'url(#' + markerId + ')' : null"
        />
        @if (edge.label) {
          <text class="edge-label" [attr.x]="edge.lx" [attr.y]="edge.ly" text-anchor="middle">{{ edge.label }}</text>
        }
      }

      @for (dim of dims(); track $index) {
        <g class="dim">
          <path [attr.d]="'M' + dim.x1 + ' ' + (dim.y - 7) + 'v14M' + dim.x2 + ' ' + (dim.y - 7) + 'v14'" />
          <path
            [attr.d]="'M' + dim.x1 + ' ' + dim.y + 'H' + dim.x2"
            [attr.marker-end]="'url(#' + markerId + ')'"
            [attr.marker-start]="'url(#' + markerId + ')'"
          />
          <text [attr.x]="(dim.x1 + dim.x2) / 2" [attr.y]="dim.y - 6" text-anchor="middle">{{ dim.label }}</text>
        </g>
      }

      @for (box of boxes(); track box.id) {
        <g [attr.class]="'node node-' + (box.kind ?? 'box')" [attr.data-layer]="box.layer ?? null" [style.--i]="$index">
          @if (box.kind === 'db') {
            <path
              [attr.d]="
                'M' + (box.x - box.w / 2) + ' ' + (box.y - box.h / 2 + 6) +
                'a' + box.w / 2 + ' 6 0 0 1 ' + box.w + ' 0' +
                'v' + (box.h - 12) +
                'a' + box.w / 2 + ' 6 0 0 1 ' + -box.w + ' 0z' +
                'M' + (box.x - box.w / 2) + ' ' + (box.y - box.h / 2 + 6) +
                'a' + box.w / 2 + ' 6 0 0 0 ' + box.w + ' 0'
              "
            />
          } @else {
            <rect [attr.x]="box.x - box.w / 2" [attr.y]="box.y - box.h / 2" [attr.width]="box.w" [attr.height]="box.h" />
          }
          <text [attr.x]="box.x" [attr.y]="box.y + (box.kind === 'db' ? 4 : 0)" text-anchor="middle" dominant-baseline="central">
            @for (line of box.lines; track $index) {
              <tspan [attr.x]="box.x" [attr.dy]="$first ? (box.lines.length - 1) * -0.6 + 'em' : '1.2em'">{{ line }}</tspan>
            }
          </text>
        </g>
      }
    </svg>
  `,
  styles: `
    :host {
      display: block;
      --sch-line: var(--ink-2);
      --sch-text: var(--ink);
      --sch-fill: var(--sheet);
      --sch-dim: var(--redline);
    }
    :host(.on-model) {
      --sch-line: var(--model-dim);
      --sch-text: var(--model-ink);
      --sch-fill: var(--model);
      --sch-dim: var(--l-erp);
    }
    .schematic {
      width: 100%;
      height: auto;
      overflow: visible;
      font-family: var(--font-mono);
    }
    .edge {
      fill: none;
      stroke: var(--sch-line);
      stroke-width: 1.25;
    }
    .arrow {
      fill: var(--sch-line);
    }
    .edge-label {
      fill: var(--sch-line);
      font-size: 11px;
      paint-order: stroke;
      stroke: var(--sch-fill);
      stroke-width: 4px;
    }
    .node rect,
    .node path {
      fill: var(--sch-fill);
      stroke: var(--layer, var(--sch-line));
      stroke-width: 1.5;
    }
    .node-ext rect {
      stroke-dasharray: 5 4;
    }
    .node text {
      fill: var(--sch-text);
      font-size: 12.5px;
      font-weight: 500;
    }
    .dim path {
      fill: none;
      stroke: var(--sch-dim);
      stroke-width: 1;
    }
    .dim text {
      fill: var(--sch-dim);
      font-size: 11.5px;
      font-weight: 500;
    }
    /* Trazado de la portada: las líneas se dibujan una vez al cargar, como un plotter. */
    @media (prefers-reduced-motion: no-preference) {
      :host(.draw) .node {
        animation: appear 0.5s ease both;
        animation-delay: calc(var(--i, 0) * 90ms);
      }
      :host(.draw) .edge {
        stroke-dasharray: 400;
        stroke-dashoffset: 400;
        animation: plot 1.1s ease-out forwards;
        animation-delay: calc(0.5s + var(--i, 0) * 110ms);
      }
      :host(.draw) .dim {
        animation: appear 0.6s ease both 1.6s;
      }
    }
    @keyframes plot {
      to {
        stroke-dashoffset: 0;
      }
    }
    @keyframes appear {
      from {
        opacity: 0;
      }
    }
  `,
})
export class Schematic {
  private readonly i18n = inject(I18n);

  readonly diagram = input.required<Diagram>();
  /** Si lleva título se anuncia como imagen; si no, es decorativo. */
  readonly title = input<string>('');

  protected readonly markerId = `arrow-${Math.random().toString(36).slice(2, 8)}`;
  protected readonly width = computed(() => this.diagram().width ?? 520);
  protected readonly height = computed(() => this.diagram().height ?? 260);

  protected readonly boxes = computed<Box[]>(() =>
    this.diagram().nodes.map((n) => {
      const lines = this.i18n.t(n.label).split('\n');
      const longest = Math.max(...lines.map((l) => l.length));
      return {
        ...n,
        lines,
        w: n.w ?? Math.max(96, longest * 7.6 + 24),
        h: lines.length > 1 ? BOX_H + 14 : BOX_H,
      };
    }),
  );

  protected readonly edges = computed(() => {
    const byId = new Map(this.boxes().map((b) => [b.id, b]));
    return this.diagram().edges.flatMap((e) => {
      const a = byId.get(e.from);
      const b = byId.get(e.to);
      if (!a || !b) return [];
      return [{ ...route(a, b), both: e.both, label: e.label ? this.i18n.t(e.label) : '' }];
    });
  });

  protected readonly dims = computed(() =>
    (this.diagram().dims ?? []).map((d) => ({ ...d, label: this.i18n.t(d.label) })),
  );
}

/** Conexión ortogonal entre dos bloques: sale por el lado que mira al destino y quiebra a mitad de camino. */
function route(a: Box, b: Box): { d: string; lx: number; ly: number } {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  if (Math.abs(dx) >= Math.abs(dy) * 1.4) {
    const sx = a.x + Math.sign(dx) * a.w / 2;
    const ex = b.x - Math.sign(dx) * (b.w / 2 + 2);
    const mx = (sx + ex) / 2;
    const d = dy === 0 ? `M${sx} ${a.y}H${ex}` : `M${sx} ${a.y}H${mx}V${b.y}H${ex}`;
    return { d, lx: mx, ly: (a.y + b.y) / 2 - (dy === 0 ? 7 : 0) };
  }
  const sy = a.y + Math.sign(dy) * a.h / 2;
  const ey = b.y - Math.sign(dy) * (b.h / 2 + 2);
  const my = (sy + ey) / 2;
  const d = dx === 0 ? `M${a.x} ${sy}V${ey}` : `M${a.x} ${sy}V${my}H${b.x}V${ey}`;
  return { d, lx: (a.x + b.x) / 2, ly: my - 5 };
}
