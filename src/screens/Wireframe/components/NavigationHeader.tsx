import React from "react";
import { Button } from "../../../components/ui/button";
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

export const NavigationHeader = ({ navItems, onNavItemClick }: NavigationHeaderProps): JSX.Element => (
  <header className="sticky top-0 left-0 w-full z-20 bg-[#0f0f0f66] backdrop-blur-md py-[15px]">
    <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
      <img className="h-[64px] w-[90px] object-cover" alt="Logo removebg" src="/wireframe/logo.png" />
      <Card className="w-[780px] h-[56px] bg-[#0f0f0f99] backdrop-blur-md rounded-[35px] border border-solid border-[#ffffff33]">
        <CardContent className="p-0 h-full w-full flex items-center justify-center">
          <NavigationMenu className="w-full">
            <NavigationMenuList className="w-full h-full flex items-center justify-around gap-4">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index} className="relative h-full">
                  <a
                    href={`#${item.targetId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(item.targetId)
                        ?.scrollIntoView({ behavior: "smooth" });
                      onNavItemClick?.(index);
                    }}
                    className="relative flex h-full items-center justify-center px-5 py-2 transition-all duration-200 hover:text-[#a265ff] hover:scale-105"
                  >
                    {item.isActive ? (
                      <div className="absolute inset-0 rounded-[35px] bg-[#a265ff] transition-all duration-200" />
                    ) : null}
                    <span
                      className={`relative z-10 [font-family:'Days_One',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]`}
                    >
                      {item.name}
                    </span>
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </CardContent>
      </Card>
      <Button className="w-[120px] h-[50px] mr-6 bg-[#0f0f0f99] backdrop-blur-md rounded-[35px] border border-solid border-[#ffffff33] flex items-center justify-center gap-2 hover:bg-[#a265ff] transition-colors duration-200">
        <img className="w-[21px] h-[21px] object-cover" alt="Telecharger" src="/telecharger--1--1.png" />
        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-lg tracking-[0] leading-[normal]">CV</span>
      </Button>
    </div>
  </header>
);

export default NavigationHeader;
