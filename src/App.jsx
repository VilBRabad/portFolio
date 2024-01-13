import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ErrorPage from './components/ErrorPage';
import ProjDetails from './components/ProjDetails';
import LandingPage from './components/LandingPage';
import { useInView } from 'react-intersection-observer';


function App() {
  // useEffect(() => {
  Aos.init();
  // }, []);

  const [visible, setVisible] = useState(false);
  const [visNavs, setVisNavs] = useState(false);
  const { ref: homeRef, inView: homeVis } = useInView();
  const { ref: aboutRef, inView: aboutVis } = useInView();
  const { ref: projectRef, inView: projectVis } = useInView();



  return (
    <div className="bg-white dark:bg-gradient-to-b to-[#05020D] from-slate-950">
      <BrowserRouter>
        <Navbar visible={ visible } visNavs={ visNavs } setVisNavs={ setVisNavs } refs={ { homeVis, aboutVis, projectVis } } />
        <Routes>
          <Route exact path="/" element={ <LandingPage setVisible={ setVisible } refs={ { homeRef, aboutRef, projectRef } } setVisNavs={ setVisNavs } /> } />
          <Route exact path="/:path" element={ <ErrorPage /> } />
          <Route exact path="/project/:name" element={ <ProjDetails setVisNavs={ setVisNavs } /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
