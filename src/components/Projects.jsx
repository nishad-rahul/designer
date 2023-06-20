import React from "react";
import { shmockup1, shmockup2 } from "../assets";

const Projects = () => {
  return (
    <div className="bg-primary text-[1rem] text-white flex  flex-col justify-evenly items-start sm:h-[120rem] w-[80vw] m-auto xs:h-[90rem]">
      <div className="title text-[3rem] text-secondary font-bold mt-10">
        <p>PROJECTS</p>
      </div>
      <div className="section-1 flex sm:flex-row xs:flex-col overflow-hidden sm:mb-[5rem]">
        <div className="SHASTRAM flex xs:flex-col sm:flex-row  items-center">
          <div className="content-x sm:w-[40vw]">
            <p className="mb-5 font-semibold">SHASTRAM -X </p>
            <p className="sm:font-extralight xs:light">
              About Project X Project X is an ambitious and groundbreaking
              initiative undertaken by Sahastram Inc., a leading technology
              company committed to driving innovation and shaping the future.
              Born out of a shared vision to revolutionize the way we live,
              work, and interact, Project X represents the pinnacle of
              Sahastram research and development endeavors. At its core,
              Project X aims to harness cutting-edge technologies and leverage
              advanced artificial intelligence systems to tackle some of
              society most pressing challenges. By pushing the boundaries of
              what is possible, Sahastram Inc. seeks to create a transformative
              impact on various industries and empower individuals and
              organizations with groundbreaking solutions.
            </p>
          </div>
        </div>

        <div className="hero-img sm:h-[40rem] sm:w-[40vw]">
          <img src={shmockup1} alt="dekstop" className="h-full w-full " />
        </div>
      </div>

      <div className="content-2">
        <p className="font-extralight">
          Project X is driven by a relentless pursuit of excellence, where each
          milestone achieved becomes a stepping stone toward even greater
          advancements. Sahastram Inc. envisions a future where intelligent
          systems seamlessly integrate into our daily lives, enhancing
          efficiency, sustainability, and overall well-being.
        </p>
      </div>

      <div className="img-2">
        <img src={shmockup2} alt="mockup" />
      </div>

      <div className="content-3 mb-10">
        <p className="font-extralight">
          {" "}
          Project X places a strong emphasis on privacy, security, and social
          impact. Every solution developed within the project undergoes rigorous
          testing and assessment to ensure it aligns with the highest standards
          of quality, reliability, and safety.
        </p>
      </div>

      <button className="bg-secondary p-3 rounded-sm sm:mt-10 mb-10">
        <p>Coming Soon</p>
      </button>
    </div>
  );
};

export default Projects;
