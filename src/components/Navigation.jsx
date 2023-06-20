import { useEffect, useState } from "react";
import { logo, close, burger, facebook, instagram, linkedin } from "../assets";
import { navLinks, socialMedia } from "../constants/constants";
import { animate, easeInOut, motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navigation = () => {
  // variants

  const clickburger = {
    hidden: {
      y: -400,
    
    },
    show: {
      y: 0,
      
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    },
    exit: {
      y: -400,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1,
      },
    }
  };

  // on click animations

  const [Toggle, setToggle] = useState(false);
 
  // for not to scroll when the div is active 
  useEffect (() => {
   if (Toggle){
    document.body.style.overflow = 'hidden'
   }else{
    document.body.style.overflow = "auto"

   } [Toggle]})
  
  

  const toggleHandler = () => {
    setToggle((prev) => !prev);

  };

  return (
    <div
      className={` w-[90vw] m-auto h-[60px] px-6 main-navigation
    flex flex-col `}
    >
      {/* for wide screen */}
      <div className="sm:flex hidden justify-between items-center header  -mt-6 ">
        <a href= '/'>
        <img src={logo} alt="logo" className="h-[8rem]   w-auto z-10 "  />
        </a>
        <ul
          className="flex items-center justify-end space-x-8 pl-10
   font-Monsterat text-[1rem]  text-white text-base"
        >
          {navLinks.map((nav) => (
            <li key={nav.id} >
              < a href ={`${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        {/* <button className="bg-secondary text-white px-4 py-2 rounded">
    Contact Us
  </button> */}
      </div>

      {/* for mobile screen  */}
      <div className="sm:hidden flex justify-between items-center z-50 h-[5rem] bg-primary mobile-screen overflow-hidden ">
        <a href="/">
        <img src={logo} alt="logo" className="h-[5rem] p-0 mb-3 " />
        </a>
        <motion.div className="toogle">
          <img
            src={Toggle ? close : burger}     
            onClick={toggleHandler}
            alt="menu"
            className=" object-fit w-[40px] h-[30px] z-10 rounded-full mt-1 "
           
          />
     
      
        </motion.div>
      </div>
           {/* for the popup navigation  */}
      <motion.div
            className={`${Toggle ? "flex" : "hidden" } 

      absolute top-20 left-0  w-full h-screen 
       bg flex-col bg-primary z-30 popup `
      
      } 
      variants = {clickburger}
      initial = {Toggle ? "show" : "hidden"}
      animate={Toggle ? "show" : "exit"}
      exit = "exit"
          >
            <ul
              className="flex items-start px-10 justify-end 
    font-Monsterat text-[1rem] flex-col text-white text-base mt-10" 
   
            >
              {navLinks.map((nav) => (
                <li key={nav.id} className="mb-12 text-[2rem] font-black">
                  <a href={`/${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <div className="links-container">
                <p>JOIN US </p>
                <div className="links flex mt-8">
                  <img src={instagram} className="pr-6"></img>
                  <img src={linkedin} className="pr-6"></img>
                  <img src={facebook}></img>
                </div>
              </div>
            </ul>
          </motion.div>
    </div>
  );
};
export default Navigation;
