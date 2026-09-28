import { afterEach, describe, expect, it, vi } from 'vitest';

async function loadSite() {
  vi.resetModules();
  return import('@/config/site');
}

describe('site config', () => {
  afterEach(() => vi.unstubAllEnvs());

  it('hides GitHub, email and demo links when nothing is configured', async () => {
    vi.stubEnv('NEXT_PUBLIC_GITHUB_USER', '');
    vi.stubEnv('NEXT_PUBLIC_EMAIL', '');
    const { site, repoUrl } = await loadSite();
    expect(site.github).toBe('');
    expect(site.email).toBe('');
    expect(repoUrl('api')).toBe('');
    expect(site.demos.dashboard).toBe('');
  });

  it('builds repository URLs from the GitHub user', async () => {
    vi.stubEnv('NEXT_PUBLIC_GITHUB_USER', '  octocat ');
    vi.stubEnv('NEXT_PUBLIC_DASHBOARD_URL', 'https://dash.example.com');
    const { site, repoUrl } = await loadSite();
    expect(site.github).toBe('https://github.com/octocat');
    expect(repoUrl('api')).toBe('https://github.com/octocat/task-manager-api');
    expect(repoUrl('dashboard')).toBe('https://github.com/octocat/tasks-dashboard');
    expect(site.demos.dashboard).toBe('https://dash.example.com');
  });

  it('keeps LinkedIn and Fiverr defaults', async () => {
    vi.stubEnv('NEXT_PUBLIC_LINKEDIN', '');
    const { site } = await loadSite();
    expect(site.linkedin).toContain('linkedin.com/in/william-fuentes-ossa');
    expect(site.fiverr).toContain('fiverr.com/williamffo');
  });
});
