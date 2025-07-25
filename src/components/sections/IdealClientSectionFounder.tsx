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
    desc: "You're building something bigger than revenue. A brand that means something and moves people."
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
    desc: "You're ready to lead. You want to grow your influence, shape your narrative, and own your space with confidence."
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
    desc: "You want a brand that fits your life, one that builds momentum without demanding content every waking hour."
  }
];

export const IdealClientSectionFounder: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 pt-[calc(4rem+50px)] px-6 flex flex-col items-center mb-16">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-2" style={{ color: '#0f0f10', fontFamily: 'Montserrat, Helvetica' }}>Made for Founders Like You</h2>
      <p className="text-lg text-center mb-10 max-w-2xl opacity-80" style={{ fontFamily: 'Inter, Helvetica' }}>
        If this sounds like you, you’re in the right place.
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