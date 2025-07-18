import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

interface ContactMethod {
  icon: string;
  alt: string;
  value: string;
  isLink: boolean;
}

interface ContactSectionProps {
  methods: ContactMethod[];
}

export const ContactSection = ({ methods }: ContactSectionProps): JSX.Element => (
  <section className="absolute w-full top-[3242px] left-0">
    <div className="relative">
      <img className="h-[576px] w-full absolute top-[93px] left-0 object-cover" alt="Background" src="/wireframe/fond_lune_2.png" />
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-start gap-12 px-8">
        <div className="w-full md:w-[527px] flex flex-col items-start">
          <div className="flex flex-col items-start">
            <h2 className="w-full max-w-[527px] text-start [font-family:'Days_One',Helvetica] font-normal text-6xl tracking-[0] leading-[59.5px] mb-[120px]">
              <span className="text-white">ME<br /></span>
              <span className="text-[#a265ff]">CONTACTER</span>
            </h2>
          </div>
          <p className="w-full md:w-[475px] text-start [font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[15px] tracking-[0] leading-[normal] mb-[60px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="flex flex-col gap-4">
            {methods.map((method, index) => (
              <Card key={index} className="w-full md:w-[463px] h-[84px] bg-[#1c0e30] rounded-3xl border border-solid border-[#ffffff33]">
                <CardContent className="p-0 h-full flex items-center">
                  <div className="w-[80px] flex justify-center">
                    <img className="w-10 h-[30px] object-cover" alt={method.alt} src={method.icon} />
                  </div>
                  {method.isLink ? (
                    <a className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[22px] tracking-[0] leading-[normal] underline whitespace-nowrap" href={`mailto:${method.value}`} rel="noopener noreferrer" target="_blank">
                      {method.value}
                    </a>
                  ) : (
                    <span className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">{method.value}</span>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="relative mt-8 md:mt-0">
          <div className="absolute w-full max-w-[764px] h-[29px] top-[79px] left-0">
            {/* Diamond */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[20px] h-[20px] bg-white rotate-45 z-10"></div>
            {/* Line */}
            <div className="absolute left-0 right-[14px] top-1/2 -translate-y-1/2 h-[5px] bg-white"></div>
          </div>
          <img className="w-full md:w-[513px] h-[437px] mt-[143px] object-cover" alt="About" src="/wireframe/about.png" />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
