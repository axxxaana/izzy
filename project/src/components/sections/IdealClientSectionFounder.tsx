import React from "react";

const features = [
  {
    icon: (
      <span className="flex items-center justify-center w-20 h-20 rounded-full bg-[#F8F9FA] mb-7 shadow group-hover:scale-110 group-hover:shadow-lg transition-transform duration-200">
        {/* Heart icon for Purpose-Driven */}
        <img src="/heart.svg?v=2" alt="Heart" width="42" height="42" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(99%) saturate(1234%) hue-rotate(60deg) brightness(101%) contrast(101%)' }} />
      </span>
    ),
    title: "Purpose-Driven",
    desc: "You're building something bigger than revenue. A brand that means something and moves people."
  },
  {
    icon: (
      <span className="flex items-center justify-center w-20 h-20 rounded-full bg-[#F8F9FA] mb-7 shadow group-hover:scale-110 group-hover:shadow-lg transition-transform duration-200">
        {/* Eye marketing icon for Ambitious */}
        <img src="/eye-marketing.svg?v=1" alt="Eye Marketing" width="42" height="42" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(99%) saturate(1234%) hue-rotate(60deg) brightness(101%) contrast(101%)' }} />
      </span>
    ),
    title: "Ambitious",
    desc: "You're ready to lead. You want to grow your influence, shape your narrative, and own your space with confidence."
  },
  {
    icon: (
      <span className="flex items-center justify-center w-20 h-20 rounded-full bg-[#F8F9FA] mb-7 shadow group-hover:scale-110 group-hover:shadow-lg transition-transform duration-200">
        {/* Time icon for Time-Smart */}
        <img src="/time.svg?v=3" alt="Time" width="42" height="42" style={{ filter: 'brightness(0) saturate(100%) invert(67%) sepia(99%) saturate(1234%) hue-rotate(60deg) brightness(101%) contrast(101%)' }} />
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