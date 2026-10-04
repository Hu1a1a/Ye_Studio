import { L } from '../core/i18n';
import { Layer } from './layers';

/** Datos de contacto y perfiles públicos (los mismos que en Malt, LinkedIn y Fiverr). */
export const PROFILE = {
  name: 'Yang Ye',
  studio: 'Ye Studio',
  email: 'yang.ye.1@hotmail.com',
  phone: '+34 691 737 022',
  whatsapp: '34691737022',
  city: 'Barcelona',
  links: {
    linkedin: 'https://www.linkedin.com/in/yang-y-48498815b/',
    github: 'https://github.com/Hu1a1a',
    malt: 'https://www.malt.es/profile/yangye',
    fiverr: 'https://www.fiverr.com/yangye1',
    repo: 'https://github.com/Hu1a1a/Ye_Studio',
  },
} as const;

export function mailto(subject: string, body = ''): string {
  const params = new URLSearchParams({ subject, body });
  // URLSearchParams codifica los espacios como "+", que los clientes de correo no deshacen.
  return `mailto:${PROFILE.email}?${params.toString().replace(/\+/g, '%20')}`;
}

export function whatsapp(text: string): string {
  return `https://wa.me/${PROFILE.whatsapp}?text=${encodeURIComponent(text)}`;
}

export interface Review {
  quote: L;
  author: string;
  company: string;
  date: string;
}

/** Reseñas públicas de Malt (5,0 de 4 valoraciones). */
export const REVIEWS: Review[] = [
  {
    quote: {
      es: 'Todo perfecto, como siempre. Muy contentos.',
      en: 'Everything perfect, as always. Very happy.',
    },
    author: 'Nieves',
    company: 'EterEnergia S.L.',
    date: '2024-11-18',
  },
  {
    quote: { es: 'Estupendo. Todo perfecto.', en: 'Great. Everything perfect.' },
    author: 'Nieves',
    company: 'EterEnergia S.L.',
    date: '2024-10-18',
  },
];

export interface Revision {
  rev: string;
  period: L;
  title: L;
  org: L | string;
  detail: L;
}

/** Trayectoria, presentada como la tabla de revisiones de un plano (la más reciente arriba). */
export const REVISIONS: Revision[] = [
  {
    rev: 'G',
    period: { es: '2025 – hoy', en: '2025 – now' },
    title: { es: 'IT Leader y desarrollador full-stack', en: 'IT Leader & full-stack developer' },
    org: 'Gestion Global Print S.L.',
    detail: {
      es: 'Arquitectura y desarrollo de un SaaS multi-tenant (ERP + CRM) para artes gráficas: cotizador, facturación electrónica y asistente de IA.',
      en: 'Architecture and development of a multi-tenant SaaS (ERP + CRM) for the printing industry: quoting engine, e-invoicing and AI assistant.',
    },
  },
  {
    rev: 'F',
    period: { es: '2024 – hoy', en: '2024 – now' },
    title: { es: 'Consultor IT y desarrollador full-stack', en: 'IT consultant & full-stack developer' },
    org: 'EterEnergia S.L.',
    detail: {
      es: 'CRM multi-tenant para una comercializadora de luz y gas, con OCR de facturas con IA y app de escritorio.',
      en: 'Multi-tenant CRM for an electricity and gas retailer, with AI invoice OCR and a desktop app.',
    },
  },
  {
    rev: 'E',
    period: { es: '2024 – 2025', en: '2024 – 2025' },
    title: { es: 'Programador full-stack ERP', en: 'Full-stack ERP developer' },
    org: 'Zarca SL',
    detail: {
      es: 'Soporte IT y módulos del nuevo ERP corporativo en Angular para una empresa de transportes.',
      en: 'IT support and modules of the new corporate Angular ERP for a transport company.',
    },
  },
  {
    rev: 'D',
    period: { es: '2023 – hoy', en: '2023 – now' },
    title: { es: 'CIO y desarrollador full-stack', en: 'CIO & full-stack developer' },
    org: { es: 'Distribuidor de refrigeración industrial (confidencial)', en: 'Industrial refrigeration distributor (confidential)' },
    detail: {
      es: 'Toda la tecnología de la empresa: infraestructura híbrida, ERP, intranet de IA privada, plataforma B2B y automatizaciones.',
      en: 'All of the company technology: hybrid infrastructure, ERP, private AI intranet, B2B platform and automations.',
    },
  },
  {
    rev: 'C',
    period: { es: '2023 – hoy', en: '2023 – now' },
    title: { es: 'Ye Studio: webs y aplicaciones para clientes', en: 'Ye Studio: websites and apps for clients' },
    org: 'Ye Studio',
    detail: {
      es: 'Webs inmobiliarias, de reservas y corporativas, y software a medida para pymes.',
      en: 'Real-estate, booking and corporate websites, and custom software for small businesses.',
    },
  },
  {
    rev: 'B',
    period: { es: '2022', en: '2022' },
    title: { es: 'Máster en Ingeniería Industrial', en: 'Master of Engineering (MEng), Industrial Engineering' },
    org: 'ESEIAAT – UPC',
    detail: {
      es: 'Universitat Politècnica de Catalunya, Terrassa.',
      en: 'Universitat Politècnica de Catalunya, Terrassa.',
    },
  },
  {
    rev: 'A',
    period: { es: '2020', en: '2020' },
    title: { es: 'Grado en Ingeniería Industrial', en: 'Bachelor of Engineering, Industrial Engineering' },
    org: 'ESEIAAT – UPC',
    detail: {
      es: 'Universitat Politècnica de Catalunya, Terrassa.',
      en: 'Universitat Politècnica de Catalunya, Terrassa.',
    },
  },
];

