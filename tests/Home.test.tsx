import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import Home from '@/app/page';
import { Providers } from '@/components/Providers';

function setup() {
  return render(
    <Providers>
      <Home />
    </Providers>,
  );
}

describe('Home page', () => {
  beforeEach(() => {
    // A Colombian visitor: the page should start in Spanish.
    vi.spyOn(window.navigator, 'language', 'get').mockReturnValue('es-CO');
  });

  it('renders every section with accessible headings', () => {
    setup();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Construyo APIs y aplicaciones web');
    for (const id of ['about', 'skills', 'projects', 'experience', 'education', 'contact']) {
      expect(document.getElementById(id)).toBeInTheDocument();
    }
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(6);
  });

  it('switches language and keeps the document language in sync', async () => {
    const user = userEvent.setup();
    setup();
    await user.click(screen.getByRole('button', { name: 'English' }));
    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent('I build complete APIs and web applications');
    expect(document.documentElement.lang).toBe('en');
    expect(localStorage.getItem('portfolio.lang')).toBe('en');

    await user.click(screen.getByRole('button', { name: 'Español' }));
    expect(await screen.findByRole('heading', { level: 1 })).toHaveTextContent('Construyo APIs y aplicaciones web');
  });

  it('lists every project with its image described', () => {
    setup();
    const projects = document.getElementById('projects')!;
    expect(within(projects).getByRole('heading', { name: 'Tasks Dashboard' })).toBeInTheDocument();
    expect(within(projects).getByRole('heading', { name: 'Task Manager API' })).toBeInTheDocument();
    expect(within(projects).getByRole('heading', { name: 'Paradise Nursery' })).toBeInTheDocument();
    for (const img of within(projects).getAllByRole('img')) expect(img).toHaveAccessibleName();
  });

  it('shows education and certifications', () => {
    setup();
    const education = document.getElementById('education')!;
    expect(within(education).getByText('Universidad Santo Tomás')).toBeInTheDocument();
    expect(within(education).getByText('Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate')).toBeInTheDocument();
  });

  it('shows LinkedIn and Fiverr but no GitHub link when it is not configured', () => {
    setup();
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', expect.stringContaining('linkedin.com'));
    expect(screen.getByRole('link', { name: 'Fiverr' })).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'GitHub' })).not.toBeInTheDocument();
  });
});
