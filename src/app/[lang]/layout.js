import "../globals.css";
import { getTranslations } from "../data/translations";

const baseUrl = "https://clinicore.ai";

const getMetadata = (lang) => {
  const t = getTranslations(lang);
  const imageUrl = `${baseUrl}/og-image.png`;
  
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    keywords: t.metaKeywords,
    robots: "index, follow",
    canonical: `${baseUrl}/${lang}`,
    og: {
      title: t.metaTitle,
      description: t.metaDescription,
      url: `${baseUrl}/${lang}`,
      type: "website",
      siteName: "CliniCore.ai",
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
    themeColor: "#00B4D8",
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
    authors: [{ name: "CliniCore.ai" }],
    robots: metadata.robots,
    themeColor: metadata.themeColor,
    viewport: "width=device-width, initial-scale=1.0",
    alternates: metadata.alternates,
    openGraph: {
      title: metadata.og.title,
      description: metadata.og.description,
      url: metadata.og.url,
      type: metadata.og.type,
      siteName: metadata.og.siteName,
      images: [{
        url: metadata.og.image,
        width: 1200,
        height: 630,
        alt: metadata.og.title,
      }],
      locale: metadata.og.locale,
    },
    twitter: metadata.twitter,
  };
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CliniCore.ai",
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
};

export default async function RootLayout(props) {
  const params = await props.params;
  const { lang } = params;
  const { children } = props;
  const metadata = getMetadata(lang);

  const jsonLd = {
    ...structuredData,
    "description": metadata.description,
    "url": `${baseUrl}/${lang}`,
  };

  return (
    <html lang={lang}  suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="alternate" href={`${baseUrl}/en`} hrefLang="en" />
        <link rel="alternate" href={`${baseUrl}/ar`} hrefLang="ar" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}