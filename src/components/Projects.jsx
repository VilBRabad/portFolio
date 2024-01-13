import React, { useState, useEffect } from 'react'
import pr1 from "../Images/p1.png";
import pr2 from "../Images/pr2.png";
import pr3 from "../Images/pr3.png";
import { FaGithub } from "react-icons/fa";
import { Link, redirect, useNavigate } from 'react-router-dom';

function Projects({ projectRef }) {

  const navigate = useNavigate();


  const [height, setHeight] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const pageHeight = window.innerHeight;
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      // console.log(viewportWidth);

      let newHeight = 0;
      if (viewportWidth < 764) {
        newHeight = Math.max(0, window.scrollY - pageHeight - 500);
      }
      else {
        newHeight = Math.max(0, window.scrollY - pageHeight - 240);
      }

      if (newHeight !== height) {
        setHeight(Math.round(newHeight));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div id="projects" className={ `relative dark:text-white min-h-screen flex flex-col items-center overflow-hidden` }>
      <span className="title font-bold">Projects</span>
      <div ref={ projectRef } className={ `relative mt-20 min-h-full w-full container z-5 flex flex-col` }>
        <div className={ `mt-10 proj lg:flex-row` }>
          <div className="dotClass">
            <div data-aos="fade" data-aos-duration="1000" className="projDot"></div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="projCard">
            <div onClick={ () => navigate("/project/myPortfolio") } className="photo cursor-pointer">
              <img src={ pr1 } className="h-full w-[27rem]" alt="" />
            </div>
            <div className="con">
              <div className="det">
                <div onClick={ () => navigate("/project/myPortfolio") } className="name cursor-pointer">My PortFolio</div>
                <div className="stack">React.Js | Tailwind | Figma</div>
              </div>
              <div className="gitIcon"><Link to="https://github.com/VilBRabad/portFolio" target="_blank"><FaGithub /></Link></div>
            </div>
          </div>
          <div data-aos="fade-left" className="projInfo lg:items-start">
            <div className="projDate">20 January 2024</div>
            <div className="shortDetail ml-4">Welcome to my professional portfolio, a dedicated space designed to showcase my skills, experiences, and creative journey. This platform is a reflection of my passion for Web Development and Designing, highlighting not only what I've accomplished but also the potential I bring to future endeavors.</div>
          </div>
        </div>

        <div className={ `mt-20 proj lg:flex-row-reverse` }>
          <div className="dotClass">
            <div data-aos="fade" data-aos-duration="1000" className="projDot"></div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className="projCard">
            <div onClick={ () => navigate("/project/donateMe") } className="photo">
              <img className="w-[27rem] cursor-pointer" src={ pr2 } alt="" />
            </div>
            <div className="con">
              <div className="det">
                <div onClick={ () => navigate("/project/donateMe") } className="name cursor-pointer">Donate.me | <span className="opacity-70">Blood Bank</span></div>
                <div className="stack">React.JS | CSS | Flask | MySQL | Figma</div>
              </div>
              <div className="gitIcon"><Link to="https://github.com/VilBRabad/blood-bank-system" target="_blank"><FaGithub /></Link></div>
            </div>
          </div>
          <div data-aos="fade-right" className="projInfo lg:items-end">
            <div className="projDate">01 December 2024</div>
            <div className="shortDetail mr-4">The project revolves around the vital domain of blood donation and management within a ReactJs and Flask framework. It facilitates the seamless interaction between hospitals, donors and normal users by providing a robust online platform. Hospitals and donors alike can register on the site, creating dedicated accounts to streamline the blood donation process....</div>
          </div>
        </div>

        <div className={ `mt-20 proj lg:flex-row` }>
          <div className="dotClass">
            <div data-aos="fade" data-aos-duration="1000" className="projDot"></div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="projCard">
            <div onClick={ () => navigate("/project/salesAnalysis") } className="photo cursor-pointer">
              <img className="w-[25rem]" src={ pr3 } alt="" />
            </div>
            <div className="con">
              <div className="det">
                <div onClick={ () => navigate("/project/salesAnalysis") } className="name cursor-pointer">Big-Mart Sales Visualizer</div>
                <div className="stack">Django | Python | HTML | CSS</div>
              </div>
              <div className="gitIcon"><Link to="https://github.com/VilBRabad/Big-Mart-Sales-Visualization" target="_blank"><FaGithub /></Link></div>
            </div>
          </div>
          <div data-aos="fade-left" className="projInfo lg:items-start">
            <div className="projDate">29 May 2023</div>
            <div className="shortDetail ml-4">Welcome to my professional portfolio, a dedicated space designed to showcase my skills, experiences, and creative journey. This platform is a reflection of my passion for Web Development and Designing, highlighting not only what I've accomplished but also the potential I bring to future endeavors.</div>
          </div>
        </div>
      </div>
      <div style={ { height: height } } className={ ` w-1 bg-slate-500 absolute top-28 z-3` }></div>
      <div data-aos="fade" data-aos-duration="1000" className="h-[1.5rem] w-[1.5rem] border-4 border-black dark:border-white bg-purple-900 dark:bg-black absolute rounded-full top-28 z-3"></div>
    </div>
  )
}

export default Projects
