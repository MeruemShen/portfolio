import React from "react";
import { Calendar } from "lucide-react";
import { useToast } from "../../../components/toast";

interface SocialLink {
  icon: string;
  alt: string;
  url?: string;
}

interface SocialSidebarProps {
  links: SocialLink[];
}

export const SocialSidebar = ({ links }: SocialSidebarProps): JSX.Element => {
  const { addToast } = useToast();
  
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
    <div className="fixed top-1/2 -translate-y-1/2 left-4 flex flex-col items-center gap-4 z-30 tabletLandscape:hidden">
      {links.map((link, index) => (
        link.alt === "Email" && link.url ? (
          <button
            key={index}
            onClick={() => link.url && handleEmailClick(link.url)}
            className="w-[50px] h-[50px] bg-[#0f0f0f99] rounded-[20px] backdrop-blur-md p-0 flex items-center justify-center hover:bg-transparent hover:scale-110 transition"
          >
            <img className="w-[24px] h-[24px] object-cover mb-1" alt={link.alt} src={link.icon} />
          </button>
        ) : (
          <a
            key={index}
            href={getHref(link)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[50px] h-[50px] bg-[#0f0f0f99] rounded-[20px] backdrop-blur-md p-0 flex items-center justify-center hover:bg-transparent hover:scale-110 transition"
          >
            {link.alt === "Calendrier" ? (
              <Calendar className="w-[24px] h-[24px] text-white" />
            ) : (
              <img className="w-[24px] h-[24px] object-cover mb-1" alt={link.alt} src={link.icon} />
            )}
          </a>
        )
      ))}
    </div>
  );
};

export default SocialSidebar;
