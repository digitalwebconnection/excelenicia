import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { resolve } from 'path';

const DOMAIN = 'https://excelenciaint.com';

async function generateSitemap() {
  try {
    const sitemap = new SitemapStream({ hostname: DOMAIN });

    const urls = [
      '/',
      '/about',
      '/services',
      '/contact',
      '/webinar',

      '/destination/uk',
      '/destination/uae',
      '/destination/europe',
      '/destination/canada',
      '/destination/australia',
      '/destination/ireland',
      '/destination/usa',
      '/destination/newzealand',

      // Optional but recommended
      '/privacy-policy',
  '/cookie-policy', 
    //   '/terms',
    //   '/thank-you',
    ];

    urls.forEach((url) => {
  let priority = 0.7;
  let changefreq = 'monthly';

  if (url === '/') {
    priority = 1.0;
    changefreq = 'weekly';
  } 
  else if (url === '/webinar') {
    priority = 0.9;
    changefreq = 'daily';
  } 
  else if (url.includes('/destination')) {
    priority = 0.85;
    changefreq = 'weekly';
  } 
  else if (url === '/contact') {
    priority = 0.6;
    changefreq = 'monthly';
  } 
  else if (url.includes('policy')) {
    // ✅ Privacy + Cookie pages
    priority = 0.5;
    changefreq = 'yearly';
  }

  sitemap.write({
    url,
    changefreq,
    priority,
    lastmod: new Date().toISOString(),
  });
});

    sitemap.end();

    const data = await streamToPromise(sitemap);

    // Ensure public folder exists
    const publicPath = resolve('./public');
    if (!existsSync(publicPath)) {
      mkdirSync(publicPath);
    }

    writeFileSync(resolve('./public/sitemap.xml'), data.toString());

    console.log('✅ Sitemap generated successfully!');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
}

generateSitemap();