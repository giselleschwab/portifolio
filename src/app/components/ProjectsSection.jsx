"use client";
import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';
import { motion, useInView } from 'framer-motion';

const projectData = [
  {
    id: 1,
    title: "Site de rastreamento - Loggi",
    description: "Aqui vai uma descrição",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/giselleschwab/desafio-frontend-loggi",
    previewUrl: "https://desafio-frontend-loggi.vercel.app"
  },
  {
    id: 1,
    title: "Site de rastreamento - Loggi",
    description: "Aqui vai uma descrição",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/giselleschwab/desafio-frontend-loggi",
    previewUrl: "https://desafio-frontend-loggi.vercel.app"
  },
  {
    id: 1,
    title: "Site de rastreamento - Loggi",
    description: "Aqui vai uma descrição",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/giselleschwab/desafio-frontend-loggi",
    previewUrl: "https://desafio-frontend-loggi.vercel.app"
  },
  {
    id: 1,
    title: "Site de rastreamento - Loggi",
    description: "Aqui vai uma descrição",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/giselleschwab/desafio-frontend-loggi",
    previewUrl: "https://desafio-frontend-loggi.vercel.app"
  }
]

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  return (
    <section>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">Meus projetos</h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">{projectData.map((project, index) => (
        <motion.li
          key={index}
          variants={cardVariants}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          transition={{ duration: 0.3, delay: index * 0.4 }}
          >
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        </motion.li>

      ))}
      </ul>
    </section>
  )
}

export default ProjectsSection;