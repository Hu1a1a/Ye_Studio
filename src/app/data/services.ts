import { L } from '../core/i18n';
import { Layer } from './layers';

export interface Tier {
  name: L;
  scope: L;
  /** Plazo típico en días. */
  days: number;
}

export interface Faq {
  q: L;
  a: L;
}

export interface Service {
  slug: string;
  layer: Layer;
  title: L;
  /** Una línea para la tabla de servicios. */
  short: L;
  pitch: L;
  includes: L[];
  tiers?: Tier[];
  stack: string[];
  faq: Faq[];
  /** Proyectos de la web que lo demuestran. */
  proof: string[];
}

/**
 * Catálogo de servicios. Sale de los gigs de Fiverr (04-10-2026) y del perfil de Malt; aquí no hay
 * precios: cada proyecto se presupuesta cerrado después de una primera llamada.
 */
export const SERVICES: Service[] = [
  {
    slug: 'ia-en-tu-app',
    layer: 'ai',
    title: { es: 'IA y LLM dentro de tu aplicación', en: 'AI and LLMs inside your app' },
    short: {
      es: 'Asistentes que leen tus datos y ejecutan acciones, resúmenes, clasificación y extracción.',
      en: 'Assistants that read your data and run actions, summaries, classification and extraction.',
    },
    pitch: {
      es: 'IA que hace trabajo real dentro de tu producto, no solo una caja de chat. Añado funciones con modelos de lenguaje a aplicaciones web y software de gestión que ya existen.',
      en: 'AI that does real work inside your product, not just a chat box. I add LLM features to existing web apps and business software.',
    },
    includes: [
      {
        es: 'Asistente o chat que consulta tus datos y ejecuta acciones (function calling)',
        en: 'Assistant or chat that reads your data and runs actions (function calling)',
      },
      {
        es: 'Resúmenes, clasificación, extracción de datos y generación de textos',
        en: 'Summaries, classification, data extraction and text generation',
      },
      {
        es: 'OpenAI, Claude o modelos open source, detrás de tu propia API',
        en: 'OpenAI, Claude or open-source models, behind your own API',
      },
      {
        es: 'Límites seguros: confirmaciones, permisos, registro de acciones y control de coste',
        en: 'Safe limits: confirmations, permissions, action logs and cost control',
      },
    ],
    tiers: [
      {
        name: { es: 'Una función de IA', en: 'One AI feature' },
        scope: {
          es: 'Una función (resumen, clasificación, extracción o generación) vía API',
          en: 'One feature (summary, classification, extraction or generation) via API',
        },
        days: 4,
      },
      {
        name: { es: 'Chat de IA en tu app', en: 'AI chat in your app' },
        scope: {
          es: 'Chat dentro de tu app que usa tus datos y ejecuta hasta 3 acciones',
          en: 'Chat inside your app that uses your data and runs up to 3 actions',
        },
        days: 7,
      },
      {
        name: { es: 'Módulo de asistente', en: 'Assistant module' },
        scope: {
          es: 'Asistente con hasta 6 acciones, roles, registro y límites de coste',
          en: 'Assistant with up to 6 actions, roles, logs and cost limits',
        },
        days: 14,
      },
    ],
    stack: ['Angular', 'TypeScript', 'Node.js / Express', 'Python', 'OpenAI API', 'Claude API'],
    faq: [
      {
        q: { es: '¿Qué proveedor de IA usas?', en: 'Which AI provider do you use?' },
        a: {
          es: 'OpenAI, Anthropic Claude o modelos open source (Llama, Mistral, Qwen…). Recomiendo uno según coste, calidad y privacidad. El consumo de la API lo pagas directamente al proveedor.',
          en: 'OpenAI, Anthropic Claude or open-source models (Llama, Mistral, Qwen…). I recommend one based on cost, quality and privacy. API usage is paid by you directly to the provider.',
        },
      },
      {
        q: { es: '¿La IA puede cambiar datos de mi sistema?', en: 'Can the AI change data in my system?' },
        a: {
          es: 'Sí, mediante acciones controladas. Por defecto, cada acción de escritura pide confirmación al usuario antes de ejecutarse.',
          en: 'Yes, through controlled actions. By default every write action asks the user to confirm before it runs.',
        },
      },
      {
        q: { es: '¿Trabajas sobre mi código actual?', en: 'Do you work on my existing code?' },
        a: {
          es: 'Sí. Necesito acceso al repositorio (o una copia) y un entorno de pruebas.',
          en: 'Yes. I need access to the repository (or a copy) and a test environment.',
        },
      },
    ],
    proof: ['intranet-ia', 'saas-artes-graficas'],
  },
  {
    slug: 'chatbot-rag',
    layer: 'ai',
    title: { es: 'Chatbot que responde con tus documentos (RAG)', en: 'RAG chatbot over your documents' },
    short: {
      es: 'Respuestas con la fuente citada, sobre PDF, Word, webs, correo o base de datos.',
      en: 'Answers with cited sources, over PDF, Word, web pages, email or databases.',
    },
    pitch: {
      es: 'Chatbots que responden con TU información, citan el documento de origen y dicen «no lo sé» en lugar de inventar. Es RAG (Retrieval-Augmented Generation) y lo tengo en producción indexando documentos y correo de una empresa.',
      en: 'Chatbots that answer with YOUR information, cite the source document and say "I don\'t know" instead of inventing. It is RAG (Retrieval-Augmented Generation), and I run it in production indexing a company\'s documents and email.',
    },
    includes: [
      {
        es: 'Ingesta e indexado de tus documentos (búsqueda por significado, no por palabras)',
        en: 'Ingestion and indexing of your documents (search by meaning, not keywords)',
      },
      { es: 'Respuestas con referencia al documento de origen', en: 'Answers that reference the source document' },
      {
        es: 'Chat web, o integración en tu web o aplicación',
        en: 'Web chat, or integration in your website or app',
      },
      { es: 'Reindexado automático cuando cambian los documentos', en: 'Automatic re-indexing when documents change' },
      {
        es: 'Opción de ejecutarlo en tu servidor: los datos no salen de la empresa',
        en: 'Option to run it on your own server: data never leaves the company',
      },
    ],
    tiers: [
      {
        name: { es: 'Chatbot de documentos', en: 'Document chatbot' },
        scope: {
          es: 'Hasta 20 documentos, respuestas con fuentes y chat web sencillo',
          en: 'Up to 20 documents, answers with sources and a simple web chat',
        },
        days: 4,
      },
      {
        name: { es: 'Chatbot para tu web', en: 'Chatbot for your website' },
        scope: {
          es: 'Hasta 200 documentos, integrado en tu web o app, con OCR para escaneados',
          en: 'Up to 200 documents, embedded in your site or app, with OCR for scans',
        },
        days: 7,
      },
      {
        name: { es: 'Base de conocimiento con IA', en: 'AI knowledge base' },
        scope: {
          es: 'Hasta 1.000 documentos + correo o base de datos, con reindexado automático',
          en: 'Up to 1,000 documents + email or database, with automatic re-indexing',
        },
        days: 14,
      },
    ],
    stack: ['Node.js', 'Python', 'Vector DB', 'Embeddings', 'OpenAI / Claude / open source', 'Angular'],
    faq: [
      {
        q: { es: '¿El chatbot se inventará respuestas?', en: 'Will the chatbot invent answers?' },
        a: {
          es: 'Se configura para responder solo con tu contenido y mostrar la fuente. Si la respuesta no está en tus documentos, lo dice.',
          en: 'It is set up to answer only from your content and to show the source. If the answer is not in your documents, it says so.',
        },
      },
      {
        q: { es: '¿Qué tipos de archivo admite?', en: 'Which file types?' },
        a: {
          es: 'PDF, Word, Excel/CSV, texto, páginas web y correos. Los PDF escaneados necesitan OCR.',
          en: 'PDF, Word, Excel/CSV, text, web pages and emails. Scanned PDFs need OCR.',
        },
      },
      {
        q: { es: '¿Cuánto cuesta mantenerlo?', en: 'What are the running costs?' },
        a: {
          es: 'Alojamiento más el uso del modelo. Te doy una estimación antes de empezar.',
          en: 'Hosting plus model usage. I give you an estimate before starting.',
        },
      },
    ],
    proof: ['intranet-ia'],
  },
  {
    slug: 'agentes-ia',
    layer: 'ai',
    title: { es: 'Agentes de IA y automatización de procesos', en: 'AI agents and workflow automation' },
    short: {
      es: 'Triaje de correo, informes automáticos y agentes que actúan sobre tu CRM con aprobación.',
      en: 'Email triage, scheduled reports and agents that act on your CRM with approval.',
    },
    pitch: {
      es: '¿Trabajo repetitivo que se come el día de tu equipo? Construyo agentes de IA que lo hacen por ti, conectados a las herramientas que ya usas, con registro de cada acción.',
      en: 'Repetitive work eating your team\'s day? I build AI agents that do it for you, connected to the tools you already use, with a log of every action.',
    },
    includes: [
      {
        es: 'Asistente de correo que clasifica y redacta respuestas con un nivel de confianza',
        en: 'Email assistant that classifies mail and drafts replies with a confidence score',
      },
      { es: 'Informes redactados por IA y enviados en horario programado', en: 'AI-written reports emailed on a schedule' },
      {
        es: 'Agentes que consultan el CRM/ERP y ejecutan acciones dentro de límites seguros',
        en: 'Agents that query the CRM/ERP and run actions within safe limits',
      },
      {
        es: 'Integraciones: API REST, MySQL, correo (IMAP/SMTP, Microsoft 365), Teams, Excel/PDF, webhooks',
        en: 'Integrations: REST APIs, MySQL, email (IMAP/SMTP, Microsoft 365), Teams, Excel/PDF, webhooks',
      },
    ],
    tiers: [
      {
        name: { es: 'Una tarea automatizada', en: 'One automated task' },
        scope: {
          es: 'Un flujo con IA (p. ej. triaje de correo o un informe programado)',
          en: 'One AI workflow (e.g. email triage or a scheduled report)',
        },
        days: 4,
      },
      {
        name: { es: 'Agente con herramientas', en: 'Agent with tools' },
        scope: {
          es: 'Agente con hasta 3 herramientas conectadas a tu CRM, correo o API',
          en: 'Agent with up to 3 tools connected to your CRM, email or API',
        },
        days: 7,
      },
      {
        name: { es: 'Agente con aprobaciones', en: 'Agent with approvals' },
        scope: {
          es: 'Hasta 6 herramientas, pasos de aprobación humana y registro de acciones',
          en: 'Up to 6 tools, human approval steps and action logs',
        },
        days: 14,
      },
    ],
    stack: ['Node.js', 'Python', 'TypeScript', 'OpenAI / Claude / open source', 'MySQL', 'Microsoft 365'],
    faq: [
      {
        q: { es: '¿Necesito un CRM concreto?', en: 'Do I need a specific CRM?' },
        a: {
          es: 'No. Si tu sistema tiene API o una base de datos accesible, lo conecto. Sin API, muchas veces se puede trabajar con correo, ficheros o exportaciones.',
          en: 'No. If your system has an API or an accessible database, I can connect it. Without an API we can often use email, files or exports.',
        },
      },
      {
        q: { es: '¿Y si el agente se equivoca?', en: 'What if the agent makes a mistake?' },
        a: {
          es: 'Las acciones sensibles pueden requerir aprobación humana y todas quedan registradas.',
          en: 'Sensitive actions can require human approval, and every action is logged.',
        },
      },
    ],
    proof: ['intranet-ia', 'leads-hipotecas', 'crm-energia'],
  },
  {
    slug: 'extraccion-documentos',
    layer: 'auto',
    title: { es: 'Extracción de datos de PDF y facturas con IA', en: 'AI data extraction from PDFs and invoices' },
    short: {
      es: 'Facturas y documentos PDF a Excel, CSV o tu base de datos, con validación.',
      en: 'PDF invoices and documents into Excel, CSV or your database, with validation.',
    },
    pitch: {
      es: '¿Sigues tecleando a mano los datos de las facturas? Construyo herramientas que leen PDF de facturas y documentos y los convierten en datos limpios, sin una plantilla por proveedor.',
      en: 'Still typing invoice data by hand? I build tools that read PDF invoices and documents and turn them into clean data, without one template per supplier.',
    },
    includes: [
      { es: 'Formatos y proveedores distintos sin una plantilla para cada uno', en: 'Different layouts and suppliers without a template for each' },
      { es: 'PDF nativos y escaneados (OCR)', en: 'Native and scanned PDFs (OCR)' },
      {
        es: 'Validación de totales, fechas y NIF, con lista de lo que hay que revisar',
        en: 'Validation of totals, dates and tax IDs, with a list of what needs review',
      },
      {
        es: 'Proceso por lotes como script, herramienta web o app de escritorio',
        en: 'Batch processing as a script, a web tool or a desktop app',
      },
    ],
    tiers: [
      {
        name: { es: 'Script de extracción', en: 'Extraction script' },
        scope: {
          es: 'Hasta 10 campos de un tipo de documento a Excel/CSV',
          en: 'Up to 10 fields from one document type to Excel/CSV',
        },
        days: 3,
      },
      {
        name: { es: 'Varios formatos', en: 'Multi-layout extraction' },
        scope: {
          es: 'Hasta 5 formatos, OCR de escaneados, validación, Excel o base de datos',
          en: 'Up to 5 layouts, OCR for scans, validation, Excel or database',
        },
        days: 6,
      },
      {
        name: { es: 'Herramienta por lotes', en: 'Batch tool' },
        scope: {
          es: 'App de escritorio o web por lotes, con pantalla de revisión',
          en: 'Desktop or web batch tool with a review screen',
        },
        days: 14,
      },
    ],
    stack: ['Claude / OpenAI', 'OCR', 'Node.js', 'Python', 'Electron', 'Excel / CSV / MySQL'],
    faq: [
      {
        q: { es: '¿Qué precisión tiene?', en: 'How accurate is it?' },
        a: {
          es: 'Muy alta en documentos legibles. Cada resultado se valida y lo dudoso se marca para revisar en vez de guardarse a ciegas.',
          en: 'Very high on clear documents. Every result is validated and anything doubtful is flagged for review instead of being saved blindly.',
        },
      },
      {
        q: { es: '¿Puedes procesar miles de PDF?', en: 'Can you process thousands of PDFs?' },
        a: {
          es: 'Sí, por lotes. Antes de empezar te estimo el coste de IA por documento.',
          en: 'Yes, in batches. I estimate the AI cost per document before we start.',
        },
      },
    ],
    proof: ['crm-energia', 'intranet-ia'],
  },
  {
    slug: 'apps-angular',
    layer: 'erp',
    title: { es: 'Aplicaciones web a medida con Angular', en: 'Custom Angular web apps' },
    short: {
      es: 'Desde un módulo hasta un SaaS completo: Angular, Node.js y MySQL.',
      en: 'From a single module to a full SaaS: Angular, Node.js and MySQL.',
    },
    pitch: {
      es: 'Desarrollo aplicaciones web con Angular, desde un módulo hasta un SaaS completo. También añado funciones a apps Angular existentes, actualizo versiones antiguas y resuelvo problemas de rendimiento.',
      en: 'I build web applications with Angular, from a single module to a complete SaaS. I also add features to existing Angular apps, upgrade old versions and fix performance problems.',
    },
    includes: [
      {
        es: 'Frontend Angular moderno (standalone, signals, responsive)',
        en: 'Modern Angular front end (standalone components, signals, responsive)',
      },
      { es: 'API REST en Node.js/Express y base de datos MySQL', en: 'Node.js/Express REST API and MySQL database' },
      {
        es: 'Login, roles y permisos; multiempresa (multi-tenant) si hace falta',
        en: 'Login, roles and permissions; multi-company (multi-tenant) if needed',
      },
      { es: 'Tablas de datos, gráficos, exportación a PDF y Excel', en: 'Data grids, charts, PDF and Excel exports' },
      { es: 'Despliegue en tu servidor o en la nube, con documentación', en: 'Deployment on your server or cloud, with documentation' },
    ],
    tiers: [
      {
        name: { es: 'Función o arreglo', en: 'Feature or fix' },
        scope: {
          es: 'Una pantalla, función o corrección en tu app Angular',
          en: 'One screen, feature or fix in your Angular app',
        },
        days: 3,
      },
      {
        name: { es: 'Módulo pequeño', en: 'Small module' },
        scope: { es: 'Hasta 3 pantallas con API REST y MySQL', en: 'Up to 3 screens with REST API and MySQL' },
        days: 10,
      },
      {
        name: { es: 'Aplicación pequeña', en: 'Small web app' },
        scope: {
          es: 'Hasta 6 pantallas, login y roles, API, base de datos y despliegue',
          en: 'Up to 6 screens, login and roles, API, database and deployment',
        },
        days: 21,
      },
    ],
    stack: ['Angular', 'TypeScript', 'RxJS / Signals', 'Node.js / Express', 'MySQL', 'ag-Grid', 'Highcharts'],
    faq: [
      {
        q: { es: '¿Me quedo con el código fuente?', en: 'Do I get the source code?' },
        a: { es: 'Sí, todo, en tu repositorio.', en: 'Yes, all of it, in your repository.' },
      },
      {
        q: { es: '¿Puedes actualizar mi Angular antiguo?', en: 'Can you upgrade my old Angular version?' },
        a: {
          es: 'Sí, por pasos y manteniendo la aplicación funcionando. También leo proyectos React y PHP.',
          en: 'Yes, step by step, keeping the app working. I also read React and PHP projects.',
        },
      },
    ],
    proof: ['saas-artes-graficas', 'crm-energia', 'erp-transportes'],
  },
  {
    slug: 'crm-erp',
    layer: 'erp',
    title: { es: 'CRM y ERP a medida', en: 'Custom CRM and ERP' },
    short: {
      es: 'Presupuestos, pedidos, facturas, comisiones y facturación electrónica, a tu manera.',
      en: 'Quotes, orders, invoices, commissions and e-invoicing, built around your process.',
    },
    pitch: {
      es: '¿Tu negocio no encaja en un CRM genérico? Construyo CRM y ERP alrededor de cómo trabajas de verdad, y conecto ERP existentes con otros sistemas (tienda online, contabilidad, facturación electrónica, API).',
      en: 'Your business does not fit a generic CRM? I build CRM and ERP software around the way you actually work, and connect existing ERPs with other systems (e-commerce, accounting, e-invoicing, APIs).',
    },
    includes: [
      {
        es: 'Clientes y oportunidades, presupuestos con calculadora de precio y margen',
        en: 'Customers and leads, quotes with a price and margin calculator',
      },
      {
        es: 'Flujo completo: presupuesto → pedido → albarán → factura, cobros y remesas SEPA',
        en: 'Full flow: quote → order → delivery note → invoice, payments and SEPA remittances',
      },
      {
        es: 'Facturación electrónica española: TicketBAI, VERI*FACTU y FacturaE',
        en: 'Spanish e-invoicing: TicketBAI, VERI*FACTU and FacturaE',
      },
      { es: 'Comisiones comerciales, informes y cuadros de mando', en: 'Sales commissions, reports and dashboards' },
      { es: 'Portal de cliente y migración de tus datos actuales', en: 'Customer portal and migration of your current data' },
    ],
    tiers: [
      {
        name: { es: 'Módulo o integración', en: 'Module or integration' },
        scope: {
          es: 'Un módulo o integración para tu CRM/ERP actual',
          en: 'One custom module or integration for your current CRM/ERP',
        },
        days: 5,
      },
      {
        name: { es: 'Núcleo de CRM', en: 'CRM core' },
        scope: {
          es: 'Clientes, oportunidades y presupuestos, con usuarios y roles',
          en: 'Customers, leads and quotes, with users and roles',
        },
        days: 14,
      },
      {
        name: { es: 'CRM + circuito de venta', en: 'CRM + sales flow' },
        scope: {
          es: 'Núcleo de CRM + pedidos, facturas y cuadro de mando',
          en: 'CRM core + orders, invoices and dashboard',
        },
        days: 30,
      },
    ],
    stack: ['Angular', 'Node.js / Express', 'MySQL', 'TicketBAI', 'VERI*FACTU', 'FacturaE', 'SEPA'],
    faq: [
      {
        q: { es: '¿Por qué a medida y no un CRM comercial?', en: 'Why custom instead of an off-the-shelf CRM?' },
        a: {
          es: 'Cuando tus precios, procesos o documentos son específicos, adaptar una herramienta genérica cuesta más y queda peor. El software a medida encaja exactamente.',
          en: 'When your pricing, processes or documents are specific, adapting a generic tool costs more and ends up worse. Custom software fits exactly.',
        },
      },
      {
        q: { es: '¿Puedes migrar mis datos?', en: 'Can you migrate my data?' },
        a: {
          es: 'Sí: desde Excel, Access, bases de datos SQL o exportaciones de tu herramienta actual.',
          en: 'Yes, from Excel, Access, SQL databases or exports of your current tool.',
        },
      },
      {
        q: { es: '¿De quién es el software?', en: 'Who owns the software?' },
        a: {
          es: 'Tuyo: código fuente completo y base de datos.',
          en: 'You do: full source code and database.',
        },
      },
    ],
    proof: ['saas-artes-graficas', 'crm-energia', 'erp-transportes'],
  },
  {
    slug: 'ia-privada',
    layer: 'infra',
    title: { es: 'IA privada en tu propio servidor', en: 'Private AI on your own server' },
    short: {
      es: 'Modelos open source en tu GPU, con API compatible con OpenAI y chat para tu equipo.',
      en: 'Open-source models on your GPU, with an OpenAI-compatible API and a team chat.',
    },
    pitch: {
      es: '¿Tus datos no pueden salir de la empresa? Monto IA privada en tu servidor: modelos de lenguaje open source en tu GPU, con una API compatible con OpenAI para que tus aplicaciones la usen. Lo tengo funcionando en producción sobre un servidor NVIDIA propio.',
      en: 'Your data cannot leave the company? I set up private AI on your own server: open-source LLMs on your GPU, with an OpenAI-compatible API your apps can use. I run this in production on an in-house NVIDIA server.',
    },
    includes: [
      {
        es: 'Elección del modelo y dimensionado para tu hardware (o consejo de qué GPU comprar)',
        en: 'Model choice and sizing for your hardware (or advice on which GPU to buy)',
      },
      {
        es: 'Servidor de inferencia (Ollama / vLLM) con API compatible con OpenAI',
        en: 'Inference server (Ollama / vLLM) with an OpenAI-compatible API',
      },
      { es: 'Chat web privado para tu equipo, con usuarios', en: 'Private web chat for your team, with users' },
      {
        es: 'Opcional: RAG sobre tus documentos y conexión con tus aplicaciones',
        en: 'Optional: RAG over your documents and connection to your apps',
      },
    ],
    tiers: [
      {
        name: { es: 'API de LLM privada', en: 'Private LLM API' },
        scope: {
          es: 'Modelo open source en tu servidor con API compatible con OpenAI',
          en: 'Open-source model on your server with an OpenAI-compatible API',
        },
        days: 3,
      },
      {
        name: { es: 'ChatGPT privado', en: 'Private ChatGPT' },
        scope: { es: '+ chat web privado para tu equipo, con usuarios', en: '+ private web chat for your team, with users' },
        days: 6,
      },
      {
        name: { es: 'IA privada + documentos', en: 'Private AI + documents' },
        scope: {
          es: '+ RAG sobre tus documentos y conexión con una aplicación',
          en: '+ RAG over your documents and connection to one app',
        },
        days: 14,
      },
    ],
    stack: ['NVIDIA GPU', 'Ollama', 'vLLM', 'Linux / Windows Server', 'OpenAI-compatible API'],
    faq: [
      {
        q: { es: '¿Qué hardware necesito?', en: 'What hardware do I need?' },
        a: {
          es: 'Depende del modelo y del número de usuarios. Con las especificaciones de tu servidor te recomiendo un modelo; también te asesoro si hay que comprar GPU.',
          en: 'It depends on the model and the number of users. Send me your server specs and I will recommend a model; I can also advise on buying a GPU.',
        },
      },
      {
        q: { es: '¿Es tan bueno como ChatGPT?', en: 'Is it as good as ChatGPT?' },
        a: {
          es: 'Los modelos open source actuales son muy buenos para la mayoría de tareas de empresa. Pruebo tus casos reales antes de que decidas.',
          en: 'Modern open-source models are very good for most business tasks. I test your real use cases before you decide.',
        },
      },
    ],
    proof: ['intranet-ia', 'infraestructura-it'],
  },
  {
    slug: 'direccion-tecnica',
    layer: 'infra',
    title: { es: 'Dirección técnica e infraestructura IT', en: 'Technical leadership and IT infrastructure' },
    short: {
      es: 'CTO a tiempo parcial: arquitectura, ERP, servidores on-premise y nube híbrida.',
      en: 'Part-time CTO: architecture, ERP, on-premise servers and hybrid cloud.',
    },
    pitch: {
      es: 'Dirijo la tecnología de empresas: infraestructura de software y hardware, gestión del ERP y herramientas a medida. Si no necesitas un CTO a jornada completa, puedo serlo a tiempo parcial.',
      en: 'I run the technology of companies: software and hardware infrastructure, ERP management and custom tools. If you do not need a full-time CTO, I can be your part-time one.',
    },
    includes: [
      { es: 'Arquitectura y hoja de ruta tecnológica', en: 'Architecture and technology roadmap' },
      {
        es: 'Sala de servidores propia, dominio on-premise y nube en arquitectura híbrida',
        en: 'In-house server room, on-premise domain and hybrid cloud',
      },
      {
        es: 'Integración del ERP con sistemas externos y automatizaciones',
        en: 'ERP integration with external systems and automations',
      },
      { es: 'Selección de proveedores y revisión de código', en: 'Vendor selection and code review' },
    ],
    stack: ['Windows Server / AD', 'Linux', 'Azure AD', 'PM2', 'MySQL', 'ODBC'],
    faq: [
      {
        q: { es: '¿Cómo se contrata?', en: 'How does it work?' },
        a: {
          es: 'Por bolsa de días al mes o por proyecto. Lo ajustamos a lo que necesites en la primera llamada.',
          en: 'As a monthly bank of days or per project. We size it to what you need in the first call.',
        },
      },
    ],
    proof: ['infraestructura-it', 'plataforma-industrial', 'etl-erp'],
  },
  {
    slug: 'webs',
    layer: 'web',
    title: { es: 'Webs corporativas y de reservas', en: 'Corporate and booking websites' },
    short: {
      es: 'Webs rápidas y multidioma: corporativas, inmobiliarias, alquiler vacacional y reservas.',
      en: 'Fast multilingual websites: corporate, real estate, holiday rentals and bookings.',
    },
    pitch: {
      es: 'Webs a medida para empresas y profesionales, con diseño propio, varios idiomas y formularios o reservas. Las puedo alojar como estáticas (sin coste de servidor) o conectarlas a tu sistema.',
      en: 'Custom websites for companies and professionals, with original design, several languages and forms or bookings. They can be hosted as static sites (no server cost) or connected to your system.',
    },
    includes: [
      { es: 'Diseño a medida y adaptado a móvil', en: 'Custom design, mobile-ready' },
      { es: 'Multidioma y SEO técnico básico', en: 'Multilingual and basic technical SEO' },
      { es: 'Formularios, reservas o catálogo', en: 'Forms, bookings or catalog' },
      { es: 'Publicación y dominio', en: 'Publishing and domain setup' },
    ],
    stack: ['Angular', 'TypeScript', 'PHP', 'WordPress', 'PrestaShop', 'GitHub Pages'],
    faq: [],
    proof: ['sandberg-estates', 'villa-marina', 'viajes-mundomania'],
  },
];

