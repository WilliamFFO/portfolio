'use client';

import CodeIcon from '@mui/icons-material/Code';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Button from '@mui/material/Button';
import Image, { type StaticImageData } from 'next/image';
import dashboardShot from '../../public/images/dashboard.png';
import apiShot from '../../public/images/api-docs.png';
import nurseryShot from '../../public/images/nursery.png';
import { repoUrl, site } from '@/config/site';
import { useI18n } from '@/lib/i18n';
import { Reveal } from './Reveal';
import { Section } from './Section';

type Kind = 'dashboard' | 'api' | 'nursery';

interface ProjectProps {
  title: string;
  text: string;
  alt: string;
  stack: readonly string[];
  image: StaticImageData;
  imageHref: string;
  links: { label: string; href: string; icon: React.ReactNode }[];
  openLabel: string;
  badge?: { label: string; icon: React.ReactNode };
  featured?: boolean;
}

function Project({ title, text, alt, stack, image, imageHref, links, openLabel, badge, featured }: ProjectProps) {
  return (
    <article className={`card card-hover group grid h-full overflow-hidden ${featured ? 'lg:grid-cols-[1.35fr_1fr]' : 'grid-rows-[auto_1fr]'}`}>
      <a
        href={imageHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${openLabel}: ${title}`}
        className="relative block overflow-hidden border-b border-line bg-bg lg:border-b-0"
      >
        <Image
          src={image}
          alt={alt}
          placeholder="empty"
          sizes={featured ? '(min-width: 1024px) 60vw, 100vw' : '(min-width: 768px) 50vw, 100vw'}
          className={`w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04] ${featured ? 'h-full min-h-64 lg:max-h-[440px]' : 'aspect-[16/10]'}`}
        />
        <span aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </a>

      <div className={`flex flex-col p-7 ${featured ? 'lg:justify-center lg:p-10' : ''}`}>
        {badge && (
          <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-primary">
            {badge.icon}
            {badge.label}
          </span>
        )}
        <h3 className={`font-display font-bold text-fg ${featured ? 'text-3xl' : 'text-2xl'}`}>{title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{text}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {stack.map((s) => (
            <li key={s} className="rounded-lg border border-line px-2.5 py-1 text-[12.5px] font-medium text-fg">
              {s}
            </li>
          ))}
        </ul>
        {links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2.5 pt-7">
            {links.map((l, i) => (
              <Button
                key={l.label}
                variant={i === links.length - 1 && links.length > 1 ? 'contained' : 'outlined'}
                size="small"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={l.icon}
              >
                {l.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useI18n();
  const p = t.projects;

  const linksFor = (kind: Kind) => {
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
    <Section id="projects" eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} center>
      <div className="space-y-6">
        <Reveal>
          <Project
            {...p.items.dashboard}
            image={dashboardShot}
            imageHref={site.demos.dashboard || dashboardShot.src}
            links={linksFor('dashboard')}
            openLabel={t.ui.openImage}
            badge={{ label: p.featured, icon: <StarRoundedIcon sx={{ fontSize: 16 }} /> }}
            featured
          />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <Project
              {...p.items.nursery}
              image={nurseryShot}
              imageHref={site.demos.nursery || nurseryShot.src}
              links={linksFor('nursery')}
              openLabel={t.ui.openImage}
              badge={{ label: p.masters, icon: <SchoolOutlinedIcon sx={{ fontSize: 16 }} /> }}
            />
          </Reveal>
          <Reveal delay={120}>
            <Project {...p.items.api} image={apiShot} imageHref={site.demos.api || apiShot.src} links={linksFor('api')} openLabel={t.ui.openImage} />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
