import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Education } from '@/components/Education';
import { Experience } from '@/components/Experience';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { SkipLink } from '@/components/SkipLink';
import { site } from '@/config/site';

export default function Home() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-[var(--mui-palette-divider)] py-8 text-center text-sm text-[var(--mui-palette-text-secondary)]">
        © {new Date().getFullYear()} {site.name} · {site.location}
      </footer>
    </>
  );
}
