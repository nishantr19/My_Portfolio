import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 z-[100]"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/acp.jpg"
          link="https://github.com/nishantr19/AcePrep"
          title="AcePrep"
          description="AcePrep is an innovative full-stack web application developed with Next.js that collects and displays a variety of placement interview experiences from different companies."
        />
        <ProjectCard
          src="/aura.jpg"
          link="https://github.com/nishantr19/AuraScapes"
          title="AuraScapes"
          description="AuroScapes is a Full Stack Web Application that showcases undiscovered natural places and aesthetically pleasing destinations from around the world."
        />
        <ProjectCard
          src="/ghb.png"
          link="https://github.com/nishantr19/Crypto-Tracer"
          title="Crypto-Tracer"
          description="A web application designed to monitor and track the real-time price, total volume, and market capitalization of over 10,000 cryptocurrencies."
        />
      </div>
    </div>
  );
};

export default Projects;
