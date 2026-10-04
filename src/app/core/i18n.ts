import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';

export type Lang = 'es' | 'en';

/** Texto en los dos idiomas de la web. */
export interface L {
  es: string;
  en: string;
}

const STORAGE_KEY = 'ye-studio.lang';

/**
 * Idioma de la web (ES/EN) como signal: las plantillas que llaman a `t()` se repintan solas al cambiarlo.
 * Prioridad: `?lang=en` en el enlace (para mandar la versión inglesa a un cliente) > elección guardada > navegador.
 */
@Injectable({ providedIn: 'root' })
export class I18n {
  private readonly doc = inject(DOCUMENT);
  readonly lang = signal<Lang>(initialLang());

  constructor() {
    effect(() => {
      const lang = this.lang();
      this.doc.documentElement.lang = lang;
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // Sin almacenamiento (modo privado, previsualizaciones): el idioma vale solo para esta visita.
      }
    });
  }

  t(text: L | string): string {
    return typeof text === 'string' ? text : text[this.lang()];
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }
}

function initialLang(): Lang {
  const fromLink = /[?&]lang=(es|en)\b/.exec(location.hash)?.[1];
  if (fromLink === 'es' || fromLink === 'en') return fromLink;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') return saved;
  } catch {
    // Ignorado: se decide por el navegador.
  }
  return /^(es|ca|gl|eu)\b/i.test(navigator.language ?? '') ? 'es' : 'en';
}
