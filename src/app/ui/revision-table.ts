import { Component, inject, input } from '@angular/core';
import { I18n } from '../core/i18n';
import { REVISIONS } from '../data/profile';
import { UI } from '../data/ui';

/** Trayectoria como tabla de revisiones de un plano: la revisión más reciente arriba. */
@Component({
  selector: 'app-revision-table',
  template: `
    <div class="table-wrap">
      <table class="tech-table">
        <caption class="visually-hidden">{{ i18n.t(ui.home.revisionsTitle) }}</caption>
        <thead>
          <tr>
            <th scope="col">{{ i18n.t(ui.about.revisionCols.rev) }}</th>
            <th scope="col">{{ i18n.t(ui.about.revisionCols.date) }}</th>
            <th scope="col">{{ i18n.t(ui.about.revisionCols.desc) }}</th>
          </tr>
        </thead>
        <tbody>
          @for (r of rows; track r.rev) {
            <tr>
              <td class="rev">{{ r.rev }}</td>
              <td class="num">{{ i18n.t(r.period) }}</td>
              <td>
                <strong>{{ i18n.t(r.title) }}</strong>
                <span class="org">{{ i18n.t(r.org) }}</span>
                @if (detailed()) {
                  <span class="detail">{{ i18n.t(r.detail) }}</span>
                }
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: `
    .rev {
      width: 3.5rem;
      text-align: center !important;
      font-family: var(--font-display);
      font-size: 1.25rem;
      font-weight: 600;
    }
    strong {
      display: block;
      font-weight: 600;
    }
    .org {
      display: block;
      color: var(--ink-2);
    }
    .detail {
      display: block;
      margin-top: 0.35rem;
      color: var(--ink-2);
      max-width: 38rem;
    }
  `,
})
export class RevisionTable {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;
  protected readonly rows = REVISIONS;
  readonly detailed = input(false);
}
