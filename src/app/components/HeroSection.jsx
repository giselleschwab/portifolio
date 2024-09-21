"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Giselle Schwab <br></br>
            </span>
            <span className="text-white">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "Full Stack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </span>
          </h1>
          <div>
            <div class="flex gap-4">
              <a
                href="https://github.com/giselleschwab"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full hover:from-purple-500 hover:via-pink-500 hover:to-secondary-500 transition-all duration-300"
                  size={45}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/giselleschwab/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:via-pink-500 hover:to-secondary-500 transition-all duration-300">
                  <FaLinkedinIn size={26} className="text-white" />
                </button>
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#A970FF] w-[310px] h-[310px] lg:w-[420px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/Foto-perfil.png"
              alt="Foto perfil"
              className="absolute object-cover w-full h-full"
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
