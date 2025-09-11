import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useAnimation, AnimatePresence } from "framer-motion";
import "./erwan-scrollbar.css";

/**
 * Refonte – Erwan Visual (TypeScript, React + Tailwind)
 * - Converted from erwan_1.jsx to TSX and renamed to erwan_menut.tsx
 * - Adds Erwan Menut logo to the hero mockup
 * - Adds background video behind the ERWAN VISUAL title
 */

const ACCENT = "#e9561e" as const;
// YouTube background video ID (set in .env as VITE_ERWAN_YT_ID)
const YT_ID = "vhJX5_Y8ovk";

// ===== Small util: drag-to-scroll for overflow containers =====
function useDragScroll<T extends HTMLElement>(ref: React.RefObject<T>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    const onDown = (e: MouseEvent | TouchEvent) => {
      isDown = true;
      el.classList.add("dragging");
      const pageX = "touches" in e ? e.touches[0].pageX : (e as MouseEvent).pageX;
      startX = pageX;
      scrollLeft = el.scrollLeft;
    };
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!isDown) return;
      const x = "touches" in e ? e.touches[0].pageX : (e as MouseEvent).pageX;
      const walk = startX - x; // positive -> scroll right
      el.scrollLeft = scrollLeft + walk;
      e.preventDefault();
    };
    const onUp = () => {
      isDown = false;
      el.classList.remove("dragging");
    };

    el.addEventListener("mousedown", onDown as any);
    el.addEventListener("mousemove", onMove as any);
    window.addEventListener("mouseup", onUp as any);
    el.addEventListener("touchstart", onDown as any, { passive: false } as any);
    el.addEventListener("touchmove", onMove as any, { passive: false } as any);
    window.addEventListener("touchend", onUp as any);

    return () => {
      el.removeEventListener("mousedown", onDown as any);
      el.removeEventListener("mousemove", onMove as any);
      window.removeEventListener("mouseup", onUp as any);
      el.removeEventListener("touchstart", onDown as any);
      el.removeEventListener("touchmove", onMove as any);
      window.removeEventListener("touchend", onUp as any);
    };
  }, [ref]);
}

// ===== NAV LATERAL =====
function Nav() {
  const baseLinks = [
    { id: "work" },
    { id: "services" },
    { id: "clients" },
    { id: "about" },
    { id: "testimonials" },
    { id: "contact" },
  ];
  const [links, setLinks] = useState(baseLinks);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // Filter out any links whose section doesn't exist (e.g., commented out), and never include footer.
    const existing = baseLinks.filter((l) => !!document.getElementById(l.id));
    setLinks(existing);

    const secs = existing
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    // Robust scroll-spy: pick the section around ~35% of viewport height
    const compute = () => {
      const viewportRef = window.innerHeight * 0.35;
      let current: string | null = secs.length ? secs[0].id : null;
      let bestDelta = Number.POSITIVE_INFINITY;

      secs.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        const secCenter = rect.top + rect.height / 2;
        const within = rect.top <= viewportRef && rect.bottom >= viewportRef;
        const delta = Math.abs(secCenter - viewportRef);
        if (within) {
          current = sec.id;
          bestDelta = -1; // lock when within viewportRef band
        } else if (bestDelta >= 0 && delta < bestDelta) {
          bestDelta = delta;
          current = sec.id;
        }
      });

      setActive(current);
    };

    compute();
    const onScroll = () => compute();
    const onResize = () => compute();
    window.addEventListener("scroll", onScroll as any, { passive: true } as any);
    window.addEventListener("resize", onResize);
    const t = setTimeout(compute, 50);
    return () => {
      window.removeEventListener("scroll", onScroll as any);
      window.removeEventListener("resize", onResize);
      clearTimeout(t);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 hidden h-screen w-20 flex-col items-center justify-between border-r border-white/10 bg-black/40 backdrop-blur px-2 py-6 md:flex">
      <a href="#top" className="text-white font-bold rotate-[-90deg] tracking-widest text-xs">ERWAN</a>
      <div className="flex flex-col gap-6">
        {links.map((l) => {
          const isActive = active === l.id;
          return (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`block h-3 w-3 rounded-full transition-colors transition-transform duration-200 ${isActive ? "bg-[var(--accent)] scale-110" : "bg-white/50 hover:bg-[var(--accent)] hover:scale-125"}`}
              style={{ ["--accent" as any]: ACCENT }}
              aria-label={l.id}
            />
          );
        })}
      </div>
    </nav>
  );
}

