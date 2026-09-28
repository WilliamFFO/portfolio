'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { detectLang, LANG_KEY, messages, type Lang, type Messages } from '@/content/messages';

interface I18n {
  lang: Lang;
  t: Messages;
  setLang: (lang: Lang) => void;
}

const I18nContext = createContext<I18n | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // The server renders Spanish (the default); the visitor's preference is applied right after hydration.
  const [lang, setLangState] = useState<Lang>('es');

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem(LANG_KEY);
    } catch {
      /* storage unavailable */
    }
    setLangState(detectLang(saved, navigator.language));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = messages[lang].meta.title;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(LANG_KEY, next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo(() => ({ lang, t: messages[lang], setLang }), [lang, setLang]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
