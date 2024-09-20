import React from "react";
import ExperienceCard from "../sub/ExperienceCard";

const Experience = () => {
  return (
    <div
      className="flex flex-col items-center justify-center "
      id="experiences"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
     Timeline
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ExperienceCard
          src="/graviton.png"
          title="Associate Technical Consultant"
          description="Developed and integrated REST APIs to efficiently connect multiple applications, databases and cloud services. Performed API testing and monitoring using Postman."
        />
        <ExperienceCard
          src="/graviton.png"
          title="Technical Consultant Intern"
          description="Developed responsive user interfaces using JavaScript Extension Toolkit and executed business logic through custom JavaScript to enhance application functionality."
        />
        <ExperienceCard
          src="/persist.png"
          title="Software Development Engineer Intern"
          description="Developed reusable front-end components using React.js for internal Component Library and collaborated with
cross-functional teams to design and implement new features.
"
        />
         <ExperienceCard
          src="/SGSITS.png"
          title="Bachelor of Technology in Information Technology [ 2020- 2024 ]"
          description="
 CGPA : 8.01"
        />

      </div>
    </div>
  );
};

export default Experience;