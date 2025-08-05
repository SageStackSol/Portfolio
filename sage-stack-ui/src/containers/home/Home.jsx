// import React,{useRef,useState,useEffect} from "react";
// import Test from "Test";

// function Home() {

//   return (
//     <>
     

//     </>
//   );
// }

// export default Home;

import { useState, useEffect } from "react";
// import Test2 from "Test2";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import OrbitCarousel from "components/carousal/OrbitCarousal";
import ContactPage from "./ContactPage";

const sections = [

  { id: 1, text: <Hero /> },
  { id: 2, text: <About /> },

  { id: 3, text: <Services />},
  { id: 4, text: <ContactPage /> },
];

 function Home() {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const [animating, setAnimating] = useState(false);

  // const handleWheel = (e) => {
  //   if (animating) return;
  //   setAnimating(true);

  //   if (e.deltaY > 0 && activeIndex < sections.length - 1) {
  //     setActiveIndex((prev) => prev + 1);
  //   } else if (e.deltaY < 0 && activeIndex > 0) {
  //     setActiveIndex((prev) => prev - 1);
  //   }

  //   setTimeout(() => {
  //     setAnimating(false);
  //   }, 800); // animation duration
  // };

  // useEffect(() => {
  //   window.addEventListener("wheel", handleWheel, { passive: false });
  //   return () => window.removeEventListener("wheel", handleWheel);
  // });

  return (
    // <div className="relative w-screen h-full ">
    //   {sections.map((section, index) => (
    //     <div
    //       key={section.id}
    //       className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out  text-4xl font-bold ${section.bg} ${
    //         index === activeIndex
    //           ? "opacity-100 translate-y-0 z-10"
    //           : index < activeIndex
    //           ? "opacity-0 -translate-y-20 z-0"
    //           : "opacity-0 translate-y-20 z-0"
    //       }`
    //     }
    //     >
    //       {section.text}
    //     </div>
    //   ))}
    // </div>
    <>
    <div className="lg:px-12 md:px-12 p-4 pb-20">
  <Hero /> 
    <About />
    <Services />
    <ContactPage />
    </div>
  
    </>
  );
}
export default Home;