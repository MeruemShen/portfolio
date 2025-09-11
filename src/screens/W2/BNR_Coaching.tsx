import React, { ReactNode } from "react";

// -----------------------------
// BNR Coaching — Landing moderne (TSX)
// Maquette interactive en React + Tailwind
// Palette: fond #09090b + accents #446DF6
// -----------------------------

type AccentProps = { children: ReactNode };
const Accent = ({ children }: AccentProps) => (
    <span className="bg-gradient-to-r from-[#446DF6] via-[#446DF6] to-[#446DF6] bg-clip-text text-transparent">
    {children}
  </span>
);

type TagProps = { children: ReactNode };
const Tag = ({ children }: TagProps) => (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium tracking-wide text-white/80 backdrop-blur">
    {children}
  </span>
);

type ImgPlaceholderProps = { ratio?: string; label?: string; variant?: 1 | 2 };
const ImgPlaceholder = ({ ratio = "[--r:56.25%]", label = "VISUEL", variant = 1 }: ImgPlaceholderProps) => (
    <div
        className={`relative rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-800 shadow-inner overflow-hidden ${
            ratio ? `before:block before:content-[''] before:pt-[var(--r)]` : ""
        }`}
        style={{
            // @ts-ignore — usage arbitraire d'une var CSS pour le ratio
            "--r": ratio?.replace("[--r:", "").replace("]", ""),
        }}
    >
        <img
            src={variant === 2 ? "/wireframe/bnr_illus_2.png" : "/wireframe/bnr_illus_1.png"}
            alt={label}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            decoding="async"
        />
    </div>
);

type SectionTitleProps = { kicker?: string; title: ReactNode; subtitle?: string };
const SectionTitle = ({ kicker, title, subtitle }: SectionTitleProps) => (
    <div className="mx-auto max-w-3xl text-center">
        {kicker && (
            <div className="mb-3">
                <Tag>{kicker}</Tag>
            </div>
        )}
        <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">
            {title}
        </h2>
        {subtitle && (
            <p className="mt-4 text-pretty text-white/70">{subtitle}</p>
        )}
    </div>
);

type StatProps = { value: string; label: string };
const Stat = ({ value, label }: StatProps) => (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
        <div className="text-3xl font-semibold text-white">
            <Accent>{value}</Accent>
        </div>
        <div className="mt-2 text-sm text-white/70">{label}</div>
    </div>
);

type ProgramCardProps = { title: string; desc: string; bullets?: string[]; cta?: string };
const ProgramCard = ({ title, desc, bullets = [], cta = "Commencer" }: ProgramCardProps) => (
    <div className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 backdrop-blur transition hover:translate-y-[-2px] hover:border-white/20">
        <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Programme</span>
        </div>
        <p className="mt-3 text-sm text-white/70">{desc}</p>
        <ul className="mt-4 space-y-2 text-sm text-white/75">
            {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#446DF6]" />
                    <span>{b}</span>
                </li>
            ))}
        </ul>
        <button className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#446DF6] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/10 transition active:scale-[0.98]">
            {cta}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8 8-8Z" transform="rotate(180 12 12)"/></svg>
        </button>
    </div>
);

type TestimonialProps = { quote: string; author: string; role: string };
const Testimonial = ({ quote, author, role }: TestimonialProps) => (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 text-white/90">
        <p className="text-pretty italic leading-relaxed">“{quote}”</p>
        <div className="mt-4 flex items-center gap-3">
            <div className="h-9 w-9 shrink-0 overflow-hidden rounded-full bg-white/10" />
            <div>
                <div className="text-sm font-medium text-white">{author}</div>
                <div className="text-xs text-white/60">{role}</div>
            </div>
        </div>
    </div>
);

