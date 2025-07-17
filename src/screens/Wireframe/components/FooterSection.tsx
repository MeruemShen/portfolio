import React from "react";
import { Button } from "../../../components/ui/button";

interface SocialLink {
  icon: string;
  alt: string;
}

interface FooterSectionProps {
  footerLinks: string[];
  socialLinks: SocialLink[];
}

export const FooterSection = ({ footerLinks, socialLinks }: FooterSectionProps): JSX.Element => (
  <footer className="absolute w-full h-[249px] top-[4099px] left-0 bg-[#170b28] border border-solid border-[#ffffff33] flex items-center justify-between px-12">
    <div className="flex flex-col">
      <img className="h-[158px] w-[158px] object-cover mb-4" alt="Logo" src="/wireframe/logo.png" />
      <h3 className="[font-family:'Days_One',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[31.7px] mb-4">DeepBird</h3>
      <p className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[15px] tracking-[0] leading-[normal]">© 2024–2025 Deepbird. Tous droits réservés</p>
    </div>
    <div className="flex gap-16">
      <div className="relative">
        <div className="w-[22px] h-[181px] absolute left-[-55px] rounded-[10px] border border-solid border-[#a265ff]" />
        <div className="absolute w-[143px] top-[78px] left-[-113px] -rotate-90 [font-family:'Days_One',Helvetica] font-normal text-[#a265ff] text-base text-center tracking-[0] leading-[15.9px]">COACHING</div>
        <ul className="flex flex-col gap-4">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <Button variant="link" className="p-0 h-auto [font-family:'Poppins',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]">{link}</Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative">
        <div className="w-[22px] h-[181px] absolute left-[-55px] rounded-[10px] border border-solid border-[#a265ff]" />
        <div className="absolute w-[178px] top-[78px] left-[-129px] -rotate-90 [font-family:'Days_One',Helvetica] font-normal text-[#a265ff] text-sm text-center tracking-[0] leading-[13.9px]">RESEAUX SOCIAUX</div>
        <div className="flex flex-col gap-4">
          {socialLinks.map((link, index) => (
            <Button key={index} variant="link" className="p-0 h-auto">
              <img className="w-8 h-8 object-cover" alt={link.alt} src={link.icon} />
            </Button>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
