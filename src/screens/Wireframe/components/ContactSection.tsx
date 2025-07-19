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
    <section id="contact" className="absolute w-full h-[646px] top-[2550px] left-0">
        <div className="relative w-full h-full flex flex-col items-center pl-[160px]">
            {/* Background image */}
            <img
                className="h-[369px] w-full absolute top-[26px] left-0 object-cover"
                alt="Background"
                src="/wireframe/fond_lune_2.png"
            />

            {/* Titre + trait */}
            <div className="relative mb-4 h-[38px] mt-0 w-full ">
                {/* Titre aligné à gauche */}
                <h2 className="absolute left-0 top-1/2 -translate-y-[calc(50%+2.6px)] z-10 text-left [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[32px] leading-[31.7px] tracking-[0] text-white whitespace-nowrap">
                    <div><span id="me-text">ME</span></div>
                    <div><span className="text-[#a265ff]">CONTACTER</span></div>
                </h2>

                {/* Trait (à droite du "ME") */}
                <div className="flex justify-start items-center h-full ml-[51px]">
                    <div className="ml-[13px] flex-grow h-[26px] flex items-center min-w-[38px]">
                        {/* Diamond */}
                        <div className="absolute left-[256px] bottom-[0px] w-[13px] h-[13px] bg-[#fff] rotate-45 z-0"></div>
                        {/* Line */}
                        <div className="absolute left-[269px] right-[-15px] bottom-[4px] h-[3px] bg-[#fff] z-0"></div>
                    </div>
                </div>

            </div>

            {/* Content section split 50/50 */}
            <div className="flex w-full gap-[64px] mt-[32px] pr-[128px]">
                {/* Bloc gauche (description + cartes) */}
                <div className="flex flex-col flex-1 items-start">
                    <p className="w-full text-start [font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[10px] tracking-[0] leading-[normal] mb-[24px]">
                        Vous souhaitez donner vie à vos idées ou obtenir plus d’informations ? N’hésitez pas à me contacter pour échanger sur votre projet.
                    </p>

                    <div className="flex flex-col gap-[13px] items-start w-full">
                        {methods.map((method, index) => (
                            <Card
                                key={index}
                                className="w-full h-[48px] bg-[#1c0e30] rounded-[15px] border border-solid border-[#ffffff33]"
                            >
                                <CardContent className="p-0 h-full flex items-center">
                                    <div className="w-[51px] flex justify-center">
                                        <img className="w-[26px] h-[19px] object-cover" alt={method.alt} src={method.icon} />
                                    </div>
                                    {method.isLink ? (
                                        <a
                                            className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[11px] tracking-[0] leading-[normal] underline whitespace-nowrap"
                                            href={`mailto:${method.value}`}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            {method.value}
                                        </a>
                                    ) : (
                                        <span className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[11px] tracking-[0] leading-[normal] whitespace-nowrap">
                                          {method.value}
                                        </span>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Bloc droit (image) */}
                <div className="flex-1 text-card-foreground h-[237px] shadow aspect-square bg-[#0f0f0f26] rounded-[19px] border border-solid border-[#ffffff33] overflow-hidden">
                    <img className="w-full h-full object-cover" alt="About" src="/wireframe/about.png" />
                </div>
            </div>
        </div>
    </section>
);

export default ContactSection;
