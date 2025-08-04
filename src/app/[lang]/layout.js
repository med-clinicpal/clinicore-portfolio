import "../globals.css";
import thumbnail from "../assets/rheintecZscalerrPricingTool.png"

const metadataEN = {
  title: "Rheintec Zscaler Pricing Tool",
  description: "Calculate costs for Zscaler platform products and services with Rheintec's Pricing Tool. Choose from Zscaler Platform (ZIA & ZPA), Zscaler Essential Platform (ZIA), or Zscaler Private Access Platform (ZPA), and customize your package with security solutions and add-ons tailored to your business needs.",
  keywords: "Zscaler Pricing Tool, IT Security Costs, Business Cybersecurity, ZIA, ZPA, Cloud Security, Cyber Threat Protection, Data Protection, Risk Management, Workload Protection, Private Access, Standalone Add-Ons",
  author: "Rheintec",
  robots: "index, follow",
  og: {
    title: "Rheintec Zscaler Pricing Tool",
    description: "Easily estimate the costs of Zscaler security solutions with Rheintec's Pricing Tool. Select platforms, products, and add-ons based on your business requirements.",
    url: "https://zscaler.pricing.rheintec.ch/en",
    type: "website",
    site_name: "Rheintec Zscaler Pricing Tool",
    image: thumbnail.src,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rheintec Zscaler Pricing Tool",
    description: "Calculate and customize your IT security costs with Rheintec's Zscaler Pricing Tool.",
    site: "@Rheintec",
    image: thumbnail.src,
  },
  language: "en",
  theme_color: "#132a4b",
  currency: "USD",
};

const metadataDE = {
  title: "Rheintec Zscaler Preisrechner",
  description: "Berechnen Sie die Kosten für Zscaler-Plattformprodukte und -dienste mit dem Rheintec-Preisrechner. Wählen Sie aus Zscaler Platform (ZIA & ZPA), Zscaler Essential Platform (ZIA) oder Zscaler Private Access Platform (ZPA) und passen Sie Ihr Paket mit Sicherheitslösungen und Add-ons an Ihre Geschäftsanforderungen an.",
  keywords: "Zscaler Preisrechner, IT-Sicherheitskosten, Unternehmenssicherheit, ZIA, ZPA, Cloud-Sicherheit, Bedrohungsschutz, Datenschutz, Risikomanagement, Workload-Schutz, Privater Zugang, Standalone-Add-ons",
  author: "Rheintec",
  robots: "index, follow",
  og: {
    title: "Rheintec Zscaler Preisrechner",
    description: "Schätzen Sie die Kosten für Zscaler-Sicherheitslösungen mit dem Rheintec-Preisrechner einfach ab. Wählen Sie Plattformen, Produkte und Add-ons basierend auf Ihren geschäftlichen Anforderungen aus.",
    url: "https://zscaler.pricing.rheintec.ch/de",
    type: "website",
    site_name: "Rheintec Zscaler Preisrechner",
    image: thumbnail.src,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rheintec Zscaler Preisrechner",
    description: "Berechnen und passen Sie Ihre IT-Sicherheitskosten mit dem Rheintec Zscaler Preisrechner an.",
    site: "@Rheintec",
    image: thumbnail.src,
  },
  language: "de",
  theme_color: "#132a4b",
  currency: "USD",
};






export const runtime = 'edge';
export default async function RootLayout(props) {
  const params = await props.params;

  const {
    lang
  } = params;

  const {
    children
  } = props;

  const metadata = lang === 'en' ? metadataEN : metadataDE;
  return (
    <html lang={lang} dir={lang == "ar" ? 'rtl' : 'ltr'} suppressHydrationWarning={true}>
      <head>
        {/* <title>{metadata.title}</title> */}
        {/* <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="robots" content={metadata.robots} />
        <meta property="og:title" content={metadata.og.title} />
        <meta property="og:description" content={metadata.og.description} />
        <meta property="og:url" content={metadata.og.url} />
        <meta property="og:type" content={metadata.og.type} />
        <meta property="og:site_name" content={metadata.og.site_name} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta property="og:image" content={metadata.og.image} />
        <meta property="og:image:alt" content={metadata.title} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <meta name="twitter:image:alt" content={metadata.title} />
        <meta name="theme-color" content={metadata.theme_color} />
        <link rel="alternate" href="https://zscaler.pricing.rheintec.ch/en" hrefLang="en" />
        <link rel="alternate" href="https://zscaler.pricing.rheintec.ch/de" hrefLang="de" />
        <link rel="canonical" href={`https://zscaler.pricing.rheintec.ch/${lang}`} /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />







      </head>
      <body
        suppressHydrationWarning={true}
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
