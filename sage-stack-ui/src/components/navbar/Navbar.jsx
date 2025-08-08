import React from "react";
import logo from "assets/images/logo.png";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      <div className="w-[100%] flex justify-center fixed bottom-6">
        <div className=" flex justify-between p-4  items-center gap-8 bg-[#121212]/80 backdrop-blur-3xl rounded-xl ">
          <Link to="hero" smooth={true} duration={500} containerId="scroll-container">
            <img className="w-12" src={logo} />
          </Link>
          <ul className="lg:flex md:flex hidden gap-4 items-center font-semibold shine-steel">
            <Link to="about" smooth={true} duration={500} containerId="scroll-container">
              <li className=" cursor-pointer">About</li>
            </Link>

            <Link to="services" smooth={true} duration={500} containerId="scroll-container">
              <li>Services</li>
            </Link>
            <Link to="contactUs" smooth={true} duration={500} containerId="scroll-container">
              <li>Contact Us</li>
            </Link>
            {/* <li className='text-white bg-[#343434] px-4 py-1 rounded-sm'>Contact Us</li> */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
