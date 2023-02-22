import React from "react";
import OnlineTherapist from "../assets/projects/OnlineTherapist.png";
import Hangman from "../assets/projects/Hangman.png";
import MadLibs from "../assets/projects/MadLibs.png";
import MovieProject from "../assets/projects/MovieProject.png";
import Card from "./Card";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="tracking-widest uppercase py-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title="Online Therapist"
            backgroundImage={OnlineTherapist}
            projectUrl="/therapist"
            tech="React JS"
            style="Tailwind CSS"
          />
          <Card
            title="Movie Project"
            backgroundImage={MovieProject}
            projectUrl="/movie"
            tech="Vanilla JavaScript"
            style="CSS"
          />
          <Card
            title="MadLibs Game"
            backgroundImage={MadLibs}
            projectUrl="/madlibs"
            tech="Vanilla JavaScript"
            style="CSS"
          />
          <Card
            title="Hangman Game"
            backgroundImage={Hangman}
            projectUrl="/hangman"
            tech="Vanilla JavaScript"
            style="CSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
