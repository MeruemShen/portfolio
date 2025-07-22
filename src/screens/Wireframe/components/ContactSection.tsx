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
    <section id="contact" className="fade-section absolute w-full h-auto top-[2426px] left-0">
        <div className="relative w-full h-full">
            {/* Background image */}
            <img
                className="h-[369px] w-full absolute top-[26px] left-0 object-cover"
                alt="Background"
                src="/wireframe/fond_lune_2.png"
            />

            <div className="relative mb-4 mt-[80px] w-full max-w-[1000px] mx-auto px-8 h-[48px] flex items-center">
                {/* Titre + flèche alignés dans une ligne flex */}
                <div className="flex items-center relative">
                    <h2 className="relative -top-[18px] [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[40px] tracking-[0] leading-[39.6px] text-white z-10 text-left whitespace-nowrap mr-4">
                        <div><span id="me-text">ME</span></div>
                        <div><span className="text-[#a265ff]">CONTACTER</span></div>
                    </h2>

                    {/* Trait + losange (fleche) */}
                    <div className="flex-grow h-[32px] flex items-center min-w-[20000px] relative">
                        <div className="absolute left-0 top-[calc(50%+2px)] -translate-y-1/2 w-[16px] h-[16px] bg-[#fff] rotate-45 z-0"></div>
                        <div className="absolute left-[15px] right-0 top-[calc(50%+2px)] -translate-y-1/2 h-[4px] bg-[#fff] z-0"></div>
                    </div>
                </div>
            </div>



            <div className="relative w-full h-full flex flex-col items-center px-8 max-w-[1000px] mx-auto">

                {/* Content section split 50/50 */}
                <div className="flex w-full gap-[51px] mt-[26px] mobile:flex-col">
                    {/* Bloc gauche (description + cartes) */}
                    <div className="flex flex-col flex-1 items-start">
                        <p className="w-full text-start [font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[16px] tracking-[0] leading-[normal] mb-[19px]">
                            Vous souhaitez donner vie à vos idées ou obtenir plus d’informations ? N’hésitez pas à me contacter pour échanger sur votre projet.
                        </p>

                        <div className="flex flex-col gap-[10px] items-start w-full">
                            {methods.map((method, index) => (
                                <Card
                                    key={index}
                                    className="w-full h-[60px] bg-[#1c0e30] rounded-[12px] backdrop-blur-md"
                                >
                                    <CardContent className="p-0 pl-2 h-full flex items-center">
                                        <div className="w-[41px] flex justify-center">
                                            <img className="w-[21px] h-[15px] object-cover" alt={method.alt} src={method.icon} />
                                        </div>
                                        {method.isLink ? (
                                            <a
                                                className="[font-family:'Roboto',Helvetica] font-normal text-[#a265ff] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap"
                                                href={`mailto:${method.value}`}
                                                rel="noopener noreferrer"
                                                target="_blank"
                                            >
                                                {method.value}
                                            </a>
                                        ) : (
                                            <span className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
                                              {method.value}
                                            </span>
                                        )}
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Bloc droit (image) */}
                    <div className="flex-1 text-card-foreground h-[245px] shadow aspect-square bg-[#0f0f0f26] rounded-[15px] backdrop-blur-md overflow-hidden tablet:hidden">
                        <img className="w-full h-full object-cover" alt="About" src="/wireframe/about.png" />
                    </div>
                </div>
            </div>
        </div>

    </section>
);

export default ContactSection;
