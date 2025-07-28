export const FOUNDER_BRAND_FEATURES = [
  'Articulate your unique story, why, values and vision, so every message feels authentic and memorable.',
  'Publish high-impact articles, LinkedIn posts and bylines without daily grind, making you the go-to expert.',
  'Pinpoint channels and cadence to amplify your voice, build trust and drive growth.',
];

export const FRACTIONAL_MARKETING_FEATURES = [
  'Refine your core messaging pillars to resonate and convert ideal audiences.',
  'Develop repeatable content calendars, workflows and templates for seamless execution.',
  'Launch and optimize multi-channel campaigns that drive measurable growth and momentum.',
];

export interface IndustryCategory {
  name: string;
  color: string;
  top: string;
  left: string;
  width: string;
  height: string;
}

export const INDUSTRY_CATEGORIES: IndustryCategory[] = [
  {
    name: 'Mental Health',
    color: 'bg-[#ffdcea]',
    top: 'top-[163px]',
    left: 'left-[87px]',
    width: 'w-[117px]',
    height: 'h-9',
  },
  {
    name: 'Active Life',
    color: 'bg-[#d9f4f7]',
    top: 'top-0',
    left: 'left-[102px]',
    width: 'w-[97px]',
    height: 'h-12',
  },
  {
    name: 'Personal Care',
    color: 'bg-[#e8f9dd]',
    top: 'top-0',
    left: 'left-[30px]',
    width: 'w-[119px]',
    height: 'h-12',
  },
  {
    name: 'Pets',
    color: 'bg-[#d9f4f7]',
    top: 'top-0',
    left: 'left-0',
    width: 'w-[62px]',
    height: 'h-12',
  },
  {
    name: 'Dental Care',
    color: 'bg-[#ffdcea]',
    top: 'top-[113px]',
    left: 'left-0',
    width: 'w-[106px]',
    height: 'h-9',
  },
  {
    name: 'Training',
    color: 'bg-[#fff4d9]',
    top: 'top-[163px]',
    left: 'left-0',
    width: 'w-[82px]',
    height: 'h-12',
  },
  {
    name: 'Culinary\nSubscriptions',
    color: 'bg-[#e8f9dd]',
    top: 'top-[111px]',
    left: 'left-[-15px]',
    width: 'w-[117px]',
    height: 'h-16',
  },
  {
    name: 'Entertainment',
    color: 'bg-[#fff4d9]',
    top: 'top-[163px]',
    left: 'left-[85px]',
    width: 'w-[119px]',
    height: 'h-12',
  },
];
