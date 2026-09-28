'use client';

import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { useI18n } from '@/lib/i18n';
import { Section } from './Section';

export function Skills() {
  const { t } = useI18n();
  return (
    <Section id="skills" title={t.skills.title} alt>
      <div className="grid gap-5 md:grid-cols-3">
        {t.skills.groups.map((g) => (
          <Card key={g.title} className="p-6">
            <Typography variant="h6" component="h3">
              {g.title}
            </Typography>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map((i) => (
                <Chip key={i} label={i} size="small" color="primary" variant="outlined" />
              ))}
            </div>
            <Typography variant="body2" color="text.secondary" className="!mt-4">
              {g.text}
            </Typography>
          </Card>
        ))}
      </div>
    </Section>
  );
}
