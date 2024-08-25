import React, { useEffect } from 'react'

const Cursor = () => {

  const [cursorPosition, setCursorPosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }
  , []);

  return (
    <div className='fixed pointer-events-none w-6 h-6 rounded-full bg-white mix-blend-difference z-50 lg:opacity-100 sm:opacity-0' 
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: 'translate(-50%, -50%)',
    }}/>
  )
}

export default Cursor
