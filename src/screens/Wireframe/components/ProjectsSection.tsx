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
}

interface ProjectsSectionProps {
  projects: Project[];
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps): JSX.Element => (
  <section id="work" className="absolute w-full top-[1744px] left-0 px-8">
    <div className="relative mb-4 h-[48px] mt-[0px]">
      {/* Texte centré en absolu */}
      <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+3.2px)] [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[40px] text-center tracking-[0] leading-[39.6px] whitespace-nowrap text-white z-10">
        <span>MES </span>
        <span className="text-[#a265ff]">PROJETS</span>
      </h2>
      {/* Trait */}
      <div className="flex justify-center items-center h-full">
        <div className="ml-4 flex-grow h-[32px] flex items-center min-w-[48px]">
          {/* Diamond */}
          <div className="absolute left-1/2 translate-x-[192px] top-[calc(50%-1.6px)] -translate-y-1/2 w-[16px] h-[16px] bg-[#fff] rotate-45 z-0"></div>
          {/* Line */}
          <div className="absolute left-1/2 translate-x-[208px] right-[-19px] top-[calc(50%-1.6px)] -translate-y-1/2 h-[4px] bg-[#fff] z-0"></div>
        </div>
      </div>
    </div>

    <div className="mt-[116px] grid grid-cols-1 md:grid-cols-7 gap-6 justify-items-center max-w-[1200px] mx-auto">
      {projects.map((project, index) => {
        const row = Math.floor(index / 2)
        const isEvenRow = row % 2 === 0
        const isLeftCol = index % 2 === 0
        const isSmall = (isEvenRow && isLeftCol) || (!isEvenRow && !isLeftCol)
        const colSpan = isSmall ? "md:col-span-3" : "md:col-span-4"

        return (
            <Card
              key={index}
              className={`w-full h-[329px] bg-[#a265ff0d] rounded-[32px] border border-solid border-[#ffffff33] overflow-hidden ${colSpan}`}
            >
            <CardContent className="p-0 flex flex-col h-full">
              <div className="w-full h-[122px] overflow-hidden p-[0.6rem]">
                <img className="w-full h-full object-cover rounded-[24px]" alt="Project Image" src={project.image} />
              </div>
            <div className="flex flex-1 p-5 relative">
              <div className="w-[18px] h-[145px] absolute left-[18px] rounded-[8px] border border-solid border-[#a265ff]" />
              <div className="absolute w-[114px] top-[84px] left-[-29px] -rotate-90 [font-family:'Days_One',Helvetica] font-normal text-[#a265ff] text-[12px] text-center tracking-[0] leading-[12.7px]">
                {project.type}
              </div>
              <div className="ml-10 relative w-[100%]">
                <div className="flex items-center mb-3 relative">
                  <h3 className="[font-family:'Days_One',Helvetica] font-normal text-white text-[19px] tracking-[0] leading-[19px] min-w-0 truncate">
                    {project.title}
                  </h3>
                  <div className="relative ml-4 flex-grow h-[32px] flex items-center min-w-[48px]">
                    {/* Diamond */}
                    <div className="absolute left-0 top-[calc(50%-1.6px)] -translate-y-1/2 w-[16px] h-[16px] bg-[#a265ff] rotate-45 z-10"></div>
                    {/* Line */}
                    <div className="absolute left-[11px] right-[-19px] top-[calc(50%-1.6px)] -translate-y-1/2 h-[4px] bg-[#a265ff]"></div>
                  </div>
                </div>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[12px] tracking-[0] leading-[normal] mb-3">
                  {project.description}
                </p>
                {project.technologies.length > 0 && (
                  <div className="flex gap-3 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <img key={techIndex} className="w-6 h-6 object-cover" alt={tech.alt} src={tech.icon} />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
        )
      })}
    </div>
  </section>
);

export default ProjectsSection;
