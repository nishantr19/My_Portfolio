"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";


const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
  >
    <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
      >
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
         My Portfolio Website
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[710px] w-auto h-auto"
      >
        <span>
         Hi I&apos;m,
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Nishant Singh Rai{" "}
          </span>
          {/* project exprience */}
        </span>
      </motion.div>

      <motion.p
        variants={slideInFromLeft(0.8)}
        className="text-lg text-gray-400 my-5 max-w-[850px]"
      >
     A 2024 graduate keen on contributing my skills as a Software Development Engineer.
      With a strong foundation in data structures and algorithms, I specialize in full-stack web development. <br/><br/>
I possess a diverse skill set, including C++, Java, JavaScript, and TypeScript. I excel in front-end technologies like HTML, CSS, React.js, and Next.js, and have experience in back-end development with Node.js and Express.js. Additionally, I have strong database management skills using MongoDB and efficient version control with Git and GitHub.
<br/><br/>
Open to networking and exploring potential opportunities.
      </motion.p>
      
      <motion.a
        variants={slideInFromLeft(1)}
        href="https://drive.google.com/file/d/1fCbi0hm01G4aW3OFSCsjtni6H2Isx7lD/view?usp=sharing"
        target="_blank"
        className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[150px]"
      >
        My Resume 
      </motion.a>
      
    </div>

    <motion.div
      variants={slideInFromRight(0.8)}
      className="w-full h-full flex justify-center items-center"
    >
      <Image
        src="/sde1.png"
        alt="work icons"
        height={650}
        width={650}
      />
     
    </motion.div>
  </motion.div>
  )
}

export default HeroContent;
