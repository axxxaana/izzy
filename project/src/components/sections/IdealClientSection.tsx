import React from "react";

const features = [
  {
    icon: (
      <span className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#e44782]/30 to-[#e44782]/10 mb-7 shadow group-hover:scale-110 group-hover:shadow-lg transition-transform duration-200">
        {/* Heart icon for Purpose-Driven */}
        <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
          <path d="M18 30s-9-6.6-9-12.6A5.4 5.4 0 0118 11.7a5.4 5.4 0 019 5.7C27 23.4 18 30 18 30z" fill="#e44782"/>
        </svg>
      </span>
    ),
    title: "Purpose-Driven",
    desc: "You're not just chasing leads. You want a brand that stands for something with a message that's clear and meaningful."
  },
  {
    icon: (
      <span className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#e44782]/30 to-[#e44782]/10 mb-7 shadow group-hover:scale-110 group-hover:shadow-lg transition-transform duration-200">
        {/* Upward arrow for Ambitious */}
        <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
          <path d="M18 8v20M18 8l-8 8M18 8l8 8" stroke="#e44782" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    ),
    title: "Ambitious",
    desc: "You're growing fast and need a brand that keeps up and one that reflects your momentum and where you're headed."
  },
  {
    icon: (
      <span className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#e44782]/30 to-[#e44782]/10 mb-7 shadow group-hover:scale-110 group-hover:shadow-lg transition-transform duration-200">
        {/* Modern clock for Time-Smart */}
        <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="15" stroke="#e44782" strokeWidth="2.5" fill="#e44782" fillOpacity="0.12"/>
          <circle cx="18" cy="18" r="2.5" fill="#e44782"/>
          <path d="M18 12v6l4 2" stroke="#e44782" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </span>
    ),
    title: "Time-Smart",
    desc: "You want strategy that's focused and efficient with no fluff, no chaos, just what moves your business forward."
  }
];

export const IdealClientSection: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto pt-[94px] pb-16 px-6 flex flex-col items-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6" style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica' }}>Made for Startups Like Yours</h2>
      <p className="text-lg text-center mb-14 max-w-lg opacity-80" style={{ fontFamily: 'Inter, Helvetica' }}>
        If you're here to grow with clarity, not burn out or blend in, you're in the right place.
      </p>
      <div className="flex flex-col md:flex-row gap-10 w-full justify-center items-stretch">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex-1 rounded-3xl border border-[#ececec] bg-white shadow-md p-12 flex flex-col items-center text-center min-h-[390px] transition-all duration-200 hover:shadow-xl hover:border-[#e44782] group"
            style={{ minWidth: 260 }}
          >
            {f.icon}
            <div className="text-2xl font-extrabold mb-5 mt-2" style={{ color: '#e44782', fontFamily: 'Montserrat, Helvetica' }}>{f.title}</div>
            <div className="text-base opacity-80" style={{ fontFamily: 'Inter, Helvetica', lineHeight: 1.7 }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}; 