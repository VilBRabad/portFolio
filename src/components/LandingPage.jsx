import React, {useEffect, useState} from 'react'
import About from './About'
import Home from './Home'
import Projects from './Projects'
import LastPage from './LastPage'
import { useLocation } from 'react-router-dom'

function LandingPage({ setVisible, setVisNavs, refs}) {


   const location = useLocation();
   const [scrollLocation, setScrollLocation] = useState(0);
   // console.log(refs);

   useEffect(() => {
      window.scrollTo(0, 0);
      setVisNavs(false);
   }, [location.pathname]);

   return (
      <>
         <Home setVisible={ setVisible } homeRef={refs.homeRef}/>,
         <About aboutRef={refs.aboutRef}/>,
         <Projects projectRef={refs.projectRef}/>,
         <LastPage />
      </>
   )
}

export default LandingPage
