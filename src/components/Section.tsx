import { Reveal } from './Reveal';

interface Props {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  alt?: boolean;
  children: React.ReactNode;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-[13px] font-semibold tracking-wide text-primary">
      <span className="size-1.5 rounded-full bg-primary" aria-hidden />
      {children}
    </span>
  );
}

export function Section({ id, eyebrow, title, subtitle, center, alt, children }: Props) {
  return (
    <section id={id} className={`relative scroll-mt-16 py-20 sm:py-28 ${alt ? 'bg-paper/40 border-y border-line' : ''}`}>
      <div className="mx-auto w-full max-w-6xl px-5">
        <Reveal className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-fg sm:text-[2.6rem] sm:leading-[1.15]">{title}</h2>
          {subtitle && <p className="mt-4 text-lg leading-relaxed text-muted">{subtitle}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
