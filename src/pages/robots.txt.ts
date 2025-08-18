import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.href || 'https://yourdomain.com';
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${new URL('/sitemap.xml', baseUrl).href}

# Disallow admin or private areas (if any)
Disallow: /admin/
Disallow: /private/

# Crawl delay (optional)
Crawl-delay: 1`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
