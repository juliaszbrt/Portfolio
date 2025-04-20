'use client';

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: position.y,
        left: position.x,
        width: '20px',
        height: '20px',
        backgroundImage: `url('/cursor.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  );
}
