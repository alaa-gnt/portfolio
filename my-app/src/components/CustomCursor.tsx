import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor circle */}
      <div
        className={`fixed top-0 left-0 rounded-full border-2 border-[#ee4848] pointer-events-none z-50 transition-all duration-200 ease-out mix-blend-difference ${
          isHovering ? 'w-12 h-12 scale-150' : 'w-8 h-8'
        }`}
        style={{
          transform: `translate(${mousePosition.x - (isHovering ? 24 : 16)}px, ${mousePosition.y - (isHovering ? 24 : 16)}px)`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Inner dot */}
      <div
        className={`fixed top-0 left-0 rounded-full bg-[#ee4848] pointer-events-none z-50 transition-all duration-200 ease-out ${
          isHovering ? 'w-3 h-3' : 'w-2 h-2'
        }`}
        style={{
          transform: `translate(${mousePosition.x - (isHovering ? 6 : 4)}px, ${mousePosition.y - (isHovering ? 6 : 4)}px)`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Outer ring for hover effects */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-[#ee4848]/30 pointer-events-none z-50 transition-all duration-300 ease-out ${
          isHovering ? 'w-20 h-20 border-[#ee4848]/50' : 'w-16 h-16'
        }`}
        style={{
          transform: `translate(${mousePosition.x - (isHovering ? 40 : 32)}px, ${mousePosition.y - (isHovering ? 40 : 32)}px)`,
          opacity: isVisible ? (isHovering ? 0.8 : 0.5) : 0,
        }}
      />
    </>
  );
}
