'use client';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Button from '@mui/material/Button';
import { site } from '@/config/site';
import { useI18n } from '@/lib/i18n';
import { Reveal } from './Reveal';
import { Eyebrow } from './Section';

export function Contact() {
  const { t } = useI18n();
  const c = t.contact;

  return (
    <section id="contact" className="scroll-mt-16 px-5 py-20 sm:py-28">
      <Reveal className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-paper p-8 text-center sm:p-14">
          <div aria-hidden className="pointer-events-none absolute -top-24 left-1/2 size-[420px] -translate-x-1/2 rounded-full bg-primary/25 blur-[110px]" />
          <div aria-hidden className="pointer-events-none absolute -bottom-32 right-0 size-[300px] rounded-full bg-secondary/15 blur-[100px]" />
          <div className="relative">
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-fg sm:text-5xl">{c.title}</h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">{c.lead}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {site.email && (
                <Button variant="contained" size="large" href={`mailto:${site.email}`} startIcon={<EmailOutlinedIcon />}>
                  {c.email}
                </Button>
              )}
              <Button
                variant={site.email ? 'outlined' : 'contained'}
                size="large"
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<LinkedInIcon />}
              >
                LinkedIn
              </Button>
              <Button variant="outlined" size="large" color="inherit" href={site.fiverr} target="_blank" rel="noopener noreferrer" startIcon={<StorefrontOutlinedIcon />}>
                Fiverr
              </Button>
              {site.github && (
                <Button variant="outlined" size="large" color="inherit" href={site.github} target="_blank" rel="noopener noreferrer" startIcon={<GitHubIcon />}>
                  GitHub
                </Button>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
