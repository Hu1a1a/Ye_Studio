import { Component, ElementRef, computed, effect, inject, input, signal, viewChild } from '@angular/core';
import { I18n } from '../../core/i18n';
import { Seo } from '../../core/seo';
import { PROFILE, mailto, whatsapp } from '../../data/profile';
import { SERVICES } from '../../data/services';
import { UI, fill } from '../../data/ui';

/**
 * Contacto sin servidor (la web es estática): el formulario solo compone el mensaje y lo entrega al correo o a
 * WhatsApp del visitante, ya escrito.
 */
@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  protected readonly i18n = inject(I18n);
  protected readonly ui = UI;
  protected readonly profile = PROFILE;
  protected readonly services = SERVICES;

  /** `?tipo=<servicio>` preselecciona el tipo de proyecto (enlaces desde servicios y proyectos). */
  readonly tipo = input<string>();

  protected readonly name = signal('');
  protected readonly company = signal('');
  protected readonly type = signal('other');
  protected readonly timeline = signal(0);
  protected readonly message = signal('');
  protected readonly showError = signal(false);
  protected readonly copied = signal(false);

  private readonly messageField = viewChild<ElementRef<HTMLTextAreaElement>>('messageField');

  protected readonly valid = computed(() => this.message().trim().length >= 10);

  protected readonly typeLabel = computed(() => {
    const service = SERVICES.find((s) => s.slug === this.type());
    return this.i18n.t(service ? service.title : UI.contact.other);
  });

  protected readonly subject = computed(() => fill(this.i18n.t(UI.contact.subject), { type: this.typeLabel() }));

  protected readonly body = computed(() => {
    const t = (text: Parameters<I18n['t']>[0]) => this.i18n.t(text);
    const lines = [
      t(UI.contact.greeting),
      '',
      this.message().trim(),
      '',
      `${t(UI.contact.type)}: ${this.typeLabel()}`,
      `${t(UI.contact.timeline)}: ${t(UI.contact.timelines[this.timeline()])}`,
    ];
    if (this.name().trim()) lines.push(`${t(UI.contact.name)}: ${this.name().trim()}`);
    if (this.company().trim()) lines.push(`${t(UI.contact.company).replace(/ \(.*\)$/, '')}: ${this.company().trim()}`);
    return lines.join('\n');
  });

  constructor() {
    inject(Seo).set(UI.contact.title, UI.contact.lead);
    effect(() => {
      const tipo = this.tipo();
      if (tipo && SERVICES.some((s) => s.slug === tipo)) this.type.set(tipo);
    });
  }

  protected value(event: Event): string {
    return (event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement).value;
  }

  protected onMessage(text: string): void {
    this.message.set(text);
    if (this.showError()) this.showError.set(!this.valid());
  }

  protected sendEmail(): void {
    if (!this.check()) return;
    location.href = mailto(this.subject(), this.body());
  }

  protected sendWhatsapp(): void {
    if (!this.check()) return;
    window.open(whatsapp(`${this.subject()}\n\n${this.body()}`), '_blank', 'noopener');
  }

  protected async copy(): Promise<void> {
    if (!this.check()) return;
    try {
      await navigator.clipboard.writeText(`${this.subject()}\n\n${this.body()}`);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2500);
    } catch {
      // Sin permiso de portapapeles: el visitante aún tiene el correo y WhatsApp.
    }
  }

  private check(): boolean {
    const ok = this.valid();
    this.showError.set(!ok);
    if (!ok) this.messageField()?.nativeElement.focus();
    return ok;
  }
}
