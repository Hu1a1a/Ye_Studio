# Ye Studio

Portafolio de **Yang Ye** (Ye Studio): software a medida e IA aplicada — CRM y ERP, cotizadores, facturación
electrónica, LLM, RAG, agentes e IA privada.

**Web:** https://hu1a1a.github.io/Ye_Studio/ · versión en inglés para clientes internacionales:
https://hu1a1a.github.io/Ye_Studio/#/home?lang=en

## Qué hay

| Ruta | Página |
|---|---|
| `#/home` | Portada (espacio modelo de CAD), proyectos destacados, servicios, método, reseñas y trayectoria |
| `#/proyectos` | Los 17 proyectos, filtrables por capa (IA, CRM/ERP, automatización, infraestructura, webs) |
| `#/proyectos/<slug>` | Ficha de cada proyecto: problema, qué se construyó, detalles técnicos, arquitectura y cajetín |
| `#/servicios` | Servicios con paquetes, plazos y preguntas frecuentes (sin precios) |
| `#/sobre-mi` | Bio, herramientas, idiomas, trayectoria y reseñas |
| `#/contacto` | Encargo de trabajo: compone el mensaje y lo abre en el correo o WhatsApp del visitante |

Los enlaces antiguos (`#/nosotros`, `#/oldHome`) redirigen a las páginas nuevas.

## Editar el contenido

Todo el texto está en `src/app/data/`, siempre en español e inglés (`{ es: '…', en: '…' }`):

- `projects.ts` — proyectos (orden = nº de hoja), cifras, stack, enlaces, captura o esquema de arquitectura.
- `services.ts` — servicios, paquetes, FAQ, pasos de trabajo y formas de contratar.
- `profile.ts` — contacto, perfiles (LinkedIn, GitHub, Malt, Fiverr), reseñas, trayectoria, bio y herramientas.
- `ui.ts` — textos de interfaz.

Las capturas de las webs están en `public/img/projects/` (1280×800) y la imagen para compartir el enlace en
`public/og.png` (1200×630).

## Desarrollo y publicación

Angular 22 (componentes standalone, signals, sin zone.js). Requiere Node 22 o superior.

```bash
npm install
npm start          # http://localhost:4200/Ye_Studio/
npm run build      # genera la web estática en docs/
```

GitHub Pages sirve la carpeta `docs/` de la rama `master`: para publicar, `npm run build`, commit de `docs/` y
`git push`. Las rutas van en el hash (`#/…`), así que no hace falta `404.html`.
