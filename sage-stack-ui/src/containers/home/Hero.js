import React from "react";
import SplashCursor from "components/cursor/SplashCursor";

function Hero() {

  return (
    <>
  
      <div
        className=" h-[90vh] flex flex-col justify-center items-center"
      >

            <SplashCursor />
            

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
    </>
  );
}

export default Hero;
