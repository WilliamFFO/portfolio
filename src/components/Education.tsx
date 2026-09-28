'use client';

import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import Typography from '@mui/material/Typography';
import { useI18n } from '@/lib/i18n';
import { Section } from './Section';

export function Education() {
  const { t } = useI18n();
  const e = t.education;

  return (
    <Section id="education" title={e.title} subtitle={e.subtitle}>
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <Typography variant="h6" component="h3" className="!mb-5 !flex !items-center !gap-2">
            <SchoolOutlinedIcon color="primary" fontSize="small" />
            {e.degreesTitle}
          </Typography>
          <ul className="space-y-5">
            {e.degrees.map((d) => (
              <li key={d.title}>
                <Typography fontWeight={700}>{d.title}</Typography>
                <Typography color="text.secondary">{d.org}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {d.period}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <Typography variant="h6" component="h3" className="!mb-5 !flex !items-center !gap-2">
            <WorkspacePremiumOutlinedIcon color="primary" fontSize="small" />
            {e.certsTitle}
          </Typography>
          <ul className="space-y-4">
            {e.certs.map((c) => (
              <li key={c.title} className="grid grid-cols-[1fr_auto] items-start gap-3">
                <div>
                  <Typography fontWeight={600} className="!leading-snug">
                    {c.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {c.org}
                  </Typography>
                </div>
                <Typography variant="body2" color="text.secondary" className="!whitespace-nowrap">
                  {c.period}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
