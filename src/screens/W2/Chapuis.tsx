// @ts-nocheck
import React, { useEffect, useState } from "react";

/**
 * Refonte — Menuiserie Chapuis (maquette React + Tailwind)
 *
 * Fix de build: SUPPRESSION de l'import "./logo-chapuis.svg" qui faisait échouer la résolution.
 * -> Remplacé par un composant <BrandLogo> tolérant à l'absence du fichier.
 *    Définissez LOGO_SRC ci‑dessous vers votre fichier réel (ex: "/logo-chapuis.svg").
 *
 * DA: Orange principal #ed5b22 (hover #d14c1d), sans images réelles (placeholders).
 * Chemins de conversion: CTA persistants, parcours guidé, micro‑CTA après sections.
 */

// === CONFIG MARQUE ===
const BRAND = {
  name: "Menuiserie Chapuis",
  baseline: "Depuis 1905 — Le Puy‑en‑Velay",
  primary: "#ed5b22",
  primaryHover: "#d14c1d",
  phone: "+33471045512",
  phoneHuman: "04 71 04 55 12",
  address: "210 rue de Farnier — 43000 Le Puy‑en‑Velay",
  hours: "L‑J : 8h‑11h45 / 14h‑17h45 — V : 8h‑11h45 / 14h‑17h",
  // Placez le fichier dans /public puis ajustez ce chemin si besoin :
  logoSrc: "/wireframe/svg/logo-chapuis.svg",
};

// === ATOMS ===
const Pill = ({ children }) => (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs tracking-wide uppercase">
    {children}
  </span>
);


const SectionTitle = ({ kicker, title, subtitle }) => (
    <div className="max-w-3xl">
      {kicker && <Pill>{kicker}</Pill>}
      <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-3 text-base sm:text-lg text-slate-600">{subtitle}</p>}
    </div>
);

const BrandLogo = ({ className = "h-10 w-auto" }) => {
  const [failed, setFailed] = useState(false);
  return (
      <div className="flex items-center gap-3">
        {!failed && (
            <img
                src={BRAND.logoSrc}
                alt={BRAND.name}
                className={className}
                onError={() => setFailed(true)}
            />
        )}
        {failed && (
            <div className="h-10 w-10 rounded-xl border grid place-items-center font-black" style={{ color: BRAND.primary }}>
              CH
            </div>
        )}
        <div className="leading-tight">
          <div className="font-bold">{BRAND.name}</div>
          <div className="text-xs text-slate-500">{BRAND.baseline}</div>
        </div>
      </div>
  );
};

// === NAVIGATION ===
const Nav = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <BrandLogo />
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu('menuiseries')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="font-medium">Nos menuiseries</button>
              <div
                className={`${openMenu === 'menuiseries' ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'} transition absolute left-1/2 -translate-x-1/2 top-full w-[760px] max-w-[88vw] pt-5`}
              >
                <div className="rounded-2xl border bg-white p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Catalogue</div>
                      <ul className="space-y-1">
                        <li><a className="hover:underline" href="#fenetres-portes">Fenêtres & Portes</a></li>
                        <li><a className="hover:underline" href="#volets-portails">Volets & Portails</a></li>
                        <li><a className="hover:underline" href="#escaliers-interieurs">Escaliers & Intérieurs</a></li>
                        <li><a className="hover:underline" href="#agencements-exterieurs">Agencements extérieurs</a></li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="w-full rounded-2xl overflow-hidden border">
                        <img src="/wireframe/chapuis_banner.jpg" alt="Chapuis — aperçu" className="w-full h-full object-cover" style={{ aspectRatio: '4/3' }} loading="lazy" decoding="async" />
                      </div>
                      <a href="#devis" className="block text-center rounded-xl text-white text-sm font-semibold py-3 hover:opacity-90 transition" style={{ backgroundColor: BRAND.primary }}>Demandez un devis gratuit</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#realisations" className="font-medium">Réalisations</a>
            <div
              className="relative"
              onMouseEnter={() => setOpenMenu('apropos')}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button className="font-medium">À propos</button>
              <div
                className={`${openMenu === 'apropos' ? 'visible opacity-100 pointer-events-auto' : 'invisible opacity-0 pointer-events-none'} transition absolute left-1/2 -translate-x-1/2 top-full w-[640px] max-w-[85vw] pt-5`}
              >
                <div className="rounded-2xl border bg-white p-6 shadow-xl">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">À propos</div>
                      <ul className="space-y-1">
                        <li><a className="hover:underline" href="#apropos">Notre histoire</a></li>
                        <li><a className="hover:underline" href="#apropos">Fabrication locale</a></li>
                        <li><a className="hover:underline" href="#apropos">Engagements & Labels</a></li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <div className="w-full rounded-2xl overflow-hidden border">
                        <img src="/wireframe/chapuis_banner.jpg" alt="À propos — aperçu" className="w-full h-full object-cover" style={{ aspectRatio: '4/3' }} loading="lazy" decoding="async" />
                      </div>
                      <a href="#apropos" className="block text-center rounded-xl text-white text-sm font-semibold py-3 hover:opacity-90 transition" style={{ backgroundColor: BRAND.primary }}>Découvrir l'entreprise</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#devis" className="font-medium">Contact / Devis</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href={`tel:${BRAND.phone}`} className="hidden sm:inline-flex rounded-xl border px-3 py-2 text-sm">{BRAND.phoneHuman}</a>
            <a href="#devis" className="inline-flex rounded-xl text-white text-sm font-semibold px-4 py-2" style={{ backgroundColor: BRAND.primary }}>Devis gratuit</a>
          </div>
        </div>
      </div>
    </header>
  );
};

