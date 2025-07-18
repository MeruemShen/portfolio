import React from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

interface TechItem {
  icon: string;
  alt: string;
}

interface HeroSectionProps {
  techStack: TechItem[];
}

export const HeroSection = ({ techStack }: HeroSectionProps): JSX.Element => (
    <section className="absolute w-full top-[218px] left-0 px-8">
      <div className="relative mb-4 h-[60px] mt-[100px]">
        <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+4px)] [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[50px] text-center tracking-[0] leading-[49.6px] whitespace-nowrap text-white z-10">
          <div><span id="me-text">CONSTRUISONS ENSEMBLE</span></div>
          <div>VOTRE <span className="text-[#a265ff]">EMPREINTE NUMÉRIQUE</span></div>
        </h2>
        <div className="flex justify-center items-center h-full">
          <div className="ml-5 flex-grow h-[40px] flex items-center min-w-[60px]">
            {/* Diamond */}
            <div className="absolute left-1/2 translate-x-[440px] top-[calc(50%-30px)] -translate-y-1/2 w-[20px] h-[20px] bg-[#fff] rotate-45 z-0"></div>
            {/* Line */}
            <div className="absolute left-1/2 translate-x-[460px] right-[-24px] top-[calc(50%-30px)] -translate-y-1/2 h-[5px] bg-[#fff] z-0"></div>
          </div>
        </div>
      </div>
      <div className="flex w-full mt-[100px] gap-8 justify-center flex-col md:flex-row">
      <Card className="w-full md:w-[504px] md:h-[536px] bg-[#0f0f0f26] rounded-[40px] border border-solid border-[#ffffff33] overflow-hidden">
        <CardContent className="p-0 h-full">
          <img className="w-full h-full object-cover" alt="About" src="/wireframe/about.png" />
        </CardContent>
      </Card>
      <div className="flex flex-col gap-8 w-full md:w-auto">
        <Card className="w-full md:w-[655px] md:h-[381px] bg-[#a265ff0d] rounded-[40px] border border-solid border-[#ffffff33]">
          <CardContent className="p-8">
            <h2 className="[font-family:'Days_One',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[23.8px] mb-8">MON PARCOURS</h2>
            <p className="[font-family:'Roboto',Helvetica] font-normal text-xl tracking-[0] leading-[19.8px]">
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
        <Card className="w-full md:w-[655px] md:h-[124px] bg-[#a265ff0d] rounded-[40px] border border-solid border-[#ffffff33]">
          <CardContent className="p-0 h-full flex items-center justify-between px-8">
            <Button variant="outline" className="w-9 h-9 bg-white rounded-[18px] p-0">
              <img className="w-[38px] h-[38px] object-cover" alt="Previous" src="/wireframe/left_arrow.png" />
            </Button>
            <div className="flex items-center justify-center gap-8">
              {techStack.map((tech, index) => (
                <img key={index} className="w-[46px] h-[46px] object-cover" alt={tech.alt} src={tech.icon} />
              ))}
            </div>
            <Button variant="outline" className="w-9 h-9 bg-white rounded-[18px] p-0 rotate-180">
              <img className="w-[38px] h-[38px] object-cover rotate-180" alt="Next" src="/wireframe/right_arrow.png" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default HeroSection;
