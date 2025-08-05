import React from 'react'
import logo from "assets/images/logo.png"

function Navbar() {
  return (
    <>
<div className='w-[100%] flex justify-center fixed bottom-0'>
   <div className=' flex justify-between p-4  items-center gap-8 bg-[#121212]/80 backdrop-blur-3xl rounded-xl ' >
<img className='w-12' src={logo} />

<ul className='lg:flex md:flex hidden gap-4 items-center font-semibold shine-steel'>
<li>About</li>
<li>Services</li>
<li>Contact Us</li>
{/* <li className='text-white bg-[#343434] px-4 py-1 rounded-sm'>Contact Us</li> */}
</ul>

      </div>

   </div>
    </>
  )
}

export default Navbar