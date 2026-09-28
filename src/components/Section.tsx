import Typography from '@mui/material/Typography';

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  alt?: boolean;
  children: React.ReactNode;
}

export function Section({ id, title, subtitle, alt, children }: Props) {
  return (
    <section id={id} className={`scroll-mt-16 py-16 sm:py-24 ${alt ? 'border-y border-[var(--mui-palette-divider)] bg-[var(--mui-palette-action-hover)]' : ''}`}>
      <div className="mx-auto w-full max-w-5xl px-5">
        <Typography variant="h4" component="h2" className="!text-[1.75rem] sm:!text-4xl">
          {title}
        </Typography>
        {subtitle && (
          <Typography color="text.secondary" className="!mt-2">
            {subtitle}
          </Typography>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
