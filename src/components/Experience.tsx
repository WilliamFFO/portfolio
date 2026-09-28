'use client';

import Typography from '@mui/material/Typography';
import { useI18n } from '@/lib/i18n';
import { Section } from './Section';

export function Experience() {
  const { t } = useI18n();
  const e = t.experience;

  return (
    <Section id="experience" title={e.title} alt>
      <ol className="space-y-10">
        {e.jobs.map((job, index) => (
          <li key={job.role} className="grid gap-1.5 sm:grid-cols-[170px_1fr] sm:gap-6">
            <Typography color="primary" fontWeight={700}>
              {index === 0 ? `${job.period} – ${e.present}` : job.period}
            </Typography>
            <div>
              <Typography variant="h6" component="h3">
                {job.role}
              </Typography>
              <Typography color="text.secondary" fontWeight={600} className="!mb-2">
                {job.org}
              </Typography>
              <ul className="list-disc space-y-1.5 pl-5">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