/** Pasos de un encargo, en orden. */
export const PROCESS: { title: L; text: L }[] = [
  {
    title: { es: 'Llamada de 30 minutos', en: '30-minute call' },
    text: {
      es: 'Me cuentas el problema y cómo trabajáis hoy. Sin coste ni compromiso.',
      en: 'You tell me the problem and how your team works today. Free, no commitment.',
    },
  },
  {
    title: { es: 'Propuesta cerrada', en: 'Fixed proposal' },
    text: {
      es: 'Alcance, plazo y precio por escrito; por fases si el proyecto es grande.',
      en: 'Scope, timeline and price in writing; in phases if the project is large.',
    },
  },
  {
    title: { es: 'Entregas con demo', en: 'Deliveries with a demo' },
    text: {
      es: 'En cada fase ves algo funcionando en un entorno de pruebas y das tu visto bueno.',
      en: 'Every phase you see something working in a test environment and sign it off.',
    },
  },
  {
    title: { es: 'Puesta en producción', en: 'Go-live' },
    text: {
      es: 'Despliegue en tu servidor o en la nube, documentación y formación al equipo.',
      en: 'Deployment on your server or in the cloud, documentation and team training.',
    },
  },
  {
    title: { es: 'Código tuyo y soporte', en: 'Your code, and support' },
    text: {
      es: 'El código fuente y los datos son tuyos. Mantenimiento y mejoras, si los necesitas.',
      en: 'Source code and data are yours. Maintenance and improvements, if you need them.',
    },
  },
];

/** Formas de contratar. */
export const MODELS: { title: L; text: L }[] = [
  {
    title: { es: 'Proyecto cerrado', en: 'Fixed-price project' },
    text: {
      es: 'Alcance, plazo y precio fijados antes de empezar. Lo habitual para un módulo, una integración o una aplicación nueva.',
      en: 'Scope, timeline and price agreed before starting. The usual choice for a module, an integration or a new app.',
    },
  },
  {
    title: { es: 'Bolsa de días', en: 'Bank of days' },
    text: {
      es: 'Un número de días al mes para evolucionar tu software, con prioridades que decides tú cada semana.',
      en: 'A number of days per month to evolve your software, with priorities you set every week.',
    },
  },
  {
    title: { es: 'Dirección técnica a tiempo parcial', en: 'Part-time technical lead' },
    text: {
      es: 'Arquitectura, proveedores, infraestructura y equipo, sin contratar un CTO a jornada completa.',
      en: 'Architecture, vendors, infrastructure and team, without hiring a full-time CTO.',
    },
  },
];