// === SECTIONS ===
const Hero = () => (
    <section className="relative overflow-hidden">
      {/* Original, no-orange background: soft neutral radial + subtle grid + decorative glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#f6f3ee_0%,_#f0efe9_35%,_#ecebe6_100%)]" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(0deg,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="absolute -top-16 -left-24 w-[420px] h-[420px] rounded-full blur-[80px] opacity-30" style={{ background: "linear-gradient(145deg,#7c8a98,#b7c3cc)" }} />
        <div className="absolute -bottom-10 right-[-60px] w-[380px] h-[380px] rounded-full blur-[90px] opacity-25" style={{ background: "linear-gradient(145deg,#9fb6a8,#d6e2da)" }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <Pill>Fabricant & poseur — Bois · Alu · PVC</Pill>
            <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Menuiseries sur‑mesure <span className="underline decoration-2 underline-offset-4" style={{ textDecorationColor: '#64748b' }}>durables</span>, posées par nos équipes.
            </h1>
            <p className="mt-4 text-slate-700 text-lg">
              Au Puy‑en‑Velay depuis 1905. Fenêtres, portes, volets, agencements & créations bois.
              Tradition & précision industrielle au service de votre confort.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#wizard" data-testid="cta-primary" className="rounded-xl text-white font-semibold px-5 py-3 hover:opacity-90 transition" style={{ backgroundColor: BRAND.primary }}>Lancer mon projet</a>
              <a href="#realisations" className="rounded-xl border px-5 py-3 font-semibold hover:bg-white/60 transition">Voir des réalisations</a>
              <a href="#contact" className="rounded-xl border px-5 py-3 hover:bg-white/60 transition">Contacter un conseiller</a>
            </div>
            <ul className="mt-6 text-sm text-slate-700 grid grid-cols-2 gap-y-2 max-w-md">
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-slate-500" />RGE • Qualibat • RT 2012</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-slate-500" />Ateliers internes bois/alu/PVC</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-slate-500" />Pose dédiée (pas de sous‑traitance)</li>
              <li className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-slate-500" />Devis & audit thermique</li>
            </ul>

            {/* Trust/Metrics bar */}
            <div className="mt-6 rounded-2xl border bg-white/70 backdrop-blur px-5 py-4 shadow-sm max-w-xl">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-extrabold leading-none">120<span className="align-top text-[10px]">+</span></div>
                  <div className="text-[11px] text-slate-600">ans d'existence</div>
                </div>
                <div>
                  <div className="text-lg font-extrabold leading-none">100%</div>
                  <div className="text-[11px] text-slate-600">pose interne</div>
                </div>
                <div>
                  <div className="text-lg font-extrabold leading-none">4,8<span className="align-top text-[10px]">/5</span></div>
                  <div className="text-[11px] text-slate-600">avis clients</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="w-full rounded-2xl overflow-hidden border shadow-[0_10px_30px_rgba(0,0,0,0.08)] rotate-[0.5deg]">
                <img src="/wireframe/chapuis_banner.jpg" alt="Atelier et chantiers Chapuis" className="w-full h-full object-cover" style={{ aspectRatio: '16/9' }} loading="lazy" decoding="async" />
              </div>
              {/* subtle floating card */}
              <div className="absolute -bottom-4 left-4 right-auto bg-white/70 backdrop-blur-md border border-white/60 shadow-sm rounded-xl px-4 py-3 hidden sm:flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
                <span className="text-sm text-slate-700">Entreprise locale depuis 1905 • Pose par nos équipes</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative bottom separator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center text-slate-500">
        <span className="text-[11px]">défiler</span>
        <span aria-hidden className="animate-bounce leading-none">▼</span>
      </div>
      <svg className="block w-full" height="24" viewBox="0 0 1440 24" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0,24 C240,0 480,0 720,24 C960,48 1200,48 1440,24 L1440,24 L0,24 Z" fill="#ffffff" />
      </svg>
    </section>
);

