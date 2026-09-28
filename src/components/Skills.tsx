'use client';

import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import WebOutlinedIcon from '@mui/icons-material/WebOutlined';
import { useI18n } from '@/lib/i18n';
import { Reveal } from './Reveal';
import { Section } from './Section';

const ICONS = [DnsOutlinedIcon, WebOutlinedIcon, StorageOutlinedIcon, BuildOutlinedIcon];

export function Skills() {
  const { t } = useI18n();
  const s = t.skills;

  return (
    <Section id="skills" eyebrow={s.eyebrow} title={s.title} subtitle={s.subtitle} center alt>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {s.groups.map((g, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <Reveal key={g.title} delay={i * 90}>
              <article className="card card-hover flex h-full flex-col p-7">
                <span className="grid size-14 place-items-center rounded-2xl bg-linear-to-br from-primary to-secondary text-white shadow-lg shadow-primary/30">
                  <Icon />
                </span>
                <h3 className="mt-6 font-display text-xl font-bold text-fg">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{g.text}</p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <li key={item} className="rounded-lg border border-primary/25 bg-primary/10 px-2.5 py-1 text-[12.5px] font-medium text-fg">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
