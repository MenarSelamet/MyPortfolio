import React from "react";


const Card = ({ title, backgroundImage, projectUrl, tech, style }) => {
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

          <a href={projectUrl}>
            <p className="pb-2 pt-2 mt-2 text-center text-red-400 rounded-lg bg-white font-bold text-lg cursor-pointer">
              More Info
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