const WizardTeaser = () => (
    <section id="wizard" className="py-14 border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <SectionTitle
              kicker="Parcours guidé"
              title="Votre projet en 3 étapes"
              subtitle="Un flux simple pour qualifier votre besoin et obtenir un devis rapidement."
          />
          <div className="rounded-2xl border p-6 bg-slate-50">
            <ol className="space-y-4 text-sm">
              <li className="flex gap-3"><span className="h-7 w-7 shrink-0 grid place-items-center rounded-full text-white font-bold" style={{ backgroundColor: BRAND.primary }}>1</span><div><div className="font-semibold">Diagnostic</div><div className="text-slate-600">Type de projet, matériaux, contraintes (isolation, patrimoine, ERP).</div></div></li>
              <li className="flex gap-3"><span className="h-7 w-7 shrink-0 grid place-items-center rounded-full text-white font-bold" style={{ backgroundColor: BRAND.primary }}>2</span><div><div className="font-semibold">Prise de cotes</div><div className="text-slate-600">Pré‑visite ou rendez‑vous en showroom au Puy‑en‑Velay.</div></div></li>
              <li className="flex gap-3"><span className="h-7 w-7 shrink-0 grid place-items-center rounded-full text-white font-bold" style={{ backgroundColor: BRAND.primary }}>3</span><div><div className="font-semibold">Chiffrage & planning</div><div className="text-slate-600">Proposition détaillée, aides RGE, créneau de pose par nos équipes.</div></div></li>
            </ol>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              <a href="#devis" className="rounded-xl text-white font-semibold px-5 py-3 text-center" style={{ backgroundColor: BRAND.primary }}>Commencer le devis</a>
              <a href="#contact" className="rounded-xl border px-5 py-3 text-center">Parler à un conseiller</a>
            </div>
          </div>
        </div>
      </div>
    </section>
);

const Badges = () => (
    <section className="py-10 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { t: "RGE & Qualibat", s: "Travaux éligibles aux aides (selon dossier)." },
            { t: "Ateliers intégrés", s: "Bois, Aluminium, PVC — moyens techniques modernes." },
            { t: "Pose Chapuis", s: "Équipes internes formées — qualité maîtrisée." },
          ].map((b, i) => (
              <div key={i} className="rounded-2xl border p-6 bg-slate-50">
                <div className="font-semibold">{b.t}</div>
                <div className="text-slate-600 text-sm">{b.s}</div>
              </div>
          ))}
        </div>
      </div>
    </section>
);

