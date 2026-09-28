import { describe, expect, it } from 'vitest';
import { detectLang, messages } from '@/content/messages';

/** Returns every key path of an object, e.g. "projects.items.api.title". Arrays are compared by length. */
function shape(value: unknown, prefix = ''): string[] {
  if (Array.isArray(value)) return [`${prefix}[${value.length}]`, ...value.flatMap((v, i) => shape(v, `${prefix}[${i}]`))];
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([k, v]) => shape(v, prefix ? `${prefix}.${k}` : k));
  }
  return [prefix];
}

function strings(value: unknown): string[] {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(strings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(strings);
  return [];
}

describe('translations', () => {
  it('Spanish and English have exactly the same structure', () => {
    expect(shape(messages.en)).toEqual(shape(messages.es));
  });

  it('has no empty strings', () => {
    for (const lang of ['es', 'en'] as const) {
      expect(strings(messages[lang]).filter((s) => s.trim() === '')).toEqual([]);
    }
  });

  it('keeps the two languages actually different', () => {
    expect(messages.es.hero.lead).not.toBe(messages.en.hero.lead);
    expect(messages.es.nav.about).not.toBe(messages.en.nav.about);
  });
});

describe('detectLang', () => {
  it('prefers a saved choice', () => {
    expect(detectLang('en', 'es-CO')).toBe('en');
    expect(detectLang('es', 'en-US')).toBe('es');
  });

  it('falls back to the browser language', () => {
    expect(detectLang(null, 'es-CO')).toBe('es');
    expect(detectLang(null, 'ES')).toBe('es');
    expect(detectLang(null, 'en-US')).toBe('en');
    expect(detectLang(null, 'pt-BR')).toBe('en');
  });

  it('ignores invalid saved values and defaults to Spanish without a browser language', () => {
    expect(detectLang('fr', 'en-US')).toBe('en');
    expect(detectLang(null, undefined)).toBe('es');
  });
});
