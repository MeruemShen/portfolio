import React, { useEffect, useRef, useState } from "react";
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
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setCurrentStepIndex(index);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );
    stepRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const segmentProgress = (index: number) =>
    currentStepIndex > index ? 100 : 0;

  return (
    <section
      id="processus"
      className="fade-section absolute w-full h-[807px] top-[886px] left-0 mobile:relative mobile:top-auto mobile:h-auto mobile:mt-[80px]"
    >
      <div className="relative w-full h-full">
          <img
              className="h-[786px] w-full absolute top-[26px] left-0 object-cover"
              alt="Background"
              src="/wireframe/fond_lune.png"
          />
          <div className="relative mb-4 h-[48px] mt-[-2px] mobile:px-[26px]">
            {/* Texte centré en absolu */}
            <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+3.2px)] [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[40px] text-center tracking-[0] leading-[39.6px] whitespace-nowrap text-white z-10 mobile:relative mobile:left-auto mobile:top-auto mobile:translate-x-0 mobile:translate-y-0 mobile:text-left mobile:text-[clamp(24px,8vw,32px)] mobile:whitespace-normal">
              <span>ÉTAPES DE </span>
              <span className="text-[#a265ff]">PROCESSUS</span>
            </h2>
            {/* Trait */}
              <div className="flex justify-center items-center h-full mobile:hidden">
                <div className="ml-4 flex-grow h-[32px] flex items-center min-w-[48px]">
                {/* Diamond */}
                <div className="absolute left-1/2 translate-x-[380px] top-[calc(50%-1.6px)] -translate-y-1/2 w-[16px] h-[16px] bg-[#fff] rotate-45 z-0"></div>
                {/* Line */}
                <div className="absolute left-1/2 translate-x-[390px] right-[-19px] top-[calc(50%-1.6px)] -translate-y-1/2 h-[4px] bg-[#fff] z-0"></div>
              </div>
            </div>
          </div>


          <div className="absolute top-[55px] left-0 w-full flex flex-col gap-12 items-center relative">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => (stepRefs.current[index] = el)}
                data-index={index}
                className="relative z-10 flex items-center gap-6 px-6 justify-center w-full mobile:px-4"
              >
                <div className="relative flex flex-col items-center tablet:hidden">
                  <div
                    className={`flex items-center justify-center w-[117px] h-[72px] rounded-full [text-shadow:0_0_24px_#a265ff] [font-family:'Days_One',Helvetica] text-[72px] tracking-[0] leading-none transition-all duration-300 ${
                      index === currentStepIndex
                        ? 'text-white'
                        : 'text-[#221239]'
                    }`}
                    style={
                      index === currentStepIndex
                        ? undefined
                        : { WebkitTextStroke: '2px #a265ff' }
                    }
                  >
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-3 flex flex-col items-center">
                      <div className="w-3 h-[104px] border-2 border-[#a265ff] rounded opacity-40" />
                      <div
                        className="absolute top-0 w-3 border-2 border-[#a265ff] rounded shadow-[0_0_12px_#a265ff] overflow-hidden transition-all duration-500"
                        style={{ height: `${segmentProgress(index)}%` }}
                      >
                        <div className="bg-[#a265ff] w-full h-full" />
                      </div>
                    </div>
                  )}
                </div>
                <Card className="w-full max-w-[696px] bg-[#221239] rounded-[32px] backdrop-blur-md shadow-[0px_0px_24px_#00000040]">
                  <CardContent className="relative flex flex-col justify-center pl-[63px] pr-6 py-[30px]">
                    <div className="absolute left-[28px] top-[28px] bottom-[28px] w-5 rounded-[8px] border border-solid border-[#a265ff]" />
                    <div className="absolute left-[4px] top-1/2 -translate-y-1/2 w-[69px] -rotate-90 [font-family:'Days_One',Helvetica] font-normal text-[#a265ff] text-[12px] text-center tracking-[0] leading-[12.7px]">
                      {step.step}
                    </div>
                    <h3 className="[font-family:'Days_One',Helvetica] font-normal text-white text-[19px] tracking-[0] leading-[19px] mb-3">
                      {step.title}
                    </h3>
                    <p className="w-full md:max-w-[580px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[16px] tracking-[0] leading-[normal]">
                      {step.description}
                    </p>
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
