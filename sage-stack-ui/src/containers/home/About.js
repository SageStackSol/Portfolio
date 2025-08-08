import React, { useEffect,useState,useRef } from "react";
// import Carousel from 'components/carousal/Carousal'
import OrbitCarousel from "components/carousal/OrbitCarousal";
import InfiniteScroll from "components/infiniteScroll/InfiniteScroll";
import AOS from 'aos';
import 'aos/dist/aos.css';

const items = [
  { content: <p>Web Development </p> },
  { content: <p>App Development</p> },
  { content: <p>UI/UX designing</p> },
  { content: <p>AI/ML Modals</p> },
  { content: <p>Digital Marketing</p> },
  { content: <p>SEO Optimization</p> },
  { content: <p>Backend Development</p> },
  { content: <p>Website redesign</p> },
];

function About() {

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Animation duration
  //     once: false, 
  //     mirror: true,    
  //   });
  // }, []);
  

  return (
    <>
      <div className="lg:h-screen md:h-screen grid grid-cols-12 lg:mt-8 md:mt-8 gap-4 ">
        {/* <div id="animatedBox" ref={divRef} className={`col-span-6 slide-box ${inView ? "show" : ""}`}> */}
        <div   className=" lg:col-span-6 md:col-span-6 col-span-12 ">
           <div  class=" opacity-100 relative rounded-3xl from-left z-[1000] shadow-2xl border border-white/20 glass-effect text-center mb-4">
            <div class="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-white/5 opacity-40 rounded-3xl"></div>
            <div class="relative z-10 lg:p-6 md:p-4 p-2 text-white">
              <h1 className="lg:text-5xl md:text-5xl text-2xl font-semibold mb-2">About Us</h1>
              <p className="text-sm font-light">
                We’re a full-stack digital solutions firm specializing in web
                development, digital marketing, and AI/ML automation. We help
                startups and growing businesses create powerful online
                platforms, attract more customers, and scale intelligently — all
                with measurable results.
              </p>
            </div>
          </div>

          <div  class="relative rounded-3xl from-left shadow-2xl border border-white/20 glass-effect">
            <div class="absolute inset-0 bg-gradient-to-br rounded-3xl from-white/30 via-white/10 to-white/5 opacity-40"></div>
            <div class="relative z-10 lg:p-6 md:p-4 p-2 text-white">
              <OrbitCarousel />
            </div>
          </div>
        </div>
         
            <div class=" h-[76vh] rounded-3xl from-right lg:col-span-6 md:col-span-6 col-span-12 shadow-2xl border border-white/20 text-center pt-4">
          <div class=" bg-gradient-to-br from-white/30 via-white/10 to-white/5 opacity-40"></div>
          <h1 className="lg:text-5xl md:text-5xl text-2xl font-semibold">What do we do?</h1>
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection="left"
            autoplay={true}
            autoplaySpeed={1}
            autoplayDirection="down"
            pauseOnHover={true}
          />
        </div>
        </div>

      
      {/* </div> */}
      {/* <Carousel /> */}
    </>
  );
}

export default About;
