import React from "react";


const Card = ({ title, backgroundImage, projectCode, projectDemo, tech, style }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-stone-400 to-zinc-900">
        <img
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImage}
          alt="/"
        />
        <div className="text-white hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl tracking-wider text-center">{title}</h3>
          <p className=" pt-2 text-center">{tech}</p>
          <p className=" pt-2 text-center">{style}</p>

          <div className="flex flex-row justify-evenly mt-4">
            <a href={projectDemo} target="_blank" rel="noreferrer">
              <p className=" p-2 text-center text-red-400 rounded-lg bg-white font-bold text-lg cursor-pointer">
                Demo
              </p>
            </a>
            <a href={projectCode} target="_blank" rel="noreferrer">
              <p className="p-2 text-center text-red-400 rounded-lg bg-white font-bold text-lg cursor-pointer">
                Code
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
