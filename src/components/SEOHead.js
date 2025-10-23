import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "Mercurius Dynamics - Industrial Automation, CNC Machining & Engineering Solutions",
  description = "Leading provider of CNC machining, industrial automation, valves, and OEM spares. Engineering the future of industrial automation with precision manufacturing and smart infrastructure solutions.",
  keywords = "industrial automation, CNC machining, waterjet cutting, automation systems, control panels, PLC programming, SCADA systems, industrial valves, OEM spares, precision manufacturing, engineering solutions",
  canonical = "",
  ogImage = "https://mercuriusdynamics.com/og-image.jpg",
  structuredData = null
}) => {
  const fullTitle = title.includes("Mercurius Dynamics") ? title : `${title} | Mercurius Dynamics`;
  const fullCanonical = canonical || `https://mercuriusdynamics.com${window.location.pathname}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Mercurius Dynamics" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullCanonical} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
