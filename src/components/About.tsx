'use client';

import Typography from '@mui/material/Typography';
import { useI18n } from '@/lib/i18n';
import { Section } from './Section';

export function About() {
  const { t } = useI18n();
  return (
    <Section id="about" title={t.about.title}>
      <div className="max-w-3xl space-y-4">
        {t.about.paragraphs.map((p) => (
          <Typography key={p} className="!text-[1.05rem] !leading-relaxed">
            {p}
          </Typography>
        ))}
      </div>
    </Section>
  );
}
