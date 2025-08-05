import React, { useState } from 'react';
// import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const items = [
  { icon: '🚗', title: 'Car' },
  { icon: '🚀', title: 'Rocket' },
  { icon: '🏍️', title: 'Bike' },
  { icon: '🚁', title: 'Helicopter' },
  { icon: '🛸', title: 'UFO' },
];

 function Carousel() {
     const [activeIndex, setActiveIndex] = useState(0);
  const total = items.length;

  const getIndex = (offset) =>
    (activeIndex + offset + total) % total;

  return (
    <div className="relative w-full flex flex-col items-center justify-center  text-white overflow-hidden">
      <div className="relative w-full flex items-center justify-center">
        {[-1, 0, 1].map((offset) => {
          const index = getIndex(offset);
          const isActive = offset === 0;

          // Position with arc-like transform
          const baseX = offset * 150;
          const baseY = Math.abs(offset) === 1 ? 40 : 0;
          const scale = isActive ? 1 : 0.8;
          const zIndex = isActive ? 10 : 5;
          const opacity = isActive ? 1 : 0.6;

          return (
            <div
              key={index}
              className={`absolute w-96 h-96 bg-white/10 backdrop-blur-md border border-white/10  shadow-[0_0_10px_#3b82f6] rounded-xl flex flex-col items-center justify-center transition-all duration-500 wavy-card `}
              style={{
                transform: `translateX(${baseX}px) translateY(${baseY}px) scale(${scale})`,
                zIndex,
                opacity,
              }}
            >
              <div className="text-4xl">{items[index].icon}</div>
              <div className="mt-2 font-semibold">{items[index].title}</div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-8 flex gap-8">
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev - 1 + total) % total)
          }
          className="p-3 rounded-full "
        >
        left
        </button>
        <button
          onClick={() =>
            setActiveIndex((prev) => (prev + 1) % total)
          }
          className="p-3 rounded-full "
        >
          right
        </button>
      </div>
    </div>
  );
}
export default Carousel