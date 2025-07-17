import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const MainContentSection = (): JSX.Element => {
  // Navigation items
  const navItems = [
    { label: "About", width: "w-[72px]" },
    { label: "Services", width: "w-[88px]" },
    { label: "Portfolio", width: "w-[86px]" },
  ];

  // Service features data
  const founderBrandFeatures = [
    "Articulate your unique story, why, values and vision, so every message feels authentic and memorable.",
    "Publish high-impact articles, LinkedIn posts and bylines without daily grind, making you the go-to expert.",
    "Pinpoint channels and cadence to amplify your voice, build trust and drive growth.",
  ];

  const fractionalMarketingFeatures = [
    "Refine your core messaging pillars to resonate and convert ideal audiences.",
    "Develop repeatable content calendars, workflows and templates for seamless execution.",
    "Launch and optimize multi-channel campaigns that drive measurable growth and momentum.",
  ];

  // Industry categories data
  const industryCategories = [
    {
      name: "Mental Health",
      color: "bg-[#ffdcea]",
      top: "top-[163px]",
      left: "left-[87px]",
      width: "w-[117px]",
      height: "h-9",
    },
    {
      name: "Active Life",
      color: "bg-[#d9f4f7]",
      top: "top-0",
      left: "left-[102px]",
      width: "w-[97px]",
      height: "h-12",
    },
    {
      name: "Personal Care",
      color: "bg-[#e8f9dd]",
      top: "top-0",
      left: "left-[30px]",
      width: "w-[119px]",
      height: "h-12",
    },
    {
      name: "Pets",
      color: "bg-[#d9f4f7]",
      top: "top-0",
      left: "left-0",
      width: "w-[62px]",
      height: "h-12",
    },
    {
      name: "Dental Care",
      color: "bg-[#ffdcea]",
      top: "top-[113px]",
      left: "left-0",
      width: "w-[106px]",
      height: "h-9",
    },
    {
      name: "Training",
      color: "bg-[#fff4d9]",
      top: "top-[163px]",
      left: "left-0",
      width: "w-[82px]",
      height: "h-12",
    },
    {
      name: "Culinary\nSubscriptions",
      color: "bg-[#e8f9dd]",
      top: "top-[111px]",
      left: "left-[-15px]",
      width: "w-[117px]",
      height: "h-16",
    },
    {
      name: "Entertainment",
      color: "bg-[#fff4d9]",
      top: "top-[163px]",
      left: "left-[85px]",
      width: "w-[119px]",
      height: "h-12",
    },
  ];

  // FAQ items
  const faqItems = [
    { question: "What is Tedy?" },
    { question: "Can I support employee recognition initiatives with Tedy?" },
    { question: "Is Tedy an insurance?" },
    { question: "How much does Tedy cost?" },
    { question: "Is there a minimum amount to allocate to employees?" },
    {
      question: "Is there a minimum or maximum number of categories to choose?",
    },
    { question: "How often can I schedule allocations?" },
    { question: "When do I have to pay the amount allocated to my employees?" },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Blake Beus",
      role: "App Security at JPMorgan Chase",
      text: "I can't believe that I used to run my business without Jumpshare. My clients are VERY impressed that I can quickly take videos, GIFs, and screenshots showing them what we need to do or give them feedback on project requirements.",
      image: "/blake.png",
    },
    {
      name: "Qwantel Latay",
      role: "Online Business Manager",
      text: 'Jumpshare is one of those "where have you been my whole life" tools. They combined tools that I\'d been using all into one cohesive little network when sharing files. Such a genius product, and I hope they stay around forever!',
      image: "/qwantel.png",
    },
    {
      name: "Dave Baxter",
      role: "Estate Agent at DBRealty",
      text: "Jumpshare saves me a ton of time and allows me to work on my schedule. Customers love getting detailed screencasts from me with a call-to-action link for appointments. It's a beautiful workflow. You cannot afford to NOT use Jumpshare.",
      image: "/dave.png",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full relative">
      {/* Hero Section */}
      <div className="w-full relative mb-0">
        <div className="w-full h-[500px] sm:h-[600px] md:h-[650px] lg:h-[600px] xl:h-[650px] relative p-3 sm:p-4 lg:p-[15px]">
          <div className="relative w-full h-[470px] sm:h-[570px] md:h-[620px] lg:h-[570px] xl:h-[620px] mx-auto rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px] overflow-hidden">
            <div className="relative h-full">
              <div className="absolute w-full h-full top-0 left-0">
                <div className="relative h-full">
                  <div className="absolute w-full h-full top-0 left-0 bg-white opacity-10 rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]" />
                  <div className="absolute w-full h-full top-0 left-0 [background:url('/Izzy-Prior-Homepage-Heder.png')_50%_40%_/_cover] rounded-[15px] sm:rounded-[18px] lg:rounded-[22.5px]">
                    {/* Navigation Bar */}
                    <div className="fixed top-4 sm:top-6 lg:top-[39px] left-1/2 transform -translate-x-1/2 w-[95%] sm:w-[90%] max-w-[1280px] h-12 sm:h-14 lg:h-[66px] mx-auto bg-[#ffffffb2] rounded-2xl sm:rounded-3xl shadow-[0px_1px_1px_-0.5px_#00000008,0px_2px_2px_-1px_#00000008,0px_3px_3px_-1.5px_#00000008,0px_5px_5px_-2.5px_#00000008,0px_10px_10px_-5px_#00000008,0px_16px_16px_-8px_#00000008,0px_0px_0px_1px_#0000001a] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] z-50 px-3 sm:px-4">
                      <div className="relative w-full h-8 sm:h-10 lg:h-[54px] top-2 sm:top-2 lg:top-1.5 flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                          <a href="/" className="w-8 sm:w-10 lg:w-[52px] h-6 sm:h-8 lg:h-[43px] block">
                            <img
                              className="w-5 sm:w-6 lg:w-[33px] h-6 sm:h-8 lg:h-[43px] object-cover"
                              alt="Copy of bolt logo"
                              src="/copy-of-bolt-logo-1.png"
                            />
                          </a>

                          {/* Navigation Items */}
                          <div className="hidden sm:flex h-6 sm:h-8 lg:h-9 relative -top-0.5 ml-2 lg:ml-0">
                            {navItems.map((item, index) => (
                              <div key={index} className={`h-6 sm:h-8 lg:h-9 w-16 sm:w-20 lg:${item.width}`}>
                                <div className="h-full rounded-full">
                                  <div
                                    className="w-full h-full rounded-full"
                                  >
                                    <a 
                                      href="#" 
                                      className="block hover:text-[#e44782] transition-colors duration-200 flex items-center justify-center h-full relative top-0.5"
                                    >
                                      <span className="[font-family:'Inter',Helvetica] font-normal text-[#797979] text-xs sm:text-sm lg:text-[13.5px] tracking-[0] leading-5 whitespace-nowrap hover:text-[#e44782] transition-colors duration-200">
                                        {item.label}
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Contact Button */}
                        <Button 
                          className="group w-20 sm:w-24 lg:w-[111px] h-8 sm:h-8 lg:h-9 bg-[#e44782] text-white rounded-full border-2 border-solid border-[#e44782] shadow-[0px_1px_1px_-0.5px_#00000008,0px_2px_2px_-1px_#00000008,0px_3px_3px_-1.5px_#00000008,0px_5px_5px_-2.5px_#00000008,0px_10px_10px_-5px_#00000008,0px_16px_16px_-8px_#00000008] hover:bg-white hover:border-[#e44782] transition-all duration-200 flex-shrink-0"
                        >
                          <span className="[font-family:'Inter',Helvetica] font-normal text-xs sm:text-xs lg:text-[13px] text-center tracking-[0] leading-[14px] whitespace-nowrap transition-colors duration-200 group-hover:text-[#e44782]">
                            Get Started
                          </span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hero Content - Text Only */}
              <div className="absolute max-w-[600px] top-[165px] sm:top-[165px] md:top-[205px] lg:top-[165px] xl:top-[205px] left-[80px] sm:left-[100px] lg:left-[120px] px-4">
                <div className="w-full">
                  <h1 className="[font-family:'Montserrat',Helvetica] font-semibold text-white text-[80px] text-left tracking-[-1.2px] leading-[1.1] mb-6">
                    No-Fluff, High-Impact Branding
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="w-full h-[120px] mt-6 mx-auto flex items-center relative overflow-hidden bg-white">
          {/* Trusted by text - fixed on left */}
          <div className="absolute left-8 z-30 bg-white">
            <h2 className="[font-family:'Montserrat',Helvetica] font-medium text-black text-[28px] tracking-[0] leading-[32px] whitespace-nowrap">
              Trusted by
            </h2>
          </div>

          {/* Scrolling logos container */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full">
            <div className="flex items-center animate-scroll">
              {/* Multiple sets of logos for seamless loop */}
              <div className="flex items-center space-x-12 ml-96">
                <div className="text-gray-400 text-2xl font-medium whitespace-nowrap">Coutu</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">Harnois</div>
                <div className="text-gray-400 text-2xl font-bold whitespace-nowrap">EROS</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">DIALEKTA</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">ABG</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">thirdbridge</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">CAMELLIA</div>
              </div>
              
              {/* Second set */}
              <div className="flex items-center space-x-12 ml-12">
                <div className="text-gray-400 text-2xl font-medium whitespace-nowrap">Coutu</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">Harnois</div>
                <div className="text-gray-400 text-2xl font-bold whitespace-nowrap">EROS</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">DIALEKTA</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">ABG</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">thirdbridge</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">CAMELLIA</div>
              </div>
              
              {/* Third set */}
              <div className="flex items-center space-x-12 ml-12">
                <div className="text-gray-400 text-2xl font-medium whitespace-nowrap">Coutu</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">Harnois</div>
                <div className="text-gray-400 text-2xl font-bold whitespace-nowrap">EROS</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">DIALEKTA</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">ABG</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">thirdbridge</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">CAMELLIA</div>
              </div>
              
              {/* Fourth set */}
              <div className="flex items-center space-x-12 ml-12">
                <div className="text-gray-400 text-2xl font-medium whitespace-nowrap">Coutu</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">Harnois</div>
                <div className="text-gray-400 text-2xl font-bold whitespace-nowrap">EROS</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">DIALEKTA</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">ABG</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">thirdbridge</div>
                <div className="text-gray-400 text-xl font-medium whitespace-nowrap">CAMELLIA</div>
              </div>
            </div>
          </div>

          {/* Fade gradient overlay - fades logos before "Trusted by" */}
          <div className="absolute left-0 top-0 w-96 h-full bg-gradient-to-r from-white via-white to-transparent z-20 pointer-events-none"></div>
          
          {/* Right side fade gradient - fades logos as they enter from right */}
          <div className="absolute right-0 top-0 w-96 h-full bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>
        </div>
        <div className="w-full max-w-[1580px] h-[400px] mt-24 mx-auto relative flex items-center justify-center">
          {/* Content */}
          <div className="flex flex-col items-center">
            <h2 className="max-w-[1030px] [font-family:'Montserrat',Helvetica] font-semibold text-[#0f0f10] text-[50px] text-center tracking-[-0.51px] leading-[61.4px] mb-8">
              I&apos;m Izzy. A fractional CMO and brand strategist. I help
              femtech, healthtech and social-impact founders strip back bloated
              messaging and create bold, <span className="bg-gradient-to-r from-[#e4478233] via-[#e4478226] to-[#e447820d] px-3 py-1 rounded-lg relative">heart-felt brands</span>{" "}that move people.
            </h2>
            <Button className="custom-pink-button rounded-full border-2 border-solid border-[#e44782] shadow-[0px_1px_1px_-0.5px_#00000008,0px_2px_2px_-1px_#00000008,0px_3px_3px_-1.5px_#00000008,0px_5px_5px_-2.5px_#00000008,0px_10px_10px_-5px_#00000008,0px_16px_16px_-8px_#00000008] transition-all duration-200">
              <span className="[font-family:'Inter',Helvetica] font-normal text-[13px] text-center tracking-[0] leading-[14px] whitespace-nowrap">
                About Izzy
              </span>
            </Button>
          </div>
        </div>

        {/* Services Intro Section */}
        <div className="w-full max-w-[1512px] mt-16 mx-auto flex flex-col items-center" style={{marginTop: '164px'}}>
          <h2 className="[font-family:'Montserrat',Helvetica] font-semibold text-[#0f0f10] text-[50px] text-center tracking-[-0.51px] leading-[61.4px] mb-8">
            Strategy. Voice. Visibility
          </h2>

          <p className="max-w-[467px] opacity-60 [font-family:'Inter',Helvetica] font-normal text-[#0f0f10] text-[16.9px] text-center tracking-[0] leading-[25.3px] mb-16">
            End-to-end brand and marketing solutions, refining your core
            message, building scalable content systems, and executing
            data-driven campaigns that drive real growth.
          </p>
        </div>

        {/* Services Section */}
        <div className="w-full max-w-[1200px] mx-auto mt-8 px-4">
          {/* Founder Brand Strategy */}
          <div className="flex items-center justify-between mb-16 gap-6">
            <div className="w-[480px] h-[480px] flex-shrink-0">
              <img
                className="w-full h-full"
                alt="Founder brand strategy"
                src="/container-7.svg"
              />
            </div>

            <div className="w-[480px] max-w-[480px] flex-shrink-0">
              <div className="mb-0">
                <h3 className="[font-family:'Montserrat',Helvetica] font-medium text-black text-[40px] tracking-[-1.44px] leading-[55px] mb-2">
                  Founder personal <br />
                  brand strategy
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[15.9px] tracking-[0] leading-[25.2px] pb-6">
                  For founders who want to build authority, trust and momentum{" "}
                  <br />
                  without posting daily just for the algorithm gods.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="border-t border-[#0000001a] pt-5">
                  <div className="flex items-start gap-5">
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#fce7f3] flex items-center justify-center flex-shrink-0">
                      <img
                        className="w-[22px] h-[18px]"
                        alt="Feature icon"
                        src="/vector-8.svg"
                      />
                    </div>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[15px] tracking-[0] leading-[25.2px]">
                      {founderBrandFeatures[0]}
                    </p>
                  </div>
                </div>
                
                {founderBrandFeatures.slice(1).map((feature, index) => (
                  <div key={index + 1} className="border-t border-[#0000001a] pt-5">
                    <div className="flex items-start gap-5">
                      <div className="w-[54px] h-[54px] rounded-2xl bg-[#fce7f3] flex items-center justify-center flex-shrink-0">
                        <img
                          className="w-[22px] h-[18px]"
                          alt="Feature icon"
                          src="/vector-8.svg"
                        />
                      </div>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[15px] tracking-[0] leading-[25.2px]">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}

                {/* CTA Button */}
                <div className="border-t border-[#0000001a] pt-5">
                  <Button className="custom-pink-button h-[54px] rounded-[1920px] transition-all duration-200">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[14.3px] text-center tracking-[0] leading-[15.8px]">
                      Learn more
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Fractional Marketing */}
          <div className="flex items-center justify-between gap-6">
            <div className="w-[480px] max-w-[480px] flex-shrink-0">
              <div className="mb-0">
                <h3 className="[font-family:'Montserrat',Helvetica] font-medium text-black text-[40px] tracking-[-1.44px] leading-[55px] mb-2">
                  Fractional marketing <br />
                  &amp; brand direction
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[15.9px] tracking-[0] leading-[25.2px] pb-6">
                  For startups ready to grow with clarity. I help you refine your messaging, build a content system that performs, and turn brand thinking into strategic execution.
                </p>
              </div>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="border-t border-[#0000001a] pt-5">
                  <div className="flex items-start gap-5">
                    <div className="w-[54px] h-[54px] rounded-2xl bg-[#fce7f3] flex items-center justify-center flex-shrink-0">
                      <img
                        className="w-[22px] h-[18px]"
                        alt="Feature icon"
                        src="/vector-8.svg"
                      />
                    </div>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[16px] tracking-[0] leading-[25.2px]">
                      {fractionalMarketingFeatures[0]}
                    </p>
                  </div>
                </div>
                
                {fractionalMarketingFeatures.slice(1).map((feature, index) => (
                  <div key={index + 1} className="border-t border-[#0000001a] pt-5">
                    <div className="flex items-start gap-5">
                      <div className="w-[54px] h-[54px] rounded-2xl bg-[#fce7f3] flex items-center justify-center flex-shrink-0">
                        <img
                          className="w-[22px] h-[18px]"
                          alt="Feature icon"
                          src="/vector-8.svg"
                        />
                      </div>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-[16px] tracking-[0] leading-[25.2px]">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}

                {/* CTA Button */}
                <div className="border-t border-[#0000001a] pt-5">
                  <Button className="custom-pink-button h-[54px] rounded-[1920px] transition-all duration-200">
                    <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[14.3px] text-center tracking-[0] leading-[15.8px]">
                      Learn more
                    </span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="w-[480px] h-[480px] flex-shrink-0">
              <img
                className="w-full h-full"
                alt="Fractional marketing"
                src="/container-9.svg"
              />
            </div>
          </div>
        </div>

        {/* Brand System Section */}
        <div className="w-full max-w-[1512px] mx-auto mt-32 relative">
          <div className="w-full max-w-[585px] mx-auto text-center mb-12">
            <h2 className="[font-family:'Montserrat',Helvetica] font-medium text-black text-[50px] text-center tracking-[-1.44px] leading-[72px] mb-8">
              See Your Brand <br />
              System Come to Life
            </h2>
            <p className="[font-family:'Inter',Helvetica] font-normal text-black text-[15.9px] text-center tracking-[0] leading-[25.2px] mb-8">
              Watch your brand&apos;s Strategy, Voice and Visibility intertwine
              to guide your audience seamlessly across every channel.
            </p>
            <Button className="custom-pink-button h-[54px] rounded-[1920px] transition-all duration-200 mx-auto">
              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[14.3px] text-center tracking-[0] leading-[15.8px]">
                Get started
              </span>
            </Button>
          </div>

          {/* Industry Categories */}
          <div className="relative w-full h-[1000px]">
            {/* Mental Health */}
            <div className="absolute w-[186px] h-[186px] top-[303px] right-[200px]">
              <div className="relative w-[204px] h-[198px]">
                <div className="absolute w-[186px] h-[186px] top-0 left-0 rounded-[22.5px] bg-[url(/a-woman-laying-on-top-of-a-couch-next-to-a-man.png)] bg-cover bg-[50%_50%]" />
                <Badge className="absolute w-[117px] h-9 top-[163px] left-[87px] bg-[#ffdcea] rounded-[1920px] flex items-center justify-center">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-black text-[12.1px] tracking-[0] leading-[13.5px]">
                    Mental Health
                  </span>
                </Badge>
              </div>
            </div>

            {/* Active Life */}
            <div className="absolute w-[186px] h-[186px] top-[776px] left-[105px]">
              <div className="relative w-[199px] h-[199px] top-[-13px]">
                <div className="absolute w-[186px] h-[186px] top-[13px] left-0 rounded-[22.5px] bg-[url(/a-man-riding-a-bike-down-a-curvy-road.png)] bg-cover bg-[50%_50%]" />
                <Badge className="absolute w-[97px] h-12 top-0 left-[102px] bg-[#d9f4f7] rounded-[1920px] flex items-center justify-center">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-black text-[12.1px] tracking-[0] leading-[13.5px]">
                    Active Life
                  </span>
                </Badge>
              </div>
            </div>

            {/* Personal Care */}
            <div className="absolute w-[139px] h-[139px] top-[879px] right-[200px]">
              <div className="relative w-[149px] h-[149px] -top-2.5">
                <div className="absolute w-[139px] h-[139px] top-2.5 left-0 rounded-[22.5px] bg-[url(/a-woman-getting-a-back-massage-at-a-spa.png)] bg-cover bg-[50%_50%]" />
                <Badge className="absolute w-[119px] h-12 top-0 left-[30px] bg-[#e8f9dd] rounded-[1920px] flex items-center justify-center">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-black text-[12.4px] tracking-[0] leading-[13.5px]">
                    Personal Care
                  </span>
                </Badge>
              </div>
            </div>

            {/* Pets */}
            <div className="absolute w-[139px] h-[139px] top-52 left-[890px]">
              <div className="relative w-[150px] h-[149px] -top-2.5 left-[-11px]">
                <div className="absolute w-[139px] h-[139px] top-2.5 left-[11px] rounded-[22.5px] bg-[url(/a-man-is-petting-a-white-dog-on-a-leash.png)] bg-cover bg-[50%_50%]" />
                <Badge className="absolute w-[62px] h-12 top-0 left-0 bg-[#d9f4f7] rounded-[1920px] flex items-center justify-center">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-black text-[12.4px] tracking-[0] leading-[13.5px]">
                    Pets
                  </span>
                </Badge>
              </div>
            </div>

            {/* Dental Care */}
            <div className="absolute w-[139px] h-[139px] top-[890px] left-[502px]">
              <div className="relative w-[149px] h-[149px] -left-2.5">
                <div className="absolute w-[139px] h-[139px] top-0 left-2.5 rounded-[22.5px] bg-[url(/a-woman-getting-her-teeth-checked-by-a-dentist.png)] bg-cover bg-[50%_50%]" />
                <Badge className="absolute w-[106px] h-9 top-[113px] left-0 bg-[#ffdcea] rounded-[1920px] flex items-center justify-center">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-black text-[12.3px] tracking-[0] leading-[13.5px]">
                    Dental Care
                  </span>
                </Badge>
              </div>
            </div>

            {/* Training */}
            <div className="absolute w-[186px] h-[186px] top-[776px] left-[1067px]">
              <div className="relative w-[199px] h-[211px] left-[-13px]">
                <div className="absolute w-[186px] h-[186px] top-0 left-[13px] rounded-[22.5px] bg-[url(/a-couple-of-people-sitting-on-a-couch-with-a-laptop.png)] bg-cover bg-[50%_50%]" />
                <Badge className="absolute w-[82px] h-12 top-[163px] left-0 bg-[#fff4d9] rounded-[1920px] flex items-center justify-center">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-black text-xs tracking-[0] leading-[13.5px]">
                    Training
                  </span>
                </Badge>
              </div>
            </div>

            {/* Culinary */}
            <div className="absolute w-[139px] h-[139px] top-[391px] left-9">
              <Badge className="absolute w-[117px] h-16 top-[111px] left-[-15px] bg-[#e8f9dd] rounded-[1920px] flex items-center justify-center">
                <span className="[font-family:'Inter',Helvetica] font-medium text-black text-[12.3px] tracking-[0] leading-[13.5px]">
                  Culinary
                  <br />
                  Subscriptions
                </span>
              </Badge>
            </div>

            {/* Entertainment */}
            <div className="absolute w-[186px] h-[186px] top-[250px] left-[269px]">
              <div className="relative w-[204px] h-[211px]">
                <div className="absolute w-[186px] h-[186px] top-0 left-0 rounded-[22.5px] bg-[url(/a-woman-wearing-a-pair-of-virtual-headsets.png)] bg-cover bg-[50%_50%]" />
                <Badge className="absolute w-[119px] h-12 top-[163px] left-[85px] bg-[#fff4d9] rounded-[1920px] flex items-center justify-center">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-black text-[12.2px] tracking-[0] leading-[13.5px]">
                    Entertainment
                  </span>
                </Badge>
              </div>
            </div>

            {/* Culinary Image */}
            <div className="absolute w-[139px] h-[139px] top-[4364px] left-[223px] rounded-[22.5px] bg-[url(/a-table-topped-with-three-plates-of-food.png)] bg-cover bg-[50%_50%]" />
          </div>
        </div>

        {/* Process Section */}
        <div className="w-full mt-32 pt-16">
          <div className="w-full max-w-[848px] mx-auto text-center mb-12">
            <Badge className="h-[43.2px] bg-[#e44782] rounded-[108px] px-4 py-2 mb-6">
              <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[21.6px] tracking-[-0.26px] leading-6">
                3 Step Process
              </span>
            </Badge>

            <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-[50px] text-center tracking-[-1.73px] leading-[69.1px] mb-8">
              <span className="text-[#091329] tracking-[-0.97px]">
                Your Brand&apos;s Blueprint <br />
              </span>
              <span className="text-[#e44782] tracking-[-0.97px]">
                for Impact
              </span>
            </h2>

            <p className="[font-family:'Inter',Helvetica] font-medium text-[#091329cc] text-[21.6px] text-center tracking-[-0.26px] leading-[32.4px]">
              A concise three-phase approach to reveal your brand&apos;s
              essence, unify strategy, voice and visibility, and execute
              campaigns driving real impact.
            </p>
          </div>

          {/* Process Steps */}
          <div className="w-full max-w-[1440px] mx-auto">
            {/* Discover Step */}
            <Card className="w-full mb-6 shadow-[0px_4.8px_4.8px_-6px_#130c3e40,0px_0px_0px_1.2px_#130c3e1c,0px_2.4px_9.6px_-1.2px_#130c3e0a] bg-[linear-gradient(180deg,rgba(228,71,130,0.4)_0%,rgba(219,232,255,0)_53%)] rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 p-12">
                    <h3 className="[font-family:'Montserrat',Helvetica] font-normal text-[#091329] text-[40px] tracking-[-0.26px] leading-[46.1px] mb-12">
                      Discover
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-medium text-[#091329cc] text-[19.2px] tracking-[-0.26px] leading-[27.3px]">
                      We audit your brand—interviewing stakeholders, mapping
                      competitors and analyzing every touchpoint—to reveal
                      hidden story gaps and audience needs. These insights
                      become the data-driven foundation for everything we build.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 p-6">
                    <div className="relative">
                      <img
                        className="w-full"
                        alt="Discover process"
                        src="/image.png"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Define Step */}
            <Card className="w-full mb-6 shadow-[0px_4.8px_4.8px_-6px_#130c3e40,0px_0px_0px_1.2px_#130c3e1c,0px_2.4px_9.6px_-1.2px_#130c3e0a] bg-[linear-gradient(180deg,rgba(228,71,130,0.4)_0%,rgba(219,232,255,0)_53%)] rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <div className="w-full h-[378px] [background:url(..//preview.png)_50%_50%_/_cover] relative">
                    <h3 className="absolute h-[47px] top-[259px] left-[77px] [font-family:'Montserrat',Helvetica] font-normal text-[#091329] text-[40px] tracking-[-0.26px] leading-[46.1px]">
                      Define
                    </h3>
                  </div>
                  <div className="p-12">
                    <p className="[font-family:'Inter',Helvetica] font-medium text-[#091329cc] text-[19.2px] tracking-[-0.26px] leading-[27.3px]">
                      We craft your core brand architecture—messaging pillars,
                      tone guidelines and visual direction—that unites strategy,
                      voice and visibility. This bespoke blueprint guarantees
                      every piece of content and design works together
                      seamlessly.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Deliver Step */}
            <Card className="w-full mb-6 shadow-[0px_4.8px_4.8px_-6px_#130c3e40,0px_0px_0px_1.2px_#130c3e1c,0px_2.4px_9.6px_-1.2px_#130c3e0a] bg-[linear-gradient(180deg,rgba(228,71,130,0.4)_0%,rgba(219,232,255,0)_53%)] rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <div className="p-12">
                    <h3 className="[font-family:'Montserrat',Helvetica] font-normal text-[#091329] text-[40px] tracking-[-0.26px] leading-[31.7px] mb-4">
                      Deliver
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-medium text-[#091329cc] text-[19.2px] tracking-[-0.26px] leading-[27.3px]">
                      We roll out high-impact campaigns, content systems and
                      assets engineered to convert. Then we measure results in
                      real time and fine-tune tactics so your brand keeps
                      cutting through the fluff.
                    </p>
                  </div>
                  <div className="w-full h-[323px] bg-[url(/history.png)] bg-cover bg-[50%_50%]" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <div className="w-full max-w-[1440px] mx-auto mt-16">
            <Card className="w-full h-[683px] bg-[#e8f9dd] rounded-[33.75px] overflow-hidden">
              <CardContent className="p-0 flex items-center h-full">
                <div className="w-full md:w-1/2 p-12 flex flex-col items-center justify-center">
                  <div className="w-9 h-8 bg-[url(/vector-5.svg)] bg-[100%_100%] mb-12" />
                  <div className="max-w-[375px] text-center">
                    <p className="[font-family:'Inter',Helvetica] font-medium text-black text-[22.6px] text-center tracking-[0] leading-[35.3px] mb-6">
                      Tedy has enabled us to move from
                      <br />
                      employee benefits to a<br />
                      personalized wellness experience.
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-black text-[11.1px] text-center tracking-[0] leading-[17.6px] opacity-60">
                      Émilie St-Aubin, Director of Finance
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-1/2">
                  <img
                    className="w-full h-auto"
                    alt="Testimonial"
                    src="/container-8.svg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cut Through The Fluff */}
          <div className="w-full bg-[#e447821a] rounded-[50px] py-16 mt-32">
            <h2 className="[font-family:'Montserrat',Helvetica] font-medium text-black text-[50px] text-center tracking-[-1.44px] leading-[72px]">
              Cut through the fluff
            </h2>
          </div>
        </div>

        {/* Recent Work Section */}
        <div className="w-full mt-32 text-center">
          <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-[#091329] text-[50px] text-center tracking-[-1.73px] leading-[69.1px] mb-8">
            Recent Work
          </h2>
          <Button className="custom-pink-button h-[54px] rounded-[1920px] transition-all duration-200 mx-auto">
            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[14.3px] text-center tracking-[0] leading-[15.8px]">
              See more
            </span>
          </Button>
        </div>

        {/* Testimonials Section */}
        <div className="w-full bg-white rounded-[67.5px_67.5px_0px_0px] mt-32 py-16">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-[#122345] text-[50px] text-center tracking-[-1.44px] leading-[60px] mb-4">
                Trusted by over a million users
              </h2>
              <p className="[font-family:'Inter',Helvetica] font-medium text-[#122345cc] text-lg tracking-[-0.22px] leading-[27px] mb-6">
                Our users love us and so will you. Here&apos;s what they are
                saying.
              </p>
              <div className="flex items-center justify-center gap-1">
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#122345] text-base tracking-[-0.22px] leading-[22.7px]">
                  4.9/5
                </span>
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#122345cc] text-base tracking-[-0.22px] leading-[22.7px]">
                  based on our user reviews
                </span>
              </div>
            </div>

            {/* Featured Testimonial */}
            <Card className="w-full mb-12 bg-white shadow-[0px_0px_0px_1px_#12234513,0px_1px_6.3px_-1px_#1223451a] rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-1/2 p-16">
                    <div className="w-7 h-7 bg-[url(/quotes.png)] bg-cover bg-[50%_50%] mb-8" />
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#122345] text-[27.2px] tracking-[-0.56px] leading-[39.5px] mb-6">
                      Jumpshare is one of the first apps our team
                      <br />
                      insisted on installing on our new laptops.
                      <br />
                      We use it every day to communicate
                      <br />
                      internally and with our customers.
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#122345] text-lg tracking-[-0.22px] leading-[27px] mb-2">
                      Dan Corkill
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#091329cc] text-[15px] tracking-[-0.22px] leading-5">
                      CEO at Follow Up Boss
                    </p>
                  </div>
                  <div className="hidden md:flex w-1/2 items-center justify-center">
                    <img
                      className="w-[300px] h-[260px]"
                      alt="Testimonial"
                      src="/container.svg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-white shadow-[0px_0px_0px_1px_#12234513,0px_1px_6.3px_-1px_#1223451a] rounded-[20px] overflow-hidden"
                >
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-[52px] h-[52px] rounded-xl overflow-hidden">
                        <div className="w-full h-full bg-[url(${testimonial.image})] bg-cover bg-[50%_50%]" />
                      </div>
                      <div>
                        <p className="[font-family:'Inter',Helvetica] font-normal text-[#122345] text-lg tracking-[-0.22px] leading-[27px]">
                          {testimonial.name}
                        </p>
                        <p className="[font-family:'Inter',Helvetica] font-normal text-[#091329cc] text-[15px] tracking-[-0.22px] leading-5">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#122345] text-lg tracking-[-0.22px] leading-[27px] mb-8">
                      {testimonial.text}
                    </p>
                    <img
                      className="w-full h-7"
                      alt="Rating"
                      src="/container-3.svg"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-[1512px] mx-auto py-16">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 mb-12 md:mb-0">
              <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-black text-[50px] text-center md:text-left tracking-[-4.32px] leading-[108px] mb-8">
                FAQs
              </h2>
              <p className="[font-family:'Inter',Helvetica] font-normal text-black text-[15.9px] tracking-[0] leading-[25.2px] mb-8">
                Got questions? We have answers! Feel free to
                <br />
                chat with our team at any moment for inquiries
                <br />
                related to Tedy in your business. You can also
                <br />
                consult our updated FAQ to find answers to
                <br />
                the most common questions.
              </p>
              <Button className="custom-pink-button h-[54px] rounded-[1920px] transition-all duration-200">
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[14.2px] tracking-[0] leading-[15.8px]">
                  Get in touch
                </span>
              </Button>
            </div>
            <div className="w-full md:w-2/3">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="[font-family:'Inter',Helvetica] font-medium text-black text-xl tracking-[0] leading-[31.5px] py-4">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-[25.2px] py-4">
                        Answer content goes here.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};