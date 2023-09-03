import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex justify-center items-center">
          <img src={logo} alt="resumoai_logo" className="w-12 object-contain" />
          <h1 className="text-3xl font-extrabold">ResumoAI</h1>
        </div>

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/adriel45dev", "_blank")
          }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Resuma textos com <br className="max-md:hidden" />
        <span className="blue_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplifique sua leitura com o ResumoAI, um resumidor de artigos de
        código aberto que transforma artigos longos em resumos claros e
        concisos.
      </h2>
    </header>
  );
};

export default Hero;
