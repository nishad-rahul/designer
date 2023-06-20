import {useState , useRef, useEffect} from "react";
import { easeInOut, motion } from "framer-motion";
import { arrow, web3 } from "../assets/index";
import { team } from "../assets/index";
import { mockup, mock } from "../assets";
import { contact } from "../assets";
import { navLinks } from "../constants/constants";

import styles from "../style";
import { line, mod, desktopmockup, mobilemockup ,  } from "../assets";
import { images } from "../assets/images";





// use ref and use state 





const Herosection = () => {
  // functions
  const scrollDown = () => {
    const windowheight = window.innerHeight;
    window.scrollTo(0, window.pageYOffset + windowheight * 1);
  };

  // Framer motion animation

  const hero = {
    animate: {
      transition: {
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const letterAnimation = {
    initial: {
      y: 400,
    },
    animate: {
      y: 0,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.5,
      },
    },
 
  };

  return (
    <motion.div
      className="bg-primary px-12 text-secondary flex-col font-Monsterrat sm:h-[500px] h-screen flex justify-evenly items-center hero-section w-screen"
      variants={hero}
      animate="animate"
    >
      <div className="circle absolute h-[10rem] w-[10rem] bg-circle -translate:(50% ,50%) blur-[8rem] -z-5"></div>
      <motion.div
        className="flex flex-col justify-around sm:leading-[8rem] leading-[3rem] h-[14rem] items-center overflow-hidden content-div"
        variants={hero}
        animate="animate"
      >
        <motion.p
          className="text-[1.5rem] sm:[3rem] flex h-[2rem] text-white font-Monsterrat font-bold tracking-wider"
          variants={letterAnimation}
          initial="initial"
          animate="animate"
        >
          Your vision our designs
        </motion.p>
        <motion.p
          className="text-[5rem] sm:[6rem] flex xs:font-bold sm:font-black leading-[5rem] xs:ml-3 font-Monsterrat tracking-wider"
          variants={letterAnimation}
          initial="initial"
          animate="animate"
        >
          CREATIVE DESIGN
        </motion.p>
      </motion.div>

      <div
        onClick={scrollDown}
        className="scroll h-[60px] text-[12px] w-[60px] border-secondary border-2 rounded-full flex self-center justify-center items-center animate-bounce mt-10"
      >
        <motion.p>
          <img src={arrow} alt="arrow"></img>
        </motion.p>
      </div>
    </motion.div>
  );
};

const aboutVariants = {
  offscreen: {
    opacity: 1,
    y: 400,
  },
  onscreen: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
    },
  },
};

const About = () => {
  return (
    <div className="flex flex-col items-center sm:flex-row w-full max-w-6xl mx-auto w-max-[90vw] h-screen text-white">
      <motion.div className="flex-1 p-6  ">
        <motion.div
          
        >
          <motion.p
            className="text-lg sm:text-2xl overflow-hidden font-light mb-10 "
           
          >
            Sahastram is a branding and digital studio that creates, shapes and
            elevates brands. A team that puts people at the heart of everything
            we do. From start-ups to shake-ups we offer a full-service creative
            experience. Partnering with you every step of the way.
          </motion.p>
          <motion.p
            className="text-lg  sm:text-2xl overflow-hidden font-light mb-10"
         
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            quae cum enim deserunt debitis inventore doloremque eius nulla
            facere numquam.
          </motion.p>
        </motion.div>
      </motion.div>

      <div className="flex-1 xs:w-[90vw] mx-auto sm:order-1">
        <img src={team} alt="team" className="object-cover w-screen h-full" />
      </div>
    </div>
  );
};

const Projectx = () => {
  return (
    <div
      className="project-x bg-primary  w-[82vw] sm:h-screen xs:h-[120rem]  overflow-hidden m-auto text-white flex  
    flex-col items-start mt-16 
     justify-start "
    >
      <div className="content-project ">
        <p
          className="main-content xs:text-4xl sm:text-6xl font-bold -bg-gradient-to-r from-red-500 to-blue-500 
           mb-3"
        >
          {" "}
          SHASTRAM X
        </p>
        <p className="secondary-content text-xl text-gradient font-light">
          {" "}
          EARN WHILE WATCHING YOUR FAVIOURATE CREATORS
        </p>
      </div>
      <div className="Main-content flex w-[90vw] sm:flex-row flex-col-reverse">
        <div className="projectx-morecontent  items-center justify-center sm:text-2xl  font-light text-xl">
          <p className="mt-16 flex flex-1 sm:w-[40rem] w-[25rem]">
            Introducing Sahastram Incs groundbreaking initiative: Project-X, an
            innovative Web3-based video streaming platform poised to
            revolutionize the digital entertainment landscape. With a multitude
            of distinct advantages over conventional video streaming platforms,
            Project-X transcends traditional boundaries and offers an
            unparalleled viewing experience.
          </p>
          <p className="mt-10 flex flex-1 sm:w-[40rem] w-[25rem]">
            At the core of Project-X lies a pioneering concept that sets it
            apart from its predecessors: viewers have the unique opportunity to
            earn while enjoying their favorite content.
          </p>
          <a href="/projects">
          <button className="bg-secondary mt-16 p-3 w-[10rem] hover:w-[11rem]">
            {" "}
            SEE MORE
          </button>
          </a>
        </div>
        <div className="mockup-container w-[20rem] flex sm:flex-row flex-col">
          <img src={mock} alt="mockup" className="h-full w-full"></img>
          <img src={mockup} alt="mockup" className="h-full w-full"></img>
        </div>
      </div>
    </div>
  );
};

