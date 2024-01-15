import React from 'react'
import mail from "../Images/Icons/mail.svg";
import arrow from "../Images/Icons/arrow.svg";

function LastPage() {

  const handleClick = async () => {
    window.open(
      'https://mail.google.com/mail/?view=cm&to=rabadvilas11@gmail.com&su=For Hiring&body=',
      '_blank'
    );
  };

  return (
    <div className="h-screen w-screen relative dark:text-white flex justify-center items-center overflow-hidden pt-10">
      <div className="container relative md:mt-0 flex flex-col md:flex-row h-full w-full md:justify-around items-center lg:pl-12 xl:px-40 max-md:w-[90%] md:gap-6">
        <div className="flex flex-col h-[30%] md:h-screen w-full justify-center items-center sm:items-start">
          <span className="text-2xl sm:text-3xl md:text-5xl font-black bg-gradient-to-br from-[#CB79F5] via-[#007CE1] to-[#001AFF] text-transparent bg-clip-text ">VILAS.</span>
          <span className="text-[1.6rem] sm:text-[2.5rem] sm:text-start font-bold md:text-[4rem] text-center">Thank You for Visiting</span>
          <span className="sm:text-3xl font-bold opacity-40">Get in touch</span>
          <div className="flex md:my-4 max-sm:flex-wrap max-sm:justify-center gap-1 sm:gap-2">
            <div onClick={ handleClick } className="btn m-4 ml-0 z-10 max-sm:m-0 max-sm:mt-4 sm:h-[3rem] w-[9rem] sm:w-[12rem] text-xs sm:text-sm">Lets Work Together</div>
            <a href="#projects" className="w-[6rem] sm:w-[8rem] h-8 sm:h-[3rem] z-10"><div className="w-full h-full bg-slate-700 cursor-pointer mt-4 rounded-full flex justify-center items-center text-xs sm:text-sm font-semibold transition-all duration-300 ease-in-out hover:bg-blue-500 text-white dark:hover:text-black max-sm:m-0 max-sm:mt-4">My Work</div></a>
          </div>
          <div className="contact z-10 mt-4 sm:mt-0 text-xs sm:text-[1rem] md:text-[1.2rem] italic dark:opacity-60 flex items-center gap-1">
            <img src={mail} alt="" className="h-5 md:h-7 ml-2 opacity-60 mr-2 invert dark:invert-0" />
            <span >rabadvilas11@gmail.com</span>
          </div>
        </div>
        <div className="w-full md:w-[50%] h-[65%] md:h-screen flex md:justify-center items-center z-10">
          <form className="feedform flex flex-col w-full h-full md:h-[60%] justify-center items-center gap-4">
            <input type="text" placeholder="Name" />
            <input type="mail" placeholder="Email"/>
            <textarea placeholder="Message" rows="4" cols="8"/>
            <button disabled className="w-[12rem] h-10 bg-slate-700 cursor-not-allowed m-4 ml-0 rounded-full text-white text-md font-semibold">Send</button>
          </form>
        </div>
        <div className="Top absolute w-10 h-10 flex items-center justify-center bottom-1 bottom-0 sm:bottom-4 lg:right-4">
          <a href="#home"><img src={arrow} alt="" className="invert dark:invert-0"/></a>
        </div>
      </div>
      <div className="colors absolute h-[15rem] w-[15rem] lg:h-[25rem] lg:w-[25rem] bg-[#F806CC] opacity-[20%] top-[35%] left-[45%] rounded-full blur-3xl z-2" />
      <div className="colors2 absolute h-[15rem] w-[12rem] bg-[#820D5D] opacity-[27%] top-[25%] left-[37%] rounded-full blur-3xl z-2"></div>
      {/* <div className="absolute w-[90%] h-[30rem] bg-slate-300 z-20"></div> */ }
    </div>
  )
}

export default LastPage
