import React from "react";
import { IconBuilding } from "@tabler/icons-react";

const WorkExp = () => {
  const works = [
    {
      company: "Tisco Financial Group Public Company Limited",
      start: "2024 June",
      end: "Present",
      role: "Full-stack Developer",
      detail:
        "Tisco Financial Group Public Company Limited is a banking company in Thailand. My responsibility is to develop an e-commerce platform that supports Tisco’s business. This platform allows for self-configuration of website layouts and purchasing flows tailored to each business.",
    },
    {
      company: "Max Gadget Company Limited",
      start: "2022 August",
      end: "2024 May",
      role: "Software Engineer, Team Lead",
      detail:
        "Max Gadget is a wholesale and retail company, also known as Remax Thailand. My responsibility was to develop in-house software to enhance sales and manage data, including a warehouse management system and a customer relationship management system. The tech stack used included Angular, ReactJS, and NestJS with MongoDB.",
    },
    {
      company: "Litto Technology Company Limited",
      start: "2020 May",
      end: "2022 July",
      role: "Software Engineer",
      detail:
        "Litto Technology is a startup tech company that developed an e-commerce platform for online purchasing and delivery. My responsibility was to develop both the front-end and back-end using the Angular framework and ExpressJS, integrated with Firebase Realtime Database.",
    },
  ];

  const displayWorks = works.map((work, index) => (
    <div key={index}>
      <div className="flex items-stretch space-x-2">
        <IconBuilding />
        <div className="flex space-x-4 items-baseline">
          <span className="font-bold">{work.company}</span>
          <span className="italic text-sm">
            {work.start} - {work.end}
          </span>
        </div>
      </div>

      <div>
        <span className="italic text-base">{work.role}</span>
      </div>
      <p className="indent-8 whitespace-normal pt-2">{work.detail}</p>
    </div>
  ));

  return (
    <div className="space-y-4">
      <div className="font-bold text-xl">Work Experience</div>
      <div className="space-y-4">{displayWorks}</div>
    </div>
  );
};

const CoreSkills = () => {
  const skills = [
    {
      name: "JavaScript",
      category: "Programming Languages",
    },
    {
      name: "TypeScript",
      category: "Programming Languages",
    },
    {
      name: "MongoDB",
      category: "Databases & Tools",
    },
    {
      name: "PostgreSQL",
      category: "Databases & Tools",
    },
    {
      name: "Angular",
      category: "Databases & Tools",
    },
    {
      name: "ReactJs",
      category: "Databases & Tools",
    },
    {
      name: "Express",
      category: "Databases & Tools",
    },
    {
      name: "NestJs",
      category: "Databases & Tools",
    },
  ];

  const programmingLanguageList = skills
    .filter((skill) => skill.category == "Programming Languages")
    .map((skill, index) => (
      <span
        key={index}
        className="italic"
      >
        {index != 0 && ", "} {skill.name}
      </span>
    ));

  const ToolList = skills
    .filter((skill) => skill.category == "Databases & Tools")
    .map((skill, index) => (
      <span
        key={index}
        className="italic"
      >
        {index != 0 && ", "} {skill.name}
      </span>
    ));

  return (
    <div className="space-y-4">
      <div className="font-bold text-xl">Core Skill</div>
      <div>
        <div>
          <span className="font-bold">Programming Languages:</span>{" "}
          {programmingLanguageList}
        </div>
        <div>
          <span className="font-bold">Databases & Tools: </span> {ToolList}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="space-y-10">
      <p>
        Hello, my name's <b>Grit</b>. I'm a software developer who likes to
        learn and share knowledge with others.
      </p>
      <WorkExp />
      <CoreSkills />
    </div>
  );
}
