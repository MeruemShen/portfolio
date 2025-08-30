import React, { useState } from "react";
import { ArrowRight, X, Calendar } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../components/ui/navigation-menu";
import { useToast } from "../../../components/toast";

interface NavItem {
  name: string;
  isActive: boolean;
  targetId: string;
}

interface SocialLink {
  icon: string;
  alt: string;
  url?: string;
}

interface NavigationHeaderProps {
  navItems: NavItem[];
  onNavItemClick?: (index: number) => void;
  socialLinks?: SocialLink[];
}

export const NavigationHeader = ({ navItems, onNavItemClick, socialLinks = [] }: NavigationHeaderProps): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false); // NEW
  const { addToast } = useToast();

  const handleEmailClick = (email: string) => {
    navigator.clipboard.writeText(email)
        .then(() => {
          addToast("Email copié", "success", 2000);
        })
        .catch(err => {
          console.error('Erreur lors de la copie :', err);
          addToast("Erreur lors de la copie", "error", 2000);
        });
  };

  const getHref = (link: SocialLink) => {
    if (!link.url) return "#";
    if (link.alt === "WhatsApp") return `tel:${link.url.replace("tel:", "")}`;
    return link.url;
  };

  return (
      <header className="fixed top-0 left-0 w-full z-20 bg-white/4 backdrop-blur-md py-[5px]">
        <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4">
          <img className="h-[64px] w-[90px] object-cover" alt="Deepbird — Logo" src="/wireframe/logo.png" width={90} height={64} fetchPriority="high" loading="eager" />

          <Card className="ml-[140px] w-[780px] h-[56px] bg-[#0a0612cc] backdrop-blur-sm rounded-[35px] tabletLandscape:hidden">
            <CardContent className="p-0 h-full w-full flex items-center justify-center">
              <NavigationMenu className="w-full">
                <NavigationMenuList className="w-full h-full flex items-center justify-around gap-4">
                  {navItems.map((item, index) => (
                      <NavigationMenuItem key={index} className="relative h-full">
                        <a
                            href={`#${item.targetId}`}
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById(item.targetId)?.scrollIntoView({ behavior: "smooth" });
                              onNavItemClick?.(index);
                            }}
                            className="relative flex h-full items-center justify-center px-5 py-2 transition-all duration-200 hover:text-[#a265ff] hover:scale-105"
                        >
                          {item.isActive ? (
                              <div className="absolute inset-0 rounded-[35px] bg-[#a265ff] transition-all duration-200" />
                          ) : null}
                          <span className="relative z-10 [font-family:'Days_One',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
                        {item.name}
                      </span>
                        </a>
                      </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </CardContent>
          </Card>

          <a 
            href="https://calendly.com/deepbird/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[160px] h-[42px] mr-6 bg-transparent border-2 border-[#a265ff] rounded-[35px] flex items-center justify-center gap-2 hover:bg-[rgba(162,101,255,0.1)] transition-colors duration-200 tabletLandscape:hidden"
          >
            <span className="[font-family:'Days_One',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">Prendre RDV</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </a>

          {/* Mobile actions: rendez-vous button + burger */}
          <div className="hidden tabletLandscape:flex items-center ml-auto">
            <a
              href="https://calendly.com/deepbird/30min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Prendre un rendez-vous"
              className="flex items-center justify-center w-10 h-10 mr-5 bg-[#a265ff] rounded-[6px] hover:bg-[rgba(162,101,255,0.25)] transition-colors duration-200"
            >
              <Calendar className="w-6 h-6 text-white" />
            </a>

            <button
                onClick={() => (open ? setClosing(true) : setOpen(true))}
                className="flex flex-col items-end justify-center w-8 h-8 relative"
                aria-label="Ouvrir le menu"
            >
              <span className="block w-full h-0.5 bg-white mb-1" />
              <span className="block w-full h-0.5 bg-white mb-1" />
              <span className="block w-1/2 h-0.5 bg-white self-end" />
            </button>
          </div>
        </div>

        <div
            onTransitionEnd={(e) => {
              if (e.target !== e.currentTarget) return;
              if (closing) { setOpen(false); setClosing(false); } // NEW: fin d’anim => vraiment fermé
            }}
            className={`fixed inset-0 z-50 w-screen h-screen transition-transform duration-300 flex-col justify-between tabletLandscape:flex hidden
          ${
                open
                    ? (closing ? '-translate-x-full flex' : 'translate-x-0 flex') // Fermeture => vers la gauche
                    : '-translate-x-full pointer-events-none opacity-0'
            }`}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0 bg-[url('/wireframe/fond_burger_bird1.png')] bg-cover bg-top"></div>
          <div className="absolute inset-0 bg-[#170b28] bg-opacity-65"></div>
          <div className="relative z-10 w-full p-4 flex items-center">
            <img
              className="h-[64px] w-[90px] object-cover"
              alt="Logo Deepbird"
              src="/wireframe/logo.png"
              width={90}
              height={64}
              loading="lazy"
              decoding="async"
            />
            <span className="text-white text-2xl [font-family:'Days_One',Helvetica] ml-2">Deepbird</span>
          </div>

          <button
              onClick={() => setClosing(true)} // NEW: déclenche la fermeture smooth
              className="absolute top-[30px] right-10 z-10 flex items-center justify-center h-[36px] w-[36px] bg-[#a265ff] rounded-md"
              aria-label="Fermer le menu"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <nav className="relative z-10 flex flex-col gap-6 items-start pl-8">
            {navItems.map((item, index) => (
                <a
                    key={index}
                    href={`#${item.targetId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(item.targetId)?.scrollIntoView({ behavior: 'smooth' });
                      onNavItemClick?.(index);
                      setClosing(true); // NEW: fermeture animée aussi quand on clique un lien
                    }}
                    className="text-white text-2xl [font-family:'Days_One',Helvetica] hover:text-[#a265ff]"
                >
                  {item.name}
                </a>
            ))}
          </nav>

          <div className="relative z-10 w-full p-8 flex justify-start gap-4 mb-4">
            {socialLinks.map((link, index) => (
                link.alt === "Email" && link.url ? (
                    <button
                        key={index}
                        onClick={() => link.url && handleEmailClick(link.url)}
                        className="w-[50px] h-[50px] bg-[#0f0f0f99] rounded-[20px] backdrop-blur-md flex items-center justify-center hover:bg-transparent hover:scale-110 transition"
                    >
                      <img
                        className="w-[24px] h-[24px] object-cover mb-1"
                        alt={link.alt}
                        src={link.icon}
                        loading="lazy"
                        decoding="async"
                        width={24}
                        height={24}
                      />
                    </button>
                ) : (
                    <a
                        key={index}
                        href={getHref(link)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.alt}
                        className="w-[50px] h-[50px] bg-[#0f0f0f99] rounded-[20px] backdrop-blur-md flex items-center justify-center hover:bg-transparent hover:scale-110 transition"
                    >
                      {link.alt === "Calendrier" ? (
                        <Calendar className="w-[24px] h-[24px] text-white" />
                      ) : (
                        <img
                          className="w-[24px] h-[24px] object-cover mb-1"
                          alt={link.alt}
                          src={link.icon}
                          loading="lazy"
                          decoding="async"
                          width={24}
                          height={24}
                        />
                      )}
                    </a>
                )
            ))}
          </div>
        </div>
      </header>
  );
};

export default NavigationHeader;
