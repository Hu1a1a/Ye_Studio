import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../../core/i18n';
import { Seo } from '../../core/seo';
import { projectBySlug } from '../../data/projects';
import { MODELS, SERVICES } from '../../data/services';
import { UI, fill } from '../../data/ui';
import { CtaBand } from '../../ui/cta-band';

@Component({
  selector: 'app-services',
  imports: [RouterLink, CtaBand],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;
  protected readonly services = SERVICES;
  protected readonly models = MODELS;
  protected readonly project = projectBySlug;

  constructor() {
    inject(Seo).set(UI.services.title, UI.services.lead);
  }

  protected days(n: number): string {
    return fill(this.i18n.t(UI.services.days), { n });
  }
}
