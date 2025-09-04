import React, { useMemo, useState } from "react";
import { ShoppingCart, Search, MapPin, Gift, X, Plus } from "lucide-react";

// === DESIGN TOKENS ===
const COLORS = {
  forest: "#1F3D2B",
  sage: "#9BB59C",
  cream: "#F8F4EC",
  clay: "#C2714F",
  gold: "#B58A2C",
  ink: "#1A1A1A",
};

// === TYPES ===
type Product = {
  id: string;
  title: string;
  brand: string;
  price: number;
  tags: string[]; // e.g. ["Vegan", "Made in FR"]
  category: string;
  image?: string; // optional
};

type CartItem = { product: Product; qty: number };

// === FAKE DATA (à remplacer par CMS/API) ===
const CATEGORIES = [
  { id: "savons", label: "Savons solides" },
  { id: "shampoings", label: "Shampoings" },
  { id: "soins", label: "Soins visage & corps" },
  { id: "bougies", label: "Bougies & senteurs" },
  { id: "accessoires", label: "Accessoires zéro déchet" },
  { id: "nouveautes", label: "Nouveautés" },
];

const ALL_PRODUCTS: Product[] = [
  { id: "p1", title: "Savon Surgras Calendula", brand: "Atelier Senturium", price: 7.9, tags: ["Naturel", "Surgras", "Made in FR"], category: "savons" },
  { id: "p2", title: "Shampoing Solide Douceur", brand: "Atelier Senturium", price: 9.9, tags: ["Vegan", "Sans sulfate"], category: "shampoings" },
  { id: "p3", title: "Baume Lèvres Miel", brand: "Apiculteurs Locaux", price: 6.5, tags: ["Naturel"], category: "soins" },
  { id: "p4", title: "Bougie Vitré Forêt", brand: "Cire de Soja FR", price: 14.9, tags: ["Cire naturelle", "Made in FR"], category: "bougies" },
  { id: "p5", title: "Porte-Savon Bois", brand: "Artisan Breton", price: 8.9, tags: ["Zéro déchet"], category: "accessoires" },
  { id: "p6", title: "Savon Lait d'Amande", brand: "Atelier Senturium", price: 7.9, tags: ["Naturel"], category: "savons" },
  { id: "p7", title: "Bougie Vanille Bourbon", brand: "Cire de Soja FR", price: 13.9, tags: ["Cire naturelle"], category: "bougies" },
  { id: "p8", title: "Gant Exfoliant Doux", brand: "Textile FR", price: 5.9, tags: ["Zéro déchet"], category: "accessoires" },
  { id: "p9", title: "Savon Charbon Purifiant", brand: "Atelier Senturium", price: 8.5, tags: ["Vegan", "Purifiant"], category: "savons" },
  { id: "p10", title: "Shampoing Volume", brand: "Atelier Senturium", price: 10.9, tags: ["Vegan"], category: "shampoings" },
];

// === HELPERS ===
const formatEUR = (n: number) =>
  n.toLocaleString("fr-FR", { style: "currency", currency: "EUR", maximumFractionDigits: 2 });

// === COMPONENTS ===
function Header({ cartCount, onOpenCart, searchQuery, onSearchChange }: { cartCount: number; onOpenCart: () => void; searchQuery: string; onSearchChange: (v: string) => void }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <img src="/wireframe/svg/senturium.svg" alt="Senturium" className="h-9 w-auto" />
        </div>
        <nav className="hidden md:flex items-center gap-5 text-sm ml-6">
          {[
            ["Accueil", "home"],
            ["Boutique", "shop"],
            ["Coffrets", "coffrets"],
            ["Journal", "journal"],
            ["Magasin", "store"],
          ].map(([label]) => (
            <a key={label} className="text-black/70 hover:text-black transition" href="#">{label}</a>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 rounded-xl border border-black/10 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-[color:var(--forest)]/30" style={{ ['--forest' as any]: COLORS.forest, ['--ink' as any]: COLORS.ink }}>
            <Search size={16} className="text-black/50" />
            <input
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') onSearchChange('');
              }}
              placeholder="Rechercher un produit…"
              className="outline-none text-sm placeholder:text-black/50"
            />
            {searchQuery && (
              <button onClick={() => onSearchChange('')} className="p-1 rounded hover:bg-black/5" aria-label="Effacer la recherche">
                <X size={14} className="text-black/50" />
              </button>
            )}
          </div>
          <button onClick={onOpenCart} className="relative rounded-xl border border-black/10 px-3 py-2 bg-white hover:bg-black/5">
            <ShoppingCart size={18} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex h-5 min-w-5 items-center justify-center rounded-full text-xs text-white" style={{ background: COLORS.forest }}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
      <div className="w-full text-center text-xs py-2" style={{ background: COLORS.forest, color: "#fff" }}>
        Livraison offerte dès 49€ • Click&Collect à Vitré en 2h
      </div>
    </header>
  );
}

