import React from "react";
import { Card, CardContent } from "../../../components/ui/card";

interface Technology {
  icon: string;
  alt: string;
}

interface Project {
  image: string;
  title: string;
  description: string;
  type: string;
  technologies: Technology[];
  url?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps): JSX.Element => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = -((y - rect.height / 2) / (rect.height / 2)) * 8
    const rotateY = ((x - rect.width / 2) / (rect.width / 2)) * 8
    target.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.98)`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget as HTMLDivElement
    target.style.transform = ""
  }

  return (
  <section
    id="projets"
    className="fade-section w-full px-[26px] mt-[100px] mobile:mt-[115px] scroll-mt-[100px]"
  >
    <div className="mb-4 h-[38px] transform -translate-y-[-15px] tablet:-translate-y-[0px]">
      {/* Texte centré */}
      <h2 className="text-center [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[32px] tracking-[0] leading-[39.6px] whitespace-nowrap text-white z-10 mobile:text-left mobile:text-[clamp(24px,8vw,32px)] mobile:whitespace-normal">
        <span>MES </span>
        <span className="text-[#a265ff]">PROJETS</span>
      </h2>
      {/* Trait */}
        <div className="flex justify-center items-center h-full mobile:hidden">
        <div className="ml-[13px] flex-grow h-[26px] flex items-center min-w-[38px] relative">
          {/* Diamond */}
          <div className="absolute left-1/2 translate-x-[140px] top-[-26px] -translate-y-1/2 w-[13px] h-[13px] bg-[#fff] rotate-45 z-0"></div>
          {/* Line */}
          <div className="absolute left-1/2 translate-x-[150px] right-[-15px] top-[-26px] -translate-y-1/2 h-[3px] bg-[#fff] z-0"></div>
        </div>
      </div>
    </div>

    <div className="mt-[93px] mb-[180px] mobile:mb-[150px] mobile:mt-[40px] grid grid-cols-1 md:grid-cols-7 gap-[19px] mobile:gap-[30px] justify-items-center max-w-[960px] md-desktop:max-w-[1150px] mx-auto">
      {projects.map((project, index) => {
        const row = Math.floor(index / 2)
        const isEvenRow = row % 2 === 0
        const isLeftCol = index % 2 === 0
        const isSmall = (isEvenRow && isLeftCol) || (!isEvenRow && !isLeftCol)
        const colSpan = isSmall ? "md:col-span-3" : "md:col-span-4"

        const content = (
          <Card
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`card-tilt w-full h-[263px] bg-[#a265ff0d] rounded-[26px] backdrop-blur-md overflow-hidden transition-transform duration-150 hover:shadow-[0_0_8px_#a265ff]`}
          >
            <CardContent className="p-0 flex flex-col h-full">
              <div className="w-full h-[98px] overflow-hidden p-[0.48rem]">
                <img
                  className="w-full h-full object-cover rounded-[24px]"
                  alt={`${project.title} — Aperçu du projet`}
                  src={project.image}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
              </div>
              <div className="flex flex-1 relative">
                <div className="relative flex-shrink-0 mr-4 pl-4 pt-4 pb-6 h-full">
                  <div className="w-[14px] h-full rounded-[8px] border border-solid border-[#a265ff]" />
                  <div className="absolute w-[91px] top-[71px] left-[-22px] -rotate-90 [font-family:'Days_One',Helvetica] font-normal text-[#a265ff] text-[12px] text-center tracking-[0] leading-[12.7px]">
                    {project.type}
                  </div>
                </div>
                <div className="relative w-[100%] p-4 pl-0">
                  <div className="flex items-center mb-[10px] relative">
                    <h3 className="[font-family:'Days_One',Helvetica] font-normal text-white text-[19px] tracking-[0] leading-[19px] min-w-0 truncate">
                      {project.title}
                    </h3>
                    <div className="relative ml-[13px] flex-grow h-[26px] flex items-center min-w-[38px]">
                      {/* Diamond */}
                      <div className="absolute left-0 top-[calc(50%-1.3px)] -translate-y-1/2 w-[13px] h-[13px] bg-[#a265ff] rotate-45 z-10"></div>
                      {/* Line */}
                      <div className="absolute left-[9px] right-[-15px] top-[calc(50%-1.3px)] -translate-y-1/2 h-[3px] bg-[#a265ff]"></div>
                    </div>
                  </div>
                  <p className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[16px] tracking-[0] leading-[normal] mb-[10px]">
                    {project.description}
                  </p>
                  {project.technologies.length > 0 && (
                    <div className="flex gap-[10px] mt-auto">
                      {project.technologies.map((tech, techIndex) => (
                        <img
                          key={techIndex}
                          className="w-5 h-5 object-contain"
                          alt={tech.alt}
                          src={tech.icon}
                          loading="lazy"
                          decoding="async"
                          width={20}
                          height={20}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        )

        return project.url ? (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`block ${colSpan} w-full`}
          >
            {content}
          </a>
        ) : (
          <div key={index} className={`${colSpan} w-full`}>{content}</div>
        )
      })}
    </div>
  </section>
  )
}

export default ProjectsSection;
