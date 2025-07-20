import React, { useState, useCallback } from 'react';

interface ProcessStep {
  title: string;
  bgColor: string;
  textColor: string;
  toggleIconColor: string;
  contentText: string;
  tags: string[];
}

const processSteps: ProcessStep[] = [
  {
    title: "Strategy",
    bgColor: "#e44782",
    textColor: "#ffffff",
    toggleIconColor: "#ffffff",
    contentText: "Before any brand shows up boldly, it needs to get clear. I dive deep into your goals, audience, and positioning to build a strategy that actually sticks.",
    tags: ["Discovery call", "Brand clarity audit", "Competitive positioning", "Messaging hierarchy"]
  },
  {
    title: "Messaging",
    bgColor: "#f473ae",
    textColor: "#ffffff",
    toggleIconColor: "#ffffff",
    contentText: "This is where we cut through the fluff. We untangle bloated decks and buried founder stories into sharp, clear, human messaging.",
    tags: ["Brand story", "Tone of voice", "Website & sales copy", "Elevator pitch"]
  },
  {
    title: "Activation",
    bgColor: "#ffe4ed",
    textColor: "#1e1e1e",
    toggleIconColor: "#1e1e1e",
    contentText: "Now we bring it to life. From content systems to design direction, I help you show up in a way that feels aligned and converts.",
    tags: ["Content plan", "Design briefs", "Ghostwriting", "Go-to-market support"]
  }
];

export const IzzyProcessAccordion: React.FC = () => {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const toggleStep = useCallback((index: number) => {
    setOpenStep(prev => prev === index ? null : index);
  }, []);

  const handleMouseEnter = useCallback((index: number) => {
    setHoveredStep(index);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredStep(null);
  }, []);

  return (
    <section className="w-full bg-[#fff4f7] py-32 md:py-40">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-[36px] font-bold text-gray-900 mb-4 font-['Montserrat'] tracking-tight leading-tight">
            My Signature Process
          </h2>
          <p className="text-lg text-gray-600 max-w-[720px] mx-auto">
            A clear, human, and commercially-minded journey to brand clarity
          </p>
        </div>

        {/* Accordion Steps */}
        <div className="space-y-5">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`transform transition-all duration-300 ease-out will-change-transform ${
                hoveredStep === index ? 'scale-[1.01]' : 'scale-100'
              }`}
              style={{ backgroundColor: step.bgColor }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`rounded-[20px] px-8 py-6 cursor-pointer transition-all duration-300 ease-out shadow-md hover:shadow-lg ${
                  openStep === index ? 'shadow-xl' : ''
                }`}
                onClick={() => toggleStep(index)}
              >
                {/* Step Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm font-medium opacity-80" style={{ color: step.textColor }}>
                      Step {index + 1}
                    </span>
                    <h3 
                      className="text-[20px] font-semibold font-['Montserrat'] leading-tight"
                      style={{ color: step.textColor }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <div 
                    className={`text-[28px] transition-all duration-300 ease-out ${
                      openStep === index ? 'rotate-45' : 'rotate-0'
                    }`}
                    style={{ color: step.toggleIconColor }}
                  >
                    {openStep === index ? '✖️' : '➕'}
                  </div>
                </div>

                {/* Step Content */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    openStep === index ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p 
                    className="text-[16px] leading-relaxed mb-6 max-w-[720px]"
                    style={{ color: step.textColor }}
                  >
                    {step.contentText}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[14px] font-medium px-[14px] py-[6px] rounded-full border capitalize transition-all duration-200 hover:scale-105 hover:shadow-sm"
                        style={{
                          color: step.textColor,
                          borderColor: step.textColor,
                          backgroundColor: 'transparent'
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 