function Hero({ onOpenCoffret }: { onOpenCoffret: () => void }) {
  return (
    <section className="relative overflow-hidden" style={{ background: COLORS.cream }}>
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-6 flex flex-col gap-6">
          <h1 className="font-serif text-4xl md:text-5xl" style={{ color: COLORS.ink }}>
            Savons & cadeaux artisanaux, faits en France.
          </h1>
          <p className="text-lg text-black/70 max-w-prose">
            Des matières propres, des gestes simples, une boutique à Vitré qui sent bon le vrai.
          </p>
          <div className="flex gap-3">
            <button
              onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white shadow-sm"
              style={{ background: COLORS.forest }}
            >
              Découvrir la sélection
            </button>
            <button onClick={onOpenCoffret} className="inline-flex items-center justify-center rounded-xl px-5 py-3 border" style={{ color: COLORS.forest, borderColor: COLORS.forest }}>Composer mon coffret</button>
          </div>
          <ul className="flex gap-6 pt-4 text-sm text-black/70">
            <li className="flex items-center gap-2">🌿 Naturel & artisanal</li>
            <li className="flex items-center gap-2">🇫🇷 Fait en France</li>
            <li className="flex items-center gap-2">📍 À Vitré – C&C en 2h</li>
          </ul>
        </div>
        <div className="lg:col-span-6">
          <div className="w-full aspect-[4/3] rounded-2xl" style={{ background: `linear-gradient(135deg, ${COLORS.sage}, ${COLORS.cream})` }} />
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ id, label, active, onClick }: { id: string; label: string; active?: boolean; onClick?: (id: string) => void }) {
  return (
    <button onClick={() => onClick && onClick(id)} className={`group rounded-2xl p-4 text-left border transition ${active ? "border-black/20 bg-white" : "border-transparent bg-white/60 hover:bg-white"}`}>
      <div className="aspect-[4/3] rounded-xl mb-3 bg-gradient-to-br from-white to-black/5" />
      <div className="flex items-center justify-between">
        <span className="font-medium">{label}</span>
        <Plus size={16} className="opacity-60 group-hover:opacity-100" />
      </div>
    </button>
  );
}

