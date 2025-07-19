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
        <div className="relative w-full h-full">
            {/* Background image */}
            <img
                className="h-[369px] w-full absolute top-[26px] left-0 object-cover"
                alt="Background"
                src="/wireframe/fond_lune_2.png"
            />
            <div className="relative w-full h-full flex flex-col items-center pl-[128px] max-w-[960px] mx-auto">

                {/* Titre + trait */}
                <div className="relative mb-4 h-[30px] mt-0 w-full ">
                    {/* Titre aligné à gauche */}
                    <h2 className="absolute left-0 top-1/2 -translate-y-[calc(50%+2.1px)] z-10 text-left [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[26px] leading-[25.4px] tracking-[0] text-white whitespace-nowrap">
                        <div><span id="me-text">ME</span></div>
                        <div><span className="text-[#a265ff]">CONTACTER</span></div>
                    </h2>

                    {/* Trait (à droite du "ME") */}
                    <div className="flex justify-start items-center h-full ml-[41px]">
                        <div className="ml-[10px] flex-grow h-[21px] flex items-center min-w-[30px]">
                            {/* Diamond */}
                            <div className="absolute left-[205px] bottom-[0px] w-[10px] h-[10px] bg-[#fff] rotate-45 z-0"></div>
                            {/* Line */}
                            <div className="absolute left-[215px] right-[-12px] bottom-[3px] h-[2px] bg-[#fff] z-0"></div>
                        </div>
                    </div>

                </div>

                {/* Content section split 50/50 */}
                <div className="flex w-full gap-[51px] mt-[26px] pr-[102px]">
                    {/* Bloc gauche (description + cartes) */}
                    <div className="flex flex-col flex-1 items-start">
                        <p className="w-full text-start [font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[8px] tracking-[0] leading-[normal] mb-[19px]">
                            Vous souhaitez donner vie à vos idées ou obtenir plus d’informations ? N’hésitez pas à me contacter pour échanger sur votre projet.
                        </p>

                        <div className="flex flex-col gap-[10px] items-start w-full">
                            {methods.map((method, index) => (
                                <Card
                                    key={index}
                                    className="w-full h-[38px] bg-[#1c0e30] rounded-[12px] border border-solid border-[#ffffff33]"
                                >
                                    <CardContent className="p-0 h-full flex items-center">
                                        <div className="w-[41px] flex justify-center">
                                            <img className="w-[21px] h-[15px] object-cover" alt={method.alt} src={method.icon} />
                                        </div>
                                        {method.isLink ? (
                                            <a
                                                className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[9px] tracking-[0] leading-[normal] underline whitespace-nowrap"
                                                href={`mailto:${method.value}`}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                {method.value}
                                            </a>
                                        ) : (
                                            <span className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[9px] tracking-[0] leading-[normal] whitespace-nowrap">
                                              {method.value}
                                            </span>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Bloc droit (image) */}
                    <div className="flex-1 text-card-foreground h-[190px] shadow aspect-square bg-[#0f0f0f26] rounded-[15px] border border-solid border-[#ffffff33] overflow-hidden">
                        <img className="w-full h-full object-cover" alt="About" src="/wireframe/about.png" />
                    </div>
                </div>
            </div>
        </div>

    </section>
);

export default ContactSection;
