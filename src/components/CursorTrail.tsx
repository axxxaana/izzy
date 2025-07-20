import React, { useEffect, useRef, useState } from 'react';
import './CursorTrail.css';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  color: string;
}

export const CursorTrail: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const particleIdRef = useRef(0);

  const brandColors = [
    '#e44782', // Primary pink
    '#f472b6', // Lighter pink
    '#ec4899', // Medium pink
    '#db2777', // Darker pink
  ];

  useEffect(() => {
    let lastParticleTime = 0;
    const particleDelay = 50; // Only create particle every 50ms (throttle)

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Throttle particle creation
      if (now - lastParticleTime > particleDelay) {
        // Create new particle with slight randomness in position
        const newParticle: Particle = {
          id: particleIdRef.current++,
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          opacity: 0.8,
          scale: Math.random() * 0.4 + 0.3, // Random size between 0.3 and 0.7
          color: brandColors[Math.floor(Math.random() * brandColors.length)]
        };

        setParticles(prev => {
          // Limit total particles to prevent performance issues
          const newParticles = [...prev, newParticle];
          return newParticles.length > 50 ? newParticles.slice(-50) : newParticles;
        });

        lastParticleTime = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Animate and remove particles
    const interval = setInterval(() => {
      setParticles(prev => {
        return prev
          .map(particle => ({
            ...particle,
            opacity: particle.opacity - 0.015, // Slower fade
            scale: particle.scale * 0.985, // Slower shrink
            y: particle.y + Math.random() * 1.5 - 0.75, // Gentler random movement
            x: particle.x + Math.random() * 1.5 - 0.75,
          }))
          .filter(particle => particle.opacity > 0.05); // Remove when very faint
      });
    }, 32); // ~30fps for better performance

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cursor-trail-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="cursor-particle"
          style={{
            left: particle.x - 4,
            top: particle.y - 4,
            opacity: particle.opacity,
            transform: `scale(${particle.scale})`,
            backgroundColor: particle.color,
          }}
        />
      ))}
    </div>
  );
}; 