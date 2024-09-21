// "use client";
// import React, { useTransition, useState } from 'react';
// import TabButton from './TabButton';
// import { FaJs, FaPhp, FaNodeJs, FaReact, FaDatabase, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
// import { SiTailwindcss } from 'react-icons/si';

// const TAB_DATA = [
//     {
//         title: "Skills",
//         id: "skills",
//         content: (
//             <ul className="flex justify-center flex-wrap gap-4">
//                 <li className="bg-primary-500 rounded-full p-4 text-4xl"><FaJs /></li>
//                 <li className="bg-primary-500 rounded-full p-4 text-4xl"><FaPhp /></li>
//                 <li className="bg-primary-500 rounded-full p-4 text-4xl"><FaNodeJs /></li>
//                 <li className="bg-primary-500 rounded-full p-4 text-4xl"><FaReact /></li>
//                 <li className="bg-primary-500 rounded-full p-4 text-4xl"><FaDatabase /></li>
//                 <li className="bg-primary-500 rounded-full p-4 text-4xl"><FaCss3Alt /></li>
//                 <li className="bg-primary-500 rounded-full p-4 text-4xl"><FaBootstrap /></li>
//                 <li className="bg-primary-500 rounded-full p-4 text-4xl"><SiTailwindcss /></li>
//             </ul>
//         )
//     },

//     {
//         title: "Education",
//         id: "education",
//         content: (
//             <ul>
//                 <li>Estudante de Engenharia de Software</li>
//                 <li>Bootcamp de Desenvolvimento Web Front-End - Laboratoria</li>
//                 <li>PhD em Ciências Biológicas</li>
//             </ul>
//         )
//     }
// ]

// const AboutSection = () => {
//     const [tab, setTab] = useState('skills');
//     const [isPending, startTransition] = useTransition();

//     const handleTabChange = (id) => {
//         startTransition(() => {
//             setTab(id);
//         });
//     }

//     return (
//         <section className="text-white">
//             <div className="md:grid md:-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
//                 <div>
//                     <h2 className="text-4xl font-bold text-white mb-4">
//                         Sobre mim
//                     </h2>
//                     <p className="text-base lg:text-lg">
//                         Sou Desenvolvedora e Bióloga apaixonada por tecnologia e ciência. Com uma formação sólida em biologia, encontrei na programação uma nova paixão e uma maneira inovadora de resolver problemas e criar soluções impactantes.
//                         Domino diversas tecnologias, incluindo JavaScript, HTML, CSS, Bootstrap, PHP, React, Next.js e Node.js. Meu objetivo é continuar evoluindo como profissional, contribuindo para projetos que façam a diferença.
//                     </p>
//                     <div className="flex flex-row gap-4 mt-8">
//                         <TabButton
//                             selectTab={() => handleTabChange("skills")}
//                             active={tab === "skills"}>
//                             {" "}
//                             Skills{" "}
//                         </TabButton>

//                         <TabButton
//                             selectTab={() => handleTabChange("education")}
//                             active={tab === "education"}>
//                             {" "}
//                             Education{" "}
//                         </TabButton>

//                         <TabButton
//                             selectTab={() => handleTabChange("certification")}
//                             active={tab === "certification"}>
//                             {" "}
//                             Certification{" "}
//                         </TabButton>
//                     </div>
//                     <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default AboutSection