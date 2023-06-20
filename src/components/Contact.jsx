import React from 'react'

const Contact = () => {
  return (

    <div className='bg-primary text-[2rem] text-white w-[80vw] m-auto flex justify-evenly xs:flex-col sm:h-screen xs:h-[50rem] items-center'>
        <div className="content-div flex flex-col justify-around items-center h-[10rem]">
         <p className='text-secondary xs:text-[30px] sm:text-[3rem]'>LET'S START YOUR JOURNEY</p> 
          <p className='text-[1rem] font-extralight '>With shastram it will be more easy for you to acheive your goals . Lets make the best out of your time & energy.</p>
          <p className='text-[25px] font-regular '>So what are you waiting for ?</p>
        </div>
        <div className="form  ">
          <form action="submit" className='flex items-center flex-col text-[1rem]'>
        <input type="text" className='mb-10 w-[20rem] rounded-full text-black  p-3 outline-none' placeholder='Name'  />
          <input type="text" className='mb-10 w-[20rem] rounded-full  text-black p-3 outline-none' placeholder='City'/>
          <input type="tel" className='mb-10 w-[20rem]  text-black rounded-full p-3 outline-none' placeholder='Phone no.' />
           <textarea rows={5} placeholder='Message' className='mb-10 w-[20rem] rounded-xs  text-black p-3 outline-none' />
          <button className='bg-secondary p-2 w-[8rem] text-[1rem] rounded-md'>Send</button>
         
          </form>
        </div>
        </div>
  )
}

export default Contact