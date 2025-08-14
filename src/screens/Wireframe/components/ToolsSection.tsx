// "use client"
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const tools = [
  { name: "Docker", icon: "/wireframe/svg/docker-svgrepo-com.svg" },
  { name: "React", icon: "/wireframe/svg/react-svgrepo-com.svg" },
  { name: "Symfony", icon: "/wireframe/svg/symfony-svgrepo-com.svg" },
  { name: "Figma", icon: "/wireframe/svg/figma-svgrepo-com.svg" },
  { name: "NodeJS", icon: "/wireframe/svg/nodejs-icon-svgrepo-com.svg" },
  { name: "PostgreSQL", icon: "/wireframe/svg/postgresql-svgrepo-com.svg" },
  { name: "Tailwind", icon: "/wireframe/svg/tailwind-svgrepo-com.svg" },
  { name: "SCSS", icon: "/wireframe/svg/scss-svgrepo-com.svg" },
  { name: "TypeScript", icon: "/wireframe/svg/typescript-logo-svgrepo-com.svg" },
  { name: "Vite", icon: "/wireframe/svg/vitejs-svgrepo-com.svg" },
  { name: "WordPress", icon: "/wireframe/svg/wordpress-color-svgrepo-com.svg" },
  { name: "Shopify", icon: "/wireframe/svg/shopify-color-svgrepo-com.svg" },
  { name: "RabbitMQ", icon: "/wireframe/svg/rabbitmq-icon-svgrepo-com.svg" },
  { name: "AWS", icon: "/wireframe/svg/aws-svgrepo-com.svg" },
];

export const ToolsSection = (): JSX.Element => {
  const [emblaRef] = useEmblaCarousel(
      { loop: true, align: "start", dragFree: true },
      [
        AutoScroll({
          speed: 1.15,
          startDelay: 0,
          stopOnInteraction: false,
          stopOnMouseEnter: false, // ne stoppe plus au hover
          playOnInit: true,
        }),
      ]
  );

  return (
      <section
          id="tools"
          className="relative bg-[#120527] py-[120px] mobile:py-[100px]"
          aria-label="Technologies utilisées"
          aria-labelledby="tools-heading"
      >
        {/* Titre (forcé au-dessus de tout) */}
        <div className="relative z-15 mx-auto w-full max-w-[1015px] md-desktop:max-w-[1250px] px-8">
          <h3 className="text-sm uppercase tracking-[.28em] text-white/80 [font-family:'Days_One',Helvetica]">
            DES OUTILS
          </h3>
          <h2 id="tools-heading" className="[font-family:'Days_One',Helvetica] font-normal text-[32px] tracking-[0] leading-[47.5px] text-white">
            AU SERVICE DE{" "}
            <span className="text-[#a265ff]">
            VOS PROJETS
          </span>
          </h2>
        </div>

        {/* Carousel full-bleed */}
        <div className="relative mt-8">
          <div className="relative z-10 w-screen left-1/2 -translate-x-1/2">
            {/* Fades (sous le titre) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-0 w-32 bg-gradient-to-r from-[#0D0718] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-0 w-32 bg-gradient-to-l from-[#0D0718] to-transparent" />

            {/* Viewport plus haut pour éviter les coupures au hover */}
            <div ref={emblaRef} className="relative z-10 overflow-visible h-48">
              <div className="embla__container flex gap-4 px-6 will-change-transform">
                {tools.map((tool, i) => (
                    <div key={i} className="embla__slide shrink-0">
                      {/* Carte */}
                      <div className="relative flex h-40 w-52 flex-col items-start justify-between rounded-2xl border border-[#A265FF]/60 bg-[rgba(162,101,255,0.04)] p-5 shadow-[0_0_0_1px_rgba(162,101,255,0.15)] transition-transform duration-200 hover:scale-[1.06] hover:shadow-[0_0_20px_rgba(162,101,255,0.25)]">
                        <img
                            src={tool.icon}
                            alt={tool.name}
                            className="h-14 w-auto object-contain"
                        />
                        <span className="text-xl font-semibold tracking-wide text-white [font-family:'Poppins',sans-serif]">
                      {tool.name}
                    </span>
                        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#A265FF]/15" />
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ToolsSection;