// ===== HEADER (top bar) =====
type HeaderProps = { onOpenMenu: () => void };
function Header({ onOpenMenu }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="flex h-16 items-center justify-between pl-6 pr-6 md:pl-28 md:pr-12">
        <a href="#top" className="inline-flex items-center">
          <img src="/wireframe/erwan_menut.png" alt="Logo Erwan Menut" className="h-8 w-auto" />
          <span className="sr-only">Accueil</span>
        </a>
        <button
          onClick={onOpenMenu}
          className="inline-flex items-center rounded-full border border-white/40 px-4 py-1.5 text-sm uppercase tracking-widest text-white/90 hover:border-white focus:outline-none focus:ring-2 focus:ring-white/40"
        >
          Menu
        </button>
      </div>
    </header>
  );
}

// ===== MENU OVERLAY =====
type MenuOverlayProps = { open: boolean; onClose: () => void };
function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const items = [
    { id: "work", label: "Projets" },
    { id: "services", label: "Prestations" },
    { id: "clients", label: "Clients" },
    { id: "about", label: "À propos" },
    { id: "testimonials", label: "Témoignages" },
    { id: "contact", label: "Contact" },
  ];
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if ((e as KeyboardEvent).key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey as any);
    return () => window.removeEventListener("keydown", onKey as any);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
          {/* panel */}
          <motion.div
            className="relative z-[71] flex h-full w-full items-center justify-center px-10"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full border border-white/40 px-3 py-1.5 text-sm uppercase tracking-widest text-white/90 hover:border-white"
            >
              Fermer
            </button>
            <nav className="mx-auto max-w-5xl">
              <ul className="flex flex-col items-center gap-2 sm:gap-3 md:gap-4">
                {items.map((it) => (
                  <li key={it.id} style={{ ["--accent" as any]: ACCENT }}>
                    <a
                      href={`#${it.id}`}
                      onClick={onClose}
                      className="block text-center font-extrabold uppercase leading-[0.9] text-white transition-colors hover:text-[var(--accent)]"
                      style={{ fontSize: "clamp(22px, 7vmin, 64px)" }}
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ===== BACKGROUND (page) =====
function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="h-full w-full bg-gradient-to-br from-black via-zinc-900 to-black" />
      <div className="absolute inset-0 bg-black/65" />
    </div>
  );
}

function Cursor() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const move = (e: MouseEvent) => { el.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 450, fill: "forwards" }); };
    window.addEventListener("mousemove", move as any, { passive: true } as any);
    return () => window.removeEventListener("mousemove", move as any);
  }, []);
  return <div ref={ref} className="pointer-events-none fixed z-50 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" style={{ background: `${ACCENT}33` }} />;
}

// ===== HERO (with video background and logo) =====
function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref as any, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const words = ["Erwan", "Visual"]; // requested: use ERWAN VISUAL
  return (
    <section ref={ref as any} id="top" className="relative flex min-h-screen flex-col justify-center pl-6 md:pl-28 pr-6 md:pr-12 pb-24">
      {/* Background showreel via YouTube embed (uses VITE_ERWAN_YT_ID) */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-none">
        {YT_ID ? (
          <div className="absolute inset-0">
            <iframe
              className="absolute top-1/2 left-1/2 h-[56.25vw] w-[177.78vh] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              src={`https://www.youtube.com/embed/${YT_ID}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${YT_ID}`}
              title="Showreel background"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen={false}
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        ) : null}
        {/* gradient overlay to keep text legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <motion.div className="relative z-10" style={{ y }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.h1 className="overflow-hidden text-[12vw] leading-[0.9] font-extrabold uppercase">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ delay: i * 0.4, duration: 0.8 }}
              className="block bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #e9561e 0%, #ffffff 100%)" }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description héros (logo déplacé dans l’en-tête) */}
        <p className="mt-6 max-w-xl text-lg text-white/85">
          Vidéaste et réalisateur — clips, mariages, courts‑métrages et publicités. Je crée des images cinématiques qui marquent.
        </p>
      </motion.div>
    </section>
  );
}

