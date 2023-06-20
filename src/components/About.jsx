import React from 'react'
import { team  , team1 ,team2 ,team3} from '../assets'

const About = () => {
  return (
    <div className='bg-primary xs:text-[1rem] sm:text-[20px] w-[80vw] m-auto xs:h-[90rem] sm:h-[110rem] text-white flex flex-col justify-evenly items-start font-extralight'>
        <div className="title text-[3rem] sm:mb-10 xs:mb-2 mt-10 text-secondary font-bold">
            <h2>ABOUT</h2>
        </div>
     <div className="content-section flex items-center flex-col justify-between">
        <div className="content xs:mb-10">
       
        <p>Sahastram Pvt Ltd is a dynamic tech-based startup that began in March 2022 as a crypto-based firm. We learned and emerged stronger from the 2022 crypto scenario, and have since pivoted our services to become an IT service provider and consultant.
</p>
        </div>
        <div className="flex-1 xs:w-[80vw] mx-auto mb-10 sm:order-1 sm:h-[20rem] overflow-hidden">
        <img src={team} alt="team" className="object-cover w-screen h-full" />
      </div>
    </div>

    <div className="howitstarted flex xs:flex-col  ">
        <div className="title mb-5 text-[2rem] text-secondary font-bold">
            <p>HOW IT ALL STARTED ?</p>
        </div>
        <div className="content">
        In conclusion, Sahastram Pvt Ltd is a tech-based startup that provides exceptional IT, tech, and PR services. Our dedication to operating with integrity and ethics and becoming a trusted partner for our clients sets us apart. We offer customized solutions that address our clients’ specific needs, allowing them to achieve their business objectives
        </div>
    </div>
    {/* <div className="pdf-content">
        
    </div> */}

    <div className="ourteam flex flex-col items-start justify-evenly h-[20rem] w-[80vw] mx-2 mt-10">
        <p className=' xs:mb-5 sm:mb-10 text-[2rem] text-secondary font-bold'>OUR TEAM</p>
        <div className="ourteam-images flex justify-between xs:w-[80vw] sm:w-[50vw] sm:m-auto">

       <div className="first-mem flex flex-col items-center">
        <img src={team1} alt="team1"  className='h-[7rem] w-[7rem]'/>
        <div className="content flex flex-col items-center mt-5 ">
            <p> Harsh Sudarshan</p>
            <p className='text-[10px]'>Founder & Managing Director </p>

        </div>
       </div>

       <div className="second-mem flex flex-col items-center">
        <img src={team2} alt="team2" className='h-[7rem] w-[7rem] '/>
        <div className="content flex flex-col items-center mt-5">
            <p> Bratin Chakrabarty</p>
            <p className='text-[10px]'> COO  </p>

        </div>
       </div>

       <div className="third-mem flex flex-col items-center">
        <img src={team3} alt="team3" className='h-[7rem] w-[7rem]'/>
        <div className="content  flex flex-col items-center mt-5">
            <p> Ashutosh Tiwari</p>
            <p className = "text-[10px]"> Co-Founder </p>

        </div>
       </div>
       </div>
        </div>
    </div>

    
  )
}

export default About