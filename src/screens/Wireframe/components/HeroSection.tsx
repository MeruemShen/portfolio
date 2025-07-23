import React, { useState, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TechItem {
  icon: string;
  alt: string;
}

interface HeroSectionProps {
  techStack: TechItem[];
}

export const HeroSection = ({ techStack }: HeroSectionProps): JSX.Element => {
  const visibleCount = 6;
  const itemWidth = 61; // icon width + gap for slide calculations
  const [index, setIndex] = useState(visibleCount);
  const [transition, setTransition] = useState(true);
  const [animating, setAnimating] = useState(false);

  const handlePrev = () => {
    if (animating) return;
    setAnimating(true);
    setTransition(true);
    setIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (animating) return;
    setAnimating(true);
    setTransition(true);
    setIndex((prev) => prev + 1);
  };

  const extendedStack = [
    ...techStack.slice(-visibleCount),
    ...techStack,
    ...techStack.slice(0, visibleCount),
  ];

  useEffect(() => {
    if (animating) {
      const t = setTimeout(() => setAnimating(false), 400);
      return () => clearTimeout(t);
    }
  }, [animating]);

  useEffect(() => {
    if (index >= techStack.length + visibleCount) {
      const t = setTimeout(() => {
        setTransition(false);
        setIndex(visibleCount);
      }, 500);
      return () => clearTimeout(t);
    }
    if (index < visibleCount) {
      const t = setTimeout(() => {
        setTransition(false);
        setIndex(techStack.length + visibleCount - 1);
      }, 500);
      return () => clearTimeout(t);
    }
  }, [index, techStack.length]);

  useEffect(() => {
    if (!transition) {
      const id = requestAnimationFrame(() => setTransition(true));
      return () => cancelAnimationFrame(id);
    }
  }, [transition]);

  return (
    <section
      id="apropos"
      className="fade-section absolute w-full top-[100px] left-0 px-8 mobile:relative mobile:top-auto mobile:mt-0"
    >
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
      <div className="flex w-full mt-[80px] gap-6 justify-center flex-row mobile:flex-col">
      <Card className="w-full md:w-[403px] md:h-[429px] bg-[#0f0f0f26] rounded-[32px] backdrop-blur-md overflow-hidden tablet:w-2/5 mobile:w-full mobile:h-[250px]">
        <CardContent className="p-0 h-full">
          <img className="w-full h-full object-cover" alt="About" src="/wireframe/about.png" />
        </CardContent>
      </Card>
      <div className="flex flex-col gap-6 w-full md:w-auto tablet:w-3/5 mobile:w-full">
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
          <CardContent className="p-0 h-full flex items-center justify-center gap-6 px-4">
            <Button
              onClick={handlePrev}
              disabled={animating}
              variant="link"
              className="w-[40px] h-[40px] rounded-[14px] p-0 text-[#a265ff] hover:text-white drop-shadow-[0_0_6px_#a265ff] hover:drop-shadow-[0_0_12px_#a265ff] transition-transform hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8" />
            </Button>
            <div className="relative overflow-hidden" style={{ width: visibleCount * itemWidth }}>
              <div
                className={`flex w-max gap-6 ${transition ? "transition-transform duration-500 ease-out" : ""}`}
                style={{ transform: `translateX(-${index * itemWidth}px)` }}
              >
                {extendedStack.map((tech, idx) => (
                  <img
                    key={`${tech.alt}-${idx}`}
                    className="w-[37px] h-[37px] object-contain flex-none"
                    alt={tech.alt}
                    src={tech.icon}
                  />
                ))}
              </div>
            </div>
            <Button
              onClick={handleNext}
              disabled={animating}
              variant="link"
              className="w-[40px] h-[40px] rounded-[14px] p-0 text-[#a265ff] hover:text-white drop-shadow-[0_0_6px_#a265ff] hover:drop-shadow-[0_0_12px_#a265ff] transition-transform hover:scale-110"
            >
              <ChevronRight className="w-8 h-8" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;
