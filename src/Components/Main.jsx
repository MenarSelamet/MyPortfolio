import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div id="home" className="relative w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 pt-12 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-red-900">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4">
            Hi, I'm <span className="text-stone-500">Menar Selamet</span>
          </h1>
          <h1 className="py-2">A Front-End Web Developer</h1>
          <p className="py-4 text-red-700 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error modi
            excepturi illo voluptatibus deleniti assumenda natus ab dolore
            aperiam deserunt totam, impedit voluptates laudantium sit
            accusantium rem aspernatur fugit nemo.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/menar-selamet-41bb58240/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/MenarSelamet"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a href="/resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
