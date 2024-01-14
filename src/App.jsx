import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import './App.css';
import Navbar from './components/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import LandingPage from './components/LandingPage';
const ProjDetails = React.lazy(() => import('./components/ProjDetails'));
const ErrorPage = React.lazy(() => import('./components/ErrorPage'));


function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [visible, setVisible] = useState(false);
  const [visNavs, setVisNavs] = useState(false);
  const { ref: homeRef, inView: homeVis } = useInView();
  const { ref: aboutRef, inView: aboutVis } = useInView();
  const { ref: projectRef, inView: projectVis } = useInView();

  return (
    <div className="bg-white dark:bg-gradient-to-br to-[#030923] from-slate-950">
      <Router basename="/portFolio">
        <Navbar visible={ visible } visNavs={ visNavs } setVisNavs={ setVisNavs } refs={ { homeVis, aboutVis, projectVis } } />
        <Routes>
          <Route exact path="/" element={ <LandingPage setVisible={ setVisible } refs={ { homeRef, aboutRef, projectRef } } setVisNavs={ setVisNavs } /> } />
          <Route exact path="/:path" element={
            <Suspense fallback={ <p>Loading...</p> }>
              <ErrorPage setVisNavs={ setVisNavs } />
            </Suspense> }
          />
          <Route exact path="/project/:name" element={
            <Suspense fallback={ <p>Loading...</p> }>
              <ProjDetails setVisNavs={ setVisNavs } />
            </Suspense> }
          />
          <Route exact path="/project/:name/:path" element={
            <Suspense fallback={ <p>Loading...</p> }>
              <ErrorPage setVisNavs={ setVisNavs } />
            </Suspense> }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
