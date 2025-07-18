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
  <div className="absolute w-[84px] h-[395px] top-[339px] left-[49px] flex flex-col gap-5 z-10">
    {links.map((link, index) => (
      <Button
        key={index}
        variant="outline"
        className="w-[84px] h-[84px] bg-[#0f0f0f] rounded-[35px] border border-solid border-[#ffffff33] p-0 flex items-center justify-center hover:bg-[#0f0f0f] hover:opacity-80 hover:scale-105 transition"
      >
        <img className="w-[54px] h-[54px] object-cover" alt={link.alt} src={link.icon} />
      </Button>
    ))}
  </div>
);

export default SocialSidebar;
