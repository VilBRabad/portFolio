import React from 'react'

function About() {

  

  return (
    <div className="about text-white lg:h-screen flex flex-col items-center">
      <span className="title font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]">About Me</span>
      <div className="container mt-6 h-full w-full flex flex-col justify-center items-center gap-4 lg:gap-0 lg:flex-row">
        <div className="w-full h-[15rem] flex flex-col items-center justify-center md:h-[20rem] lg:w-[34%] lg:h-full xl:w-[30%] 2xl:w-[25%]">
          <div className="w-[15rem] h-[15rem] backdrop-blur-sm bg-gradient-to-b from-higherCardColor to-lowerCardColor rounded-full md:w-[20rem] md:h-[20rem]"></div>
          {/* <div className="w-[20rem] h-[7rem] bg-red-400 rounded-3xl hidden lg:flex"></div> */}
        </div>
        <div className="w-full h-auto flex flex-col items-center gap-4 lg:h-[90%] lg:w-[65%] 2xl:w-[55rem]">
          <div className="w-[90%] h-auto flex flex-col gap-4 lg:h-[70%] lg:w-full lg:flex-row">
            <div className="w-[100%] h-[20rem] backdrop-blur-sm bg-gradient-to-b from-higherCardColor to-lowerCardColor rounded-3xl lg:h-full lg:w-[67%]"></div>
            <div className="w-[100%] h-[10rem] flex gap-2 lg:w-full lg:flex-col lg:h-full lg:w-[31%]">
              <div className="w-1/2 h-full backdrop-blur-sm bg-gradient-to-b from-higherCardColor to-lowerCardColor rounded-3xl lg:h-[45%] lg:w-full"></div>
              <div className="w-1/2 h-full backdrop-blur-sm bg-gradient-to-b from-higherCardColor to-lowerCardColor rounded-3xl lg:h-[55%] lg:w-full"></div>
            </div>
          </div>
          <div className="w-[90%] h-[7rem] backdrop-blur-sm bg-gradient-to-b from-higherCardColor to-lowerCardColor rounded-3xl lg:w-full"></div>
        </div>
      </div>
    </div>
  )
}

export default About
