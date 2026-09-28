'use client';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { site } from '@/config/site';
import { useI18n } from '@/lib/i18n';

export function Contact() {
  const { t } = useI18n();
  return (
    <section id="contact" className="scroll-mt-16 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-3xl px-5 text-center">
        <Typography variant="h4" component="h2" className="!text-[1.75rem] sm:!text-4xl">
          {t.contact.title}
        </Typography>
        <Typography color="text.secondary" className="!mx-auto !mt-3 max-w-xl !text-lg">
          {t.contact.lead}
        </Typography>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {site.email && (
            <Button variant="contained" size="large" href={`mailto:${site.email}`} startIcon={<EmailOutlinedIcon />}>
              {t.contact.email}
            </Button>
          )}
          <Button variant={site.email ? 'outlined' : 'contained'} size="large" href={site.linkedin} target="_blank" rel="noopener noreferrer" startIcon={<LinkedInIcon />}>
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
    </section>
  );
}
