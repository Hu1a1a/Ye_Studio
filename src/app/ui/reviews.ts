import { Component, inject } from '@angular/core';
import { I18n } from '../core/i18n';
import { PROFILE, REVIEWS } from '../data/profile';
import { UI } from '../data/ui';

@Component({
  selector: 'app-reviews',
  template: `
    <p class="score">
      <span class="stars" aria-hidden="true">★★★★★</span>
      <a [href]="profile.links.malt" target="_blank" rel="noopener">{{ i18n.t(ui.home.reviewsScore) }}</a>
    </p>
    @for (r of reviews; track r.date) {
      <figure>
        <blockquote>{{ i18n.t(r.quote) }}</blockquote>
        <figcaption>{{ r.author }}, {{ r.company }}, <time [attr.datetime]="r.date">{{ format(r.date) }}</time></figcaption>
      </figure>
    }
  `,
  styles: `
    :host {
      display: grid;
      gap: 1.5rem;
      align-content: start;
    }
    .score {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.25rem 0.75rem;
      color: var(--ink-2);
      font-size: var(--fs-sm);
    }
    .stars {
      color: var(--l-erp);
      letter-spacing: 0.1em;
      font-size: 1.1rem;
    }
    figure {
      margin: 0;
      padding-left: 1.1rem;
      border-left: 2px solid var(--redline);
    }
    blockquote {
      margin: 0;
      font-family: var(--font-display);
      font-size: var(--fs-xl);
      font-weight: 500;
      line-height: 1.25;
    }
    figcaption {
      margin-top: 0.4rem;
      color: var(--ink-2);
      font-size: var(--fs-sm);
    }
  `,
})
export class Reviews {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;
  protected readonly profile = PROFILE;
  protected readonly reviews = REVIEWS;

  protected format(date: string): string {
    return new Date(date).toLocaleDateString(this.i18n.lang() === 'es' ? 'es-ES' : 'en-GB', {
      month: 'long',
      year: 'numeric',
    });
  }
}
