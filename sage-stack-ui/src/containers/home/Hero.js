import React, { useRef, useState, useEffect } from "react";

function Hero() {
  //  const [lastScroll, setLastScroll] = useState(0);
  const [hidden, setHidden] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScroll = window.scrollY;

  //     if (currentScroll > lastScroll) {
  //       setHidden(true); // Scrolling down
  //     } else {
  //       setHidden(false); // Scrolling up
  //     }

  //     setLastScroll(currentScroll <= 0 ? 0 : currentScroll);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScroll]);

  return (
    <>
      {/* <div id="scroll-header" className={`w-screen h-screen flex flex-col  justify-center items-center z-1000 animate-float top-10 left-1/2 -translate-x-1/2 transition-header ${
        hidden ? "opacity-0 scale-50" : "opacity-100 scale-100"
      }`}   > */}
      <div
        className=" h-screen flex flex-col justify-center items-center"
      >
        <h1 className=" lg:text-8xl md:text-6xl font-[900] text-4xl  relative inline-block text-center shine-text">
          SAGE
          <br />
          STACK
          <br />
          SOLUTIONS
        </h1>
        <h2 className="text-lg shine-text">
          We don’t just develop — we accelerate your business with tech,
          traffic, and intelligence.
        </h2>
      </div>
      {/* </div> */}
    </>
  );
}

export default Hero;
