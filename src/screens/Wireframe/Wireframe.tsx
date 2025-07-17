import React from "react";
import { ProcessSection } from "./components/ProcessSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { NavigationHeader } from "./components/NavigationHeader";
import { SocialSidebar } from "./components/SocialSidebar";
import { HeroSection } from "./components/HeroSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";

export const Wireframe = (): JSX.Element => {
  // Navigation items
  const navItems = [
    { name: "ACCUEIL", isActive: false },
    { name: "A PROPOS", isActive: false },
    { name: "WORK", isActive: true },
    { name: "PROCESSUS", isActive: false },
    { name: "CONTACT", isActive: false },
  ];

  // Social media links
  const socialLinks = [
    { icon: "/wireframe/github.png", alt: "Element" },
    { icon: "/wireframe/linkedin.png", alt: "Linkedin" },
    { icon: "/wireframe/whatapps.png", alt: "Whatsapp" },
    { icon: "/wireframe/mail.png", alt: "Enveloppe de" },
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "LOREM IPSUM",
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      step: "ETAPE 1",
    },
    {
      number: "02",
      title: "LOREM IPSUM DOLOR",
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      step: "ETAPE 2",
    },
    {
      number: "03",
      title: "LOREM IPSUM",
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      step: "ETAPE 3",
    },
  ];

  // Projects data
  const projects = [
    {
      image: "/wireframe/lubin_banner.png",
      title: "LOREM IPSUM",
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      type: "COACHING",
      technologies: [
        {
          icon: "/wireframe/symfony.png",
          alt: "Symfony",
        },
        { icon: "/wireframe/sass.png", alt: "Sass" },
      ],
    },
    {
      image: "/wireframe/dovana_banner.png",
      title: "LOREM IPSUM DOLOR",
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      type: "COACHING",
      technologies: [
        { icon: "/wireframe/react.png", alt: "React" },
        { icon: "/wireframe/js.png", alt: "JavaScript" },
        { icon: "/wireframe/sass.png", alt: "Sass" },
      ],
    },
    {
      image: "/wireframe/exostia_banner.png",
      title: "LOREM IPSUM",
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      type: "COACHING",
      technologies: [{ icon: "/wireframe/html.png", alt: "HTML" }],
    },
    {
      image: "/wireframe/hangart_banner.png",
      title: "LOREM IPSUM",
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      type: "COACHING",
      technologies: [
        { icon: "/wireframe/html.png", alt: "Html" },
        { icon: "/wireframe/css.png", alt: "Css" },
        { icon: "/wireframe/js.png", alt: "Js" },
      ],
    },
  ];

  // Contact methods
  const contactMethods = [
    {
      icon: "/wireframe/mail.png",
      alt: "Email",
      value: "lorem.ipsumdolorsite.amet",
      isLink: true,
    },
    {
      icon: "/wireframe/whatapps.png",
      alt: "Phone",
      value: "07 58 48 48 48 54",
      isLink: false,
    },
    {
      icon: "/wireframe/linkedin.png",
      alt: "LinkedIn",
      value: "lorem.ipsumdolorsite.amet",
      isLink: true,
    },
  ];

  // Tech stack icons
  const techStack = [
    { icon: "/wireframe/html.png", alt: "HTML" },
    { icon: "/wireframe/css.png", alt: "CSS" },
    { icon: "/wireframe/react.png", alt: "React" },
    { icon: "/wireframe/js.png", alt: "JavaScript" },
        { icon: "/wireframe/sass.png", alt: "Sass" },
  ];

  // Footer links
  const footerLinks = ["ACCUEIL", "A PROPOS", "WORK", "PROCESSUS", "CONTACT"];

  return (
      <div className="bg-white flex flex-row justify-center w-full min-h-screen overflow-x-hidden">
        <div className="bg-white w-full min-h-screen">
          <div className="relative w-full min-h-screen">
            {/* Background */}
            <div className="absolute w-full h-[4344px] top-0 left-0 backdrop-blur-[25.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25.3px)_brightness(100%)] bg-[linear-gradient(225deg,rgba(31,18,52,1)_0%,rgba(16,5,30,1)_100%)]" />

            {/* Navigation */}
            <NavigationHeader navItems={navItems} />

            {/* Social Media Sidebar */}
            <SocialSidebar links={socialLinks} />

            {/* Hero Section */}
            <HeroSection techStack={techStack} />

            {/* Process Section */}
            <ProcessSection steps={processSteps} />

            {/* Projects Section */}
            <ProjectsSection projects={projects} />

            {/* Contact Section */}
            <ContactSection methods={contactMethods} />

            {/* Footer */}
            <FooterSection footerLinks={footerLinks} socialLinks={socialLinks} />
          </div>
        </div>
      </div>
  );
};
