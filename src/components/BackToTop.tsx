'use client';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Fab from '@mui/material/Fab';
import { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n';

export function BackToTop() {
  const { t } = useI18n();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Fab
      size="medium"
      color="primary"
      aria-label={t.ui.backToTop}
      href="#top"
      className="!fixed !bottom-6 !right-6 !z-50"
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
}
