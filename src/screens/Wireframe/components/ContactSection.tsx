import React from "react";
import { Calendar } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/card";
import { useToast } from "../../../components/toast";

interface ContactMethod {
    icon: string;
    alt: string;
    value: string;
    isLink: boolean;
}

interface ContactSectionProps {
    methods: ContactMethod[];
}

export const ContactSection = ({ methods }: ContactSectionProps): JSX.Element => {
    const { addToast } = useToast();
    
    const handleEmailClick = (email: string) => {
        // Copy email to clipboard
        navigator.clipboard.writeText(email)
            .then(() => {
                addToast("Email copié", "success", 2000);
            })
            .catch(err => {
                console.error('Erreur lors de la copie :', err);
                addToast("Erreur lors de la copie", "error", 2000);
            });
    };

    return (
        <section
            id="contact"
            className="fade-section w-full mt-[100px] mobile:mt-[0px] scroll-mt-[200px]"
        >
            <div className="w-full relative">
                {/* Background image as CSS background */}
                <div className="w-full bg-[url('/wireframe/fond_lune_2.png')] bg-cover bg-center h-[500px] mobile:h-[400px] absolute top-0 left-0"></div>
                
                {/* Content container */}
                <div className="relative z-10">
                    <div className="mb-4 transform -translate-y-11 w-full max-w-[1000px] md-desktop:max-w-[1200px] mx-auto px-8 h-[48px] flex items-center">
                        {/* Titre + flèche alignés dans une ligne flex */}
                        <div className="flex items-center relative">
                            <h2 className="[text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[32px] tracking-[0] leading-[39.6px] text-white z-10 text-left whitespace-nowrap mr-4 mobile:text-[clamp(24px,8vw,32px)] mobile:whitespace-normal">
                                <div><span id="me-text">ME</span></div>
                                <div><span className="text-[#a265ff]">CONTACTER</span></div>
                            </h2>

                            {/* Trait + losange (fleche) */}
                            <div className="flex-grow h-[32px] flex items-center min-w-[20000px] relative">
                                <div className="absolute left-0 top-[36px] -translate-y-1/2 w-[16px] h-[16px] bg-[#fff] rotate-45 z-0"></div>
                                <div className="absolute left-[15px] right-0 top-[36px] -translate-y-1/2 h-[4px] bg-[#fff] z-0"></div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center px-8 max-w-[1000px] md-desktop:max-w-[1200px] mx-auto mb-[100px] mobile:mb-[60px]">

                        {/* Content section split 50/50 */}
                        <div className="flex w-full gap-[51px] mt-[26px] mobile:mt-[0px] mobile:flex-col mobile:gap-[30px]">
                            {/* Bloc gauche (description + cartes) */}
                            <div className="flex flex-col flex-1 items-start">
                                <p className="w-full text-start [font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[16px] tracking-[0] leading-[normal] mb-[19px]">
                                    Vous souhaitez donner vie à vos idées ou obtenir plus d'informations ? N'hésitez pas à me contacter pour échanger sur votre projet.
                                </p>

                                <div className="flex flex-col gap-[10px] items-start w-full">
                                    {methods.map((method, index) => (
                                        <Card
                                            key={index}
                                            className="w-full bg-[#1c0e30] rounded-[12px] backdrop-blur-md hover:shadow-[0_0_8px_#a265ff] transition-shadow duration-300"
                                        >
                                            <CardContent className="p-0 pl-4 py-4 h-full flex items-center mobile:py-3">
                                                <div className="w-[41px] flex justify-center flex-shrink-0">
                                                    {method.alt === "Calendrier" ? (
                                                        <Calendar className="w-[18px] h-[18px] text-white" />
                                                    ) : (
                                                        <img className="w-[21px] h-[15px] object-contain" alt={method.alt} src={method.icon} />
                                                    )}
                                                </div>
                                                {method.isLink ? (
                                                    method.alt === "Email" ? (
                                                        <button
                                                            className="[font-family:'Roboto',Helvetica] font-normal text-[#a265ff] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap mobile:text-[14px] mobile:break-all text-left"
                                                            onClick={() => handleEmailClick(method.value)}
                                                        >
                                                            {method.value}
                                                        </button>
                                                    ) : (
                                                        <a
                                                            className="[font-family:'Roboto',Helvetica] font-normal text-[#a265ff] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap mobile:text-[14px] mobile:break-all"
                                                            href={method.value}
                                                            rel="noopener noreferrer"
                                                            target="_blank"
                                                        >
                                                            {method.alt === "LinkedIn" ? "Lien vers LinkedIn" : method.alt === "Calendrier" ? "Prendre un rendez-vous" : method.value}
                                                        </a>
                                                    )
                                                ) : method.alt === "Phone" ? (
                                                    <a 
                                                        href={`tel:${method.value.replace(/\s+/g, '')}`}
                                                        className="[font-family:'Roboto',Helvetica] font-normal text-[#a265ff] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap mobile:text-[14px]"
                                                    >
                                                        {method.value}
                                                    </a>
                                                ) : (
                                                    <span className="[font-family:'Roboto',Helvetica] font-normal text-[#a265ff] text-[16px] tracking-[0] leading-[normal] whitespace-nowrap mobile:text-[14px]">
                                                        {method.value}
                                                    </span>
                                                )}
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* Bloc droit (image) */}
                            <div className="flex-1 text-card-foreground shadow bg-[#0f0f0f26] rounded-[15px] backdrop-blur-md overflow-hidden tablet:hidden hover:shadow-[0_0_12px_#a265ff] transition-shadow duration-300 h-[240px]">
                                <img className="w-full h-full object-cover object-[center_-100px]" alt="About" src="/wireframe/about.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;