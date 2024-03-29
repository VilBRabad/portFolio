import React, { useState, useEffect, useCallback } from 'react'
import pr1 from "../Images/p1.png";
import pr2 from "../Images/pr2.png";
import pr3 from "../Images/pr3.png";
import { Link, useNavigate } from 'react-router-dom';
import github from "../Images/Icons/github.svg";

function Projects({ projectRef }) {

  const navigate = useNavigate();


  const [height, setHeight] = useState(0);

  const handleScroll = useCallback(() => {
      const pageHeight = window.innerHeight;
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

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
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);


  return (
    <>
    <div id="projects" className={ `relative dark:text-white min-h-screen pb-10 flex flex-col items-center overflow-hidden mb-20` }>
      <span className="title font-bold">Projects</span>
      <div ref={ projectRef } className={ `relative mt-20 min-h-full w-full container z-5 flex flex-col  z-10` }>
        <div className={ `mt-10 proj md:flex-row` }>
          <div className="dotClass">
            <div data-aos="fade" data-aos-duration="1000" className="projDot"></div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="projCard">
            <div onClick={ () => navigate("/project/myPortfolio") } className="photo cursor-pointer">
              <img src={ pr1 } className="w-[27rem]" alt="" />
            </div>
            <div className="con">
              <div className="det">
                <span onClick={ () => navigate("/project/myPortfolio") } className="name cursor-pointer">My PortFolio</span>
                <span className="stack">React.Js | Tailwind | Figma</span>
              </div>
              <div className="gitIcon"><Link to="https://github.com/VilBRabad/portFolio" target="_blank"><img src={ github } alt="" className="dark:invert" /></Link></div>
            </div>
          </div>
          <div className="projInfo md:items-start">
            <div data-aos="fade-left" className="projDate">15 January 2024</div>
            <div data-aos="fade-left" data-aos-duration="1000" className="shortDetail">My professional portfolio, a dedicated space designed to showcase my skills, experiences, and creative journey. This platform is a reflection of my passion for Web Development and Designing, highlighting not only what I've accomplished but also the potential I bring to future endeavors.....</div>
          </div>
        </div>

        <div className={ `mt-20 proj md:flex-row-reverse` }>
          <div className="dotClass">
            <div data-aos="fade" data-aos-duration="1000" className="projDot"></div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" className="projCard">
            <div onClick={ () => navigate("/project/donateMe") } className="photo">
              <img className="w-[27rem] cursor-pointer" src={ pr2 } alt="" />
            </div>
            <div className="con">
              <div className="det">
                <span onClick={ () => navigate("/project/donateMe") } className="name cursor-pointer">Donate.me</span>
                <span className="stack">React.JS | CSS | Flask | MySQL | Figma</span>
              </div>
              <div className="gitIcon"><Link to="https://github.com/VilBRabad/blood-bank-system" target="_blank"><img src={ github } alt="" className="dark:invert" /></Link></div>
            </div>
          </div>
          <div className="projInfo md:items-end">
            <div data-aos="fade-right" className="projDate">01 December 2023</div>
            <div data-aos="fade-right" data-aos-duration="1000" className="shortDetail ">The project revolves around the vital domain of blood donation and management within a ReactJs and Flask framework. It facilitates the seamless interaction between hospitals, donors and normal users by providing a robust online platform. Hospitals and donors alike can register on the site, creating dedicated accounts to streamline the blood donation process.....</div>
          </div>
        </div>

        <div className={ `mt-20 proj md:flex-row` }>
          <div className="dotClass">
            <div data-aos="fade" data-aos-duration="1000" className="projDot"></div>
          </div>
          <div data-aos="fade-right" data-aos-duration="1000" className="projCard">
            <div onClick={ () => navigate("/project/salesAnalysis") } className="photo cursor-pointer">
              <img className="w-[25rem]" src={ pr3 } alt="" />
            </div>
            <div className="con">
              <div className="det max-[318px]:justify-around">
                <span onClick={ () => navigate("/project/salesAnalysis") } className="name cursor-pointer">Big-Mart Sales Visualizer</span>
                <span className="stack">Django | Python | HTML | CSS</span>
              </div>
              <div className="gitIcon"><Link to="https://github.com/VilBRabad/Big-Mart-Sales-Visualization" target="_blank"><img src={ github } alt="" className="dark:invert" /></Link></div>
            </div>
          </div>
          <div className="projInfo md:items-start">
            <div data-aos="fade-left" className="projDate">29 May 2023</div>
            <div data-aos="fade-left" data-aos-duration="1000" className="shortDetail">This project focuses on the visualization of sales data for a fictional retail chain, Big Mart, using the Python programming language and the Matplotlib data visualization library. The main objective of this project is to provide insights into the sales trends of the retail chain using graphical representations such as line charts, bar charts, scatter plots, and histograms.....</div>
          </div>
        </div>
      </div>
      <div style={ { height: height } } className={ ` w-1 bg-slate-500 absolute top-28 z-3` }></div>
      <div data-aos="fade" data-aos-duration="1000" className="h-[1.5rem] w-[1.5rem] border-4 border-black dark:border-white bg-purple-900 dark:bg-black absolute rounded-full top-28 z-3"></div>
    <div className="absolute w-[70%] h-[50%] md:w-[50rem] md:h-[56rem] bg-[#F806CC]/10 dark:bg-purple-900/10 -right-[10%] rounded-full blur-3xl top-[30%] z-[9]"/>
    </div>
    </>
  )
}

export default Projects
