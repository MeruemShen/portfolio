import React from "react";

export const HeroSection = (): JSX.Element => {

  return (
    <section
      id="apropos"
      className="fade-section absolute w-full top-0 left-0 px-8 mobile:relative mobile:top-auto mobile:h-auto mobile:px-4 mobile:mb-[100px]"
    >

      <img
          className="fade-bottom-img absolute top-0 left-1/2 w-screen h-full -translate-x-1/2 object-cover object-top -z-20"
          alt="Background"
          src="/wireframe/fond_burger_bird1.png"
      />
      <div className="relative h-full pt-[90px] mobile:h-auto mobile:pt-[80px]">
        <div className="relative pt-[120px] mobile:pt-[0px] mobile:mb-[20px] w-full max-w-[950px] mx-auto">
          <div className="flex items-center relative">
            <h2 className="relative -top-[18px] [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[40px] tracking-[0] leading-[39.6px] text-white z-10 text-left whitespace-nowrap mr-4 mobile:relative mobile:top-auto mobile:text-[clamp(24px,8vw,32px)] mobile:whitespace-normal">
              <div>
                <span id="me-text" className="mobile:hidden">CONSTRUISONS ENSEMBLE</span>
                <span id="me-text" className="hidden mobile:inline">CONSTRUISONS</span>
              </div>
              <div>VOTRE <span className="text-[#a265ff]">EMPREINTE NUMÉRIQUE</span></div>
            </h2>

            {/* Trait + losange (fleche) */}
            <div className="flex-grow h-[32px] flex items-center min-w-[20000px] relative mobile:hidden">
              <div className="absolute left-0 top-[calc(50%+2px)] -translate-y-1/2 w-[16px] h-[16px] bg-[#fff] rotate-45 z-0"></div>
              <div className="absolute left-[15px] right-0 top-[calc(50%+2px)] -translate-y-1/2 h-[4px] bg-[#fff] z-0"></div>
            </div>
          </div>
        </div>

      <div className="relative flex justify-center mt-[20px] w-full max-w-[950px] mx-auto">
        <div className="relative flex flex-col items-start text-left w-full max-w-full mobile:max-w-full">
          <p className="text-white text-[16px] mb-[10px] max-w-[650px] mobile:max-w-full font-normal [font-family:'Poppins',sans-serif]">
            Développeur web polyvalent, j’allie expertise technique, sens de l’efficacité, adaptabilité et maîtrise des outils modernes pour concevoir des solutions sur-mesure, robustes, évolutives et alignées avec vos objectifs.
          </p>

          <div className="flex gap-[8px] mt-[10px]">
            <span className="text-white text-[12px] border border-[#2A4EFF] py-[6px] px-[15px] rounded-[15px] font-medium hover:shadow-[0_0_3px_#2A4EFF] [font-family:'Days_One',sans-serif]">SUR-MESURE</span>
            <span className="text-white text-[12px] border border-[#2A4EFF] py-[6px] px-[15px] rounded-[15px] font-medium hover:shadow-[0_0_3px_#2A4EFF] [font-family:'Days_One',sans-serif]">WEB INTERFACE</span>
            <span className="text-white text-[12px] border border-[#2A4EFF] py-[6px] px-[15px] rounded-[15px] font-medium hover:shadow-[0_0_3px_#2A4EFF] [font-family:'Days_One',sans-serif]">INFRASTRUCTURE</span>
          </div>


          <div className="flex gap-8 my-[50px]">
            <div className="text-center">
              <div className="text-[#a265ff] text-[2.5rem] [font-family:'Days_One',Helvetica]">+2<span className="text-white text-[2rem] ml-2">ans</span></div>
              <div className="text-white text-sm uppercase [font-family:'Poppins',sans-serif]">D'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-[#a265ff] text-[2.5rem] [font-family:'Days_One',Helvetica]">+10<span className="text-white text-[2rem] ml-2">Projets</span></div>
              <div className="text-white text-sm uppercase [font-family:'Poppins',sans-serif]">Effectués ou livrés</div>
            </div>
          </div>

          <div className="flex gap-4 mb-[100px] mobile:mb-0">
            <a
              href="#projects"
              className="bg-[#2A4EFF] text-white text-[14px] rounded-[6px] py-[10px] px-[20px] hover:shadow-[0_0_10px_#2A4EFF] [font-family:'Poppins',sans-serif]"
            >
              DÉCOUVRIR MES PROJETS
            </a>
            <a
              href="#contact"
              className="text-white border border-[#2A4EFF] text-[14px] rounded-[6px] py-[10px] px-[20px] hover:bg-[rgba(42,78,255,0.1)] [font-family:'Poppins',sans-serif]"
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