const Services = () => {

  
  return (
    <div className= " bg-white sm:h-screen xs:h-[160rem]  overflow-hidden  w-screen " >

      
      <div className="services-section w-[90vw] sm:h-[45rem] xs:h-[90rem] m-auto flex flex-col items-start sm:justify-evenly justify-start text-white" id="no-scroll">
        <div className="main-content-section w-[90vw] h-[30rem] flex xs:flex-col sm:flex-row sm:items-center xs:items-start justify-between text-black">
          <div className= "no-scroll-section  flex flex-col items-start justify-around sm:w-1/2 xs:max-w-[90vw] h-[30rem]">
            <p className="sm:text-[3rem] text-[2rem] mt-10 font-bold">LETS CREATE</p>
            <p className="text-10 font-light">
              We offer a wide range of services that you dont have to search. A
              one stop solution for all your problems Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Adipisci, quos!
            </p>
            <div>
              <img src={mod} alt="mod" className="h-[20rem] w-[30rem]" />
            </div>
          </div>
          <div className="line mx-5 sm:flex xs:hidden">
            <img src={line} alt="line" className="h-[30rem]" />
          </div>
          <div className="main-scroll-section flex flex-col justify-center sm:h-[80rem]  xs:h-[80rem] items-start xs:py-[60rem] sm:py-[50rem] bg-white  sm:w-1/2 w-[90vw] m-auto xs:overflow-visible sm:overflow-y-hidden sm:mt-[3rem]" id="scroll-section">
            {/* SCROLL SECTION 1 */}
            <div className="scroll-section">
              <p className="text-[2rem] xs:mt-10  ">WEBSITE DEVELOPMENT</p>
              <div className="mockup h-[30rem] w-[35rem]">
                <img
                  src={desktopmockup}
                  alt="dekstop"
                  className="h-full w-full xs:-mx-[5rem]"
                />
              </div>
              <p className="text-[2rem] font-light"> DESIGN . BUILD . DEPLOY</p>
            </div>

            {/* SCROLL SECTION 2 */}
            <div className="scroll-section-2">
              <p className="text-[2rem] xs:mt-10">ANDROID DEVELOPMENT</p>
              <div className="mockup h-[30rem] w-[35rem]">
                <img
                  src={mobilemockup}
                  alt="dekstop"
                  className="h-full w-full xs:-mx-[5rem]"
                />
              </div>
              <p className="text-[2rem] font-extralight">
                {" "}
                DESIGN . BUILD . DEPLOY
              </p>
            </div>

            {/* SCROLL SECTION 3 */}
            <div className="scroll-section-3">
              <p className="text-[2rem] xs:mt-10">WEB-3</p>
              <div className="mockup h-[30rem] sm:w-[35rem] xs:w-[80vw] ">
                <img
                  src={web3}
                  alt="dekstop"
                  className="h-full w-full "
                />
              </div>
              <p className="text-[2rem] font-thin"> DESIGN . BUILD . DEPLOY</p>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  );
};

const Contacts = () => {
  return (
    <div className="contacts relative w-[90vw] h-screen bg-primary flex items-center xs:justify-start sm:justify-center">
      <div className="content-section xs:w-[80vw] w-[60vw] flex  flex-col items-center z-10 text-white justify-around">
        <p className="xs:text-[3rem] sm:text-[6rem] font-black">GET IN TOUCH</p>
        <p className=" xs:text-[1rem] sm:text-[2rem] font-light mb-10 ">
          Lets talk and sort things out we do work professionally
        </p>
        <a href="/contact">
        <button className="p-4 bg-secondary ml-[6rem]">Contact us </button>
        </a>
      </div>
      <div className="img absolute top-30 right-0 xs:h-[20rem] xs:w-[20rem] sm:h-[30rem] sm:w-[35rem] ">
        <img src={contact} alt="contact" className="h-full w-full " />
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer-section bg-white h-[20rem] w-screen flex justify-evenly overflow-hidden ">
      <div className="section-1 text-font-med flex flex-col xs:text-[1rem] sm:text-[25px] w-[33%] justify-around items-center font-bold list-none">
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a href={`/${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </div>
      <hr className="bg-black h-[20rem] m-5 w-[1px]" />
      <div className="section-2  flex flex-col justify-center w-[33%] items-center ">
        <p className="sm:text-[3rem] xs:text-[2rem] font-bold "> SHASTRAM</p>
        <p className="text-[1rem] font-semi-bold ">copyright@2022</p>
      </div>
      <hr className="bg-black h-[20rem]  m-5 w-[1px]" />
      <div className="section-3 flex flex-col justify-around w-[33%] items-start xs:text-[12px] sm:text-[1rem]">
        <p>
           Bilaspur , Chhattisgarh India  495009 Get directions
        </p>
        <p>Katowice, PL Al. Korfantego 2,40-004towice Get directions</p>
      </div>
    </div>
  );
};

const Home = () => {
  
   
  return (
    <div>
      <Herosection />
      <About />
      <Projectx />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
