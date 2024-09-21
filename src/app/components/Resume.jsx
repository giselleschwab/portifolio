"use client";
import {
  FaJs,
  FaPhp,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";
// about data
const about = {
  title: "Sobre mim",
  description:
    "Sou Desenvolvedora e Bióloga apaixonada por tecnologia e ciência. Com uma formação sólida em biologia, encontrei na programação uma nova paixão e uma maneira inovadora de resolver problemas e criar soluções impactantes. Domino diversas tecnologias, incluindo JavaScript, HTML, CSS, Bootstrap, PHP, React, Next.js e Node.js. Meu objetivo é continuar evoluindo como profissional, contribuindo para projetos que façam a diferença.",
  info: [
    {
      fielName: "Name",
      fieldValue: "Giselle Schwab Silva",
    },
    {
      fielName: "Telefone",
      fieldValue: "(19) 98451-1609",
    },
    {
      fielName: "Experiência",
      fieldValue: "1 ano",
    },
    {
      fielName: "Nacionalidade",
      fieldValue: "Brasileira",
    },
    {
      fielName: "E-mail",
      fieldValue: "giselleschwab@gmail.com",
    },
    {
      fielName: "Idiomas",
      fieldValue: "Português (nativo), Inglês",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/icons/badge.svg",
  title: "My experience",
  description: "lalalalallalalalalalalalalala",
  items: [
    {
      company: "Yeb - Inteligência de Mercado",
      position: "Desenvolvedora Full Stack",
      duration: "2023 - Present",
    },
    {
      company: "Unesp - Rio Claro",
      position: "Pesquisadora",
      duration: "2016 - 2022",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/icons/cap.svg",
  title: "Formação acadêmica",
  description: "lalalalallalalalalalalalalala",
  items: [
    {
      institution: "Estácio",
      degree: "Engenharia de Software",
      duration: "2023 - Present",
    },
    {
      institution: "Laboratoria",
      degree: "Bootcamp de Desenvolvimento Web",
      duration: "2023",
    },
    {
      institution: "Unesp",
      degree: "Pós Graduação em Ciências Biológicas",
      duration: "2016-2022",
    },
    {
      institution: "Universidade Estadual do Centro-Oeste (Unicentro)",
      degree: "Ciências Biológicas",
      duration: "2010-2015",
    },
  ],
};

const skills = {
  title: "Skills",
  description: "lalalala",
  skillList: [
    {
      icon: (
        <li className="bg-primary-500 rounded-full p-4 text-4xl">
          <FaJs />
        </li>
      ),
      name: "JavaScript",
    },
    {
      icon: (
        <li className="bg-primary-500 rounded-full p-4 text-4xl">
          <FaReact />
        </li>
      ),
      name: "React",
    },
    {
      icon: (
        <li className="bg-primary-500 rounded-full p-4 text-4xl">
          <FaPhp />
        </li>
      ),
      name: "PHP",
    },
    {
      icon: (
        <li className="bg-primary-500 rounded-full p-4 text-4xl">
          <FaNodeJs />
        </li>
      ),
      name: "Node.js",
    },
    {
      icon: (
        <li className="bg-primary-500 rounded-full p-4 text-4xl">
          <FaDatabase />
        </li>
      ),
      name: "MySQL",
    },
    {
      icon: (
        <li className="bg-primary-500 rounded-full p-4 text-4xl">
          <FaCss3Alt />
        </li>
      ),
      name: "CSS",
    },
    {
      icon: (
        <li className="bg-primary-500 rounded-full p-4 text-4xl">
          <FaBootstrap />
        </li>
      ),
      name: "Bootstrap",
    },
    {
      icon: (
        <li className="bg-primary-500 rounded-full p-4 text-4xl">
          <SiTailwindcss />
        </li>
      ),
      name: "Tailwind",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}

      className="min-h[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs>
            <TabsList>
              <TabsTrigger>Experience</TabsTrigger>
              <TabsTrigger>Education</TabsTrigger>
              <TabsTrigger>Skills</TabsTrigger>
              <TabsTrigger>About me</TabsTrigger>
            </TabsList>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
