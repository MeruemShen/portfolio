import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  step: string;
}

interface ProcessSectionProps {
  steps: ProcessStep[];
}

export const ProcessSection = ({ steps }: ProcessSectionProps): JSX.Element => {

  return (
      <section id="processus" className="fade-section absolute w-full h-[807px] top-[960px] left-0">
        <div className="relative w-full h-full">
          <img
              className="h-[786px] w-full absolute top-[26px] left-0 object-cover"
              alt="Background"
              src="/wireframe/fond_lune.png"
          />
          <div className="relative mb-4 h-[48px] mt-[-2px]">
            {/* Texte centré en absolu */}
            <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+3.2px)] [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[40px] text-center tracking-[0] leading-[39.6px] whitespace-nowrap text-white z-10">
              <span>ÉTAPES DE </span>
              <span className="text-[#a265ff]">PROCESSUS</span>
            </h2>
            {/* Trait */}
            <div className="flex justify-center items-center h-full">
              <div className="ml-4 flex-grow h-[32px] flex items-center min-w-[48px]">
                {/* Diamond */}
                <div className="absolute left-1/2 translate-x-[380px] top-[calc(50%-1.6px)] -translate-y-1/2 w-[16px] h-[16px] bg-[#fff] rotate-45 z-0"></div>
                {/* Line */}
                <div className="absolute left-1/2 translate-x-[390px] right-[-19px] top-[calc(50%-1.6px)] -translate-y-1/2 h-[4px] bg-[#fff] z-0"></div>
              </div>
            </div>
          </div>


          <div className="absolute top-[114px] left-0 w-full flex flex-col gap-12">
            {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-6 px-6 justify-center">
                  <div className="[text-shadow:0px_0px_24px_#a265ff] [font-family:'Days_One',Helvetica] font-normal text-white text-[72px] tracking-[0] leading-[normal] w-[117px] text-center">
                    {step.number}
                  </div>
                  <Card className="w-[696px] h-[163px] bg-[#221239] rounded-[32px] backdrop-blur-md shadow-[0px_0px_24px_#00000040]">
                    <CardContent className="p-0 h-full relative">
                      <div className="absolute w-5 h-[109px] top-[28px] left-[28px] rounded-[8px] border border-solid border-[#a265ff]" />
                      <div className="absolute w-[69px] top-[76px] left-[4px] -rotate-90 [font-family:'Days_One',Helvetica] font-normal text-[#a265ff] text-[12px] text-center tracking-[0] leading-[12.7px]">
                        {step.step}
                      </div>
                      <div className="absolute top-[30px] left-[63px]">
                        <h3 className="[font-family:'Days_One',Helvetica] font-normal text-white text-[19px] tracking-[0] leading-[19px] mb-3">
                          {step.title}
                        </h3>
                        <p className="w-[580px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[16px] tracking-[0] leading-[normal]">
                          {step.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default ProcessSection;