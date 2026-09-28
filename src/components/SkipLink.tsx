'use client';

import { useI18n } from '@/lib/i18n';

export function SkipLink() {
  const { t } = useI18n();
  return (
    <a
      href="#main"
      className="fixed left-2 top-2 z-[2000] -translate-y-16 rounded-lg bg-[var(--mui-palette-primary-main)] px-4 py-2 font-semibold text-white focus:translate-y-0"
    >
      {t.ui.skip}
    </a>
  );
}
