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

export const ProcessSection = ({ steps }: ProcessSectionProps): JSX.Element => (
  <section className="absolute w-full h-[1009px] top-[1079px] left-0">
    <div className="relative w-full h-full">
      <img
        className="h-[983px] w-full absolute top-[26px] left-0 object-cover"
        alt="Background"
        src="/wireframe/fond_lune.png"
      />
      <div className="absolute top-0 left-0 w-full flex flex-col items-center">
        <h2 className="w-full max-w-[971px] [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[50px] text-center tracking-[0] leading-[49.6px] whitespace-nowrap">
          <span className="text-white">ÉTAPES DE </span>
          <span className="text-[#a265ff]">PROCESSUS</span>
        </h2>
        <img className="w-full max-w-[333px] h-[29px]" alt="Arrow" src="/wireframe/svg/arrow.svg" />
      </div>
      <div className="absolute top-[142px] left-0 w-full flex flex-col gap-16">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-8 px-[218px] justify-center">
            <div className="[text-shadow:0px_0px_24px_#a265ff] [font-family:'Days_One',Helvetica] font-normal text-white text-[90px] tracking-[0] leading-[normal] w-[146px] text-center">
              {step.number}
            </div>
            <Card className="w-[870px] h-[204px] bg-[#221239] rounded-[40px] border border-solid border-[#ffffff33] shadow-[0px_0px_24px_#00000040]">
              <CardContent className="p-0 h-full relative">
                <div className="absolute w-6 h-[136px] top-[35px] left-[35px] rounded-[10px] border border-solid border-[#a265ff]" />
                <div className="absolute w-[86px] top-[95px] left-[5px] -rotate-90 [font-family:'Days_One',Helvetica] font-normal text-[#a265ff] text-base text-center tracking-[0] leading-[15.9px]">
                  {step.step}
                </div>
                <div className="absolute top-[37px] left-[79px]">
                  <h3 className="[font-family:'Days_One',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[23.8px] mb-4">
                    {step.title}
                  </h3>
                  <p className="w-[699px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[15px] tracking-[0] leading-[normal]">
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

export default ProcessSection;
