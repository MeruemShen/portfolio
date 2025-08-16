import React from "react";
import SEOHead from "../components/SEOHead";
import { buildCanonical } from "../utils/seo";

const NotFound: React.FC = () => {
  const canonical = buildCanonical("/404");
  return (
    <div className="min-h-screen flex items-center justify-center text-white" style={{ backgroundColor: "#120527" }}>
      <SEOHead title="Page introuvable | Deepbird" description="La page demandée est introuvable." canonical={canonical} robots="noindex, nofollow" />
      <div className="p-6 text-center">
        <h1 className="text-3xl mb-2">404 — Page introuvable</h1>
        <p className="opacity-80 mb-6">La page que vous cherchez n'existe pas ou a été déplacée.</p>
        <a href="/" className="text-[#2A4EFF] underline">Retour à l’accueil</a>
      </div>
    </div>
  );
};

export default NotFound;
