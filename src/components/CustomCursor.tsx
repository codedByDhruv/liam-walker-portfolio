
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed w-2 h-2 bg-cyber-blue rounded-full pointer-events-none z-50 transition-transform duration-100 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isClicking ? 'scale-150' : 'scale-100'}`}
        style={{
          left: position.x - 4,
          top: position.y - 4,
          transform: `translate(0, 0)`,
        }}
      />
      
      {/* Outer ring */}
      <div
        className={`fixed w-8 h-8 border border-cyber-blue rounded-full pointer-events-none z-40 transition-all duration-200 ${
          isVisible ? 'opacity-50' : 'opacity-0'
        } ${isClicking ? 'scale-75' : 'scale-100'}`}
        style={{
          left: position.x - 16,
          top: position.y - 16,
          transform: `translate(0, 0)`,
        }}
      />
    </>
  );
};

export default CustomCursor;
