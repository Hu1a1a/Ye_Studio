import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../../core/i18n';
import { Seo } from '../../core/seo';
import { PROJECTS } from '../../data/projects';
import { PROCESS, SERVICES, Service } from '../../data/services';
import { UI, fill } from '../../data/ui';
import { CtaBand } from '../../ui/cta-band';
import { Hero } from '../../ui/hero';
import { Reviews } from '../../ui/reviews';
import { RevisionTable } from '../../ui/revision-table';
import { SheetCard } from '../../ui/sheet-card';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Hero, SheetCard, RevisionTable, Reviews, CtaBand],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;
  protected readonly featured = PROJECTS.filter((p) => p.featured);
  protected readonly services = SERVICES;
  protected readonly process = PROCESS;

  constructor() {
    inject(Seo).set(null);
  }

  protected allProjects(): string {
    return fill(this.i18n.t(UI.home.allProjects), { n: PROJECTS.length });
  }

  protected leadTime(service: Service): string {
    if (!service.tiers) return this.i18n.t(service.slug === 'direccion-tecnica' ? UI.bom.ongoing : UI.bom.quote);
    const days = service.tiers.map((t) => t.days);
    return fill(this.i18n.t(UI.bom.days), { a: Math.min(...days), b: Math.max(...days) });
  }
}
