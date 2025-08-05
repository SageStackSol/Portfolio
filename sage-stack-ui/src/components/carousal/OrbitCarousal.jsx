import React, { useEffect, useState } from "react";
import edCellLogo from 'assets/images/edcell_logo.png';
import lgLogo from 'assets/images/Lg.png';
import gvrLogo from 'assets/images/gvrlogo.png';
import lyLogo from 'assets/images/lyoflorals-logo-R-scaled-1-2048x1910.jpg';
import btLogo from 'assets/images/btLogo.png';
import zvLogo from 'assets/images/zvLogo.png';
const items = [
  { icon: edCellLogo },
  { icon: lgLogo },
  { icon: gvrLogo },
  { icon: lyLogo },
  { icon: btLogo },
  { icon: zvLogo },

];

function OrbitCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const radius = 180;
  const visibleItems = 2.5;

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 1000); // every 2.5s
    return () => clearInterval(interval);
  }, []);

  // Spread across semicircle
  const itemAngle = 180 / (visibleItems * 2);

  return (
    <>

        
    <div className="relative h-72 w-full overflow-hidden flex flex-col items-center justify-center ">
      {/* Orbit Arc (lines between elements) */}
      {/* <div className="absolute bottom-[90px] w-[400px] border-t border-gray-600 rounded-b-full opacity-30" /> */}

      {/* Items on Arc */}
      <div className="relative w-full  flex items-center lg:justify-center md:px-6">
        <h1 className="lg:text-5xl md:text-5xl text-2xl font-semibold">Our Projects</h1>
        {items.map((item, index) => {
          const relativeIndex =
            (index - activeIndex + items.length) % items.length;

          // Position only 3 items max (center, left, right)
          if (relativeIndex > 2 && relativeIndex < items.length - 2)
            return null;

          const angle = (relativeIndex - 1) * itemAngle;
          const rad = (angle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          const scale = relativeIndex === 1 ? 1 : 0.8;
          const zIndex = relativeIndex === 1 ? 10 : 5;
          const opacity = relativeIndex === 1 ? 1 : 0.5;

          return (
            <div
              key={index}
              className="absolute shadow-md flex flex-col items-center justify-center transition-all duration-500 overflow-hidden"
              style={{
                transform: `translate(${x}px, ${-y}px) scale(${scale})`,
                opacity,
                zIndex,
              }}
            >
              <div className="text-4xl h-48"><img className="w-12 rounded-md" src={item.icon}/></div>
              {/* <div className="mt-2 text-sm font-semibold">{item.title}</div> */}
            </div>
          );
        })}
      </div>
    </div>
  

    
    </>
  );
}
export default OrbitCarousel;

// import React, { useEffect, useState } from "react";
// // import "./PlanetCarousel.css";

// const PlanetCarousel = () => {
//   const elements = ["🪐", "🌎", "🌕", "🌟", "☄️", "🛰️"];
//   const [angle, setAngle] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAngle((prev) => prev + 1);
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   const visibleCount = 3;
//   const radius = 150;
//   const arc = Math.PI; // 180 degrees

//   return (
//     <div className="orbit-wrapper">
//       <div
//         className="orbit"
//         style={{ transform: `rotate(${angle}deg)` }}
//       >
//         {elements.map((el, i) => {
//           const theta = (i / (elements.length - 1)) * arc;
//           const x = radius * Math.cos(theta);
//           const y = radius * Math.sin(theta);

//           return (
//             <div
//               key={i}
//               className="planet"
//               style={{
//                 transform: `translate(${x}px, ${-y}px) rotate(${-angle}deg)`,
//                 opacity: i < visibleCount ? 1 : 0.3,
//               }}
//             >
//               {el}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default PlanetCarousel;
