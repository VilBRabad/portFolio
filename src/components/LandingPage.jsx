import React, {useEffect, Suspense, useState} from 'react'
import { useLocation } from 'react-router-dom';
import Home from './Home'
import AboutLoad from './AboutLoad';
const About = React.lazy(()=>import('./About')); 
const Projects = React.lazy(()=>import('./Projects')); 
const LastPage = React.lazy(()=>import('./LastPage')); 

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
         <Home setVisible={ setVisible } homeRef={refs.homeRef}/>
         <Suspense fallback={<AboutLoad aboutRef={refs.aboutRef}/>}>
            <About aboutRef={refs.aboutRef}/>
         </Suspense>
         <Suspense fallback={<p>Loading....</p>}>
            <Projects projectRef={refs.projectRef}/>
         </Suspense>
         <Suspense fallback={<p>Loading....</p>}>
            <LastPage />
         </Suspense>
      </>
   )
}

export default LandingPage
