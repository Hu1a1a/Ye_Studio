import { Component, inject } from '@angular/core';
import { I18n } from '../../core/i18n';
import { Seo } from '../../core/seo';
import { BIO, LANGUAGES, PROFILE, TOOLBOX } from '../../data/profile';
import { UI } from '../../data/ui';
import { CtaBand } from '../../ui/cta-band';
import { Reviews } from '../../ui/reviews';
import { RevisionTable } from '../../ui/revision-table';

@Component({
  selector: 'app-about',
  imports: [RevisionTable, Reviews, CtaBand],
  template: `
    <section class="sheet section" aria-labelledby="about-title">
      <div class="page intro">
        <div class="prose">
          <h1 id="about-title">{{ i18n.t(ui.about.title) }}</h1>
          @for (p of bio; track $index) {
            <p [class.lead]="$first">{{ i18n.t(p) }}</p>
          }
          <p class="profiles">
            <a [href]="profile.links.linkedin" target="_blank" rel="noopener">LinkedIn</a>
            <a [href]="profile.links.github" target="_blank" rel="noopener">GitHub</a>
            <a [href]="profile.links.malt" target="_blank" rel="noopener">Malt</a>
            <a [href]="profile.links.fiverr" target="_blank" rel="noopener">Fiverr</a>
          </p>
        </div>

        <aside class="facts">
          <img class="sign" src="img/firma-redonda.png" alt="Ye Studio" width="160" height="160" />
          <div class="tb">
            <div>
              <span class="tb-label">{{ i18n.t(ui.about.languagesTitle) }}</span>
              <ul class="langs">
                @for (l of languages; track $index) {
                  <li>
                    <span>{{ i18n.t(l.name) }}</span><span class="muted">{{ i18n.t(l.level) }}</span>
                  </li>
                }
              </ul>
            </div>
            <div>
              <span class="tb-label">{{ i18n.t(ui.about.base) }}</span>
              <span class="tb-value">{{ i18n.t(ui.about.remote) }}</span>
            </div>
          </div>
        </aside>
      </div>
    </section>

    <section class="section" aria-labelledby="toolbox-title">
      <div class="page">
        <h2 id="toolbox-title" class="title">{{ i18n.t(ui.about.stackTitle) }}</h2>
        <div class="toolbox">
          @for (group of toolbox; track $index) {
            <div [attr.data-layer]="group.layer">
              <h3><span class="layer-dot"></span>{{ i18n.t(group.title) }}</h3>
              <ul class="chip-list">
                @for (item of group.items; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </div>
          }
        </div>
      </div>
    </section>

    <section class="sheet section" aria-labelledby="revisions-title">
      <div class="page split">
        <div>
          <h2 id="revisions-title" class="title">{{ i18n.t(ui.home.revisionsTitle) }}</h2>
          <app-revision-table [detailed]="true" />
        </div>
        <div>
          <h2 class="title">{{ i18n.t(ui.home.reviewsTitle) }}</h2>
          <app-reviews />
        </div>
      </div>
    </section>

    <app-cta-band />
  `,
  styles: `
    .intro {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(15rem, 20rem);
      gap: clamp(2rem, 1rem + 4vw, 5rem);
      align-items: start;
    }
    h1 {
      margin-bottom: 1.5rem;
    }
    .profiles {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem 1.25rem;
      font-weight: 500;
    }
    .facts {
      display: grid;
      gap: 1.25rem;
    }
    .sign {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      border: 1px solid var(--rule);
    }
    .facts .tb > * + * {
      border-top: 1px solid var(--rule);
    }
    .langs {
      display: grid;
      gap: 0.25rem;
      margin: 0.3rem 0 0;
      padding: 0;
      list-style: none;
      font-size: var(--fs-sm);
    }
    .langs li {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
    }
    .title {
      font-size: var(--fs-2xl);
      margin-bottom: 1.5rem;
    }
    .toolbox {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
      gap: 1.75rem 2.5rem;
    }
    .toolbox h3 {
      display: flex;
      align-items: center;
      gap: 0.55rem;
      margin-bottom: 0.75rem;
      font-size: 1.2rem;
    }
    .split {
      display: grid;
      grid-template-columns: minmax(0, 1.25fr) minmax(0, 0.75fr);
      gap: clamp(2.5rem, 1rem + 5vw, 6rem);
    }
    @media (prefers-color-scheme: dark) {
      .sign {
        filter: invert(1);
      }
    }
    @media (max-width: 56rem) {
      .intro,
      .split {
        grid-template-columns: minmax(0, 1fr);
      }
    }
  `,
})
export class About {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;
  protected readonly profile = PROFILE;
  protected readonly bio = BIO;
  protected readonly languages = LANGUAGES;
  protected readonly toolbox = TOOLBOX;

  constructor() {
    inject(Seo).set(UI.about.title, BIO[0]);
  }
}
