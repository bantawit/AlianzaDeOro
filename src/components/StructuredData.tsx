export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Bakery", "Restaurant"],
    "name": "Alianza de Oro",
    "image": "https://alianzadeoro.com/hero.jpg", // Placeholder
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Urbanización Parque Miraflores, 4",
      "addressLocality": "Fuenlabrada",
      "addressRegion": "Madrid",
      "postalCode": "28942",
      "addressCountry": "ES"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 40.2985, // Approximate
      "longitude": -3.8341
    },
    "url": "https://alianzadeoro.com",
    "telephone": "+34916450487",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Thursday", "Sunday"],
        "opens": "09:00",
        "closes": "23:59"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "09:00",
        "closes": "02:00"
      }
    ],
    "servesCuisine": ["Spanish", "Bakery", "Pastry"],
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
