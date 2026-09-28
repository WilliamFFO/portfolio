'use client';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useEffect, useState } from 'react';
import { site } from '@/config/site';
import type { Lang } from '@/content/messages';
import { useI18n } from '@/lib/i18n';
import { ThemeToggle } from './ThemeToggle';

const SECTIONS = ['about', 'skills', 'projects', 'experience', 'education', 'contact'] as const;
type SectionId = (typeof SECTIONS)[number];

/** Tracks which section is currently in the middle of the screen, to highlight it in the menu. */
function useActiveSection() {
  const [active, setActive] = useState<SectionId | null>(null);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id as SectionId);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    for (const id of SECTIONS) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);
  return active;
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return scrolled;
}

function LangToggle({ lang, setLang, label, wide }: { lang: Lang; setLang: (l: Lang) => void; label: string; wide?: boolean }) {
  return (
    <ToggleButtonGroup size="small" exclusive value={lang} onChange={(_, value: Lang | null) => value && setLang(value)} aria-label={label}>
      <ToggleButton value="es" aria-label="Español" className={`${wide ? '!px-4' : '!px-2.5'} !font-bold`}>
        ES
      </ToggleButton>
      <ToggleButton value="en" aria-label="English" className={`${wide ? '!px-4' : '!px-2.5'} !font-bold`}>
        EN
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export function Header() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const scrolled = useScrolled();

  return (
    <header
      className={`sticky top-0 z-[1100] border-b transition-colors duration-300 ${
        scrolled ? 'border-line bg-bg/80 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#top" className="flex items-center gap-2.5 no-underline" aria-label={site.name}>
          <span className="grid size-9 place-items-center rounded-xl bg-linear-to-br from-primary to-secondary font-display text-sm font-bold text-white shadow-md shadow-primary/30">
            WF
          </span>
          <span className="hidden font-display text-lg font-bold text-fg min-[420px]:inline">
            <span className="text-primary">William</span> Fuentes
          </span>
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 text-[15px] font-medium lg:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'true' : undefined}
              className={`rounded-full px-3.5 py-1.5 no-underline transition-colors ${
                active === id ? 'bg-primary/15 text-primary' : 'text-muted hover:text-fg'
              }`}
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <div className="hidden lg:block">
            <LangToggle lang={lang} setLang={setLang} label={t.ui.language} />
          </div>
          <IconButton aria-label={t.ui.openMenu} className="lg:!hidden" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} slotProps={{ paper: { className: '!w-72 !bg-[var(--mui-palette-background-default)]' } }}>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-5 py-4">
            <span className="font-display font-bold">
              <span className="text-primary">William</span> Fuentes
            </span>
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
                className={`rounded-xl px-4 py-3 no-underline transition-colors ${
                  active === id ? 'bg-primary/15 text-primary' : 'text-fg hover:bg-primary/10'
                }`}
              >
                {t.nav[id]}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex items-center justify-center border-t border-line px-5 py-4">
            <LangToggle lang={lang} setLang={setLang} label={t.ui.language} wide />
          </div>
        </div>
      </Drawer>
    </header>
  );
}
