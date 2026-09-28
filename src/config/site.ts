/** Links and deployment URLs. Everything is optional: empty values hide the matching buttons. */
const env = (value: string | undefined) => (value && value.trim() ? value.trim() : '');

const githubUser = env(process.env.NEXT_PUBLIC_GITHUB_USER);

export const site = {
  name: 'William Fernando Fuentes Ossa',
  shortName: 'William Fuentes',
  location: 'Bogotá, Colombia',
  url: githubUser ? `https://${githubUser.toLowerCase()}.github.io/portfolio/` : 'https://williamffo.github.io/portfolio/',
  githubUser,
  github: githubUser ? `https://github.com/${githubUser}` : '',
  email: env(process.env.NEXT_PUBLIC_EMAIL),
  linkedin: env(process.env.NEXT_PUBLIC_LINKEDIN) || 'https://www.linkedin.com/in/william-fuentes-ossa/',
  fiverr: env(process.env.NEXT_PUBLIC_FIVERR) || 'https://www.fiverr.com/williamffo',
  repos: {
    dashboard: 'tasks-dashboard',
    api: 'task-manager-api',
    nursery: 'paradise-nursery',
  },
  demos: {
    dashboard: env(process.env.NEXT_PUBLIC_DASHBOARD_URL),
    api: env(process.env.NEXT_PUBLIC_API_DOCS_URL),
    // GitHub Pages project site: same fixed URL shape as this portfolio, so no env var is needed.
    nursery: githubUser ? `https://${githubUser}.github.io/paradise-nursery/` : '',
  },
} as const;

export function repoUrl(repo: keyof typeof site.repos): string {
  return githubUser ? `https://github.com/${githubUser}/${site.repos[repo]}` : '';
}
