import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import sun from "../Images/Icons/sun.svg"
import moon from "../Images/Icons/moon.svg"
import menu from "../Images/Icons/menu.svg"
import cross from "../Images/Icons/cross.svg"

function Navbar({ visible, visNavs, setVisNavs, refs }) {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setVisNavs(!visNavs);
  }

  // console.log(localStorage.theme);
  // console.log(window.matchMedia);

  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (lightMode) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
    else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    }
  }, [lightMode]);


  return (
    <>
      <div className="Nav relative md:sticky top-0 h-[3.5rem] dark:text-white w-[100%] flex items-center justify-center z-20">
        <div className={ `2xl:container navbar flex items-center p-2 px-4 rounded-[10rem] ${(visible && !visNavs) ? 'w-[100%] justify-between' : 'justify-center md:max-lg:w-[50%] lg:max-xl:w-[38%] 2xl:w-[30%] pr-[0%] bg-slate-200/50 dark:bg-bgColor drop-shadow backdrop-blur-sm 2xl:justify-center'} md:flex` }>
          <div className={ `myName ml-4 bg-gradient-to-br from-[#CB79F5] via-[#007CE1] to-[#001AFF] text-transparent bg-clip-text text-xl font-extrabold transition-delay-4 ${(visible && !visNavs) ? "block" : "hidden"}` }>VILAS.</div>
          <div className="flex justify-center items-center">
            <div className={ `flex justify-around text-md items-center hidden md:block` }>
              <ul className="flex justify-between text-md items-center mr-[5%]">
                { visNavs ? 
                  <Link to="/"><li onClick={ handleClick } className={ `hover:bg-slate-600/25 rounded-[10rem] cursor-pointer ${refs.homeVis ? "bg-slate-600/25" : "bg-transparent"}` }>Home</li></Link>
                  : 
                  <li className={ `hover:bg-slate-600/25 rounded-[10rem] cursor-pointer ${refs.homeVis ? "bg-slate-600/25" : "bg-transparent"}` }><a href="#home">Home</a></li>
                }
                { !visNavs ?
                  <>
                    <li className={ `cursor-pointer rounded-[10rem] hover:bg-slate-600/25 ${refs.aboutVis ? "bg-slate-600/25" : "bg-transparent"}` }><a href="#about">About</a></li>
                    <li className={ `cursor-pointer rounded-[10rem] hover:bg-slate-600/25 ${refs.projectVis ? "bg-slate-600/25" : "bg-transparent"}` }><a href="#projects">Projects</a></li>
                  </> :
                  ""
                }
              </ul>
            </div>
            { visible ?
              (!lightMode ?
                <img src={sun} alt="" onClick={ () => setLightMode(true) } className="modes h-8" />
                :
                <img src={moon} alt="" onClick={ () => setLightMode(false) } className="modes h-8" />)
              :
              <></>
            }
          </div>
        </div>
        <img src={menu} alt="" className="absolute h-10 right-4 invert dark:invert-0 cursor-pointer md:hidden" onClick={ () => setShow(true) } />
      </div>
      <div className={ `fixed top-0 text-black dark:text-white bg-slate-200 dark:bg-slate-950 min-h-screen w-screen z-20 transition duration-500 ${show ? "translate-x-0" : "translate-x-full"}` }>
        <img src={cross} className="h-14 ml-[88%] invert dark:invert-0 mt-4 cursor-pointer" onClick={ () => setShow(false) } />
        <ul className="w-full h-1/2 text-3xl ml-20 mt-4 dark:opacity-50 dark:hover:opacity-100">
          { visNavs ?
            <li className={ `mb-4 cursor-pointer hover:-ml-2 ` } onClick={ () => setShow(false) }><Link to="/">Home</Link></li>
            :
            <li className={ `mb-4 cursor-pointer hover:-ml-2 ` } onClick={ () => setShow(false) }><a href="#home">Home</a></li>
          }
          {
            !visNavs ?
              <>
                <li className={ `mb-4 cursor-pointer hover:-ml-2 ` } onClick={ () => setShow(false) }><a href="#about">About</a></li>
                <li className={ `mb-4 cursor-pointer hover:-ml-2 ` } onClick={ () => setShow(false) }><a href="#projects">Projects</a></li>
              </>
              : ""
          }
        </ul>
      </div>
    </>
  )
}

export default Navbar
