import React, { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { ProcessSection } from "./components/ProcessSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { NavigationHeader } from "./components/NavigationHeader";
import { SocialSidebar } from "./components/SocialSidebar";
import { HeroSection } from "./components/HeroSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { ToolsSection } from "./components/ToolsSection";
import { ToastProvider } from "../../components/toast";

export const Wireframe = (): JSX.Element => {
  // Navigation items
  const [activeIndex, setActiveIndex] = useState(2);
  useScrollReveal();
  const navData = [
    { name: "ACCUEIL", targetId: "accueil" },
    { name: "STACK", targetId: "tools" },
    { name: "PROCESSUS", targetId: "processus" },
    { name: "WORK", targetId: "work" },
    { name: "CONTACT", targetId: "contact" },
  ];
  const navItems = navData.map((item, index) => ({
    ...item,
    isActive: index === activeIndex,
  }));

  // Social media links
  const socialLinks = [
    { 
      icon: "/wireframe/github.png", 
      alt: "GitHub", 
      url: "https://github.com/MeruemShen" 
    },
    { 
      icon: "/wireframe/linkedin.png", 
      alt: "LinkedIn", 
      url: "https://www.linkedin.com/in/dorian-bidault-589850240/" 
    },
    { 
      icon: "/wireframe/whatapps.png", 
      alt: "WhatsApp", 
      url: "tel:0750010785" 
    },
    { 
      icon: "/wireframe/mail.png", 
      alt: "Email", 
      url: "dorian.bidault11@gmail.com" 
    },
  ];

  // Process steps
  const processSteps = [
    {
      number: "01",
      title: "ANALYSE DES BESOINS",
      description:
          "Nous d\u00e9finissons en d\u00e9tail vos attentes, vos contraintes et vos objectifs pour formaliser un cahier des charges complet. Chaque fonctionnalit\u00e9 est discut\u00e9e afin d\u2019\u00e9laborer un planning r\u00e9aliste et adapt\u00e9 \u00e0 votre budget.",
      descriptionMobile:
          "Identification de vos besoins pour établir un cahier des charges et un planning adapté.",
      step: "ETAPE 1",
    },
    {
      number: "02",
      title: "CONCEPTION ET DESIGN",
      description:
          "Je con\u00e7ois l\u2019architecture de votre solution et r\u00e9alise des maquettes fonctionnelles respectant votre identit\u00e9 visuelle. Une attention toute particuli\u00e8re est port\u00e9e \u00e0 l\u2019ergonomie pour offrir une exp\u00e9rience utilisateur fluide et professionnelle.",
      descriptionMobile:
          "Conception de l'architecture et des maquettes en accord avec votre identité visuelle et l'ergonomie.",
      step: "ETAPE 2",
    },
    {
      number: "03",
      title: "D\u00c9VELOPPEMENT ET MISE EN LIGNE",
      description:
          "Je d\u00e9veloppe votre application dans le respect des bonnes pratiques et proc\u00e8de \u00e0 des phases de tests r\u00e9guli\u00e8res. L\u2019accompagnement se poursuit jusqu\u2019\u00e0 la mise en production afin de garantir un d\u00e9ploiement s\u00fbr et performant.",
      descriptionMobile:
          "Développement, tests réguliers et accompagnement jusqu'à la mise en production.",
      step: "ETAPE 3",
    },
  ];

  // Projects data
  const projects = [
    {
      image: "/wireframe/lubin_banner.png",
      title: "Lubin Coaching",
      description:
          "Plateforme de coaching sportif d\u00e9velopp\u00e9e avec Symfony et Sass.",
      type: "COACHING",
      url: "https://www.lubincoaching.fr/",
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
      title: "Dovana",
      description:
          "Application de gestion de cadeaux r\u00e9alis\u00e9e en React et JavaScript.",
      type: "COACHING",
      technologies: [
        { icon: "/wireframe/react.png", alt: "React" },
        { icon: "/wireframe/js.png", alt: "JavaScript" },
        { icon: "/wireframe/sass.png", alt: "Sass" },
      ],
    },
    {
      image: "/wireframe/exostia_banner.png",
      title: "Exostia",
      description:
          "Site vitrine inspir\u00e9 de la science-fiction enti\u00e8rement cod\u00e9 en HTML.",
      type: "COACHING",
      url: "https://www.exostia.com/",
      technologies: [{ icon: "/wireframe/html.png", alt: "HTML" }],
    },
    {
      image: "/wireframe/hangart_banner.png",
      title: "Hangart",
      description:
          "Portfolio pour un artiste digital con\u00e7u en HTML, CSS et JavaScript.",
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
      value: "dorian.bidault11@gmail.com",
      isLink: true,
    },
    {
      icon: "/wireframe/whatapps.png",
      alt: "Phone",
      value: "07 50 01 07 85",
      isLink: false,
    },
    {
      icon: "/wireframe/linkedin.png",
      alt: "LinkedIn",
      value: "https://www.linkedin.com/in/dorian-bidault-589850240/",
      isLink: true,
    },
  ];


  // Footer links
  const footerLinks = ["ACCUEIL", "STACK", "PROCESSUS", "WORK", "CONTACT"];

  return (
    <ToastProvider>
      <div className="bg-white flex flex-row justify-center w-full overflow-hidden">
        <div className="bg-white w-full overflow-hidden">
          <div className="w-full overflow-hidden">
            {/* Background */}
            <div className="fixed w-full h-full top-0 left-0 backdrop-blur-[25.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25.3px)_brightness(100%)] bg-[#120527]" />

            {/* Anchor for top of the page */}
            <div id="accueil" />

            {/* Navigation */}
            <NavigationHeader navItems={navItems} onNavItemClick={setActiveIndex} socialLinks={socialLinks} />

            {/* Social Media Sidebar */}
            <SocialSidebar links={socialLinks} />

            {/* Hero Section */}
            <HeroSection />

            {/* Tools Section */}
            <ToolsSection />

            {/* Process Section */}
            <ProcessSection steps={processSteps} />

             <ProjectsSection projects={projects} />

            {/* Contact Section */}
            <ContactSection methods={contactMethods} />

            {/* Footer */}
            <FooterSection footerLinks={footerLinks} socialLinks={socialLinks} />
          </div>
        </div>
      </div>
    </ToastProvider>
  );
};
