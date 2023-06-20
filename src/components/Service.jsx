import React from 'react'
import { mobilemockup ,desktopmockup ,web3 , uiux} from '../assets'

const Service = () => {
  return (
    <div className = "services-section bg-primary text-white xs:h-[160rem] sm:h-[110rem] flex flex-col justify-around w-[80vw] m-auto items-start  ">
        <div className="title sm:mt-40 mb-10">
            <p className='xs:text-[3rem] sm:text-[5rem] mb-10 text-secondary font-bold'>SERVICES</p>
        </div>
     <div className="android-development flex justify-around items-center sm:h-[20rem] h-[30rem]  sm:flex-row xs:flex-col" >
      <div className="content">
        <h1 className = "text-secondary font-semi-bold text-[20px]">ANDROID DEVELOPMENT</h1>
        <p className = "font-extralight text-[20px]">Craft powerful and intuitive mobile applications for the Android platform, delivering engaging user experiences and leveraging the latest technologies for optimal performance.</p>
      </div>
      <div className="mobile-mockup sm:h-[30rem] sm:w-[60rem] xs:w-[27rem]">
                  <img
                    src={mobilemockup}
                    alt="dekstop"
                    className="h-full w-full xs:-mx-[3rem]"
                  />
                </div>
     </div>

     <div className="web-development flex justify-around items-center sm:h-[20rem] h-[30rem] sm:flex-row-reverse xs:flex-col sm:row-re " >
      <div className="content">
        <h1 className = "text-secondary font-semi-bold text-[20px]">WEB DEVELOPMENT</h1>
        <p className = "font-extralight text-[20px]">: Create stunning, functional websites tailored to your needs with our expertise in coding, design, and user experience, ensuring a seamless online presence.</p>
      </div>
      <div className="dekstop-mockup  sm:h-[30rem] sm:w-[35rem] xs:w-[27rem]">
                  <img
                    src={desktopmockup}
                    alt="dekstop"
                    className="h-full w-full xs:-mx-[5rem]"
                  />
                </div>
     </div>

     <div className="web3-development flex justify-around items-center sm:h-[20rem] h-[30rem] sm:flex-row xs:flex-col" >
      <div className="content">
        <h1 className = "text-secondary font-semi-bold text-[20px]">WEB-3</h1>
        <p className = "font-extralight text-[20px]">Unlock the potential of decentralized technologies with our Web-3 development services, building decentralized applications (DApps) and smart contracts on blockchain platforms.</p>
      </div>
      <div className="mobile-mockup h-[20rem] w-[20rem]">
                  <img
                    src={web3}
                    alt="dekstop"
                    className="h-full w-full "
                  />
                </div>
     </div>

     <div className="ui-ux  flex justify-around items-center sm:h-[20rem] h-[30rem] sm:flex-row-reverse xs:flex-col " >
      <div className="content">
        <h1 className = "text-secondary font-semi-bold text-[20px]">UI/UX DESIGN</h1>
        <p className = "font-extralight text-[20px]">Enhance user satisfaction and engagement with our exceptional UI/UX design services, combining aesthetics and usability to create visually appealing and intuitive interfaces.</p>
      </div>
      <div className="uiux h-[20rem] w-[20rem] sm:mr-10">
                  <img
                    src={uiux}
                    alt="dekstop"
                    className="h-full w-full  "
                  />
                </div>
     </div>

    </div>
  )
}

export default Service