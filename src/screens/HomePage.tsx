import React from "react";
import SEOHead from "../components/SEOHead";
import JsonLd from "../components/JsonLd";
import { Wireframe } from "./Wireframe";
import { buildCanonical, DEFAULT_DESCRIPTION, DEFAULT_TITLE } from "../utils/seo";

export const HomePage: React.FC = () => {
  const canonical = buildCanonical("/");
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Deepbird",
      url: canonical,
      inLanguage: "fr-FR",
      publisher: {
        "@type": "Organization",
        name: "Deepbird",
        url: canonical
      }
    }
  ];

  return (
    <>
      <SEOHead title={DEFAULT_TITLE} description={DEFAULT_DESCRIPTION} canonical={canonical} />
      <JsonLd data={jsonLd} />
      <h1 className="sr-only">Développeur Web Freelance – Portfolio Deepbird</h1>
      <Wireframe />
    </>
  );
};

export default HomePage;
