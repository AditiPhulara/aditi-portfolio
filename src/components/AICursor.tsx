import { useEffect, useState } from 'react';

export default function AICursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button')
      ) {
        setIsPointer(true);
      } else {
        setIsPointer(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Outer Glowing Ring */}
      <div
        className={`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out border ${
          isPointer
            ? 'border-pink-500 scale-150 bg-pink-500/10 glow-pink'
            : 'border-purple-500/60 scale-100 bg-purple-500/5 glow-purple'
        } hidden md:block`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      {/* Inner Glowing Core */}
      <div
        className={`fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
          isPointer ? 'bg-pink-400 scale-125' : 'bg-purple-400'
        } hidden md:block`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
}
