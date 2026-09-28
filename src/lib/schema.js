import { absolute, districts, faqs, hkd, machines, pages, site } from "../data/site.js";

const businessId = `${site.url}/#business`;

export function businessNode() {
  return {
    "@type": "HVACBusiness",
    "@id": businessId,
    name: site.name,
    alternateName: site.nameEn,
    url: site.url,
    telephone: site.phoneTel,
    priceRange: site.priceRange,
    currenciesAccepted: "HKD",
    image: `${site.url}${site.logo}`,
    logo: `${site.url}${site.logo}`,
    description: pages.home.description,
    address: {
      "@type": "PostalAddress",
      addressCountry: "HK",
      addressRegion: "香港",
    },
    areaServed: districts.map((name) => ({
      "@type": "AdministrativeArea",
      name,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: site.opens,
      closes: site.closes,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "洗冷氣收費",
      itemListElement: machines.flatMap((machine) => offersFor(machine)),
    },
  };
}

export function offersFor(machine) {
  const pageUrl = absolute(`/services/${machine.slug}`);
  const fromNote = machine.priceFrom ? "起步價，最終睇位。" : "標準機況起步價。";
  return [
    {
      "@type": "Offer",
      name: `${machine.name}洗冷氣`,
      price: machine.washPrice,
      priceCurrency: "HKD",
      url: pageUrl,
      availability: "https://schema.org/InStock",
      description: `${fromNote}每部 ${hkd(machine.washPrice)}。最終以上門檢查為準。`,
      seller: { "@id": businessId },
    },
    {
      "@type": "Offer",
      name: `${machine.name}洗+維修`,
      price: machine.washRepairPrice,
      priceCurrency: "HKD",
      url: pageUrl,
      availability: "https://schema.org/InStock",
      description: `${fromNote}洗冷氣連檢查。零件同雪種另報，先報價後開工。`,
      seller: { "@id": businessId },
    },
  ];
}

export function breadcrumbNode(crumbs) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absolute(crumb.href),
    })),
  };
}

export function faqNode(items = faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function articleNode() {
  return {
    "@type": "Article",
    headline: pages.article.h1,
    description: pages.article.description,
    inLanguage: "zh-HK",
    datePublished: "2026-01-15",
    dateModified: site.updated,
    author: { "@id": businessId },
    publisher: { "@id": businessId },
    mainEntityOfPage: absolute("/knowledge/aircon-cleaning-price-guide"),
  };
}

export function graph(nodes) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}