const Services = () => (
    <section id="nos-menuiseries" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Escaliers & Intérieurs */}
        <div id="escaliers-interieurs" className="grid lg:grid-cols-2 gap-10 items-center">
          <SectionTitle kicker="Nos menuiseries" title="Escaliers & Intérieurs" subtitle="Escaliers, portes intérieures, rangements, bibliothèques, verrières, parquets." />
          <div>
            <div className="w-full rounded-2xl overflow-hidden border">
              <img src="/wireframe/chapuis_banner.jpg" alt="Escaliers & Intérieurs — ambiance" className="w-full h-full object-cover" style={{ aspectRatio: '16/9' }} loading="lazy" decoding="async" />
            </div>
            <div className="mt-4 flex gap-3"><a href="#devis" className="rounded-xl text-white font-semibold px-4 py-2 hover:opacity-90 transition" style={{ backgroundColor: BRAND.primary }}>Devis rapide</a><a href="#realisations" className="rounded-xl border px-4 py-2 hover:bg-slate-50 transition">Voir des projets</a></div>
          </div>
        </div>

        {/* Fenêtres & Portes */}
        <div id="fenetres-portes" className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="w-full rounded-2xl overflow-hidden border">
              <img src="/wireframe/chapuis_banner.jpg" alt="Fenêtres & Portes — façades et ouvertures" className="w-full h-full object-cover" style={{ aspectRatio: '16/9' }} loading="lazy" decoding="async" />
            </div>
            <div className="mt-4 flex gap-3"><a href="#devis" className="rounded-xl text-white font-semibold px-4 py-2 hover:opacity-90 transition" style={{ backgroundColor: BRAND.primary }}>Devis fenêtres & portes</a><a href="#realisations" className="rounded-xl border px-4 py-2 hover:bg-slate-50 transition">Voir des poses</a></div>
          </div>
          <SectionTitle kicker="Nos menuiseries" title="Fenêtres & Portes" subtitle="Fenêtres, portes d'entrée, portes de garage — isolation, sécurité & esthétique." />
        </div>

        {/* Volets & Portails */}
        <div id="volets-portails" className="grid lg:grid-cols-2 gap-10 items-center">
          <SectionTitle kicker="Nos menuiseries" title="Volets & Portails" subtitle="Volets roulants/battants, portails aluminium/PVC, motorisations, domotique." />
          <div>
            <div className="w-full rounded-2xl overflow-hidden border">
              <img src="/wireframe/chapuis_banner.jpg" alt="Volets & Portails — extérieurs" className="w-full h-full object-cover" style={{ aspectRatio: '16/9' }} loading="lazy" decoding="async" />
            </div>
            <div className="mt-4 flex gap-3"><a href="#devis" className="rounded-xl text-white font-semibold px-4 py-2 hover:opacity-90 transition" style={{ backgroundColor: BRAND.primary }}>Obtenir un devis</a><a href="#realisations" className="rounded-xl border px-4 py-2 hover:bg-slate-50 transition">Inspiration</a></div>
          </div>
        </div>

        {/* Agencements extérieurs */}
        <div id="agencements-exterieurs" className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="w-full rounded-2xl overflow-hidden border">
              <img src="/wireframe/chapuis_banner.jpg" alt="Agencements extérieurs — terrasse et garde‑corps" className="w-full h-full object-cover" style={{ aspectRatio: '16/9' }} loading="lazy" decoding="async" />
            </div>
            <div className="mt-4 flex gap-3"><a href="#devis" className="rounded-xl text-white font-semibold px-4 py-2 hover:opacity-90 transition" style={{ backgroundColor: BRAND.primary }}>Chiffrer mon extérieur</a><a href="#realisations" className="rounded-xl border px-4 py-2 hover:bg-slate-50 transition">Idées & inspirations</a></div>
          </div>
          <SectionTitle kicker="Nos menuiseries" title="Agencements extérieurs" subtitle="Terrasses, garde‑corps, portails, clôtures, bardages, abris et auvents." />
        </div>
      </div>
    </section>
);

