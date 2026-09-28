'use client';

import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { useI18n } from '@/lib/i18n';
import { Reveal } from './Reveal';
import { Eyebrow } from './Section';

const ICONS = [SchoolOutlinedIcon, AccountTreeOutlinedIcon, RocketLaunchOutlinedIcon, WorkOutlineIcon];

export function About() {
  const { t } = useI18n();
  const a = t.about;

  return (
    <section id="about" className="relative scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>{a.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-fg sm:text-[2.6rem] sm:leading-[1.15]">{a.title}</h2>
          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted">
            {a.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {a.stats.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Reveal key={s.title} delay={i * 90}>
                <div className="card card-hover h-full p-6">
                  <span className="grid size-12 place-items-center rounded-2xl bg-linear-to-br from-primary/25 to-secondary/20 text-primary">
                    <Icon />
                  </span>
                  <p className="mt-5 font-display text-lg font-semibold leading-snug text-fg">{s.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
