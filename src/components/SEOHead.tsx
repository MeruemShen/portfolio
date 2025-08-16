import React, { useEffect } from "react";
import { defaultSEO, setCanonical, upsertMetaTag, SEOConfig } from "../utils/seo";

export const SEOHead: React.FC<SEOConfig> = (props) => {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const cfg = defaultSEO(props);
    document.documentElement.lang = cfg.lang;
    document.title = cfg.title;
    setCanonical(document, cfg.canonical);
    cfg.meta.forEach((m) => upsertMetaTag(document, m));
  }, [
    props.title,
    props.description,
    props.canonical,
    props.robots,
    props.lang,
    JSON.stringify(props.meta ?? []),
  ]);

  return null;
};

export default SEOHead;