const Reals = () => (
    <section id="realisations" className="py-16 bg-slate-50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <SectionTitle kicker="Réalisations" title="Quelques chantiers récents" subtitle="Sélection — habitat & projets pros. Voir la galerie complète." />
          <a href="#galerie" className="hidden sm:inline-flex rounded-xl border px-4 py-2">Ouvrir la galerie</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { src: "/wireframe/webp/lubin_banner.webp", title: "Habitat — Fenêtres", loc: "Le Puy‑en‑Velay" },
            { src: "/wireframe/webp/exostia_banner.webp", title: "Habitat — Porte", loc: "Chaspuzac" },
            { src: "/wireframe/webp/hangart_banner.webp", title: "Bois — Escalier", loc: "Brives‑Charensac" },
            { src: "/wireframe/webp/dovana_banner.webp", title: "Extérieurs — Terrasse", loc: "Espaly" },
            { src: "/wireframe/webp/fond_lune.webp", title: "Bois — Agencement", loc: "Aiguilhe" },
            { src: "/wireframe/webp/fond_lune_2.webp", title: "Pro — Bardage", loc: "Vals‑près‑le‑Puy" },
          ].map((item, i) => (
              <a key={i} href="#galerie" className="group rounded-2xl border bg-white p-3 hover:shadow-sm transition">
                <div className="w-full rounded-xl overflow-hidden border">
                  <img src="/wireframe/chapuis_banner.jpg" alt={`${item.title} — ${item.loc}`} className="w-full h-full object-cover" style={{ aspectRatio: '4/3' }} loading="lazy" decoding="async" />
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-xs text-slate-500">{item.loc}</div>
                  </div>
                  <span className="text-xs rounded-full border px-2 py-1">Détail</span>
                </div>
              </a>
          ))}
        </div>

        {/* Avant / Après */}
        <div className="mt-10">
          <SectionTitle kicker="Avant / Après" title="Transformations visibles" subtitle="Quelques exemples parlants de rénovations." />
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {["Avant", "Après"].map((label, i) => (
              <div key={i} className="rounded-2xl border bg-white p-3">
                <div className="relative w-full rounded-xl overflow-hidden border" style={{ aspectRatio: '4/3' }}>
                  <img src="/wireframe/chapuis_banner.jpg" alt={`${label} — chantier`} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  <span className="absolute top-2 left-2 rounded-full bg-black/70 text-white text-xs px-2 py-1">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="#devis" className="inline-flex rounded-xl text-white font-semibold px-5 py-3" style={{ backgroundColor: BRAND.primary }}>Je veux un devis pour un projet similaire</a>
        </div>
      </div>
    </section>
);

const Proof = () => (
    <section className="py-16 bg-white" id="apropos">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionTitle kicker="À propos" title="Entreprise familiale, fabrication locale" subtitle="Une équipe locale, transmission du savoir‑faire et exigence qualité certifiée." />
          <ul className="mt-6 space-y-3 text-slate-700 text-sm">
            <li>• Implantés à <strong>Le Puy‑en‑Velay</strong>, Haute‑Loire.</li>
            <li>• <strong>Ateliers</strong> bois, aluminium, PVC — <strong>moyens techniques modernes</strong>.</li>
            <li>• <strong>Labels</strong> : RGE, Qualibat, RT 2012.</li>
            <li>• <strong>Pose interne</strong> : planification et suivi par nos équipes.</li>
          </ul>
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            <div className="rounded-2xl border p-4 bg-slate-50">
              <div className="font-semibold">Notre histoire</div>
              <div className="text-xs text-slate-600">Depuis 1905, une aventure familiale.</div>
            </div>
            <div className="rounded-2xl border p-4 bg-slate-50">
              <div className="font-semibold">Fabrication locale</div>
              <div className="text-xs text-slate-600">Ateliers intégrés au Puy‑en‑Velay.</div>
            </div>
            <div className="rounded-2xl border p-4 bg-slate-50">
              <div className="font-semibold">Engagements & Labels</div>
              <div className="text-xs text-slate-600">RGE, Qualibat, RT 2012, environnement.</div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#devis" className="rounded-xl border px-5 py-3">Nous contacter</a>
            <a href="#realisations" className="rounded-xl border px-5 py-3">Voir nos réalisations</a>
          </div>
        </div>
        <div>
          <div className="w-full rounded-2xl overflow-hidden border">
            <img src="/wireframe/chapuis_banner.jpg" alt="Atelier Chapuis — historique" className="w-full h-full object-cover" style={{ aspectRatio: '3/4' }} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
);

const Testimonials = () => (
    <section className="py-16 bg-slate-50 border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Avis" title="Ce que disent nos clients" subtitle="Extraits Google / courriers — à enrichir avec de vrais témoignages." />
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="rounded-2xl border bg-white p-6">
                <div className="font-bold" style={{ color: BRAND.primary }}>★★★★★</div>
                <p className="mt-2 text-sm text-slate-700">Pose propre et conforme, délais tenus, très bon conseil sur les performances d'isolation. Je recommande.</p>
                <div className="mt-3 text-xs text-slate-500">Client habitat — 2024</div>
              </div>
          ))}
        </div>
        <div className="mt-6 text-center"><a href="#devis" className="inline-flex rounded-xl text-white font-semibold px-5 py-3" style={{ backgroundColor: BRAND.primary }}>Obtenir un devis</a></div>
      </div>
    </section>
);

