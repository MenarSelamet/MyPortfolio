import React from "react";
import Menar from './Menar.jpg'

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="uppercase tracking-widest py-4">About</h2>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            alias aspernatur impedit dolorem nam tempora minus doloremque fugit
            molestias accusantium dolorum vero eveniet, laudantium fugiat
            similique rem nisi blanditiis? Dolores.
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
