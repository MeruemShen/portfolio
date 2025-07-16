import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";

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
      step: "ETAPE 1",
    },
    {
      number: "03",
      title: "LOREM IPSUM",
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      step: "ETAPE 1",
    },
  ];

  // Projects data
  const projects = [
    {
      image: "/image-1.png",
      title: "LOREM IPSUM",
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      type: "COACHING",
      technologies: [
        {
          icon: "/vecteezy-wordpress-logo-vector-wordpress-icon-transparent-png-20.png",
          alt: "Wordpress",
        },
        { icon: "/wireframe/sass.png", alt: "Sass" },
      ],
    },
    {
      image: "/image-3.png",
      title: "LOREM IPSUM DOLOR",
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      type: "COACHING",
      technologies: [
        { icon: "/react-icon-svg-1.png", alt: "React" },
        { icon: "/sans-titre-1-1.png", alt: "Sans titre" },
        { icon: "/wireframe/sass.png", alt: "Sass" },
      ],
    },
    {
      image: "/image-4.png",
      title: "LOREM IPSUM",
      description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      type: "COACHING",
      technologies: [{ icon: "/logo--1--1.png", alt: "Logo" }],
    },
    {
      image: "/image-2.png",
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
      <div className="bg-white flex flex-row justify-center w-full">
        <div className="bg-white overflow-hidden w-[1440px] h-[4344px]">
          <div className="relative w-[1504px] h-[4348px] -left-8">
            {/* Background */}
            <div className="absolute w-[1440px] h-[4344px] top-0 left-8 backdrop-blur-[25.3px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(25.3px)_brightness(100%)] bg-[linear-gradient(225deg,rgba(31,18,52,1)_0%,rgba(16,5,30,1)_100%)]" />

            {/* Navigation */}
            <header className="absolute w-full top-5 left-0 flex justify-center items-center px-8 z-10">
              <div className="flex items-center justify-between w-full max-w-[1440px]">
                {/* Logo */}
                <img
                    className="h-[138px] w-[158px] object-cover"
                    alt="Logo removebg"
                    src="/wireframe/logo.png"
                />

                {/* Main Navigation */}
                <Card className="w-[861px] h-[67px] bg-[#0f0f0f] rounded-[35px] border border-solid border-[#ffffff33]">
                  <CardContent className="p-0 h-full flex items-center justify-center">
                    <NavigationMenu className="h-full">
                      <NavigationMenuList className="h-full flex items-center justify-around px-10 gap-8">
                        {navItems.map((item, index) => (
                            <NavigationMenuItem key={index} className="relative">
                              {item.isActive ? (
                                  <div className="absolute w-[189px] h-[46px] top-0 left-[-70px] bg-[#a265ff] rounded-[35px]" />
                              ) : null}
                              <span
                                  className={`relative z-10 [font-family:'Days_One',Helvetica] font-normal text-white text-xl tracking-[0] leading-[normal] ${item.isActive ? "px-16" : ""}`}
                              >
                            {item.name}
                          </span>
                            </NavigationMenuItem>
                        ))}
                      </NavigationMenuList>
                    </NavigationMenu>
                  </CardContent>
                </Card>

                {/* CV Button */}
                <Button className="w-[141px] h-[67px] bg-[#0f0f0f] rounded-[35px] border border-solid border-[#ffffff33] flex items-center justify-center gap-2">
                  <img
                      className="w-[21px] h-[21px] object-cover"
                      alt="Telecharger"
                      src="/telecharger--1--1.png"
                  />
                  <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
                  CV
                </span>
                </Button>
              </div>
            </header>

            {/* Social Media Sidebar */}
            <div className="absolute w-[84px] h-[395px] top-[339px] left-[49px] flex flex-col gap-5 z-10">
              {socialLinks.map((link, index) => (
                  <Button
                      key={index}
                      variant="outline"
                      className="w-[84px] h-[84px] bg-[#0f0f0f] rounded-[35px] border border-solid border-[#ffffff33] p-0 flex items-center justify-center"
                  >
                    <img
                        className="w-[54px] h-[54px] object-cover"
                        alt={link.alt}
                        src={link.icon}
                    />
                  </Button>
              ))}
            </div>

            {/* Hero Section */}
            <section className="absolute w-full top-[218px] left-0 flex flex-col items-center px-8">
              <h1 className="w-[971px] [font-family:'Days_One',Helvetica] font-normal text-[50px] text-center tracking-[0] leading-[50px]">
              <span className="text-white leading-[0.1px]">
                CONSTRUISONS ENSEMBLE VOTRE{" "}
              </span>
                <span className="text-[#a265ff] leading-[49.6px]">
                EMPREINTE NUMÉRIQUE
              </span>
              </h1>

              <div className="flex w-full mt-[207px] gap-8 justify-center">
                {/* Profile Image */}
                <Card className="w-[504px] h-[536px] bg-[#0f0f0f26] rounded-[40px] border border-solid border-[#ffffff33] overflow-hidden">
                  <CardContent className="p-0 h-full">
                    <img
                        className="w-full h-full object-cover"
                        alt="About"
                        src="/aboutddd-2.png"
                    />
                  </CardContent>
                </Card>

                {/* About Me */}
                <div className="flex flex-col gap-8">
                  <Card className="w-[655px] h-[381px] bg-[#a265ff0d] rounded-[40px] border border-solid border-[#ffffff33]">
                    <CardContent className="p-8">
                      <h2 className="[font-family:'Days_One',Helvetica] font-normal text-white text-2xl text-center tracking-[0] leading-[23.8px] mb-8">
                        MON PARCOURS
                      </h2>
                      <p className="[font-family:'Roboto',Helvetica] font-normal text-xl tracking-[0] leading-[19.8px]">
                        <span className="text-white">Étudiant en </span>
                        <span className="text-[#a265ff]">
                        Master Data &amp; Intelligence Artificielle
                      </span>
                        <span className="text-white"> et diplômé d&apos;un </span>
                        <span className="text-[#a265ff]">BUT MMI</span>
                        <span className="text-white">
                        , j&apos;ai développé des compétences solides en{" "}
                      </span>
                        <span className="text-[#a265ff]">développement web</span>
                        <span className="text-white">, </span>
                        <span className="text-[#a265ff]">
                        design d&apos;interfaces
                      </span>
                        <span className="text-white">, et </span>
                        <span className="text-[#a265ff]">
                        création de sites internet
                      </span>
                        <span className="text-white">
                        .<br />
                        <br />
                        Mon approche consiste à proposer des solutions{" "}
                      </span>
                        <span className="text-[#a265ff]">sur-mesure</span>
                        <span className="text-white"> : </span>
                        <span className="text-[#a265ff]">vitrines en ligne</span>
                        <span className="text-white">, </span>
                        <span className="text-[#a265ff]">
                        plateformes interactives
                      </span>
                        <span className="text-white"> ou </span>
                        <span className="text-[#a265ff]">
                        intégrations d&apos;IA
                      </span>
                        <span className="text-white">. Je suis motivé par </span>
                        <span className="text-[#a265ff]">l&apos;innovation</span>
                        <span className="text-white">
                        {" "}
                          et l&apos;envie d&apos;aider mes clients à réussir dans
                        un monde numérique en constante évolution.
                      </span>
                      </p>
                    </CardContent>
                  </Card>

                  {/* Skills */}
                  <Card className="w-[655px] h-[124px] bg-[#a265ff0d] rounded-[40px] border border-solid border-[#ffffff33]">
                    <CardContent className="p-0 h-full flex items-center justify-between px-8">
                      <Button
                          variant="outline"
                          className="w-9 h-9 bg-white rounded-[18px] p-0"
                      >
                        <img
                            className="w-[38px] h-[38px] object-cover"
                            alt="Previous"
                            src="/wireframe/left_arrow.png"
                        />
                      </Button>

                      <div className="flex items-center justify-center gap-8">
                        {techStack.map((tech, index) => (
                            <img
                                key={index}
                                className="w-[46px] h-[46px] object-cover"
                                alt={tech.alt}
                                src={tech.icon}
                            />
                        ))}
                      </div>

                      <Button
                          variant="outline"
                          className="w-9 h-9 bg-white rounded-[18px] p-0 rotate-180"
                      >
                        <img
                            className="w-[38px] h-[38px] object-cover rotate-180"
                            alt="Next"
                            src="/wireframe/right_arrow.png"
                        />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Process Section */}
            <section className="absolute w-[1470px] h-[1009px] top-[1079px] left-[18px]">
              <div className="relative w-[1440px] h-[1009px] left-3.5">
                <img
                    className="h-[983px] top-[26px] left-0 absolute w-[1440px] object-cover"
                    alt="Background"
                    src="/wireframe/fond_lune.png"
                />

                <h2 className="absolute w-[971px] top-0 left-[234px] [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[50px] text-center tracking-[0] leading-[49.6px] whitespace-nowrap">
                  <span className="text-white">ÉTAPES DE </span>
                  <span className="text-[#a265ff]">PROCESSUS</span>
                </h2>

                <img
                    className="w-[333px] top-[12px] left-[1139px] absolute h-[29px]"
                    alt="Arrow"
                    src="/arrow-9.svg"
                />

                <div className="absolute top-[142px] left-0 w-full flex flex-col gap-16">
                  {processSteps.map((step, index) => (
                      <div
                          key={index}
                          className="flex items-center gap-8 px-[218px]"
                      >
                        <div className="[text-shadow:0px_0px_24px_#a265ff] [font-family:'Days_One',Helvetica] font-normal text-white text-[90px] tracking-[0] leading-[normal] w-[146px] text-center">
                          {step.number}
                        </div>

                        <Card className="w-[870px] h-[204px] bg-[#221239] rounded-[40px] border border-solid border-[#ffffff33] shadow-[0px_0px_24px_#00000040]">
                          <CardContent className="p-0 h-full relative">
                            <div className="absolute w-6 h-[136px] top-[35px] left-[35px] rounded-[10px] border border-solid border-[#a265ff]" />

                            <div className="absolute w-[86px] top-[90px] left-[35px] -rotate-90 [font-family:'Days_One',Helvetica] font-normal text-[#a265ff] text-base text-center tracking-[0] leading-[15.9px]">
                              {step.step}
                            </div>

                            <div className="absolute top-[37px] left-[79px]">
                              <h3 className="[font-family:'Days_One',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[23.8px] mb-4">
                                {step.title}
                              </h3>
                              <p className="w-[699px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[15px] tracking-[0] leading-[normal]">
                                {step.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="absolute w-full top-[2061px] left-0 px-8">
              <h2 className="w-[971px] mx-auto [text-shadow:0px_0px_24px_#000000bf] [font-family:'Days_One',Helvetica] font-normal text-[50px] text-center tracking-[0] leading-[49.6px] whitespace-nowrap">
                <span className="text-white">MES </span>
                <span className="text-[#a265ff]">PROJETS</span>
              </h2>

              <img
                  className="w-[494px] absolute top-[13px] left-[978px] h-[29px]"
                  alt="Arrow"
                  src="/arrow-9.svg"
              />

              <div className="mt-[145px] grid grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Card
                        key={index}
                        className={`${index % 2 === 0 ? "w-[470px]" : "w-[654px]"} h-[411px] bg-[#a265ff0d] rounded-[40px] border border-solid border-[#ffffff33]`}
                    >
                      <CardContent className="p-0 flex flex-col h-full">
                        <div className="w-full h-[153px] overflow-hidden">
                          <img
                              className="w-full h-full object-cover"
                              alt="Project Image"
                              src={project.image}
                          />
                        </div>

                        <div className="flex flex-1 p-6 relative">
                          <div className="w-[22px] h-[181px] absolute left-[23px] rounded-[10px] border border-solid border-[#a265ff]" />

                          <div className="absolute w-[143px] top-[78px] left-[-34px] -rotate-90 [font-family:'Days_One',Helvetica] font-normal text-[#a265ff] text-base text-center tracking-[0] leading-[15.9px]">
                            {project.type}
                          </div>

                          <div className="ml-12">
                            <div className="flex justify-between items-center mb-4">
                              <h3 className="[font-family:'Days_One',Helvetica] font-normal text-white text-2xl tracking-[0] leading-[23.8px]">
                                {project.title}
                              </h3>
                              <img
                                  className="h-[29px]"
                                  alt="Arrow"
                                  src="/arrow-9.svg"
                              />
                            </div>

                            <p className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[15px] tracking-[0] leading-[normal] mb-4">
                              {project.description}
                            </p>

                            {project.technologies.length > 0 && (
                                <div className="flex gap-4 mt-auto">
                                  {project.technologies.map((tech, techIndex) => (
                                      <img
                                          key={techIndex}
                                          className="w-7 h-7 object-cover"
                                          alt={tech.alt}
                                          src={tech.icon}
                                      />
                                  ))}
                                </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section className="absolute w-full top-[3242px] left-0 px-8">
              <div className="relative">
                <img
                    className="h-[576px] w-full absolute top-[93px] left-0 object-cover"
                    alt="Background"
                    src="/calque-0-2-1.png"
                />

                <div className="relative z-10 flex justify-between">
                  <div className="w-[527px]">
                    <h2 className="[font-family:'Days_One',Helvetica] font-normal text-6xl tracking-[0] leading-[59.5px] mb-[120px]">
                    <span className="text-white">
                      ME
                      <br />
                    </span>
                      <span className="text-[#a265ff]">CONTACTER</span>
                    </h2>

                    <p className="w-[475px] [font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[15px] tracking-[0] leading-[normal] mb-[60px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <div className="flex flex-col gap-4">
                      {contactMethods.map((method, index) => (
                          <Card
                              key={index}
                              className="w-[463px] h-[84px] bg-[#1c0e30] rounded-3xl border border-solid border-[#ffffff33]"
                          >
                            <CardContent className="p-0 h-full flex items-center">
                              <div className="w-[80px] flex justify-center">
                                <img
                                    className="w-10 h-[30px] object-cover"
                                    alt={method.alt}
                                    src={method.icon}
                                />
                              </div>

                              {method.isLink ? (
                                  <a
                                      className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[22px] tracking-[0] leading-[normal] underline whitespace-nowrap"
                                      href={`mailto:${method.value}`}
                                      rel="noopener noreferrer"
                                      target="_blank"
                                  >
                                    {method.value}
                                  </a>
                              ) : (
                                  <span className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[22px] tracking-[0] leading-[normal] whitespace-nowrap">
                              {method.value}
                            </span>
                              )}
                            </CardContent>
                          </Card>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <img
                        className="w-[764px] absolute top-[79px] left-[-77px] h-[29px]"
                        alt="Arrow"
                        src="/arrow-9.svg"
                    />

                    <img
                        className="w-[513px] h-[437px] mt-[143px] object-cover"
                        alt="About"
                        src="/aboutddd-2.png"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="absolute w-[1504px] h-[249px] top-[4099px] left-0 bg-[#170b28] border border-solid border-[#ffffff33] flex items-center justify-between px-12">
              <div className="flex flex-col">
                <img
                    className="h-[158px] w-[158px] object-cover mb-4"
                    alt="Logo"
                    src="/wireframe/logo.png"
                />

                <h3 className="[font-family:'Days_One',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[31.7px] mb-4">
                  DeepBird
                </h3>

                <p className="[font-family:'Roboto',Helvetica] font-normal text-[#ffffffbf] text-[15px] tracking-[0] leading-[normal]">
                  © 2024–2025 Deepbird. Tous droits réservés
                </p>
              </div>

              <img
                  className="w-[734px] h-[29px] absolute top-[4150px] left-[222px]"
                  alt="Arrow"
                  src="/arrow-9.svg"
              />

              <div className="flex gap-16">
                <div className="relative">
                  <div className="w-[22px] h-[181px] absolute left-[-55px] rounded-[10px] border border-solid border-[#a265ff]" />

                  <div className="absolute w-[143px] top-[78px] left-[-113px] -rotate-90 [font-family:'Days_One',Helvetica] font-normal text-[#a265ff] text-base text-center tracking-[0] leading-[15.9px]">
                    COACHING
                  </div>

                  <ul className="flex flex-col gap-4">
                    {footerLinks.map((link, index) => (
                        <li key={index}>
                          <Button
                              variant="link"
                              className="p-0 h-auto [font-family:'Poppins',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal]"
                          >
                            {link}
                          </Button>
                        </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <div className="w-[22px] h-[181px] absolute left-[-55px] rounded-[10px] border border-solid border-[#a265ff]" />

                  <div className="absolute w-[178px] top-[78px] left-[-129px] -rotate-90 [font-family:'Days_One',Helvetica] font-normal text-[#a265ff] text-sm text-center tracking-[0] leading-[13.9px]">
                    RESEAUX SOCIAUX
                  </div>

                  <div className="flex flex-col gap-4">
                    {socialLinks.map((link, index) => (
                        <Button key={index} variant="link" className="p-0 h-auto">
                          <img
                              className="w-8 h-8 object-cover"
                              alt={link.alt}
                              src={link.icon}
                          />
                        </Button>
                    ))}
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
  );
};
