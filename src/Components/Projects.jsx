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
            projectCode="https://github.com/MenarSelamet/RE-Minded"
            projectDemo="https://main--jocular-kitsune-979dd9.netlify.app/"
            tech="React JS"
            style="Tailwind CSS"
          />
          <Card
            title="Movie Project"
            backgroundImage={MovieProject}
            projectCode="https://github.com/MenarSelamet/movie-project-piratesbay"
            projectDemo="https://cerulean-douhua-fd29c1.netlify.app/#"
            tech="Vanilla JavaScript"
            style="CSS"
          />
          <Card
            title="MadLibs Game"
            backgroundImage={MadLibs}
            projectCode="https://github.com/MenarSelamet/mad-libs-callthepolice"
            projectDemo="https://fluffy-haupia-330d9a.netlify.app/"
            tech="Vanilla JavaScript"
            style="CSS"
          />

          <Card
            title="Hangman Game"
            backgroundImage={Hangman}
            projectCode="https://github.com/MenarSelamet/hangman-firsttime"
            projectDemo="https://comfy-flan-05b548.netlify.app/"
            tech="Vanilla JavaScript"
            style="CSS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
