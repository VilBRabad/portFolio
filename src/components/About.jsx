import React from 'react'
import photo from "../Images/photo1.png";
import react from "../Images/Icons/react.svg"
import cpp from "../Images/Icons/cpp.svg"
import nodejs from "../Images/Icons/nodejs.svg"
import flask from "../Images/Icons/flask.svg"
import mysql from "../Images/Icons/mysql.svg"
import python from "../Images/Icons/python.svg"
import javascript from "../Images/Icons/javascript.svg"
import tailwind from "../Images/Icons/tailwind.svg"
import twitter from "../Images/Icons/twitter.svg";
import linkedin from "../Images/Icons/linkedin.svg";

function About({aboutRef}) {
  const twitLink = "https://twitter.com/RabadVilas?t=wr7taO-ajwPKxDZusn5TXw&s=08";
  const linkedinLink = "https://www.linkedin.com/in/vilas-rabad-3a8081211/";
  
  const clickHandler = (link)=>{
    window.open(link, "_blank");
  }

  return (
    <div id="about" className="about dark:text-white min-h-screen flex flex-col items-center z-[9]">
      <span className="title font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]">About Me</span>
      <div className="container pt-8 mt-6 min-h-full w-full flex flex-col justify-center items-center gap-4 lg:gap-0 lg:flex-row">
        <div className="w-full h-[15rem] flex flex-col items-center justify-center md:h-[20rem] lg:w-[34%] lg:h-full xl:w-[30%] 2xl:w-[25%]">
          <div data-aos="fade-in" da  ta-aos-duration="1000"  className="w-[15rem] h-[15rem] flex items-center justify-center backdrop-blur-sm bg-gradient-to-b from-slate-300 to-slate-300/10 dark:bg-gradient-to-b dark:from-higherCardColor dark:to-lowerCardColor rounded-full md:w-[20rem] md:h-[20rem] overflow-hidden">
            <img src={photo} className="w-[90%] mt-8 drop-shadow-lg dark:brightness-[0.8] contrast-[1.07]" alt="" />
          </div>
        </div>
        <div className="w-full h-auto flex flex-col items-center gap-4 lg:h-[90%] lg:w-[65%] 2xl:w-[55rem]">
          <div className="w-[90%] h-auto flex flex-col gap-4 lg:h-[70%] lg:w-full lg:flex-row">
            <div data-aos="fade-up" data-aos-duration="2000" ref={aboutRef}  className="w-[100%] h-[20rem] backdrop-blur-sm bg-gradient-to-b from-slate-300 to-slate-300/10 dark:bg-gradient-to-b dark:from-higherCardColor dark:to-lowerCardColor rounded-2xl lg:h-full lg:w-[67%] flex flex-col p-6 pt-8">
              <span className="text-2xl font-semibold mb-6">Vilas Balu Rabad</span>
              <span className="text-justify overflow-y-scroll lg:overflow-hidden px-2 leading-relaxed">Currently pursuing a Bachelor of Technology in Information Technology at Vishwakarma Institute of Information Technology (VIIT), Pune. My focus lies in web development, where I leverage ReactJS and diverse technologies to build user-centric, interactive experiences. I possess a strong foundation in problem-solving and a passion for crafting elegant solutions. Explore my portfolio to discover my capabilities and potential as a developer.</span>
            </div>
            <div className="w-[100%] h-[10rem] flex gap-2 lg:flex-col lg:h-full lg:w-[31%]">
              <div data-aos="fade-down" className="w-1/2 h-full backdrop-blur-sm bg-gradient-to-b from-slate-300 to-slate-300/10 dark:bg-gradient-to-b dark:from-higherCardColor dark:to-lowerCardColor rounded-2xl lg:h-[45%] lg:w-full p-4 text-lg font-semibold z-[5]">
                <span>Connect With</span>
                <div className="flex mt-4 justify-around">
                  <img src={twitter} alt="" className="cursor-pointer h-20" onClick={()=>clickHandler(twitLink)}/>
                  <img src={linkedin} alt="" className="cursor-pointer h-20" onClick={()=>clickHandler(linkedinLink)}/>
                </div>
              </div>
              <div data-aos="fade-down" className="w-1/2 h-full backdrop-blur-sm bg-gradient-to-b from-slate-300 to-slate-300/10 dark:bg-gradient-to-b dark:from-higherCardColor dark:to-lowerCardColor rounded-2xl lg:h-[55%] lg:w-full p-4 text-lg z-[4]">
                <span className="font-semibold">Skills</span>
                <div className="mt-2 lg:mt-4 text-[1rem] md:text-lg flex flex-col justify-center gap-2 md:gap-4 h-[60%]">
                  <span className="leading-normal">Web Development</span>
                  <span className="leading-normal">React Development</span>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000" className="w-[90%] h-[7rem] overflow-x-scroll lg:overflow-hidden flex items-center backdrop-blur-sm bg-gradient-to-b from-slate-300 to-slate-300/10 dark:bg-gradient-to-b dark:from-higherCardColor dark:to-lowerCardColor rounded-2xl lg:w-full">
            <div className="h-full w-[100em] mx-4 gap-4 flex items-center justify-start md:justify-around ">
              <img src={react} alt="" />
              <img src={nodejs} alt="" />
              <img src={tailwind} alt="" />
              <img src={flask} alt="" className="dark:invert invert-0"/>
              <img src={mysql} alt="" />
              <img src={javascript} alt="" />
              <img src={cpp} alt="" />
              <img src={python} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About