// ===== CRED STRIP =====
function CredStrip() {
  const items = [
    "Vimeo Staff Pick",
    "Nikon Film Festival",
    "Short of the Week",
    "FilmFreeway Official Selection",
    "Cannes Short Film Corner",
    "Aesthetica Short Film Festival",
  ] as const;
  const line = items.join(" • ");
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-black/40 py-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="overflow-hidden">
        <div className="flex whitespace-nowrap gap-10 pr-10 text-[10px] uppercase tracking-[0.25em] text-white/60 will-change-transform animate-[marquee-left_20s_linear_infinite]">
          {Array.from({ length: 4 }).map((_, i) => (<span key={i}>{line}</span>))}
        </div>
      </div>
      <div className="mt-2 overflow-hidden">
        <div className="flex whitespace-nowrap gap-10 pr-10 text-[10px] uppercase tracking-[0.25em] text-white/40 will-change-transform animate-[marquee-right_26s_linear_infinite]">
          {Array.from({ length: 4 }).map((_, i) => (<span key={i}>{line}</span>))}
        </div>
      </div>
      <style>{`@keyframes marquee-left { from { transform: translateX(0) } to { transform: translateX(-50%) } }
@keyframes marquee-right { from { transform: translateX(-50%) } to { transform: translateX(0) }`}</style>
    </section>
  );
}

