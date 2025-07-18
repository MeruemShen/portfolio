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
    <section id="contact" className="absolute w-full h-[1009px] top-[3400px] left-0">
        <div className="relative w-full h-full flex flex-col items-center pl-[200px]">
            {/* Background image */}
            <img
                className="h-[576px] w-full absolute top-[26px] left-0 object-cover"
                alt="Background"
                src="/wireframe/fond_lune_2.png"
            />

            {/* Titre + trait */}
            <div className="relative mb-4 h-[60px] mt-0 w-full ">
                {/* Titre aligné à gauche */}
                <h2 className="absolute left-0 top-1/2 -translate-y-[calc(50%+4px)] z-10 text-left [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[50px] leading-[49.6px] tracking-[0] text-white whitespace-nowrap">
                    <div><span id="me-text">ME</span></div>
                    <div><span className="text-[#a265ff]">CONTACTER</span></div>
                </h2>

                {/* Trait (à droite du "ME") */}
                <div className="flex justify-start items-center h-full ml-[80px]">
                    <div className="ml-5 flex-grow h-[40px] flex items-center min-w-[60px]">
                        {/* Diamond */}
                        <div className="absolute left-[400px] bottom-[0px] w-[20px] h-[20px] bg-[#fff] rotate-45 z-0"></div>
                        {/* Line */}
                        <div className="absolute left-[420px] right-[-24px] bottom-[6px] h-[5px] bg-[#fff] z-0"></div>
                    </div>
                </div>

            </div>

            {/* Content section split 50/50 */}
            <div className="flex w-full gap-[100px] mt-[50px] pr-[200px]">
                {/* Bloc gauche (description + cartes) */}
                <div className="flex flex-col flex-1 items-start">
                    <p className="w-full text-start [font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[15px] tracking-[0] leading-[normal] mb-[30px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="flex flex-col gap-[20px] items-start w-full">
                        {methods.map((method, index) => (
                            <Card
                                key={index}
                                className="w-full h-[75px] bg-[#1c0e30] rounded-3xl border border-solid border-[#ffffff33]"
                            >
                                <CardContent className="p-0 h-full flex items-center">
                                    <div className="w-[80px] flex justify-center">
                                        <img className="w-10 h-[30px] object-cover" alt={method.alt} src={method.icon} />
                                    </div>
                                    {method.isLink ? (
                                        <a
                                            className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[18px] tracking-[0] leading-[normal] underline whitespace-nowrap"
                                            href={`mailto:${method.value}`}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            {method.value}
                                        </a>
                                    ) : (
                                        <span className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[18px] tracking-[0] leading-[normal] whitespace-nowrap">
                                          {method.value}
                                        </span>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Bloc droit (image) */}
                <div className="flex-1 text-card-foreground h-[370px] shadow aspect-square bg-[#0f0f0f26] rounded-[30px] border border-solid border-[#ffffff33] overflow-hidden">
                    <img className="w-full h-full object-cover" alt="About" src="/wireframe/about.png" />
                </div>
            </div>
        </div>
    </section>
);

export default ContactSection;
