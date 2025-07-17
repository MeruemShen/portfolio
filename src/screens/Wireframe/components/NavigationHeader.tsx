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
}

interface NavigationHeaderProps {
  navItems: NavItem[];
}

export const NavigationHeader = ({ navItems }: NavigationHeaderProps): JSX.Element => (
  <header className="absolute w-full top-5 left-0 flex justify-center items-center px-8 z-10">
    <div className="flex items-center justify-between w-full max-w-[1440px]">
      <img className="h-[138px] w-[158px] object-cover" alt="Logo removebg" src="/wireframe/logo.png" />
      <Card className="w-[861px] h-[67px] bg-[#0f0f0f] rounded-[35px] border border-solid border-[#ffffff33]">
        <CardContent className="p-0 h-full flex items-center justify-center">
          <NavigationMenu className="h-full">
            <NavigationMenuList className="h-full flex items-center justify-around px-10 gap-8">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index} className="relative">
                  {item.isActive ? (
                    <div className="absolute w-[189px] h-[46px] top-[-10px] left-[5px] bg-[#a265ff] rounded-[35px]" />
                  ) : null}
                  <span className={`relative z-10 [font-family:'Days_One',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] ${item.isActive ? "px-16" : ""}`}>{item.name}</span>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </CardContent>
      </Card>
      <Button className="w-[141px] h-[67px] bg-[#0f0f0f] rounded-[35px] border border-solid border-[#ffffff33] flex items-center justify-center gap-2">
        <img className="w-[21px] h-[21px] object-cover" alt="Telecharger" src="/telecharger--1--1.png" />
        <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">CV</span>
      </Button>
    </div>
  </header>
);

export default NavigationHeader;
