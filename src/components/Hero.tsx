'use client';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import Button from '@mui/material/Button';
import Image from 'next/image';
import profilePhoto from '../../public/images/profile.jpg';
import { site } from '@/config/site';
import { useI18n } from '@/lib/i18n';

const STACK = ['Node.js', 'NestJS', 'React', 'Next.js', 'TypeScript', 'Java', 'PostgreSQL', 'Docker'];

export function Hero() {
  const { t } = useI18n();
  const h = t.hero;
  const socials = [
    { name: 'LinkedIn', href: site.linkedin, icon: <LinkedInIcon fontSize="small" /> },
    ...(site.github ? [{ name: 'GitHub', href: site.github, icon: <GitHubIcon fontSize="small" /> }] : []),
  ];

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-14 sm:pb-28 sm:pt-20">
      {/* Decorative background */}
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] -z-10 size-[520px] rounded-full bg-primary/25 blur-[120px]" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-40 -z-10 size-[420px] rounded-full bg-secondary/15 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.15fr_1fr]">
        <div className="order-2 md:order-1">
          <p className="animate-fade-up text-lg font-medium text-muted">{h.greeting}</p>
          <h1 className="animate-fade-up mt-2 font-display text-[2.9rem] font-extrabold leading-[1.05] tracking-tight text-fg [animation-delay:80ms] sm:text-7xl">
            {site.shortName}
          </h1>
          <p className="animate-fade-up mt-4 font-display text-2xl font-semibold [animation-delay:160ms] sm:text-3xl">
            <span className="text-gradient">{h.role}</span>
          </p>
          <p className="animate-fade-up mt-2 text-sm font-medium uppercase tracking-[0.14em] text-muted [animation-delay:200ms]">{h.tagline}</p>
          <p className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-muted [animation-delay:260ms]">{h.lead}</p>

          <div className="animate-fade-up mt-9 flex flex-wrap items-center gap-3 [animation-delay:340ms]">
            <Button variant="contained" size="large" href="#projects" endIcon={<ArrowForwardIcon />}>
              {h.cta1}
            </Button>
            <Button variant="outlined" size="large" color="inherit" href="#contact">
              {h.cta2}
            </Button>
            <div className="ml-1 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${h.socialLabel} ${s.name}`}
                  className="grid size-11 place-items-center rounded-full border border-line text-muted transition-colors hover:border-primary hover:text-primary"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <ul aria-label="Stack" className="animate-fade-up mt-10 flex flex-wrap gap-2 [animation-delay:420ms]">
            {STACK.map((s) => (
              <li key={s} className="rounded-full border border-line bg-paper/60 px-3.5 py-1.5 text-[13px] font-medium text-fg backdrop-blur">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Photo */}
        <div className="animate-fade-up order-1 mx-auto [animation-delay:120ms] md:order-2">
          <div className="relative size-64 sm:size-80 lg:size-[360px]">
            <div aria-hidden className="absolute -inset-8 rounded-full bg-primary/30 blur-3xl" />
            <div
              aria-hidden
              className="animate-spin-slow absolute -inset-[6px] rounded-full bg-[conic-gradient(from_0deg,var(--mui-palette-primary-main),var(--mui-palette-secondary-main),transparent_60%,var(--mui-palette-primary-main))]"
            />
            <div className="relative size-full rounded-full bg-bg p-2">
              <Image
                src={profilePhoto}
                alt={t.about.photoAlt}
                priority
                placeholder="empty"
                sizes="(min-width: 1024px) 360px, 320px"
                className="size-full rounded-full object-cover"
              />
            </div>

            <div className="animate-float absolute inset-x-0 -bottom-6 mx-auto flex w-fit items-center gap-2 whitespace-nowrap rounded-2xl border border-line bg-paper/90 px-3.5 py-2.5 text-[13px] font-semibold text-fg shadow-xl backdrop-blur sm:inset-x-auto sm:-left-10 sm:bottom-6 sm:mx-0">
              <span className="relative flex size-2.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
              {h.available}
            </div>
            <div className="animate-float absolute -right-3 -top-3 flex items-center gap-2 whitespace-nowrap rounded-2xl border border-line bg-paper/90 px-3.5 py-2.5 text-[13px] font-semibold text-fg shadow-xl backdrop-blur [animation-delay:1.2s] sm:-right-8 sm:top-8">
              <MemoryOutlinedIcon fontSize="small" className="text-primary" />
              {h.badge}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
