import React from 'react'

function About() {
  return (
    <div className="about text-white h-screen flex flex-col items-center">
      <span className="title font-bold">About Me</span>
      <div className="container w-full h-full mt-12 flex gap-6 justify-center flex-wrap">
        <div className="w-[30%] flex flex-col justify-center gap-6">
          <div className="h-[75%] w-[100%] bg-gradient-to-b from-higherCardColor to-lowerCardColor rounded-full">photo</div>
          <div className="h-[20%] w-full bg-gradient-to-b from-higherCardColor to-lowerCardColor rounded-[2rem]">Coding profiles</div>
        </div>
        <div className="w-[54%] flex flex-col justify-center items-center gap-6 flex-wrap ">
          <div className="w-full h-[75%] flex gap-6 flex-wrap">
            <div className="h-full w-[68%] bg-gradient-to-b from-higherCardColor to-lowerCardColor rounded-[2rem]">Vilas Balu Rabad</div>
            <div className="h-full w-[28%] flex flex-col gap-6">
              <div className="h-[40%] w-full rounded-[2rem] bg-gradient-to-b from-higherCardColor to-lowerCardColor">Connectr With</div>
              <div className="h-[60%] w-full rounded-[2rem] bg-gradient-to-b from-higherCardColor to-lowerCardColor">Skills</div>
            </div>
          </div>
          <div className="h-[20%] w-full bg-gradient-to-b from-higherCardColor to-lowerCardColor rounded-[2rem]">Tect Stacks</div>
        </div>
      </div>
    </div>
  )
}

export default About
