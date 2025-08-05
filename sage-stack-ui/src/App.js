
import React, { useEffect, useState } from "react";
import logo from "assets/images/logo.png";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "components/navbar/Navbar";
import Home from "containers/home/Home";
import SplashCursor from "components/cursor/SplashCursor";
import Cursor from "components/cursor/Cursor";
import SmoothFollower from "components/cursor/FollowCursor";
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [startAnimation, setStartAnimation] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStartAnimation(true), 1000);
    const timer2 = setTimeout(() => setShowContent(true), 2000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>

      <div className="site min-h-[100vh] h-full">
        
        {!showContent && (
          <div className={`h-screen w-screen flex justify-center items-center circle-overlay ${startAnimation ? "expand" : ""}`}>
            {/* Black circle */}
            <div className="circle-logo ">
              <img className="w-12" src={logo} />
            </div>
          </div>
        )}
        {showContent && (
          <>
           
    
          <div className="main-content ">

            <div class="spark"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="spark"></div>
            <div class="line"></div>
            <div class="spark"></div>
            {/* <div class="container">
    <div class="line"><div class="spark"></div></div>
    <div class="line"><div class="spark"></div></div>
    <div class="line"><div class="spark"></div></div>
  </div> */}
            {/* <div className="absolute w-screen h-screen bg-black ">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="absolute top-0 h-full w-[0.5px] bg-[#dcd9d9] opacity-20"
          style={{
            left: `${(index + 1) * 25}%`, // Distribute at 25%, 50%, 75%
          }}
        >
          <div className="spark animate-spark" />
        </div>
      ))}
    </div> */}
    <div className="-z-[500]">
            <SplashCursor color='white' />
            
    </div>
            {/* <Cursor /> */}
            {/* <SmoothFollower /> */}
            {/* <div className=' absolute bottom-2'> */}
            {/* </div> */}
            <BrowserRouter>
              <Navbar /> 
              <Routes>  
                <Route path="/" element={<Home />} />
              </Routes>
            </BrowserRouter>
            
          </div>
                </>
        )}
      </div>
    </>
  );
};

export default App;
