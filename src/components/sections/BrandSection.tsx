import React from 'react';
import { motion } from 'framer-motion';

export const BrandSection: React.FC = () => {

  // Animation configuration for perfect fanned-out arc layout
  const cardData = [
    { src: '/image-8.png', zIndex: 94 }, // Far left
    { src: '/image-7.png', zIndex: 95 },
    { src: '/image-6.png', zIndex: 96 },
    { src: '/image-1.png', zIndex: 100 }, // Center (highest z-index)
    { src: '/image-3.png', zIndex: 96 },
    { src: '/image-4.png', zIndex: 95 },
    { src: '/image-5.png', zIndex: 94 }, // Far right
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
    <section className="w-full py-32 px-4 flex flex-col items-center justify-center">
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
        <motion.div 
          className="flex justify-center w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-black text-[40px] text-center bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Strategy. Voice. Visibility.
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
          <p className="text-lg leading-[1.7] text-gray-700 text-center max-w-xl">
            End-to-end brand and marketing solutions, refining your core message, building scalable content systems, and executing data-driven campaigns that drive real growth.
          </p>
        </motion.div>

        {/* 4. 🚀 Get Started Button */}
        <motion.div 
          className="flex justify-center mt-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          <button className="relative bg-[#e44782] text-white font-['Montserrat'] font-semibold text-[16px] px-5 py-3 rounded-[0.84rem] border-2 border-[#e44782] overflow-hidden group hover:bg-white hover:text-[#e44782] transition-all duration-300 ease-out">
            Get Started
          </button>
        </motion.div>

      </div>
    </section>
  );
}; 