// ===== WORK – marquee + drag =====
function Work() {
  const meta = [
    { title: "Clip — Nova", tags: ["Clip", "Musique"] },
    { title: "Mariage — Arcadia", tags: ["Mariage", "Film"] },
    { title: "Court‑métrage — Orbit", tags: ["Fiction", "Court‑métrage"] },
  ];
  const controls = useAnimation();
  const seqRef = useRef<HTMLDivElement | null>(null);
  const [seqWidth, setSeqWidth] = useState(0);

  const startMarquee = () => {
    const seq = seqRef.current;
    if (!seq) return;
    const w = seq.scrollWidth;
    setSeqWidth(w);
    const duration = Math.max(10, w / 80);
    controls.start({ x: [0, -w], transition: { duration, ease: "linear", repeat: Infinity } });
  };

  useEffect(() => {
    startMarquee();
    const onResize = () => { controls.stop(); controls.set({ x: 0 } as any); startMarquee(); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="work" className="relative flex min-h-screen flex-col justify-center pl-6 md:pl-28">
      <div className="box-border w-full pr-6 md:w-[calc(100vw-7rem)]">
        <h2 className="mb-10 text-[7vw] font-bold uppercase leading-none">Projets récents</h2>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent" />

          <motion.div
            data-carousel="work"
            className="flex gap-6 cursor-grab select-none"
            drag="x"
            dragConstraints={{ left: -seqWidth, right: 0 }}
            dragElastic={0.02}
            onPointerDown={() => controls.stop()}
            onPointerUp={() => startMarquee()}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => startMarquee()}
            animate={controls}
          >
            <div ref={seqRef} className="flex gap-6 pr-6">
              {meta.map((m, i) => (
                <article key={`A-${i}`} className="w-[88vw] shrink-0 overflow-hidden rounded-3xl border border-white/10 sm:w-[56vw] lg:w-[42vw]">
                  <figure data-mock='card' className="relative overflow-hidden rounded-3xl bg-zinc-800">
                    <img
                      src={`/wireframe/webp/erwan_illus_${(i % 3) + 1}.webp`}
                      alt={`Projet – ${m.title}`}
                      className="h-48 w-full object-cover sm:h-56 md:h-[360px]"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2 py-1 text-[10px] uppercase tracking-widest">Projet</span>
                  </figure>
                  <div className="flex items-center justify-between p-5">
                    <div>
                      <h3 className="text-xl font-semibold">{m.title}</h3>
                      <p className="mt-1 text-sm text-white/60">{m.tags.join(" · ")}</p>
                    </div>
                    <a href="#cases" className="rounded-full border border-white/20 px-3 py-1 text-xs hover:border-[var(--accent)]" style={{ ["--accent" as any]: ACCENT }}>
                      Voir
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <div aria-hidden className="flex gap-6 pr-6">
              {meta.map((m, i) => (
                <article key={`B-${i}`} className="w-[88vw] shrink-0 overflow-hidden rounded-3xl border border-white/10 sm:w-[56vw] lg:w-[42vw]">
                  <figure data-mock='card' className="relative overflow-hidden rounded-3xl bg-zinc-800">
                    <img
                      src={`/wireframe/webp/erwan_illus_${(i % 3) + 1}.webp`}
                      alt={`Projet – ${m.title}`}
                      className="h-48 w-full object-cover sm:h-56 md:h-60"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2 py-1 text-[10px] uppercase tracking-widest">Projet</span>
                  </figure>
                  <div className="flex items-center justify-between p-5">
                    <div>
                      <h3 className="text-xl font-semibold">{m.title}</h3>
                      <p className="mt-1 text-sm text-white/60">{m.tags.join(" · ")}</p>
                    </div>
                    <a href="#cases" className="rounded-full border border-white/20 px-3 py-1 text-xs hover:border-[var(--accent)]" style={{ ["--accent" as any]: ACCENT }}>
                      Voir
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ===== CASE STUDY (placeholder) =====
function CaseStudySticky() {
  return (
    <section id="cases" className="relative py-24 pl-6 md:pl-28">
      <div className="mx-auto box-border w-full max-w-[1200px] pr-6 md:w-[min(1200px,calc(100vw-7rem))] md:pr-12">
        <h2 className="text-[7vw] font-bold uppercase leading-none">Étude de cas</h2>
        <div className="mt-10 grid grid-cols-1 gap-10">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 p-6"><h3 className="text-2xl font-semibold">Rôle</h3><p className="mt-2 text-white/70">Réalisation, direction photo, montage</p></div>
            <div className="rounded-2xl border border-white/10 p-6"><h3 className="text-2xl font-semibold">Outils</h3><p className="mt-2 text-white/70">Sony FX3, objectifs G‑Master, DaVinci Resolve, After Effects</p></div>
          </div>
          <figure data-mock='hero' className="relative grid place-items-center overflow-hidden rounded-3xl border border-white/10 bg-zinc-800 text-sm text-white/40 shadow-2xl">Visuel du film</figure>
          <div className="grid gap-6 md:grid-cols-3">
            {[1,2,3].map((i) => (<figure key={i} data-mock='card' className="grid place-items-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-800 text-sm text-white/40">Extrait {i}</figure>))}
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 p-6"><div className="text-xs uppercase tracking-widest text-white/50">Année</div><div className="text-xl">2025</div></div>
            <div className="rounded-2xl border border-white/10 p-6"><div className="text-xs uppercase tracking-widest text-white/50">Impact</div><div className="text-xl">+38% de temps de visionnage</div></div>
            <div className="rounded-2xl border border-white/10 p-6"><div className="text-xs uppercase tracking-widest text-white/50">Livrables</div><div className="text-xl">Film + Teaser</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const data = [
    { t: "Clips musicaux", d: "De la pré‑prod au montage : scénarisation, tournage, étalonnage" },
    { t: "Mariages", d: "Captation discrète et film cinématique, teaser et film long" },
    { t: "Courts‑métrages", d: "Réalisation, direction photo, prise de son, montage et mixage" },
    { t: "Publicités & marque", d: "Films produits, spots réseaux sociaux, formats verticaux" },
    { t: "Événements & aftermovies", d: "Concerts, festivals, conférences, aftermovies dynamiques" },
    { t: "Montage & étalonnage", d: "DaVinci Resolve, After Effects, colorimétrie et habillage" },
  ];
  return (
    <section id="services" className="relative py-24 pl-6 md:pl-28">
      <div className="mx-auto box-border w-full max-w-[1200px] pr-6 md:w-[min(1200px,calc(100vw-7rem))] md:pr-12">
        <h2 className="text-[7vw] font-bold uppercase leading-none">Prestations</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {data.map((s, i) => (
            <div key={i} className="group rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="mb-2 text-xs uppercase tracking-widest text-white/50">0{i + 1}</div>
              <h3 className="text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-white/70">{s.d}</p>
              <figure data-mock='tile' className="mt-6 relative overflow-hidden rounded-2xl bg-zinc-800">
                <img
                  src={`/wireframe/webp/erwan_illus_${(i % 3) + 1}.webp`}
                  alt={`Illustration – ${s.t}`}
                  className="h-48 w-full object-cover sm:h-56 md:h-[320px]"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Capabilities() {
  const caps = ["Réalisation", "Direction photo", "Montage", "Étalonnage", "Prise de son", "Motion"];
  return (
    <section id="capabilities" className="relative py-24 pl-6 md:pl-28">
      <div className="mx-auto box-border w-full max-w-[1200px] pr-6 md:w-[min(1200px,calc(100vw-7rem))] md:pr-12">
        <h2 className="text-[7vw] font-bold uppercase leading-none">Compétences</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {caps.map((c) => (
            <span key={c} className="rounded-full border border-white/20 px-4 py-2 text-sm tracking-wide transition-all hover:tracking-[0.2em]">
              {c}
            </span>
          ))}
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-lg font-semibold">Outils</h3>
            <p className="mt-2 text-white/70">Sony FX3/FX6, objectifs G‑Master, drones, DaVinci Resolve, After Effects</p>
          </div>
          <div className="rounded-2xl border border-white/10 p-6">
            <h3 className="text-lg font-semibold">Approche</h3>
            <p className="mt-2 text-white/70">Narration, rythme, lumière naturelle, colorimétrie précise et rendu cinématique</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const items = ["Studio K", "Nova Labs", "Arcadia", "Lumina", "Orbit", "Twelve", "Neutral", "Peaks", "Vector", "Helio"];
  const controls = useAnimation();
  const seqRef = useRef<HTMLDivElement | null>(null);
  const [seqWidth, setSeqWidth] = useState(0);

  const startMarquee = () => {
    const seq = seqRef.current; if (!seq) return;
    const w = seq.scrollWidth; setSeqWidth(w);
    const duration = Math.max(10, w / 100);
    controls.start({ x: [0, -w], transition: { duration, ease: "linear", repeat: Infinity } });
  };

  useEffect(() => {
    startMarquee();
    const onResize = () => { controls.stop(); controls.set({ x: 0 } as any); startMarquee(); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="clients" className="relative flex min-h-screen flex-col justify-center pl-6 md:pl-28">
      <div className="box-border w-full pr-6 md:w-[calc(100vw-7rem)]">
        <h2 className="mb-10 text-[7vw] font-bold uppercase leading-none">Clients & Diffusion</h2>
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent" />

          <motion.div
            data-carousel="clients"
            className="flex gap-4 cursor-grab select-none"
            drag="x"
            dragConstraints={{ left: -seqWidth, right: 0 }}
            dragElastic={0.02}
            onPointerDown={() => controls.stop()}
            onPointerUp={() => startMarquee()}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => startMarquee()}
            animate={controls}
          >
            <div ref={seqRef} className="flex gap-4 pr-6">
              {items.map((c, i) => (
                <div key={`A-${i}`} className="grid h-40 w-[70vw] shrink-0 place-items-center rounded-2xl border border-white/10 bg-zinc-800 text-white/70 sm:w-[40vw] lg:w-[24vw]">
                  {c}
                </div>
              ))}
            </div>
            <div aria-hidden className="flex gap-4 pr-6">
              {items.map((c, i) => (
                <div key={`B-${i}`} className="grid h-40 w-[70vw] shrink-0 place-items-center rounded-2xl border border-white/10 bg-zinc-800 text-white/70 sm:w-[40vw] lg:w-[24vw]">
                  {c}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Editorial() {
  return (
    <section id="editorial" className="relative py-24 pl-6 md:pl-28">
      <div className="mx-auto box-border w-full max-w-[1200px] pr-6 md:w-[min(1200px,calc(100vw-7rem))] md:pr-12">
        <h2 className="text-[7vw] font-bold uppercase leading-none">Réalisations</h2>
        <div className="mt-8 grid grid-cols-6 gap-4">
          {[1,2,3,4,5].map((i) => (
            <figure key={i} data-mock='tile' className="col-span-6 grid place-items-center overflow-hidden rounded-3xl border border-white/10 bg-zinc-800 text-sm text-white/40 md:col-span-2">Aperçu {i}</figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 pl-6 md:pl-28">
      <div className="mx-auto grid box-border w-full max-w-[1200px] pr-6 md:w-[min(1200px,calc(100vw-7rem))] md:pr-12 gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-[7vw] font-bold uppercase leading-none">À propos</h2>
          <p className="mt-6 text-lg text-white/80">J’associe narration, mouvement et technique pour réaliser des films immersifs qui captivent et servent vos objectifs.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {["50+ projets vidéo", "Clips, mariages, courts‑métrages", "Prix & sélections", "Qualité & accessibilité"].map((t) => (<div key={t} className="rounded-2xl border border-white/10 p-6">{t}</div>))}
          </div>
        </div>
        <figure data-mock='tile' className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-800">
          <img
            src="/wireframe/webp/erwan_illus_3.webp"
            alt="Portrait / Studio"
            className="h-64 w-full object-cover sm:h-80 md:h-[405px]"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    { q: "Travailler avec Erwan a tout changé. Notre film respire.", a: "Fondateur, Studio X" },
    { q: "Audacieux, rapide, minutieux. Une vraie valeur sûre.", a: "Directeur créatif, Agence" },
    { q: "Au‑delà des attentes, avec une précision cinématique.", a: "CEO, Startup Y" },
  ];
  return (
    <section id="testimonials" data-items={items.length} className="relative py-24 pl-6 md:pl-28">
      <div className="mx-auto box-border w-full max-w-[1200px] pr-6 md:w-[min(1200px,calc(100vw-7rem))] md:pr-12">
        <h2 className="text-[7vw] font-bold uppercase leading-none">Témoignages</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (<article key={i} className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-xl"><p className="text-xl leading-snug">“{t.q}”</p><p className="mt-4 text-sm text-white/60">{t.a}</p></article>))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nom = ((fd.get("nom") as string) || "").trim();
    const email = ((fd.get("email") as string) || "").trim();
    const tel = ((fd.get("tel") as string) || "").trim();
    const message = ((fd.get("message") as string) || "").trim();
    const subject = encodeURIComponent(`Contact – ${nom || "Nouveau message"}`);
    const body = encodeURIComponent(`Nom: ${nom}\nEmail: ${email}\nTéléphone: ${tel}\n\nMessage:\n${message}`);
    window.location.href = `mailto:hello@erwanvisual.fr?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-24 px-6 md:pl-28 scroll-mt-24">
      <div className="mx-auto box-border w-full max-w-[1200px] pr-6 md:w-[min(1200px,calc(100vw-7rem))] md:pr-12 rounded-[32px] border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-6 sm:p-8 md:p-10">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <h2 className="text-[7vw] font-bold uppercase leading-none">Contact</h2>
            <p className="mt-4 max-w-2xl text-white/80">Parlez‑moi de votre projet (clip, mariage, pub, court‑métrage). Je reviens vers vous avec un plan clair, un planning et un budget.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <a className="w-full sm:w-auto text-center rounded-full border border-white/20 px-6 py-3 hover:border-[var(--accent)] hover:bg-white/5 transition-colors" href="mailto:hello@erwanvisual.fr" aria-label="Écrire un email" style={{ ["--accent" as any]: ACCENT }}>Écrivez‑moi</a>
              <a className="w-full sm:w-auto text-center rounded-full border border-white/20 px-6 py-3 hover:border-[var(--accent)] hover:bg-white/5 transition-colors" href="#" aria-label="Réserver un appel" style={{ ["--accent" as any]: ACCENT }}>Réserver un appel</a>
            </div>
            <div className="mt-6 text-sm text-white/60">
              <div>Email : <a href="mailto:hello@erwanvisual.fr" className="underline hover:text-white">hello@erwanvisual.fr</a></div>
              <div className="mt-1">Basé en Bretagne — disponible partout en France</div>
            </div>
          </div>
          <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-white/10 bg-black/30 p-4 sm:p-6 space-y-4">
            <div>
              <label htmlFor="nom" className="mb-1 block text-sm text-white/80">Nom *</label>
              <input id="nom" name="nom" required autoComplete="name" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-[var(--accent)]" placeholder="Votre nom" style={{ ["--accent" as any]: ACCENT }} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-white/80">Email *</label>
                <input id="email" name="email" type="email" required autoComplete="email" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-[var(--accent)]" placeholder="vous@exemple.com" style={{ ["--accent" as any]: ACCENT }} />
              </div>
              <div>
                <label htmlFor="tel" className="mb-1 block text-sm text-white/80">Téléphone</label>
                <input id="tel" name="tel" type="tel" autoComplete="tel" className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-[var(--accent)]" placeholder="Optionnel" style={{ ["--accent" as any]: ACCENT }} />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-white/80">Message *</label>
              <textarea id="message" name="message" required rows={5} className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-white placeholder-white/40 outline-none focus:border-[var(--accent)]" placeholder="Parlez‑moi de votre projet : contexte, objectifs, délais..." style={{ ["--accent" as any]: ACCENT }} />
            </div>
            <button type="submit" className="w-full rounded-full border border-white/20 px-6 py-3 font-semibold hover:border-[var(--accent)] hover:bg-white/5 transition-colors" aria-label="Envoyer le message" style={{ ["--accent" as any]: ACCENT }}>
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 text-sm text-white/60">
      <div className="mx-auto flex box-border w-full max-w-[1200px] pr-6 md:w-[min(1200px,calc(100vw-7rem))] md:pr-12 flex-col items-center justify-between gap-6 sm:flex-row">
        <div>© {new Date().getFullYear()} Erwan Visual — All rights reserved.</div>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-white">Dribbble</a>
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

function DevSelfTest() {
  useEffect(() => {
    const ids = ["work", "services", "clients", "about", "testimonials", "contact"];
    const missing = ids.filter((id) => !document.getElementById(id));
    console.assert(missing.length === 0, "Missing sections:", missing);
    const mocks = document.querySelectorAll("[data-mock]");
    console.assert(mocks.length >= 10, "Not enough mockup placeholders", mocks.length);
    const t = document.getElementById("testimonials");
    const count = t?.getAttribute("data-items");
    console.assert(count === "3", "Unexpected testimonials count", count);

    const workCarousel = document.querySelector("[data-carousel='work']");
    const clientsCarousel = document.querySelector("[data-carousel='clients']");
    console.assert(!!workCarousel && !!clientsCarousel, "Carousels missing");
  }, []);
  return null;
}

// ===== ROOT =====
export default function ErwanMenut() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);
  // Apply Erwan-themed scrollbar only while this page is mounted
  useEffect(() => {
    document.documentElement.classList.add("erwan-theme");
    document.body.classList.add("erwan-theme");
    return () => {
      document.documentElement.classList.remove("erwan-theme");
      document.body.classList.remove("erwan-theme");
    };
  }, []);

  return (
    <div className="relative bg-black text-white antialiased overflow-x-hidden">
      <style>{`
        [data-mock]{min-height:12rem}
        [data-mock='card']{min-height:22rem}
        [data-mock='tile']{min-height:20rem}
        [data-mock='hero']{min-height:50vh}
        .scrollbar-hide::-webkit-scrollbar{display:none}
        .scrollbar-hide{-ms-overflow-style:none;scrollbar-width:none}
        .dragging{cursor:grabbing}
      `}</style>
      <Background />
      <Cursor />
      <Nav />
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main className="pt-16">
        <Hero />
        <CredStrip />
        <Work />
        {/*<CaseStudySticky />  // Section non essentielle pour un portfolio vidéaste */}
        <Services />
        {/* <Capabilities />  // Commenté: pas nécessaire pour la version vidéaste */}
        <Clients />
        {/* <Editorial />  // Commenté: pas indispensable pour ce scope */}
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <DevSelfTest />
    </div>
  );
}
