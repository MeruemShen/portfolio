import React from "react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { buildCanonical } from "../utils/seo";

const NotFound: React.FC = () => {
  const canonical = buildCanonical("/404");
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center text-white overflow-hidden">
      <SEOHead title="Page introuvable | Deepbird" description="La page demandée est introuvable." canonical={canonical} robots="noindex, nofollow" />

      {/* Background image and overlay to match site DA */}
      <div className="absolute inset-0 bg-[url('/wireframe/fond_burger_bird1.png')] bg-cover bg-top" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-[#120527] bg-opacity-80" aria-hidden="true"></div>

      {/* Content */}
      <div className="relative z-10 p-6 text-center max-w-[720px]">
        <h1 className="[text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal tracking-wide leading-none mb-4 text-[96px] tablet:text-[72px] mobile:text-[56px]">
          <span className="text-[#a265ff]">404</span>
        </h1>
        <p className="text-white/85 text-lg mobile:text-base mb-8">
          La page que vous cherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/"
            aria-label="Retour à l’accueil"
            className="inline-flex items-center justify-center px-6 py-3 rounded-[35px] border-2 border-[#a265ff] text-white hover:bg-[rgba(162,101,255,0.1)] transition-colors duration-200"
          >
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
