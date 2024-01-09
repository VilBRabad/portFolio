import React from 'react'
import { IoSunny } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";

function Navbar({visible}) {
  return (
    <div className="Nav sticky top-0 h-[3.5rem] text-white w-[100%] flex items-center justify-center z-10">
      <div className={`navbar flex items-center p-2 px-4 rounded-[10rem] ${visible?'w-[100%] justify-between':'justify-end w-[30%] pr-[0%] bg-bgColor backdrop-blur-sm 2xl:justify-center'}`}>
        <div className={`myName ml-4 text-xl font-bold transition-delay-4 ${visible?"block":"hidden"}`}>VILAS.</div>
        <div className={`flex justify-around text-md items-center`}>
          <ul className="flex justify-between text-md items-center mr-[5%]">
              <li className="bg-slate-600 rounded-[10rem]">Home</li>
              <li>About</li>
              <li>Projects</li>
          </ul>
          {/* {visible?<IoSunny className="text-2xl mr-1"/>:<></>} */}
          {/* <IoMdMenu className="text-2xl"/> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
