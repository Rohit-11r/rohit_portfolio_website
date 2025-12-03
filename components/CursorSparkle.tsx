import React, { useEffect, useRef } from 'react';

const CursorSparkle: React.FC = () => {
  const sparkleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices
    if ('ontouchstart' in window) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = `${e.clientX}px`;
      sparkle.style.top = `${e.clientY}px`;

      sparkleContainerRef.current?.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 700); // Match animation duration
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={sparkleContainerRef} aria-hidden="true" />;
};

export default CursorSparkle;