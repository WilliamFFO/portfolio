'use client';

import CodeIcon from '@mui/icons-material/Code';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Image, { type StaticImageData } from 'next/image';
import dashboardShot from '../../public/images/dashboard.png';
import apiShot from '../../public/images/api-docs.png';
import { repoUrl, site } from '@/config/site';
import { useI18n } from '@/lib/i18n';
import { Section } from './Section';

interface ProjectProps {
  title: string;
  text: string;
  alt: string;
  stack: readonly string[];
  image: StaticImageData;
  imageHref: string;
  reverse?: boolean;
  links: { label: string; href: string; icon: React.ReactNode }[];
  openLabel: string;
}

function Project({ title, text, alt, stack, image, imageHref, reverse, links, openLabel }: ProjectProps) {
  return (
    <article className="grid items-center gap-6 md:grid-cols-2 md:gap-10">
      <a
        href={imageHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${openLabel}: ${title}`}
        className={`block overflow-hidden rounded-2xl border border-[var(--mui-palette-divider)] shadow-lg transition-transform hover:-translate-y-1 ${reverse ? 'md:order-2' : ''}`}
      >
        <Image src={image} alt={alt} placeholder="empty" sizes="(min-width: 768px) 50vw, 100vw" className="h-auto w-full" />
      </a>
      <div>
        <Typography variant="h5" component="h3" fontWeight={700}>
          {title}
        </Typography>
        <Typography color="text.secondary" className="!mt-2">
          {text}
        </Typography>
        <ul className="mt-4 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <li key={s}>
              <Chip label={s} size="small" variant="outlined" />
            </li>
          ))}
        </ul>
        {links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2.5">
            {links.map((l) => (
              <Button key={l.label} variant="outlined" size="small" href={l.href} target="_blank" rel="noopener noreferrer" startIcon={l.icon}>
                {l.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

// Static image URLs do not include the basePath used on GitHub Pages project sites.
const withBase = (src: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${src}`;

export function Projects() {
  const { t } = useI18n();
  const p = t.projects;

  const linksFor = (kind: 'dashboard' | 'api') => {
    const links: ProjectProps['links'] = [];
    const repo = repoUrl(kind);
    if (repo) links.push({ label: p.code, href: repo, icon: <CodeIcon /> });
    const demo = site.demos[kind];
    if (demo) {
      links.push({
        label: kind === 'api' ? p.docs : p.demo,
        href: demo,
        icon: kind === 'api' ? <DescriptionOutlinedIcon /> : <OpenInNewIcon />,
      });
    }
    return links;
  };

  return (
    <Section id="projects" title={p.title} subtitle={p.subtitle}>
      <div className="space-y-16">
        <Project
          {...p.items.dashboard}
          image={dashboardShot}
          imageHref={site.demos.dashboard || withBase(dashboardShot.src)}
          links={linksFor('dashboard')}
          openLabel={t.ui.openImage}
        />
        <Project
          {...p.items.api}
          image={apiShot}
          imageHref={site.demos.api || withBase(apiShot.src)}
          reverse
          links={linksFor('api')}
          openLabel={t.ui.openImage}
        />
      </div>
    </Section>
  );
}
