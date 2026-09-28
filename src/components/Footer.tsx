'use client';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { site } from '@/config/site';
import { useI18n } from '@/lib/i18n';

export function Footer() {
  const { t } = useI18n();
  const links = [
    { name: 'LinkedIn', href: site.linkedin, icon: <LinkedInIcon fontSize="small" /> },
    { name: 'Fiverr', href: site.fiverr, icon: <StorefrontOutlinedIcon fontSize="small" /> },
    ...(site.github ? [{ name: 'GitHub', href: site.github, icon: <GitHubIcon fontSize="small" /> }] : []),
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-5 px-5 py-10 text-sm text-muted sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-base font-bold text-fg">
            <span className="text-primary">William</span> Fuentes Ossa
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} · {site.location}
          </p>
          <p className="mt-1">{t.footer.built}</p>
        </div>
        <div className="flex gap-2">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${t.hero.socialLabel} ${l.name}`}
              className="grid size-10 place-items-center rounded-full border border-line transition-colors hover:border-primary hover:text-primary"
            >
              {l.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
