import React from "react";
import { Button } from "../../../components/ui/button";

interface SocialLink {
  icon: string;
  alt: string;
}

interface SocialSidebarProps {
  links: SocialLink[];
}

export const SocialSidebar = ({ links }: SocialSidebarProps): JSX.Element => (
  <div className="fixed top-1/2 -translate-y-1/2 left-4 flex flex-col items-center gap-4 z-30 tabletLandscape:hidden">
    {links.map((link, index) => (
      <Button
        key={index}
        variant="ghost"
        className="w-[50px] h-[50px] bg-[#0f0f0f99] rounded-[20px] backdrop-blur-md p-0 flex items-center justify-center hover:bg-transparent hover:scale-110 transition"
      >
        <img className="w-[24px] h-[24px] object-cover mb-1" alt={link.alt} src={link.icon} />
      </Button>
    ))}
  </div>
);

export default SocialSidebar;