function ProductCard({ p, onAdd }: { p: Product; onAdd: (p: Product) => void }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white overflow-hidden flex flex-col">
      <div className="relative">
        <div className="aspect-[4/5] w-full bg-gradient-to-br from-white to-black/5" />
        <div className="absolute top-2 left-2 inline-flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium" style={{ background: COLORS.sage, color: COLORS.ink }}>Nouveau</div>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-2">
        <div className="text-xs uppercase tracking-wide text-black/50">{p.brand}</div>
        <div className="font-medium line-clamp-2">{p.title}</div>
        <div className="flex gap-2 flex-wrap pt-1">
          {p.tags.slice(0, 2).map(t => (
            <span key={t} className="text-[11px] px-2 py-1 rounded-full bg-black/5">{t}</span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-3">
          <div className="text-lg font-semibold">{formatEUR(p.price)}</div>
          <button onClick={() => onAdd(p)} className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-white" style={{ background: COLORS.forest }}>
            <Plus size={16} /> Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-7xl px-4 mb-6">
      <h2 className="font-serif text-2xl md:text-3xl" style={{ color: COLORS.ink }}>{title}</h2>
      {subtitle && <p className="text-black/60 mt-1">{subtitle}</p>}
    </div>
  );
}

function GiftBuilder({ open, onClose, onAddToCart }: { open: boolean; onClose: () => void; onAddToCart: (items: CartItem[]) => void }) {
  const [step, setStep] = useState(1);
  const [box, setBox] = useState<{ name: string; price: number } | null>(null);
  const [selections, setSelections] = useState<CartItem[]>([]);

  const budget = 40; // indicatif
  const subtotal = useMemo(() => selections.reduce((s, it) => s + it.product.price * it.qty, 0) + (box?.price ?? 0), [selections, box]);

  const add = (p: Product) => {
    setSelections(prev => {
      const idx = prev.findIndex(i => i.product.id === p.id);
      if (idx >= 0) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + 1 };
        return copy;
      }
      return [...prev, { product: p, qty: 1 }];
    });
  };
  const dec = (p: Product) => {
    setSelections(prev => prev.flatMap(i => (i.product.id === p.id ? (i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : []) : [i])));
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4" role="dialog" aria-modal>
      <div className="w-full max-w-3xl max-h-[90vh] rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b flex-shrink-0">
          <div className="font-serif text-xl">Composer un coffret</div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-black/5"><X size={18} /></button>
        </div>
        <div className="px-4 py-4 space-y-4 flex-1 overflow-y-auto senturium-scroll">
          <div className="flex items-center gap-2 text-sm">
            <span className={`px-2 py-1 rounded ${step === 1 ? "bg-black text-white" : "bg-black/5"}`}>1. Boîte</span>
            <span className={`px-2 py-1 rounded ${step === 2 ? "bg-black text-white" : "bg-black/5"}`}>2. Produits</span>
            <span className={`px-2 py-1 rounded ${step === 3 ? "bg-black text-white" : "bg-black/5"}`}>3. Message</span>
            <span className={`px-2 py-1 rounded ${step === 4 ? "bg-black text-white" : "bg-black/5"}`}>4. Récap</span>
          </div>

          {step === 1 && (
            <div className="grid sm:grid-cols-3 gap-3">
              {[
                { name: "Boîte kraft", price: 3.0 },
                { name: "Pochon lin", price: 4.0 },
                { name: "Coffret rigide", price: 6.0 },
              ].map(b => (
                <button key={b.name} onClick={() => setBox(b)} className={`rounded-xl border p-4 text-left ${box?.name === b.name ? "border-black" : "border-black/10 hover:bg-black/5"}`}>
                  <div className="font-medium">{b.name}</div>
                  <div className="text-sm text-black/60">{formatEUR(b.price)}</div>
                </button>
              ))}
              <div className="sm:col-span-3 flex justify-end">
                <button disabled={!box} onClick={() => setStep(2)} className="rounded-xl px-4 py-2 text-white disabled:opacity-50" style={{ background: COLORS.forest }}>Continuer</button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="grid sm:grid-cols-2 gap-3">
              {ALL_PRODUCTS.filter(p => ["savons", "soins", "bougies", "accessoires", "shampoings"].includes(p.category)).map(p => (
                <div key={p.id} className="border border-black/10 rounded-xl p-3">
                  <div className="flex items-start gap-3">
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-white to-black/5" />
                    <div className="flex-1">
                      <div className="font-medium">{p.title}</div>
                      <div className="text-sm text-black/60">{formatEUR(p.price)}</div>
                      <div className="mt-2 flex items-center gap-2">
                        <button onClick={() => dec(p)} className="h-8 w-8 grid place-items-center rounded-lg border">-</button>
                        <span className="min-w-6 text-center">{selections.find(i => i.product.id === p.id)?.qty ?? 0}</span>
                        <button onClick={() => add(p)} className="h-8 w-8 grid place-items-center rounded-lg border">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="sm:col-span-2 flex items-center justify-between mt-2">
                <div className="text-sm text-black/70">Budget conseillé: {formatEUR(budget)} — Sous‑total: <strong>{formatEUR(subtotal)}</strong></div>
                <div className="flex gap-2">
                  <button onClick={() => setStep(1)} className="rounded-xl px-3 py-2 border">Retour</button>
                  <button onClick={() => setStep(3)} className="rounded-xl px-3 py-2 text-white" style={{ background: COLORS.forest }}>Continuer</button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-3">
              <label className="block text-sm font-medium">Message carte cadeau</label>
              <textarea className="w-full rounded-xl border p-3" rows={4} placeholder="Votre petit mot…" />
              <div className="flex justify-end gap-2">
                <button onClick={() => setStep(2)} className="rounded-xl px-3 py-2 border">Retour</button>
                <button onClick={() => setStep(4)} className="rounded-xl px-3 py-2 text-white" style={{ background: COLORS.forest }}>Continuer</button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-3">
              <div className="text-sm text-black/60">Coffret: <strong>{box?.name}</strong> — {box && formatEUR(box.price)}</div>
              <div className="divide-y border border-black/10 rounded-xl">
                {selections.map(it => (
                  <div key={it.product.id} className="flex items-center justify-between px-3 py-2">
                    <div className="text-sm">{it.product.title} × {it.qty}</div>
                    <div className="text-sm">{formatEUR(it.product.price * it.qty)}</div>
                  </div>
                ))}
                <div className="flex items-center justify-between px-3 py-3 bg-black/5 font-medium">
                  <div>Total</div>
                  <div>{formatEUR(subtotal)}</div>
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <button onClick={() => setStep(3)} className="rounded-xl px-3 py-2 border">Retour</button>
                <button onClick={() => { onAddToCart(selections); onClose(); }} className="rounded-xl px-3 py-2 text-white" style={{ background: COLORS.forest }}>Ajouter au panier</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StoreSection() {
  return (
    <section id="store" className="py-12">
      <SectionTitle title="Le magasin à Vitré" subtitle="Venez sentir, toucher, demander conseil." />
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden border border-black/10">
          <div className="h-72 w-full" style={{ background: `linear-gradient(135deg, ${COLORS.sage}, ${COLORS.cream})` }} />
        </div>
        <div className="rounded-2xl border border-black/10 bg-white p-5 flex flex-col gap-3">
          <div className="flex items-start gap-2">
            <MapPin size={18} className="mt-1" />
            <div>
              <div className="font-medium">32 rue de la Baudrairie, 35500 Vitré</div>
              <div className="text-sm text-black/60">Itinéraire, stationnement à proximité.</div>
            </div>
          </div>
          <div className="text-sm">
            <div><strong>Horaires</strong> (exemple) :</div>
            <ul className="mt-1 grid grid-cols-2 gap-1 text-black/70">
              <li>Lun 10:00–18:30</li>
              <li>Mar 10:00–18:30</li>
              <li>Mer 10:00–18:30</li>
              <li>Jeu 10:00–18:30</li>
              <li>Ven 10:00–19:00</li>
              <li>Sam 10:00–19:00</li>
            </ul>
          </div>
          <div className="flex gap-2 pt-2">
            <a href="#" className="rounded-xl px-4 py-2 text-white" style={{ background: COLORS.forest }}>Nous appeler</a>
            <a href="#" className="rounded-xl px-4 py-2 border" style={{ borderColor: COLORS.forest, color: COLORS.forest }}>Itinéraire</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16" style={{ background: COLORS.forest, color: "#fff" }}>
      <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-4 gap-6">
        <div className="md:col-span-2">
          <img src="/wireframe/svg/senturium_white.svg" alt="Senturium" className="h-8 w-auto" />
          <p className="text-white/80 mt-2">Savonnerie & cadeaux artisanaux à Vitré.</p>
          <div className="mt-4 text-sm text-white/70">© {new Date().getFullYear()} Senturium. Tous droits réservés.</div>
        </div>
        <div>
          <div className="font-medium">Liens</div>
          <ul className="mt-2 space-y-1 text-white/80 text-sm">
            <li><a href="#">Boutique</a></li>
            <li><a href="#">Coffrets</a></li>
            <li><a href="#">Journal</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Newsletter</div>
          <div className="mt-2 flex flex-col gap-2">
            <input className="w-full rounded-xl px-3 py-2 text-black" placeholder="Votre email" />
            <button className="w-full rounded-xl px-4 py-2 text-black bg-white">S'inscrire</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function CartDrawer({ items, onClose, onChangeQty }: { items: CartItem[]; onClose: () => void; onChangeQty: (id: string, qty: number) => void }) {
  const total = items.reduce((s, i) => s + i.product.price * i.qty, 0);
  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="flex-1 bg-black/40" onClick={onClose} />
      <aside className="w-full max-w-md h-full bg-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="font-serif text-xl">Panier</div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-black/5"><X size={18} /></button>
        </div>
        <div className="flex-1 overflow-auto divide-y senturium-scroll">
          {items.length === 0 ? (
            <div className="p-6 text-black/60">Votre panier est vide.</div>
          ) : (
            items.map(({ product, qty }) => (
              <div key={product.id} className="p-4 flex items-center gap-3">
                <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-white to-black/5" />
                <div className="flex-1">
                  <div className="font-medium text-sm">{product.title}</div>
                  <div className="text-sm text-black/60">{formatEUR(product.price)}</div>
                  <div className="mt-2 inline-flex items-center gap-2">
                    <button onClick={() => onChangeQty(product.id, Math.max(0, qty - 1))} className="h-8 w-8 grid place-items-center rounded-lg border">-</button>
                    <span className="min-w-6 text-center text-sm">{qty}</span>
                    <button onClick={() => onChangeQty(product.id, qty + 1)} className="h-8 w-8 grid place-items-center rounded-lg border">+</button>
                  </div>
                </div>
                <div className="font-medium">{formatEUR(product.price * qty)}</div>
              </div>
            ))
          )}
        </div>
        <div className="border-t p-4">
          <div className="flex items-center justify-between text-sm text-black/70">
            <div>Sous‑total</div>
            <div className="font-medium text-black">{formatEUR(total)}</div>
          </div>
          <button className="mt-3 w-full rounded-xl px-4 py-3 text-white" style={{ background: COLORS.forest }}>Passer au paiement</button>
          <div className="text-xs text-black/60 mt-2">Ou choisir le <strong>Click&Collect</strong> à l'étape suivante.</div>
        </div>
      </aside>
    </div>
  );
}

export default function SenturiumPrototype() {
  const [activeCat, setActiveCat] = useState<string>("all");
  const [coffretOpen, setCoffretOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const products = useMemo(() => {
    let list: Product[];
    if (activeCat === "all") list = ALL_PRODUCTS;
    else if (activeCat === "nouveautes") list = ALL_PRODUCTS.slice(0, 6);
    else list = ALL_PRODUCTS.filter(p => p.category === activeCat);

    const q = searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }
    return list;
  }, [activeCat, searchQuery]);

  const addToCart = (p: Product) => {
    setCart(prev => {
      const i = prev.findIndex(it => it.product.id === p.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + 1 };
        return copy;
        }
      return [...prev, { product: p, qty: 1 }];
    });
  };

  const onChangeQty = (id: string, qty: number) => {
    setCart(prev => prev.flatMap(it => (it.product.id === id ? (qty <= 0 ? [] : [{ ...it, qty }]) : [it])));
  };

  return (
    <div className="min-h-screen" style={{ background: COLORS.cream, color: COLORS.ink, ['--ink' as any]: COLORS.ink }}>
      <Header
        cartCount={cart.reduce((s, i) => s + i.qty, 0)}
        onOpenCart={() => setCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <Hero onOpenCoffret={() => setCoffretOpen(true)} />

      {/* Catégories */}
      <section id="shop" className="py-10">
        <SectionTitle title="Catégories" subtitle="Les essentiels du quotidien." />
        <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <CategoryCard id="all" label="Tout" active={activeCat === "all"} onClick={setActiveCat} />
          {CATEGORIES.map(c => (
            <CategoryCard key={c.id} id={c.id} label={c.label} active={activeCat === c.id} onClick={setActiveCat} />
          ))}
        </div>
      </section>

      {/* Produits */}
      <section className="py-6">
        <SectionTitle title="Sélection du moment" subtitle="Nouveautés, best‑sellers & coups de cœur." />
        <div className="mx-auto max-w-7xl px-4 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map(p => (
            <ProductCard key={p.id} p={p} onAdd={addToCart} />
          ))}
        </div>
        <div className="mx-auto max-w-7xl px-4 flex justify-center">
          <button onClick={() => setCoffretOpen(true)} className="mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-3 text-white" style={{ background: COLORS.clay }}>
            <Gift size={18} /> Composer un coffret
          </button>
        </div>
      </section>

      {/* Magasin */}
      <StoreSection />

      <Footer />

      <GiftBuilder
        open={coffretOpen}
        onClose={() => setCoffretOpen(false)}
        onAddToCart={(items) => {
          // merge into cart
          setCart(prev => {
            const next = [...prev];
            for (const it of items) {
              const idx = next.findIndex(n => n.product.id === it.product.id);
              if (idx >= 0) next[idx] = { ...next[idx], qty: next[idx].qty + it.qty };
              else next.push({ product: it.product, qty: it.qty });
            }
            return next;
          });
          setCartOpen(true);
        }}
      />

      {cartOpen && <CartDrawer items={cart} onClose={() => setCartOpen(false)} onChangeQty={onChangeQty} />}
    </div>
  );
}
