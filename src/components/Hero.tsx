'use client';

import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { useI18n } from '@/lib/i18n';

const CHIPS = ['Node.js', 'NestJS', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Material UI', 'PostgreSQL'];

export function Hero() {
  const { t } = useI18n();
  const h = t.hero;

  return (
    <section id="top" className="relative overflow-hidden py-16 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_360px_at_85%_-10%,color-mix(in_srgb,var(--mui-palette-primary-main)_20%,transparent),transparent),radial-gradient(600px_300px_at_0%_10%,color-mix(in_srgb,var(--mui-palette-secondary-main)_14%,transparent),transparent)]"
      />
      <div className="mx-auto w-full max-w-5xl px-5">
        <Typography variant="subtitle1" color="primary" fontWeight={700}>
          {h.eyebrow}
        </Typography>
        <Typography variant="h1" className="!mt-3 max-w-[18em] !text-[2.1rem] !font-extrabold !leading-[1.1] !tracking-tight sm:!text-6xl">
          {h.titleBefore}
          <span className="bg-linear-to-r from-[var(--mui-palette-primary-main)] to-[var(--mui-palette-secondary-main)] bg-clip-text text-transparent">{h.titleHighlight}</span>
          {h.titleAfter}
        </Typography>
        <Typography color="text.secondary" className="!mt-5 max-w-[38em] !text-lg sm:!text-xl">
          {h.lead}
        </Typography>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="contained" size="large" href="#projects">
            {h.cta1}
          </Button>
          <Button variant="outlined" size="large" color="inherit" href="#contact">
            {h.cta2}
          </Button>
        </div>
        <ul className="mt-9 flex flex-wrap gap-2" aria-label="Stack">
          {CHIPS.map((c) => (
            <li key={c}>
              <Chip label={c} variant="outlined" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
