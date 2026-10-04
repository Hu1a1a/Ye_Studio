import { L } from '../core/i18n';

/**
 * Las categorías de trabajo son «capas», como en un plano de CAD: cada una con su color (los del índice de
 * colores de AutoCAD), que se repite en filtros, esquemas y cajetines.
 */
export type Layer = 'ai' | 'erp' | 'auto' | 'web' | 'infra';

export const LAYERS: Record<Layer, { name: L }> = {
  ai: { name: { es: 'IA y LLM', en: 'AI & LLM' } },
  erp: { name: { es: 'CRM / ERP', en: 'CRM / ERP' } },
  auto: { name: { es: 'Automatización', en: 'Automation' } },
  infra: { name: { es: 'Infraestructura', en: 'Infrastructure' } },
  web: { name: { es: 'Webs', en: 'Websites' } },
};

export const LAYER_ORDER: Layer[] = ['ai', 'erp', 'auto', 'infra', 'web'];
