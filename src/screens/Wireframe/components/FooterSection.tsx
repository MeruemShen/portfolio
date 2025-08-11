import React from "react";
import { Button } from "../../../components/ui/button";
import { useToast } from "../../../components/toast";

interface SocialLink {
  icon: string;
  alt: string;
  url?: string;
}

interface FooterSectionProps {
  footerLinks: string[];
  socialLinks: SocialLink[];
}

export const FooterSection = ({ footerLinks, socialLinks }: FooterSectionProps): JSX.Element => {
  const { addToast } = useToast();
  
  // Map of footer link names to their target IDs
  const linkTargets = {
    "ACCUEIL": "accueil",
    "STACK": "tools",
    "PROCESSUS": "processus",
    "WORK": "work",
    "CONTACT": "contact"
  };
  
  // Function to handle email click
  const handleEmailClick = (email: string) => {
    // Copy email to clipboard
    navigator.clipboard.writeText(email)
      .then(() => {
        addToast("Email copié", "success", 2000);
      })
      .catch(err => {
        console.error('Erreur lors de la copie :', err);
        addToast("Erreur lors de la copie", "error", 2000);
      });
  };

  // Function to handle non-email links
  const getHref = (link: SocialLink) => {
    if (!link.url) return "#";
    if (link.alt === "WhatsApp") return `tel:${link.url.replace("tel:", "")}`;
    return link.url;
  };

  return (
    <footer className="w-full mt-[100px] bg-[#120527] backdrop-blur-md flex flex-col items-center px-[90px] py-5 mobile:mt-[80px] mobile:px-8">
      {/* GRID à 3 colonnes : logo | bande/ligne | menus */}
      <div className="w-full relative grid grid-cols-[auto_1fr_auto] items-center overflow-hidden">
        {/* Colonne 1 : logo + infos (inchangé) */}
        <div className="flex flex-col items-start text-left mb-6 mobile:items-center mobile:text-center mobile:mb-12">
          <img className="h-[158px] w-[158px] object-cover mb-[-2px]" alt="Logo" src="/wireframe/logo.png" />
          <h3 className="[font-family:'Days_One',Helvetica] mt-[-13px] font-normal text-white text-[32px] tracking-[0] leading-[31.7px] mb-4">DeepBird</h3>
          <p className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[15px]">© 2024–2025 Deepbird. Tous droits réservés</p>
        </div>

        {/* Colonne 2 : décor (fond + ligne) — s’arrête AVANT la colonne 3 */}
        <div className="relative h-[180px] tabletLandscape:hidden">
          {/* fond */}
          <div className="absolute top-[42px] left-[-93.5px] right-0 h-[100px] bg-[url('/wireframe/fond_lune_footer.png')] bg-cover bg-center"></div>

          {/* ligne + losange */}
          <div className="absolute top-[34px] left-[-100px] right-0 flex items-center pointer-events-none">
            <div className="w-[13px] h-[13px] bg-[#a265ff] rotate-45"></div>
            <div className="h-[3px] flex-1 bg-[#a265ff] -ml-px"></div>
          </div>
        </div>


        {/* Colonne 3 : menus + réseaux (inchangé) */}
        <div className="flex gap-36 mobile:w-full mobile:justify-between mobile:gap-8 tabletLandscape:ml-[15vw]">
          {/* Navigation links */}
          <div className="flex flex-col relative">
            <div className="flex items-center h-full">
              <div className="relative mr-6 mobile:mr-4">
                <div className="w-[22px] h-[181px] rounded-[10px] border border-solid border-[#a265ff]"></div>
                <div className="absolute w-[143px] top-[84px] left-[-60px] -rotate-90 [font-family:'Days_One',Helvetica] text-[#a265ff] text-base text-center">NAVIGATION</div>
              </div>
              <ul className="flex flex-col gap-2">
                {footerLinks.map((link, i) => (
                  <li key={i}>
                    <a 
                      href={`#${linkTargets[link as keyof typeof linkTargets] || ''}`}
                      className="p-0 h-auto [font-family:'Poppins',Helvetica] font-medium text-white text-sm hover:text-[#a265ff] transition-colors"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(linkTargets[link as keyof typeof linkTargets] || '')?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col relative">
            <div className="flex items-center h-full">
              <div className="relative mr-6 mobile:mr-4">
                <div className="w-[22px] h-[181px] rounded-[10px] border border-solid border-[#a265ff]"></div>
                <div className="absolute w-[178px] top-[84px] left-[-78px] -rotate-90 [font-family:'Days_One',Helvetica] text-[#a265ff] text-sm text-center">
                  RESEAUX SOCIAUX
                </div>
              </div>
              <div className="flex flex-col gap-2 mobile:flex-row mobile:gap-2">
                {socialLinks.map((link, i) => (
                  link.alt === "Email" && link.url ? (
                    <button
                      key={i}
                      onClick={() => link.url && handleEmailClick(link.url)}
                      className="p-0 h-auto hover:scale-110 transition-transform flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    >
                      <img
                        className="w-8 h-8 min-w-[32px] min-h-[32px] object-contain"
                        alt={link.alt}
                        src={link.icon}
                      />
                    </button>
                  ) : (
                    <a
                      key={i}
                      href={getHref(link)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-0 h-auto hover:scale-110 transition-transform flex-shrink-0 w-10 h-10 flex items-center justify-center"
                    >
                      <img
                        className="w-8 h-8 min-w-[32px] min-h-[32px] object-contain"
                        alt={link.alt}
                        src={link.icon}
                      />
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
