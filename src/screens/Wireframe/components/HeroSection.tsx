import React, { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

interface TechItem {
  icon: string;
  alt: string;
}

interface HeroSectionProps {
  techStack: TechItem[];
}

export const HeroSection = ({ techStack }: HeroSectionProps): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + techStack.length) % techStack.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % techStack.length);
  };

  const extendedStack = [...techStack, ...techStack];
  const visibleTech =
    techStack.length <= visibleCount
      ? techStack
      : extendedStack.slice(currentIndex, currentIndex + visibleCount);

  return (
    <section id="apropos" className="fade-section absolute w-full top-[174px] left-0 px-8">
      <div className="relative mb-4 h-[48px] mt-[80px]">
        <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+3.2px)] [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[40px] text-center tracking-[0] leading-[39.6px] whitespace-nowrap text-white z-10">
          <div><span id="me-text">CONSTRUISONS ENSEMBLE</span></div>
          <div>VOTRE <span className="text-[#a265ff]">EMPREINTE NUMÉRIQUE</span></div>
        </h2>
        <div className="flex justify-center items-center h-full">
        <div className="ml-4 flex-grow h-[32px] flex items-center min-w-[48px]">
            {/* Diamond */}
            <div className="absolute left-1/2 translate-x-[352px] top-[calc(50%-24px)] -translate-y-1/2 w-[16px] h-[16px] bg-[#fff] rotate-45 z-0"></div>
            {/* Line */}
            <div className="absolute left-1/2 translate-x-[368px] right-[-19px] top-[calc(50%-24px)] -translate-y-1/2 h-[4px] bg-[#fff] z-0"></div>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-[80px] gap-6 justify-center flex-col md:flex-row">
      <Card className="w-full md:w-[403px] md:h-[429px] bg-[#0f0f0f26] rounded-[32px] backdrop-blur-md overflow-hidden">
        <CardContent className="p-0 h-full">
          <img className="w-full h-full object-cover" alt="About" src="/wireframe/about.png" />
        </CardContent>
      </Card>
      <div className="flex flex-col gap-6 w-full md:w-auto">
        <Card className="w-full md:w-[524px] md:h-[305px] bg-[#a265ff0d] rounded-[32px] backdrop-blur-md">
          <CardContent className="p-6">
            <h2 className="[font-family:'Days_One',Helvetica] font-normal text-white text-[19px] text-center tracking-[0] leading-[19px] mb-6">MON PARCOURS</h2>
            <p className="[font-family:'Roboto',Helvetica] font-normal text-base tracking-[0] leading-[15.8px]">
              <span className="text-white">Étudiant en </span>
              <span className="text-[#a265ff]">Master Data &amp; Intelligence Artificielle</span>
              <span className="text-white"> et diplômé d&apos;un </span>
              <span className="text-[#a265ff]">BUT MMI</span>
              <span className="text-white">, j&apos;ai développé des compétences solides en </span>
              <span className="text-[#a265ff]">développement web</span>
              <span className="text-white">, </span>
              <span className="text-[#a265ff]">design d&apos;interfaces</span>
              <span className="text-white">, et </span>
              <span className="text-[#a265ff]">création de sites internet</span>
              <span className="text-white">.<br /><br />Mon approche consiste à proposer des solutions </span>
              <span className="text-[#a265ff]">sur-mesure</span>
              <span className="text-white"> : </span>
              <span className="text-[#a265ff]">vitrines en ligne</span>
              <span className="text-white">, </span>
              <span className="text-[#a265ff]">plateformes interactives</span>
              <span className="text-white"> ou </span>
              <span className="text-[#a265ff]">intégrations d&apos;IA</span>
              <span className="text-white">. Je suis motivé par </span>
              <span className="text-[#a265ff]">l&apos;innovation</span>
              <span className="text-white"> et l&apos;envie d&apos;aider mes clients à réussir dans un monde numérique en constante évolution.</span>
            </p>
          </CardContent>
        </Card>

        <Card className="w-full md:w-[524px] md:h-[100px] bg-[#a265ff0d] rounded-[32px] backdrop-blur-md">
          <CardContent className="p-0 h-full flex items-center justify-center gap-10 px-8">
            <Button onClick={handlePrev} variant="link" className="w-[30px] h-[30px] bg-none rounded-[14px] p-0">
              <img className="w-[30px] h-[30px] object-cover" alt="Previous" src="/wireframe/left_arrow.png" />
            </Button>
            <div className="flex items-center justify-center gap-8">
              {visibleTech.map((tech, index) => (
                <img
                  key={index}
                  className="w-[37px] h-[37px] object-cover"
                  alt={tech.alt}
                  src={tech.icon}
                />
              ))}
            </div>
            <Button onClick={handleNext} variant="link" className="w-[30xp] h-[30xp] rounded-[14px] p-0 rotate-180">
              <img className="w-[30px] h-[30px] object-cover rotate-180" alt="Next" src="/wireframe/right_arrow.png" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;
