import React from "react";
import images from "../assets/images";

const Works = () => {
  return (
    <div className="bg-primary flex  justify-center flex-col items-start w-[90vw] h-[600px] m-auto mt-[5rem]">
      <div className="content text-secondary xs:text-[4rem] font-bold text-[6rem] ">
        <h1>WORKS</h1>
      </div>
      <div className="carousel w-[90vw] h-[400px]  overflow-x-scroll overflow-y-hidden  m-auto flex   ">
        <div className="innercarousel cursor-grab flex">
          {images.map(image => {
            return(
            <div className="image-container xs:min-w-[15rem] xs:h-[15rem] sm:min-w-[30rem] sm:h-[30rem] p-2 overflow-hidden " key={image}>
              <img src={image} className="h-full w-full pointer-events-none rounded-[5px]"  alt="image"></img>
              
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Works;
