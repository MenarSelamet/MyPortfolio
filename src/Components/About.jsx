import React from "react";
import Menar from './Menar.jpg'

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="uppercase tracking-widest py-4">About</h2>
          <p className="py-2">
            Hi, and welcome .. I am Menar, a frontend Web Developer
            specializing in JavaScript frameworks and libraries and development
            platforms for hosting databases with experience in building
            single-page dynamic user-friendly web apps. While I come from a
            different career background, I have always been immensely interested
            in technology, and I find that in the world of coding, there's
            always more to learn and more to gain, which is what makes this
            field ever more interesting. I am on a continuous journey of growth
            while obtaining more knowledge and gaining expertise that would be
            an essence to my work, professionally and personally. Feel free to
            get in touch with me if you feel like we can collaborate on a
            project or maybe work together ..
          </p>
          <a
            href="https://www.canva.com/design/DAFSRmWYo_k/B69moS0ux5KGgfvRBzZvhA/view?utm_content=DAFSRmWYo_k&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
            target="_blank"
            rel="noreferrer"
            className="py-2 underline cursor-pointer"
          >
            Check out my Resume
          </a>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300">
          <img
            src={Menar}
            alt="/"
            width="350"
            height="130"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
