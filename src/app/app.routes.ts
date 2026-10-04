import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/projects/projects').then((m) => m.Projects),
  },
  {
    path: 'proyectos/:slug',
    loadComponent: () => import('./pages/project/project').then((m) => m.ProjectPage),
  },
  {
    path: 'servicios',
    loadComponent: () => import('./pages/services/services').then((m) => m.Services),
  },
  { path: 'sobre-mi', loadComponent: () => import('./pages/about/about').then((m) => m.About) },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  // Rutas de la web anterior, para no romper enlaces ya compartidos.
  { path: 'nosotros', redirectTo: 'sobre-mi' },
  { path: 'oldHome', redirectTo: 'home' },
  { path: '404', loadComponent: () => import('./pages/not-found/not-found').then((m) => m.NotFound) },
  { path: '**', redirectTo: '404' },
];
