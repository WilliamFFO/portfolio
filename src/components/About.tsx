'use client';

import Typography from '@mui/material/Typography';
import Image from 'next/image';
import profilePhoto from '../../public/images/profile.jpg';
import { useI18n } from '@/lib/i18n';
import { Section } from './Section';

export function About() {
  const { t } = useI18n();
  return (
    <Section id="about" title={t.about.title}>
      <div className="grid items-start gap-8 sm:grid-cols-[220px_1fr] sm:gap-10">
        <Image
          src={profilePhoto}
          alt={t.about.photoAlt}
          placeholder="empty"
          sizes="220px"
          className="mx-auto h-[220px] w-[220px] rounded-2xl object-cover shadow-lg sm:mx-0"
        />
        <div className="max-w-3xl space-y-4">
          {t.about.paragraphs.map((p) => (
            <Typography key={p} className="!text-[1.05rem] !leading-relaxed">
              {p}
            </Typography>
          ))}
        </div>
      </div>
    </Section>
  );
}
