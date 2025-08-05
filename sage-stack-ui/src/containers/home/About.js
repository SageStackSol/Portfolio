// import React from "react";
// // import Carousel from 'components/carousal/Carousal'
// import OrbitCarousel from "components/carousal/OrbitCarousal";
// import InfiniteScroll from "components/infiniteScroll/InfiniteScroll";

// const items = [
//   { content: <p>Web Development </p> },
//   { content: <p>App Development</p> },
//   { content: <p>UI/UX designing</p> },
//   { content: <p>AI/ML Models</p> },
//   { content: <p>Digital Marketing</p> },
//   { content: <p>SEO Optimization</p> },
//   { content: <p>Backend Development</p> },
//   { content: <p>Website redesign</p> },
// ];

// function About() {
//   return (
//     <>

//     <div className="grid grid-cols-12 mt-12 p-12 gap-4">
// <div className="col-span-6 ">
// <div className="py-4 text-center mb-4 backdrop-blur-lg bg-white/10 border border-white/30 shadow-inner shadow-white/10 rounded-3xl p-8">
// {/* <h1 className="relative text-5xl font-extrabold text-transparent bg-clip-text shine-steel">
//   Steel Shine Text
// </h1> */}
//   <h1 className="  mb-2">About Us</h1>
//    <p className="text-sm ">
//         We’re a full-stack digital solutions firm specializing in web
//         development, digital marketing, and AI/ML automation. We help startups
//         and growing businesses create powerful online platforms, attract more
//         customers, and scale intelligently — all with measurable results.
//       </p>
// </div>
// <div className="backdrop-blur-lg bg-white/10 border border-white/30 shadow-inner shadow-white/10 rounded-3xl p-8">
// <OrbitCarousel />
// </div>
// </div>
// <div className="col-span-6 h-[76vh] backdrop-blur-lg bg-white/10 border border-white/30 shadow-inner text-center shadow-white/10 rounded-3xl col-span-6">
// <h1>What do we do?</h1>
//  <InfiniteScroll
//           items={items}
//           isTilted={true}
//           tiltDirection="left"
//           autoplay={true}
//           autoplaySpeed={1}
//           autoplayDirection="down"
//           pauseOnHover={true}
//         />
// </div>
//     </div>
//       {/* <Carousel /> */}

//     </>
//   );
// }

// export default About;

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
   const divRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);


  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, 
      mirror: true,    
    });
  }, []);
  
//   useEffect(()=>{
//     const target = document.getElementById('animatedBox');

//  if(target){

// const observer = new IntersectionObserver(
//   ([entry])=>{
//     if(entry.isIntersecting){
//       target.classList.add('show');

//     }
//   },{threshold:0.5}
// );
// observer.observe(target)
//  }

//   },[])

// window.onload = () => {
//     const target = document.getElementById('animatedBox');

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           target.classList.add('show');
//         }
//       },
//       { threshold: 0.5 }
//     );

//     observer.observe(target);
//   };

  // const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         document.getElementById('animatedBox').classList.add('show');
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );

  //   observer.observe(document.getElementById('animatedBox'));



  //   window.onload = () => {
  //   const target = document.getElementById('animatedBox');

  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (entry.isIntersecting) {
  //         target.classList.add('show');
  //       }
  //     },
  //     { threshold: 0.5 }
  //   );

  //   observer.observe(target);
  // };
  return (
    <>
      <div className="lg:h-screen md:h-screen grid grid-cols-12 lg:mt-8 md:mt-8 gap-4">
        {/* <div id="animatedBox" ref={divRef} className={`col-span-6 slide-box ${inView ? "show" : ""}`}> */}
        <div   className=" lg:col-span-6 md:col-span-6 col-span-12 ">
           <div data-aos="fade-right" class="relative rounded-3xl  shadow-2xl border border-white/20 glass-effect text-center mb-4">
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

          <div data-aos="fade-right" class="relative rounded-3xl  shadow-2xl border border-white/20 glass-effect">
            <div class="absolute inset-0 bg-gradient-to-br rounded-3xl from-white/30 via-white/10 to-white/5 opacity-40"></div>
            <div class="relative z-10 lg:p-6 md:p-4 p-2 text-white">
              <OrbitCarousel />
            </div>
          </div>
        </div>
         
            <div data-aos="fade-left" class=" h-[76vh] rounded-3xl lg:col-span-6 md:col-span-6 col-span-12 shadow-2xl border border-white/20 text-center pt-4">
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