export default function BNRCoachingLanding() {
    return (
        <main className="min-h-svh bg-[#09090b] text-white">
            {/* Gradient d'ambiance */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="absolute inset-x-0 top-[-20%] mx-auto h-[50rem] w-[60rem] rounded-full bg-[#446DF6]/20 blur-[100px]" />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-40 border-b border-white/10 bg-[#09090b]/70 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
                    <div className="flex items-center gap-3">
                        <img src="/wireframe/bnr_coaching_logo.png" alt="BNR Coaching" className="h-[80px] w-[80px] rounded-xl object-contain pb-1" />
                    </div>
                    <nav className="hidden items-center gap-6 md:flex py-4">
                        {[
                            ["Méthode", "#methode"],
                            ["Programmes", "#programmes"],
                            ["Résultats", "#resultats"],
                            ["À propos", "#apropos"],
                            ["Contact", "#contact"],
                        ].map(([label, href]) => (
                            <a key={href} href={href as string} className="text-sm text-white/70 hover:text-white">
                                {label as string}
                            </a>
                        ))}
                        <a
                            href="#rdv"
                            className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:opacity-90"
                        >
                            Prendre RDV
                        </a>
                    </nav>
                </div>
            </header>

            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
                    <div className="grid items-center gap-10 lg:grid-cols-2">
                        <div>
                            <div className="mb-4 flex items-center gap-2">
                                <Tag>Coaching perso & performance</Tag>
                                <Tag>Suivi individuel</Tag>
                            </div>
                            <h1 className="text-balance text-4xl font-semibold sm:text-5xl">
                                Atteins tes objectifs <Accent>plus vite</Accent> et <Accent>sans te perdre</Accent> en route.
                            </h1>
                            <p className="mt-4 text-pretty text-white/70">
                                Un accompagnement clair, exigeant et humain pour transformer tes habitudes, ta posture mentale
                                et tes résultats. Zéro blabla — des actions concrètes, mesurables, adaptées à ta réalité.
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a href="#rdv" className="inline-flex items-center gap-2 rounded-xl bg-[#446DF6] px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/10">
                                    Commencer un diagnostic gratuit
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8 8-8Z" transform="rotate(180 12 12)"/></svg>
                                </a>
                                <a href="#programmes" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90">
                                    Voir les programmes
                                </a>
                            </div>
                            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                                <Stat value="200+" label="clients accompagnés" />
                                <Stat value="92%" label="taux de satisfaction" />
                                <Stat value="12 sem." label="durée moyenne pour un cap" />
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-6 -top-6 hidden h-28 w-28 rotate-12 rounded-2xl bg-[#446DF6]/25 blur-2xl md:block" />
                            <ImgPlaceholder ratio="[--r:75%]" label="COACH / SHOOTING" variant={1} />
                            <div className="mt-4 grid grid-cols-3 gap-3">
                                <ImgPlaceholder ratio="[--r:100%]" label="AVANT/APRÈS" variant={2} />
                                <ImgPlaceholder ratio="[--r:100%]" label="SEANCE" variant={1} />
                                <ImgPlaceholder ratio="[--r:100%]" label="FEED IG" variant={2} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Méthode */}
            <section id="methode" className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <SectionTitle
                        kicker="La méthode BNR"
                        title={<>
                            Un cadre <Accent>lucide</Accent>, des outils <Accent>pratiques</Accent>, des résultats <Accent>durables</Accent>.
                        </>}
                        subtitle="On clarifie tes objectifs, on diagnostique tes freins, on installe des routines et on mesure. Chaque semaine, un point individuel, des check-ins et des ajustements concrets."
                    />

                    <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {[
                            ["Clarté", "Audit complet de ta situation + objectifs SMART et plan d'action réaliste."],
                            ["Système", "Routines, priorisation, nutrition/sommeil/mobilité — on structure le quotidien."],
                            ["Mental", "Gestion de la frustration, focus, discipline et confiance par l'action."],
                            ["Mesure", "KPIs simples, feedback hebdo, adaptations rapides: on avance, point."],
                        ].map(([title, text]) => (
                            <div key={title as string} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                                <div className="mb-2 text-sm font-semibold text-white">
                                    <Accent>{title as string}</Accent>
                                </div>
                                <p className="text-sm text-white/70">{text as string}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programmes */}
            <section id="programmes" className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <SectionTitle
                        kicker="Programmes"
                        title="Choisis le cadre qui te correspond"
                        subtitle="Du coaching intensif individuel au suivi hybride avec sessions de groupe. Tous incluent un plan personnalisé et un accompagnement par messages."
                    />

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <ProgramCard
                            title="Starter Focus — 4 semaines"
                            desc="Redresse la barre vite: clarté, priorités, routines minimales efficaces."
                            bullets={[
                                "1 session kick-off 90min",
                                "3 suivis hebdo 45min",
                                "Plan d'action + check-ins",
                            ]}
                        />
                        <ProgramCard
                            title="Deep Shift — 12 semaines"
                            desc="Transformation profonde des habitudes et du mindset. On pose des fondations solides."
                            bullets={[
                                "Suivi individuel hebdo + support illimité (jours ouvrés)",
                                "Plan sport/nutrition/sommeil",
                                "Tableau de bord + KPIs",
                            ]}
                            cta="Rejoindre la waiting list"
                        />
                        <ProgramCard
                            title="Performance — Sur mesure"
                            desc="Entrepreneurs, artistes, athlètes: protocole individualisé orienté résultats."
                            bullets={[
                                "Audit 360°",
                                "Coaching intensif individuel",
                                "Accès partenaires (prépa mentale, etc.)",
                            ]}
                            cta="Demander un devis"
                        />
                    </div>
                </div>
            </section>

            {/* Résultats */}
            <section id="resultats" className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <SectionTitle
                        kicker="Résultats"
                        title="Des changements concrets et mesurables"
                        subtitle="Avant / après, habitudes installées, performances — on documente tout."
                    />

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <ImgPlaceholder ratio="[--r:75%]" label="AVANT → APRÈS #1" variant={1} />
                        <ImgPlaceholder ratio="[--r:75%]" label="TRACKER D'HABITUDES" variant={2} />
                        <ImgPlaceholder ratio="[--r:75%]" label="KPIs / PROGRESSION" variant={1} />
                    </div>

                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        <Testimonial
                            quote="J'étais dispersé et épuisé. En 8 semaines j'ai retrouvé un rythme et des résultats sans surcharge."
                            author="Thomas B."
                            role="Entrepreneur — SaaS"
                        />
                        <Testimonial
                            quote="Approche directe, ajustements concrets. J'ai cessé de me raconter des histoires et ça a tout changé."
                            author="Camille R."
                            role="Designer indépendante"
                        />
                        <Testimonial
                            quote="Sommeil, nutrition, entrainements, focus — tout a été structuré simplement. Objectifs atteints."
                            author="Hakim N."
                            role="Ingénieur"
                        />
                    </div>
                </div>
            </section>

            {/* À propos */}
            <section id="apropos" className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <div className="grid items-center gap-8 md:grid-cols-2">
                        <ImgPlaceholder ratio="[--r:100%]" label="PORTRAIT COACH / IG HIGHLIGHTS" variant={2} />
                        <div>
                            <SectionTitle
                                kicker="À propos"
                                title={<>
                                    Un coach <Accent>exigeant</Accent> et <Accent>bienveillant</Accent>, pas un motivateur.
                                </>}
                                subtitle="Je t'accompagne avec franchise et empathie. On garde ce qui marche, on coupe ce qui te freine. Objectif: autonomie et performance durable."
                            />
                            <ul className="mt-6 grid gap-3 text-sm text-white/75">
                                {[
                                    "Certifié (à compléter)",
                                    "+200 suivis individuels",
                                    "Expertise: discipline, énergie, structure, sport/nutrition/sommeil",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#446DF6]" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to action principal */}
            <section id="rdv" className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <div className="grid items-center gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
                        <div>
                            <h3 className="text-2xl font-semibold text-white">Diagnostic offert — 20 minutes</h3>
                            <p className="mt-2 text-white/70">
                                On clarifie ta situation et on voit si on avance ensemble. Aucun engagement, seulement du concret.
                            </p>
                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <a
                                    href="https://calendly.com/ton-lien/calendrier" target="_blank" rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-zinc-900"
                                >
                                    Réserver un créneau
                                </a>
                                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90">
                                    Écrire un message
                                </a>
                            </div>
                        </div>
                        <ImgPlaceholder ratio="[--r:75%]" label="CALENDRIER / PREUVE SOCIALE" variant={1} />
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-16">
                    <SectionTitle
                        kicker="Contact"
                        title="Parlons de tes objectifs"
                        subtitle="Décris en quelques lignes où tu veux aller et où tu bloques. Réponse sous 24–48h ouvrées."
                    />

                    <form className="mx-auto mt-8 max-w-2xl space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <input placeholder="Prénom" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white/25" />
                            <input placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white/25" />
                        </div>
                        <input placeholder="Objectif principal" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white/25" />
                        <textarea rows={5} placeholder="Contexte, blocages, deadline…" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 outline-none focus:border-white/25" />
                        <button type="button" className="inline-flex items-center gap-2 rounded-xl bg-[#446DF6] px-5 py-3 font-medium text-white">
                            Envoyer la demande
                        </button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-10">
                    <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                            <div className="flex flex-col justify-center gap-3">
                                <img src="/wireframe/bnr_coaching_logo.png" alt="BNR Coaching" className="h-[80px] w-[80px] rounded-xl object-contain" />
                                <div className="text-sm uppercase tracking-wider text-white/70">BNR Coaching</div>
                            </div>
                            <p className="mt-3 max-w-md text-sm text-white/60">Coaching individuel exigeant et bienveillant. Résultats mesurables, habitudes durables.</p>
                        </div>
                        <div className="flex items-end justify-start gap-6 sm:justify-end">
                            <a href="#" className="text-sm text-white/70 hover:text-white">Instagram</a>
                            <a href="#" className="text-sm text-white/70 hover:text-white">TikTok</a>
                            <a href="#" className="text-sm text-white/70 hover:text-white">CGV</a>
                            <a href="#" className="text-sm text-white/70 hover:text-white">Mentions</a>
                        </div>
                    </div>
                    <div className="mt-6 text-xs text-white/40">© {new Date().getFullYear()} BNR Coaching. Tous droits réservés.</div>
                </div>
            </footer>
        </main>
    );
}
