'use client';

import BrightnessAutoIcon from '@mui/icons-material/BrightnessAuto';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useColorScheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n';

const NEXT = { light: 'dark', dark: 'system', system: 'light' } as const;

export function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  const { t } = useI18n();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted || !mode) return <span className="inline-block size-10" aria-hidden />;

  const Icon = mode === 'light' ? LightModeIcon : mode === 'dark' ? DarkModeIcon : BrightnessAutoIcon;
  const label = t.ui.theme[mode];
  return (
    <Tooltip title={`${label} (${t.ui.themeHint})`}>
      <IconButton aria-label={label} onClick={() => setMode(NEXT[mode])}>
        <Icon />
      </IconButton>
    </Tooltip>
  );
}
