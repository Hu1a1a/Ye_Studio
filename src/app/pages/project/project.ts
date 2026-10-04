import { Component, computed, effect, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { I18n } from '../../core/i18n';
import { Seo } from '../../core/seo';
import { LAYERS } from '../../data/layers';
import { PROJECTS, projectBySlug, sheetNumber } from '../../data/projects';
import { SERVICES } from '../../data/services';
import { UI } from '../../data/ui';
import { CtaBand } from '../../ui/cta-band';
import { Schematic } from '../../ui/schematic';

/** Ficha de un proyecto: una hoja del juego de planos con su cajetín a la derecha. */
@Component({
  selector: 'app-project-page',
  imports: [RouterLink, Schematic, CtaBand],
  templateUrl: './project.html',
  styleUrl: './project.css',
})
export class ProjectPage {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;
  protected readonly layers = LAYERS;
  protected readonly total = String(PROJECTS.length).padStart(2, '0');

  /** Viene de la ruta `proyectos/:slug`. */
  readonly slug = input.required<string>();

  protected readonly project = computed(() => projectBySlug(this.slug()));
  protected readonly sheet = computed(() => {
    const p = this.project();
    return p ? sheetNumber(p) : '';
  });
  protected readonly prev = computed(() => this.neighbour(-1));
  protected readonly next = computed(() => this.neighbour(1));
  protected readonly services = computed(() => {
    const slug = this.slug();
    return SERVICES.filter((s) => s.proof.includes(slug));
  });

  constructor() {
    const seo = inject(Seo);
    const router = inject(Router);
    effect(() => {
      const p = this.project();
      if (!p) {
        router.navigate(['/404'], { replaceUrl: true });
        return;
      }
      seo.set(p.title, p.summary);
    });
  }

  private neighbour(step: number) {
    const p = this.project();
    if (!p) return undefined;
    const i = PROJECTS.indexOf(p);
    return PROJECTS[(i + step + PROJECTS.length) % PROJECTS.length];
  }
}
