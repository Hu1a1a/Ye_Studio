import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withHashLocation,
  withInMemoryScrolling,
  withNavigationErrorHandler,
} from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // GitHub Pages solo sirve ficheros estáticos: con rutas en el hash (#/proyectos) no hace falta 404.html
    // y siguen funcionando los enlaces antiguos (#/home, #/contacto…).
    provideRouter(
      routes,
      withHashLocation(),
      withComponentInputBinding(),
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
      // Tras publicar una versión nueva, quien tenga la web abierta pide trozos que ya no existen: se recarga.
      withNavigationErrorHandler(({ error }) => {
        if (String(error).includes('dynamically imported module')) location.reload();
      }),
    ),
  ],
};
