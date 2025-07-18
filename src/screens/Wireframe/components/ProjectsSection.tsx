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
  <section id="work" className="absolute w-full top-[2180px] left-0 px-8">
    <div className="relative mb-4 h-[60px] mt-[0px]">
      {/* Texte centré en absolu */}
      <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(50%+4px)] [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[50px] text-center tracking-[0] leading-[49.6px] whitespace-nowrap text-white z-10">
        <span>MES </span>
        <span className="text-[#a265ff]">PROJETS</span>
      </h2>
      {/* Trait */}
      <div className="flex justify-center items-center h-full">
        <div className="ml-5 flex-grow h-[40px] flex items-center min-w-[60px]">
          {/* Diamond */}
          <div className="absolute left-1/2 translate-x-[240px] top-[calc(50%-2px)] -translate-y-1/2 w-[20px] h-[20px] bg-[#fff] rotate-45 z-0"></div>
          {/* Line */}
          <div className="absolute left-1/2 translate-x-[260px] right-[-24px] top-[calc(50%-2px)] -translate-y-1/2 h-[5px] bg-[#fff] z-0"></div>
        </div>
      </div>
    </div>

    <div className="mt-[145px] grid grid-cols-1 md:grid-cols-7 gap-8 justify-items-center max-w-[1200px] mx-auto">
      {projects.map((project, index) => {
        const row = Math.floor(index / 2)
        const isEvenRow = row % 2 === 0
        const isLeftCol = index % 2 === 0
        const isSmall = (isEvenRow && isLeftCol) || (!isEvenRow && !isLeftCol)
        const colSpan = isSmall ? "md:col-span-3" : "md:col-span-4"

        return (
            <Card
              key={index}
              className={`w-full h-[411px] bg-[#a265ff0d] rounded-[40px] border border-solid border-[#ffffff33] overflow-hidden ${colSpan}`}
            >
            <CardContent className="p-0 flex flex-col h-full">
              <div className="w-full h-[153px] overflow-hidden p-3">
                <img className="w-full h-full object-cover rounded-[30px]" alt="Project Image" src={project.image} />
              </div>
            <div className="flex flex-1 p-6 relative">
              <div className="w-[22px] h-[181px] absolute left-[23px] rounded-[10px] border border-solid border-[#a265ff]" />
              <div className="absolute w-[143px] top-[105px] left-[-36.5px] -rotate-90 [font-family:'Days_One',Helvetica] font-normal text-[#a265ff] text-base text-center tracking-[0] leading-[15.9px]">
                {project.type}
              </div>
              <div className="ml-12 relative">
                <div className="flex items-center mb-4 relative">
                  <h3 className="[font-family:'Days_One',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[23.8px] min-w-0 truncate">
                    {project.title}
                  </h3>
                  <div className="relative ml-5 flex-grow h-[40px] flex items-center min-w-[60px]">
                    {/* Diamond */}
                    <div className="absolute left-0 top-[calc(50%-2px)] -translate-y-1/2 w-[20px] h-[20px] bg-[#a265ff] rotate-45 z-10"></div>
                    {/* Line */}
                    <div className="absolute left-[14px] right-[-24px] top-[calc(50%-2px)] -translate-y-1/2 h-[5px] bg-[#a265ff]"></div>
                  </div>
                </div>
                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[15px] tracking-[0] leading-[normal] mb-4">
                  {project.description}
                </p>
                {project.technologies.length > 0 && (
                  <div className="flex gap-4 mt-auto">
                    {project.technologies.map((tech, techIndex) => (
                      <img key={techIndex} className="w-7 h-7 object-cover" alt={tech.alt} src={tech.icon} />
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
