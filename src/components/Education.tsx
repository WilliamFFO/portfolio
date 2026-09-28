'use client';

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { useI18n } from '@/lib/i18n';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function Education() {
  const { t } = useI18n();
  const e = t.education;

  return (
    <Section id="education" eyebrow={e.eyebrow} title={e.title} subtitle={e.subtitle} center>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr]">
        <div>
          <h3 className="mb-5 flex items-center gap-2.5 font-display text-xl font-bold text-fg">
            <SchoolOutlinedIcon className="text-primary" />
            {e.degreesTitle}
          </h3>
          <ul className="space-y-4">
            {e.degrees.map((d, i) => (
              <li key={d.title}>
                <Reveal delay={i * 80}>
                  <div className="card card-hover p-6">
                    <p className="font-display text-lg font-semibold leading-snug text-fg">{d.title}</p>
                    <p className="mt-1 text-muted">{d.org}</p>
                    <span className="mt-4 inline-block rounded-full bg-primary/12 px-3 py-1 text-xs font-semibold text-primary">
                      {i === 0 ? `${d.period} · ${e.present}` : d.period}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-5 flex items-center gap-2.5 font-display text-xl font-bold text-fg">
            <WorkspacePremiumOutlinedIcon className="text-primary" />
            {e.certsTitle}
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {e.certs.map((c, i) => (
              <li key={c.title}>
                <Reveal delay={(i % 2) * 80} className="h-full">
                  <div className="card card-hover flex h-full flex-col p-5">
                    <p className="font-semibold leading-snug text-fg">{c.title}</p>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-3 text-sm text-muted">
                      <span>{c.org}</span>
                      <span className="font-semibold text-primary">{c.period}</span>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
