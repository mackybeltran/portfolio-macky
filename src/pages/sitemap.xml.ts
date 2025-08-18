import type { APIRoute } from 'astro';

const pages = [
  {
    url: '/',
    lastmod: new Date(),
    changefreq: 'weekly',
    priority: 1.0,
  },
  {
    url: '/about',
    lastmod: new Date(),
    changefreq: 'monthly',
    priority: 0.8,
  },
  {
    url: '/projects',
    lastmod: new Date(),
    changefreq: 'weekly',
    priority: 0.9,
  },
  {
    url: '/contact',
    lastmod: new Date(),
    changefreq: 'monthly',
    priority: 0.7,
  },
];

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.href || 'https://yourdomain.com';
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      page => `
  <url>
    <loc>${new URL(page.url, baseUrl).href}</loc>
    <lastmod>${page.lastmod.toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
