export type MetaTag = {
  name?: string;
  property?: string;
  content: string;
};

export type SEOConfig = {
  title?: string;
  description?: string;
  canonical?: string;
  robots?: string;
  lang?: string;
  meta?: MetaTag[];
};

export const SITE_URL = "https://portfolio.deepbird.fr";
export const DEFAULT_TITLE = "Deepbird — Portfolio et services web";
export const DEFAULT_DESCRIPTION =
  "Deepbird — Portfolio, projets, et services en développement web. Découvrez nos réalisations, notre processus et contactez-nous.";

export function buildTitle(title?: string): string {
  if (!title) return DEFAULT_TITLE;
  // Avoid duplicate brand if already present
  return title.includes("Deepbird") ? title : `${title} | Deepbird`;
}

export function buildCanonical(path: string = "/"): string {
  try {
    const clean = path.startsWith("http") ? path : `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
    // remove trailing index.html and ensure single trailing slash for root
    return clean.replace(/index\.html$/i, "").replace(/(?<!:)\/+(?=\/?$)/, "/");
  } catch {
    return `${SITE_URL}/`;
  }
}

export function defaultSEO(overrides: SEOConfig = {}): Required<SEOConfig> {
  const title = buildTitle(overrides.title);
  const description = overrides.description ?? DEFAULT_DESCRIPTION;
  const canonical = overrides.canonical ?? buildCanonical("/");
  const robots = overrides.robots ?? "index, follow";
  const lang = overrides.lang ?? "fr";
  const meta: MetaTag[] = [
    { name: "description", content: description },
    { name: "robots", content: robots },
    { name: "googlebot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    { name: "bingbot", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    { property: "og:locale", content: "fr_FR" },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Deepbird" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: canonical },
    { property: "og:image", content: `${SITE_URL}/wireframe/about.png` },
    { property: "og:image:alt", content: "Aperçu visuel Deepbird" },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: `${SITE_URL}/wireframe/about.png` },
    { name: "twitter:image:alt", content: "Aperçu visuel Deepbird" },
    ...(overrides.meta ?? []),
  ];
  return { title, description, canonical, robots, lang, meta } as Required<SEOConfig>;
}

export function upsertMetaTag(doc: Document, tag: MetaTag): void {
  const selector = tag.name ? `meta[name="${tag.name}"]` : tag.property ? `meta[property="${tag.property}"]` : null;
  if (!selector) return;
  let el = doc.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = doc.createElement("meta");
    if (tag.name) el.setAttribute("name", tag.name);
    if (tag.property) el.setAttribute("property", tag.property);
    doc.head.appendChild(el);
  }
  el.setAttribute("content", tag.content);
}

export function setCanonical(doc: Document, href: string): void {
  let link = doc.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = doc.createElement("link");
    link.setAttribute("rel", "canonical");
    doc.head.appendChild(link);
  }
  link.setAttribute("href", href);
}
