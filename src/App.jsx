import { BrowserRouter } from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/react';

import { About, Contact, Experience, Hero, Navbar, Tech, StarsCanvas } from "./components";
import Education from "./components/Education.jsx";

const App = () => {
  return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Education/>
          <Experience />
          <Tech />

          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
