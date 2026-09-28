'use client';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import { site } from '@/config/site';
import type { Lang } from '@/content/messages';
import { useI18n } from '@/lib/i18n';
import { ThemeToggle } from './ThemeToggle';

const SECTIONS = ['about', 'skills', 'projects', 'experience', 'education', 'contact'] as const;

export function Header() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);

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
            className="hidden md:inline-flex"
          >
            <ToggleButton value="es" aria-label="Español" className="!px-2.5 !font-bold">
              ES
            </ToggleButton>
            <ToggleButton value="en" aria-label="English" className="!px-2.5 !font-bold">
              EN
            </ToggleButton>
          </ToggleButtonGroup>
          <IconButton aria-label={t.ui.openMenu} className="md:hidden" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} slotProps={{ paper: { className: '!w-72 !bg-[var(--mui-palette-background-default)]' } }}>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-bold">{site.shortName}</span>
            <IconButton aria-label={t.ui.closeMenu} onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </div>
          <nav aria-label="Mobile" className="flex flex-col gap-1 px-3 pb-4 text-[17px] font-medium">
            {SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[var(--mui-palette-text-primary)] no-underline transition-colors hover:bg-[var(--mui-palette-action-hover)]"
              >
                {t.nav[id]}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex items-center justify-center gap-2 border-t border-[var(--mui-palette-divider)] px-5 py-4">
            <ToggleButtonGroup size="small" exclusive value={lang} onChange={(_, value: Lang | null) => value && setLang(value)} aria-label={t.ui.language}>
              <ToggleButton value="es" aria-label="Español" className="!px-4 !font-bold">
                ES
              </ToggleButton>
              <ToggleButton value="en" aria-label="English" className="!px-4 !font-bold">
                EN
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
      </Drawer>
    </AppBar>
  );
}
