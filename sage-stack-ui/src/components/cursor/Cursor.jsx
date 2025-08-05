// // Cursor.js
// import { useEffect, useState } from "react";

// const Cursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const move = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", move);
//     return () => window.removeEventListener("mousemove", move);
//   }, []);

//   return (
//     <div
//       className="custom-cursor"
//       style={{
//         transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
//       }}
//     />
//   );
// };

// export default Cursor;
import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const currentX = useRef(0);
  const currentY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const followMouse = () => {
      // Lerp values for smooth motion
      currentX.current += (mouseX.current - currentX.current) * 0.1;
      currentY.current += (mouseY.current - currentY.current) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX.current - 10}px, ${currentY.current - 10}px, 0)`;
      }

      requestAnimationFrame(followMouse);
    };

    followMouse();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default Cursor;
