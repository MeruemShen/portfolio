import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Download } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../../components/ui/navigation-menu";

interface NavItem {
  name: string;
  isActive: boolean;
  targetId: string;
}

interface NavigationHeaderProps {
  navItems: NavItem[];
  onNavItemClick?: (index: number) => void;
}

export const NavigationHeader = ({ navItems, onNavItemClick }: NavigationHeaderProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-white/4 backdrop-blur-md py-[5px]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-4">
        <img className="h-[64px] w-[90px] object-cover" alt="Logo removebg" src="/wireframe/logo.png" />

        <Card className="w-[780px] h-[56px] bg-[#0a0612cc] backdrop-blur-sm rounded-[35px] tabletLandscape:hidden">
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

        <Button className="w-[100px] h-[42px] mr-6 bg-[#a265ff] rounded-[35px] flex items-center justify-center gap-2 hover:bg-[#924cff] transition-colors duration-200 tabletLandscape:hidden">
          <Download className="w-5 h-5 text-white" />
          <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">CV</span>
        </Button>

        <button
          onClick={() => setOpen(!open)}
          className="hidden tabletLandscape:flex flex-col items-end justify-center w-8 h-8 relative"
        >
          <span className="block w-full h-0.5 bg-white mb-1" />
          <span className="block w-full h-0.5 bg-white mb-1" />
          <span className="block w-1/2 h-0.5 bg-white self-end" />
        </button>
      </div>

      {open && (
        <div className="tabletLandscape:flex hidden absolute right-4 top-[70px] bg-[#0a0612cc] backdrop-blur-sm rounded-[12px] p-4 flex-col gap-3">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.targetId}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(item.targetId)?.scrollIntoView({ behavior: "smooth" });
                onNavItemClick?.(index);
                setOpen(false);
              }}
              className="text-white [font-family:'Days_One',Helvetica] hover:text-[#a265ff]"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default NavigationHeader;
