import React from 'react'

function AboutLoad({aboutRef}) {
   return (
      <div id="about" className="about dark:text-white min-h-screen flex flex-col items-center z-[9]">
         <span className="title font-bold text-[1.5rem] md:text-[1.8rem] lg:text-[2rem]">About Me</span>
         <div className="container pt-8 mt-6 min-h-full w-full flex flex-col justify-center items-center gap-4 lg:gap-0 lg:flex-row">
            <div className="w-full h-[15rem] flex flex-col items-center justify-center md:h-[20rem] lg:w-[34%] lg:h-full xl:w-[30%] 2xl:w-[25%]">
               <div  className="w-[15rem] h-[15rem] flex items-center justify-center backdrop-blur-sm bg-slate-300 animate-pulse rounded-full md:w-[20rem] md:h-[20rem] overflow-hidden">
                 {/* Image */}
               </div>
            </div>
            <div className="w-full h-auto flex flex-col items-center gap-4 lg:h-[90%] lg:w-[65%] 2xl:w-[55rem]">
               <div className="w-[90%] h-auto flex flex-col gap-4 lg:h-[70%] lg:w-full lg:flex-row">
                  <div ref={ aboutRef } className="w-[100%] h-[20rem] backdrop-blur-sm bg-slate-300 animate-pulse rounded-2xl lg:h-full lg:w-[67%] flex flex-col p-6 pt-8">
                     {/* Desc */}
                  </div>
                  <div className="w-[100%] h-[10rem] flex gap-2 lg:flex-col lg:h-full lg:w-[31%]">
                     <div className="w-1/2 h-full backdrop-blur-sm bg-slate-300 animate-pulse rounded-2xl lg:h-[45%] lg:w-full p-4 text-lg font-semibold z-[5]">
                        {/* Social Acc */}
                     </div>
                     <div className="w-1/2 h-full backdrop-blur-sm bg-slate-300 animate-pulse rounded-2xl lg:h-[55%] lg:w-full p-4 text-lg z-[4]">
                        {/* skills */}
                     </div>
                  </div>
               </div>
               <div className="w-[90%] h-[7rem] overflow-x-scroll lg:overflow-hidden flex items-center backdrop-blur-sm bg-slate-300 animate-pulse rounded-2xl lg:w-full">
                  {/* stack */}
               </div>
            </div>
         </div>
      </div>
   )
}

export default AboutLoad
