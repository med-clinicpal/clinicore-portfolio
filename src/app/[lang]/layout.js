import "../globals.css";
import { getTranslations } from "../data/translations";

const getMetadata = (lang) => {
  const t = getTranslations(lang);
  
  const baseUrl = "https://clinicore.ai";
  const imageUrl = `${baseUrl}/og-image.png`;
  
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    keywords: t.metaKeywords,
    author: "CliniCore.ai",
    robots: "index, follow",
    canonical: `${baseUrl}/${lang}`,
    og: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: `${baseUrl}/${lang}`,
      type: "website",
      site_name: "CliniCore.ai",
      image: imageUrl,
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
    },
    twitter: {
      card: "summary_large_image",
      title: t.metaTitle,
      description: t.metaDescription,
      site: "@CliniCoreAI",
      image: imageUrl,
    },
    language: lang,
    theme_color: "#00B4D8",
    viewport: "width=device-width, initial-scale=1.0",
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        'en': `${baseUrl}/en`,
        'ar': `${baseUrl}/ar`,
      }
    }
  };
};

export const runtime = 'edge';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { lang } = await params;
  const metadata = getMetadata(lang);
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: metadata.author }],
    robots: metadata.robots,
    themeColor: metadata.theme_color,
    viewport: metadata.viewport,
    alternates: metadata.alternates,
    openGraph: {
      title: metadata.og.title,
      description: metadata.og.description,
      url: metadata.og.url,
      type: metadata.og.type,
      siteName: metadata.og.site_name,
      images: [{
        url: metadata.og.image,
        width: 1200,
        height: 630,
        alt: metadata.og.title,
      }],
      locale: metadata.og.locale,
    },
    twitter: {
      card: metadata.twitter.card,
      title: metadata.twitter.title,
      description: metadata.twitter.description,
      site: metadata.twitter.site,
      images: [metadata.twitter.image],
    },
  };
}

export default async function RootLayout(props) {
  const params = await props.params;
  const { lang } = params;
  const { children } = props;

  return (
    <html lang={lang} dir={lang === "ar" ? 'rtl' : 'ltr'} suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="alternate" href="https://clinicore.ai/en" hrefLang="en" />
        <link rel="alternate" href="https://clinicore.ai/ar" hrefLang="ar" />
        <link rel="canonical" href={`https://clinicore.ai/${lang}`} />
        
        {/* Structured Data for Healthcare Software */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "CliniCore.ai",
              "description": getMetadata(lang).description,
              "url": `https://clinicore.ai/${lang}`,
              "applicationCategory": "HealthApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "category": "Healthcare Management Software"
              },
              "creator": {
                "@type": "Organization",
                "name": "CliniCore.ai",
                "url": "https://clinicore.ai"
              },
              "featureList": [
                "Patient Data Management",
                "AI-Powered Medical Analysis", 
                "Appointment Scheduling",
                "Document Management",
                "Medical Analytics Dashboard",
                "HIPAA Compliant Security"
              ]
            })
          }}
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}