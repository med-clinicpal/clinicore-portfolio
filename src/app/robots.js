export const runtime = 'edge';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://zscaler.pricing.rheintec.ch/sitemap.xml',
  };
}
