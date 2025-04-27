'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setCursorPosition({ x: mousePosition.x, y: mousePosition.y });
  }, [mousePosition]);

  useEffect(() => {
    const checkIfTouchDevice = () => {
      if (('ontouchstart' in window) || (navigator.maxTouchPoints > 0)) {
        setIsTouchDevice(true);
      }
    };

    checkIfTouchDevice();
  }, []);

  if (isTouchDevice) {
    return null; 
  }


  return (
    <div
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px) translate(-50%, -50%)`,
      }}
    >
      <div className={`transition-all duration-200 ease-out`} />
    </div>
  );
}
