import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const ImageArchSection: React.FC = () => {

  // Animation configuration for perfect fanned-out arc layout
  const cardData = [
    { src: '/Eddie-Whittingham.jpeg', zIndex: 94 }, // Far left
    { src: '/Emma.jpeg', zIndex: 95 },
    { src: '/Nick.jpeg', zIndex: 96 },
    { src: '/Sally.jpeg', zIndex: 100 }, // Center (highest z-index)
    { src: '/Jem.jpeg', zIndex: 96 },
    { src: '/Emily.jpeg', zIndex: 95 },
    { src: '/Ben.jpg', zIndex: 94 }, // Far right
  ];

  const getCardTransform = (index: number) => {
    const center = Math.floor(cardData.length / 2); // 3
    const offset = index - center; // -3, -2, -1, 0, 1, 2, 3
    
    // Increased rotation gradient for fan effect
    const rotation = offset * 6.5; // -19.5°, -13°, -6.5°, 0°, 6.5°, 13°, 19.5°
    
    // Increased horizontal spacing for breathing room
    const translateX = (offset * 130) - 70; // 130px spacing with 70px left shift
    
    // More pronounced arc curvature
    const arcValues = [70, 35, 18, 10, 18, 35, 70]; // Outer cards moved down 10px
    const translateY = arcValues[index];
    
    // Perspective scaling - center cards larger, outer cards smaller
    const scaleValues = [0.95, 0.98, 0.99, 1.0, 0.99, 0.98, 0.95];
    const scale = scaleValues[index];
    
    return { translateX, translateY, rotation, scale, offset };
  };

  return (
    <section className="w-full py-32 px-4 flex flex-col items-center justify-center" id="image-arch-section">
      <div className="w-full text-center space-y-6 p-8">
        {/* 1. 🖼️ Stacked Images at Top */}
        <div className="flex justify-center">
          <motion.div 
            className="relative"
            initial={{
              opacity: 0,
              y: 60,
              rotateX: 4,
              rotateY: -6,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              y: -90, // Moved up by 40px (from -50 to -90) for tighter visual connection
              rotateX: 0,
              rotateY: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
              width: '800px', // Increased width for more spacing
              height: '220px', // Increased height for arc
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              position: 'relative',
              margin: '0 auto',
              transform: 'translateX(-50px)', // Move arc 50px left
            }}
          >
            {/* Individual Cards with Enhanced Fanned-Out Layout */}
            {cardData.map((card, index) => {
              const { translateX, translateY, rotation, scale, offset } = getCardTransform(index);
              
              return (
                <motion.img
                  key={index}
                  src={card.src}
                  alt=""
                  className="absolute w-[160px] h-[160px] object-cover rounded-[16px] cursor-pointer"
                  style={{
                    opacity: 1, // All cards fully visible
                    zIndex: card.zIndex,
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)', // Enhanced shadow for depth
                    left: '50%',
                    top: '50%',
                    transformOrigin: 'bottom center', // Key for proper arc
                    filter: 'none', // No blur
                  }}
                  initial={{
                    opacity: 0,
                    y: 40,
                    rotateY: 0, // No 3D skew
                    rotateZ: offset * 3,
                    x: 0,
                    scale: 0.95,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: translateY, // Enhanced arc curvature
                    rotateY: 0, // No 3D skew for even top alignment
                    rotateZ: rotation, // Stronger rotation gradient
                    x: translateX, // Increased horizontal spacing
                    scale: scale, // Perspective scaling
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeOut",
                    delay: 0.5 + (index * 0.08), // Longer initial delay + stagger delay
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{
                    scale: index === 3 ? scale * 1.05 : scale * 1.02, // Maintain perspective on hover
                    y: translateY - 3, // Maintain arc position on hover
                    transition: { duration: 0.2 }
                  }}
                />
              );
            })}
          </motion.div>
        </div>

        {/* 2. 💬 Capsule Tagline */}
        <div className="mt-2.5">
          <motion.div 
            className="flex justify-center w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[40px] text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-0">
              Trusted by the best
            </h2>
          </motion.div>

          {/* 3. 📝 Main Headline */}
          <motion.div 
            className="w-full flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <p className="text-lg leading-[1.6] text-gray-700 text-center max-w-md mt-0 mb-0">
              Chosen by founders, startups, and brands who want real impact, not just pretty words.
            </p>
          </motion.div>
        </div>

        {/* 4. 🚀 Get Started Button */}
        <motion.div 
          className="flex justify-center mt-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <Link to="/get-started" className="relative bg-[#e44782] text-white font-['Montserrat'] font-semibold text-[16px] px-5 py-3 rounded-[0.84rem] border-2 border-[#e44782] overflow-hidden group hover:bg-white hover:text-[#e44782] transition-all duration-300 ease-out">
            Book a Call
          </Link>
        </motion.div>

      </div>
    </section>
  );
}; 