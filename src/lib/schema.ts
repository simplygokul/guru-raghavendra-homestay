import { businessName, contact, location, siteUrl } from '../data/property';

export function lodgingBusinessSchema(extra: Record<string, unknown> = {}) {
  const address: Record<string, unknown> = {
    '@type': 'PostalAddress',
    addressLocality: location.locality,
    addressRegion: location.region,
    addressCountry: 'IN',
  };

  if (location.streetAddress) address.streetAddress = location.streetAddress;
  if (location.postalCode) address.postalCode = location.postalCode;

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: businessName,
    url: siteUrl,
    telephone: `+${contact.whatsapp.e164}`,
    address,
    image: [`${siteUrl}/og/home.jpg`],
    ...extra,
  };

  if (location.geo) {
    data.geo = {
      '@type': 'GeoCoordinates',
      latitude: location.geo.latitude,
      longitude: location.geo.longitude,
    };
  }

  return data;
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: businessName,
    url: siteUrl,
  };
}

export function webPageSchema(opts: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    isPartOf: { '@type': 'WebSite', url: siteUrl },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString(),
    })),
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
