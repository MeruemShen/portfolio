import React from "react";
import CounterAnimation from "./CounterAnimation";
export const HeroSection = (): JSX.Element => {

  return (
    <section
      id="apropos"
      className="fade-section w-full px-8 mobile:px-4"
    >

      {/* Background image as CSS background */}
      <div className="fade-bottom-img w-screen h-full -z-20 fixed top-0 left-1/2 -translate-x-1/2 bg-[url('/wireframe/fond_burger_bird1.png')] bg-cover bg-top"></div>
      <div className="h-full pt-[90px] mobile:h-auto mobile:pt-[80px]">
        <div className="pt-[120px] mobile:pt-[50px] mobile:mb-[20px] w-full max-w-[950px] mx-auto">
          <div className="flex items-center relative">
            <h2 className="[text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[32px] tracking-[0] leading-[39.6px] text-white z-10 text-left whitespace-nowrap mr-4 mobile:text-[clamp(24px,8vw,32px)] mobile:whitespace-normal">
              <div>
                <span id="me-text" className="mobile:hidden">CONSTRUISONS ENSEMBLE</span>
                <span id="me-text" className="hidden mobile:inline">CONSTRUISONS</span>
              </div>
              <div>VOTRE <span className="text-[#a265ff]">EMPREINTE NUMÉRIQUE</span></div>
            </h2>

            {/* Trait + losange (fleche) */}
            <div className="flex-grow h-[32px] flex items-center min-w-[20000px] relative mobile:hidden">
              <div className="absolute left-0 top-[calc(50%+19px)] -translate-y-1/2 w-[16px] h-[16px] bg-[#fff] rotate-45 z-0"></div>
              <div className="absolute left-[15px] right-0 top-[calc(50%+19px)] -translate-y-1/2 h-[4px] bg-[#fff] z-0"></div>
            </div>
          </div>
        </div>

      <div className="relative flex justify-center mt-[20px] w-full max-w-[950px] mx-auto">
        <div className="relative flex flex-col items-start text-left w-full max-w-full mobile:max-w-full">
          <p className="text-white text-[16px] mb-[10px] max-w-[650px] mobile:max-w-full font-normal [font-family:'Poppins',sans-serif]">
            <span className="mobile:hidden">Développeur web polyvalent, j'allie expertise technique, sens de l'efficacité, adaptabilité et maîtrise des outils modernes pour concevoir des solutions sur-mesure, robustes, évolutives et alignées avec vos objectifs.</span>
            <span className="hidden mobile:inline">Solutions web sur-mesure, robustes et évolutives. Expertise technique et adaptabilité pour répondre à vos objectifs.</span>
          </p>

          <div className="flex flex-wrap gap-[8px] mt-[10px] mobile:gap-[10px]">
            <span className="text-white text-[12px] border border-[#2A4EFF] py-[6px] px-[15px] rounded-[15px] font-medium hover:shadow-[0_0_3px_#2A4EFF] [font-family:'Days_One',sans-serif]">SUR-MESURE</span>
            <span className="text-white text-[12px] border border-[#2A4EFF] py-[6px] px-[15px] rounded-[15px] font-medium hover:shadow-[0_0_3px_#2A4EFF] [font-family:'Days_One',sans-serif]">WEB INTERFACE</span>
            <span className="text-white text-[12px] border border-[#2A4EFF] py-[6px] px-[15px] rounded-[15px] font-medium hover:shadow-[0_0_3px_#2A4EFF] [font-family:'Days_One',sans-serif]">INFRASTRUCTURE</span>
          </div>


          <div className="flex gap-8 my-[50px]">
            <div className="text-center">
              <div className="text-[#a265ff] text-[2.5rem] [font-family:'Days_One',Helvetica]">
                {/* Animated counter */}
                <CounterAnimation
                    targetNumber={2}
                    prefix="+"
                    duration={0.7}
                    ease={[0.22, 1, 0.36, 1]}
                    waitForWindowLoad
                    preloadImages={["/wireframe/fond_burger_bird1.png"]}
                    afterImageDelayMs={500}   // ← 1.5 s après chargement image
                />
                {/* Ultimate fallback - hidden but will be shown if JS fails completely */}
                <noscript>
                  <span className="text-[#a265ff] text-[2.5rem] [font-family:'Days_One',Helvetica]">+2</span>
                </noscript>
                <span className="text-white text-[2rem] ml-2">ans</span>
              </div>
              <div className="text-white text-sm uppercase [font-family:'Poppins',sans-serif]">D'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-[#a265ff] text-[2.5rem] [font-family:'Days_One',Helvetica]">
                {/* Animated counter */}
                <CounterAnimation
                    targetNumber={10}
                    prefix="+"
                    duration={1.0}
                    ease={[0.22, 1, 0.36, 1]}
                    waitForWindowLoad
                    preloadImages={["/wireframe/fond_burger_bird1.png"]}
                    afterImageDelayMs={500}   // ← 2 s après chargement image
                />
                {/* Ultimate fallback - hidden but will be shown if JS fails completely */}
                <noscript>
                  <span className="text-[#a265ff] text-[2.5rem] [font-family:'Days_One',Helvetica]">+10</span>
                </noscript>
                <span className="text-white text-[2rem] ml-[1px]">Projets</span>
              </div>
              <div className="text-white text-sm uppercase [font-family:'Poppins',sans-serif]">Effectués ou livrés</div>
            </div>
          </div>

          <div className="flex gap-4 mb-[100px] mobile:mb-[70px]">
            <a
              href="#projets"
              className="bg-[#2A4EFF] text-white text-[14px] rounded-[6px] py-[10px] px-[20px] hover:shadow-[0_0_10px_#2A4EFF] [font-family:'Poppins',sans-serif]"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projets')?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              DÉCOUVRIR MES PROJETS
            </a>
            <a
              href="#contact"
              className="text-white border border-[#2A4EFF] text-[14px] rounded-[6px] py-[10px] px-[20px] hover:bg-[rgba(42,78,255,0.1)] [font-family:'Poppins',sans-serif]"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              ME CONTACTER
            </a>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
