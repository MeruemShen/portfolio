import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "../../../components/ui/card";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  descriptionMobile?: string;
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
      className="fade-section w-full mobile:h-auto scroll-mt-[120px]"
    >
      <div className="w-full relative">
        {/* Background image as CSS background */}
        <div className="w-full bg-[url('/wireframe/webp/fond_lune.webp')] bg-cover bg-center h-[786px] tablet:h-[700px] mobile:h-[600px] md-mobile:h-[670px] sm-mobile:h-[730px] absolute top-0 left-0"></div>
        
        {/* Content container */}
        <div className="relative z-10">
          <div className="mb-4 h-[48px] transform -translate-y-5 mobile:px-[26px] mobile:mb-[20px]">
            <h2 className="text-center [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[32px] tracking-[0] leading-[39.6px] whitespace-nowrap text-white z-10 mobile:text-left mobile:text-[clamp(24px,8vw,32px)] mobile:whitespace-normal">
              <span>ÉTAPES DE </span>
              <span className="text-[#a265ff]">PROCESSUS</span>
            </h2>
            <div className="flex justify-center items-center h-full mobile:hidden">
              <div className="ml-4 flex-grow h-[32px] flex items-center min-w-[48px]">
                <div className="absolute left-1/2 translate-x-[240px] top-[20px] -translate-y-1/2 w-[16px] h-[16px] bg-[#fff] rotate-45 z-0"></div>
                <div className="absolute left-1/2 translate-x-[250px] right-[-19px] top-[20px] -translate-y-1/2 h-[4px] bg-[#fff] z-0"></div>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col mb-[100px] tablet:space-y-[30px] tabletLandscape:space-y-[-25px] -space-y-6 items-center mt-[55px] tablet:mt-[25px] mobile:mt-[0px]">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => (stepRefs.current[index] = el)}
                data-index={index}
                className="relative z-10 flex items-start gap-6 px-6 justify-center w-full mobile:px-4"
              >
                <div className="flex flex-col items-center tablet:hidden mt-9 mobile:mt-2">
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
                    <div className="pointer-events-none mt-3 mobile:mt-1 flex flex-col items-center relative">
                      <div className="w-3 h-[104px] mobile:h-[60px] border-2 border-[#a265ff] rounded opacity-40" />
                      <div
                        className="absolute top-0 w-3 border-2 border-[#a265ff] rounded shadow-[0_0_12px_#a265ff] overflow-hidden transition-all duration-500"
                        style={{ height: `${segmentProgress(index)}%` }}
                      >
                        <div className="bg-[#a265ff] w-full h-full" />
                      </div>
                    </div>
                  )}
                </div>
                <Card className="w-full max-w-[696px] md-desktop:max-w-[800px] bg-[#221239] rounded-[32px] backdrop-blur-md shadow-[0px_0px_24px_#00000040]">
                  <CardContent className="flex flex-col justify-center pl-[63px] pr-6 py-[30px] relative">
                    <div className="absolute left-[28px] top-[28px] bottom-[28px] w-5 rounded-[8px] border border-solid border-[#a265ff]" />
                    <div className="absolute left-[4px] top-1/2 -translate-y-1/2 w-[69px] -rotate-90 [font-family:'Days_One',Helvetica] font-normal text-[#a265ff] text-[12px] text-center tracking-[0] leading-[12.7px]">
                      {step.step}
                    </div>
                    <h3 className="[font-family:'Days_One',Helvetica] font-normal text-white text-[19px] tracking-[0] leading-[19px] mb-3">
                      {step.title}
                    </h3>
                    <p className="w-full md:max-w-[580px] md-desktop:max-w-[650px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[16px] tracking-[0] leading-[normal] mobile:hidden">
                      {step.description}
                    </p>
                    <p className="w-full md:max-w-[580px] md-desktop:max-w-[650px] hidden mobile:block [font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[16px] tracking-[0] leading-[normal]">
                      {step.descriptionMobile ?? step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;