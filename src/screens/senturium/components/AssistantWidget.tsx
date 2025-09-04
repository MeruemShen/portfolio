import React, { useEffect, useMemo, useRef, useState } from "react";
import { MessageCircle, Sparkles, X, Send } from "lucide-react";

// Local design tokens (aligned with Senturium prototype)
const COLORS = {
  forest: "#1F3D2B",
  sage: "#9BB59C",
  cream: "#F8F4EC",
  clay: "#C2714F",
  ink: "#1A1A1A",
};

type Msg = { id: number; from: "ai" | "user"; text: string };

function useAutoScroll(dep: any) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.scrollTop = el.scrollHeight;
    }
  }, [dep]);
  return ref;
}

function generateReply(input: string): string {
  const text = input.toLowerCase();
  if (/(livraison|delivery|frais|commande)/.test(text)) {
    return "Bonne nouvelle ✨ La livraison est offerte dès 49€. Vous pouvez aussi choisir le Click&Collect gratuit à Vitré (prêt en ~2h).";
  }
  if (/(click|collect|vitr[eé]|retrait)/.test(text)) {
    return "Le Click&Collect est disponible à Vitré et prêt en environ 2 heures. Dites‑moi ce que vous cherchez, je vous prépare une sélection !";
  }
  if (/(coffret|box|cadeau|gift)/.test(text)) {
    return "Nos coffrets sont personnalisables (boîte kraft, pochon lin, ou coffret rigide) avec des produits naturels. Souhaitez‑vous plutôt détente, visage ou senteurs ?";
  }
  if (/(vegan|naturel|ingr[eé]dients)/.test(text)) {
    return "Nous privilégions des matières propres, artisanales, et plusieurs produits sont vegan. Je peux vous proposer des savons surgras, shampoings solides et bougies naturelles.";
  }
  if (/(ouvert|horaire|opening|heure)/.test(text)) {
    return "Notre boutique à Vitré est ouverte en journée (exemple : Lun‑Sam 10:00–19:00). Besoin d’un itinéraire ?";
  }
  return "Je suis là pour vous aider avec la boutique Senturium. Posez votre question (produits, coffrets, livraison, Click&Collect…) et je vous réponds avec plaisir !";
}

export default function AssistantWidget(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{
    id: 1,
    from: "ai",
    text: "Bonjour 👋 Je suis l’assistant Senturium (maquette). Comment puis‑je vous aider aujourd’hui ?",
  }]);

  const containerRef = useAutoScroll([msgs, typing, open]);

  const suggestions = useMemo(() => [
    "Quels produits vegan avez‑vous ?",
    "Aidez‑moi à composer un coffret",
    "Comment marche le Click&Collect ?",
  ], []);

  const send = (text?: string) => {
    const content = (text ?? input).trim();
    if (!content) return;
    setMsgs(prev => [...prev, { id: Date.now(), from: "user", text: content }]);
    setInput("");
    setTyping(true);
    const reply = generateReply(content);
    // Simulate typing delay
    setTimeout(() => {
      setMsgs(prev => [...prev, { id: Date.now() + 1, from: "ai", text: reply }]);
      setTyping(false);
    }, 550);
  };

  return (
    <>
      {/* Floating open button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full px-4 py-3 text-white shadow-lg"
          style={{ background: COLORS.forest }}
          aria-label="Ouvrir l’assistant Senturium"
        >
          <Sparkles size={18} />
          <span className="hidden sm:inline">Besoin d’aide ?</span>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div
          className="fixed z-40 bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[380px] max-h-[80vh] overflow-hidden rounded-2xl shadow-2xl border border-black/10 flex flex-col"
          style={{ background: "#fff" }}
          role="dialog"
          aria-modal
          aria-label="Assistant Senturium (maquette)"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3" style={{ background: COLORS.cream }}>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 grid place-items-center rounded-full" style={{ background: COLORS.sage, color: COLORS.ink }}>
                <MessageCircle size={16} />
              </div>
              <div className="leading-tight">
                <div className="font-medium" style={{ color: COLORS.ink }}>Assistant Senturium</div>
                <div className="text-xs text-black/60">Maquette – réponses simulées</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="p-2 rounded-lg hover:bg-black/5" aria-label="Fermer">
              <X size={18} />
            </button>
          </div>

          {/* Messages + Suggestions inside scroll */}
          <div ref={containerRef} className="flex-1 min-h-0 overflow-y-auto p-3 senturium-scroll">
            <div>
              {msgs.map(m => (
                <div key={m.id} className={`mb-2 flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`rounded-2xl px-3 py-2 text-sm max-w-[85%] ${m.from === "user" ? "text-white" : "text-black"}`}
                    style={{ background: m.from === "user" ? COLORS.forest : "#F8F8F8", color: m.from === "user" ? "#fff" : COLORS.ink }}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
              {typing && (
                <div className="mb-2 flex justify-start">
                  <div className="rounded-2xl px-3 py-2 text-sm bg-black/5 text-black/70">…</div>
                </div>
              )}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {suggestions.map(s => (
                <button key={s} onClick={() => send(s)} className="text-xs rounded-full border px-3 py-1 hover:bg-black/5" style={{ borderColor: COLORS.forest, color: COLORS.forest }}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form
            className="flex items-center gap-2 p-3 border-t"
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Écrivez votre message…"
              className="flex-1 rounded-xl border px-3 py-2 text-sm outline-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-white disabled:opacity-50"
              style={{ background: COLORS.forest }}
              disabled={!input.trim() || typing}
              aria-label="Envoyer"
            >
              <Send size={16} />
            </button>
          </form>

          {/* Disclaimer */}
          <div className="px-4 pb-3 text-[11px] text-black/50">
            Ce module est une maquette d’assistant IA pour la boutique Senturium. Aucune donnée n’est réellement envoyée.
          </div>
        </div>
      )}
    </>
  );
}