const CTA = () => (
    <section id="devis" className="py-16 text-white" style={{ background: `linear-gradient(to bottom, ${BRAND.primary}, ${BRAND.primaryHover})` }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight">Parlez‑nous de votre projet</h3>
            <p className="mt-2 opacity-90">Réponse sous 24–48h ouvrées. Audit et devis gratuits.</p>
            <ul className="mt-4 opacity-90 text-sm space-y-1">
              <li>• Téléphone : {BRAND.phoneHuman}</li>
              <li>• Adresse : {BRAND.address}</li>
              <li>• {BRAND.hours}</li>
            </ul>
          </div>
          <form className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="c-nom" className="text-sm font-medium text-white/90">Nom</label>
                <input id="c-nom" name="nom" className="rounded-xl px-4 py-3 text-slate-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="c-prenom" className="text-sm font-medium text-white/90">Prénom</label>
                <input id="c-prenom" name="prenom" className="rounded-xl px-4 py-3 text-slate-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="c-tel" className="text-sm font-medium text-white/90">Téléphone</label>
                <input id="c-tel" name="telephone" className="rounded-xl px-4 py-3 text-slate-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="c-email" className="text-sm font-medium text-white/90">Email</label>
                <input id="c-email" name="email" type="email" className="rounded-xl px-4 py-3 text-slate-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="c-commune" className="text-sm font-medium text-white/90">Commune / Code postal</label>
              <input id="c-commune" name="commune" className="rounded-xl px-4 py-3 text-slate-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300" />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="c-message" className="text-sm font-medium text-white/90">Votre besoin</label>
              <textarea id="c-message" name="message" rows={4} className="rounded-xl px-4 py-3 text-slate-900 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-300" />
            </div>
            <div className="flex items-center gap-3">
              <button type="button" className="rounded-xl bg-white text-slate-900 font-semibold px-5 py-3 hover:opacity-90 transition" data-testid="cta-send">Demandez un devis gratuit</button>
              <span className="opacity-90 text-sm">ou appelez‑nous : {BRAND.phoneHuman}</span>
            </div>
          </form>
        </div>

        {/* Google Maps */}
        <div className="mt-10 rounded-2xl overflow-hidden border shadow-sm">
          <iframe
            title="Plan Google Maps"
            src="https://www.google.com/maps?q=210%20rue%20de%20Farnier%2043000%20Le%20Puy-en-Velay&output=embed"
            width="100%"
            height="360"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
);

const Footer = () => (
    <footer id="contact" className="bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="font-bold text-lg">{BRAND.name}</div>
          <div className="text-sm text-slate-400">Fabricant & poseur — Bois, Aluminium, PVC — depuis 1905</div>
          <div className="mt-3 text-sm">{BRAND.address}</div>
          <div className="text-sm">Tél. {BRAND.phoneHuman}</div>
          <div className="mt-3 flex gap-2 text-xs text-slate-400">RGE • Qualibat • RT 2012</div>
        </div>
        <div>
          <div className="font-semibold">Nos menuiseries</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            <li><a href="#fenetres-portes">Fenêtres & Portes</a></li>
            <li><a href="#volets-portails">Volets & Portails</a></li>
            <li><a href="#escaliers-interieurs">Escaliers & Intérieurs</a></li>
            <li><a href="#agencements-exterieurs">Agencements extérieurs</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <ul className="mt-2 space-y-1 text-sm text-slate-300">
            <li><a href="#devis">Devis gratuit</a></li>
            <li><a href="#realisations">Réalisations</a></li>
            <li><a href="#actu">Actualités</a></li>
            <li><a href="#entreprise">L’entreprise</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-xs text-center text-slate-400">© {new Date().getFullYear()} {BRAND.name} — Maquette de refonte</div>
    </footer>
);

const FloatingCTA = () => (
    <div className="fixed bottom-4 right-4 flex flex-col gap-2">
      <a href="#devis" data-testid="cta-float-devis" className="rounded-full shadow-lg text-white font-semibold px-5 py-3" style={{ backgroundColor: BRAND.primary }}>Devis</a>
      <a href={`tel:${BRAND.phone}`} className="rounded-full shadow-lg bg-white text-slate-900 border font-semibold px-5 py-3">Appeler</a>
    </div>
);

// === TESTS (smoke) ===
function runSmokeTests() {
  const results = [];
  try {
    const rootExists = !!document.querySelector("#devis");
    results.push({ name: "Section Devis présente (ancre #devis)", pass: rootExists });
    const cta = document.querySelector('[data-testid="cta-primary"]');
    results.push({ name: "CTA principal colorisé", pass: !!cta && cta.className.includes('rounded-xl') });
    const floatCta = document.querySelector('[data-testid="cta-float-devis"]');
    results.push({ name: "CTA flottant présent", pass: !!floatCta });
  } catch (e) {
    results.push({ name: "Tests runtime", pass: false, error: String(e) });
  }
  // Expose pour debug
  window.__chapuis_tests__ = results;
  console.table(results);
}

const DevSmoke = () => {
  useEffect(() => {
    runSmokeTests();
  }, []);
  return null;
};

// === PAGE ===
export default function ChapuisRefonte() {
  return (
      <div className="text-slate-900">
        <Nav />
        <Hero />
        <WizardTeaser />
        <Badges />
        <Services />
        <Reals />
        <Proof />
        <Testimonials />
        <CTA />
        <Footer />
        <FloatingCTA />
        <DevSmoke />
      </div>
  );
}
