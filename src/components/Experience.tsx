'use client';

import { useI18n } from '@/lib/i18n';
import { Reveal } from './Reveal';
import { Section } from './Section';

export function Experience() {
  const { t } = useI18n();
  const e = t.experience;

  return (
    <Section id="experience" eyebrow={e.eyebrow} title={e.title} alt>
      <ol className="relative space-y-8 border-l border-line pl-8 sm:ml-2 sm:pl-10">
        {e.jobs.map((job, index) => (
          <li key={job.role} className="relative">
            <span aria-hidden className="absolute -left-[41px] top-7 grid size-4 place-items-center rounded-full bg-bg ring-4 ring-primary/25 sm:-left-[49px]">
              <span className={`size-2 rounded-full ${index === 0 ? 'bg-primary' : 'bg-muted'}`} />
            </span>
            <Reveal delay={index * 80}>
              <div className="card card-hover p-6 sm:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-xl font-bold text-fg">{job.role}</h3>
                    <p className="mt-1 font-medium text-muted">{job.org}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-sm font-semibold ${index === 0 ? 'bg-primary/15 text-primary' : 'border border-line text-muted'}`}>
                    {index === 0 ? `${job.period} – ${e.present}` : job.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-fg/90">
                      <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-secondary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