export const LANGUAGES: { name: L; level: L }[] = [
  { name: { es: 'Chino', en: 'Chinese' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Catalán', en: 'Catalan' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Español', en: 'Spanish' }, level: { es: 'Nativo', en: 'Native' } },
  { name: { es: 'Inglés', en: 'English' }, level: { es: 'Profesional (B2)', en: 'Professional (B2)' } },
];

export const BIO: L[] = [
  {
    es: 'Soy Yang Ye, ingeniero industrial por la UPC y desarrollador full-stack. Dirijo la tecnología de empresas y construyo el software con el que trabajan cada día: CRM y ERP, cotizadores, facturación electrónica, integraciones y automatizaciones.',
    en: 'I am Yang Ye, an industrial engineer (UPC) and full-stack developer. I run the technology of companies and build the software they use every day: CRMs and ERPs, quoting engines, e-invoicing, integrations and automations.',
  },
  {
    es: 'Me especializo en poner IA real dentro de ese software: asistentes que consultan los datos y actúan con confirmación, chatbots que responden con los documentos de la empresa, extracción de facturas y modelos privados en servidores propios cuando los datos no pueden salir de casa.',
    en: 'I specialise in putting real AI inside that software: assistants that query the data and act after confirmation, chatbots that answer from company documents, invoice extraction and private models on in-house servers when data cannot leave the building.',
  },
  {
    es: 'De la ingeniería industrial me queda el método: primero entiendo el proceso, luego lo mido y después lo automatizo. Me ocupo del recorrido completo, de la pantalla al servidor, así que hablas siempre con la misma persona.',
    en: 'Industrial engineering gave me a method: first understand the process, then measure it, then automate it. I cover the whole path, from screen to server, so you always talk to the same person.',
  },
  {
    es: 'Trabajo en remoto desde Barcelona.',
    en: 'I work remotely from Barcelona.',
  },
];

/** Herramientas agrupadas por capa. */
export const TOOLBOX: { layer: Layer; title: L; items: string[] }[] = [
  {
    layer: 'erp',
    title: { es: 'Frontend', en: 'Front end' },
    items: ['Angular 14–22', 'TypeScript', 'RxJS', 'Signals', 'Angular Material', 'PrimeNG', 'ag-Grid', 'Highcharts', 'Tailwind', 'Bootstrap'],
  },
  {
    layer: 'erp',
    title: { es: 'Backend y datos', en: 'Back end and data' },
    items: ['Node.js', 'Express', 'PHP', 'Python', 'MySQL', 'SQL Server', 'Prisma', 'REST', 'SOAP', 'ODBC'],
  },
  {
    layer: 'ai',
    title: { es: 'IA', en: 'AI' },
    items: ['OpenAI API', 'Claude API', 'Ollama', 'vLLM', 'Qwen', 'Llama', 'Embeddings', 'RAG', 'Function calling', 'Tesseract OCR'],
  },
  {
    layer: 'auto',
    title: { es: 'Automatización y escritorio', en: 'Automation and desktop' },
    items: ['Electron', 'Puppeteer', 'Playwright', 'Adobe UXP', 'ExtendScript', 'VBA', 'node-cron'],
  },
  {
    layer: 'infra',
    title: { es: 'Infraestructura', en: 'Infrastructure' },
    items: ['Ubuntu', 'Windows Server', 'Active Directory', 'Azure AD', 'Microsoft 365 / Graph', 'PM2', 'Plesk', 'GitHub Pages'],
  },
  {
    layer: 'erp',
    title: { es: 'Facturación y cobros', en: 'Invoicing and payments' },
    items: ['TicketBAI', 'VERI*FACTU', 'FacturaE', 'FACe', 'SEPA', 'PayPal', 'Stripe'],
  },
];
