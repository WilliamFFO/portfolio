'use client';

import AppBar from '@mui/material/AppBar';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { site } from '@/config/site';
import type { Lang } from '@/content/messages';
import { useI18n } from '@/lib/i18n';
import { ThemeToggle } from './ThemeToggle';

const SECTIONS = ['about', 'skills', 'projects', 'experience', 'contact'] as const;

export function Header() {
  const { lang, setLang, t } = useI18n();

  return (
    <AppBar position="sticky" color="inherit" elevation={0} className="border-b border-[var(--mui-palette-divider)] !bg-[var(--mui-palette-background-default)]/85 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex items-center gap-2.5 font-bold no-underline" aria-label={site.name}>
          <span className="grid size-9 place-items-center rounded-xl bg-[var(--mui-palette-primary-main)] text-sm text-white">WF</span>
          <span className="hidden text-[var(--mui-palette-text-primary)] min-[420px]:inline">{site.shortName}</span>
        </a>

        <nav aria-label="Main" className="hidden gap-6 text-[15px] font-medium md:flex">
          {SECTIONS.map((id) => (
            <a key={id} href={`#${id}`} className="text-[var(--mui-palette-text-secondary)] no-underline transition-colors hover:text-[var(--mui-palette-text-primary)]">
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <ToggleButtonGroup
            size="small"
            exclusive
            value={lang}
            onChange={(_, value: Lang | null) => value && setLang(value)}
            aria-label={t.ui.language}
          >
            <ToggleButton value="es" aria-label="Español" className="!px-2.5 !font-bold">
              ES
            </ToggleButton>
            <ToggleButton value="en" aria-label="English" className="!px-2.5 !font-bold">
              EN
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
      </div>
    </AppBar>
  );
}
