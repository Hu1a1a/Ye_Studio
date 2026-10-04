import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { I18n } from '../../core/i18n';
import { PROFILE } from '../../data/profile';
import { UI } from '../../data/ui';

/** Pie de página dibujado como el cajetín de un plano, con la firma de Ye Studio. */
@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();
  protected readonly revision = '2026-10';
}
