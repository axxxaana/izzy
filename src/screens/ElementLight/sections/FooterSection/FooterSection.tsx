import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="relative bg-black rounded-[22.5px] overflow-hidden w-full">
      <div className="w-full bg-[url(/container-1.svg)] bg-[100%_100%]">
        <Card className="relative mx-auto my-[91px] max-w-[1713px] bg-[#ffffff26] rounded-[22.5px] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)] opacity-80 border-none">
          <div className="flex flex-col items-center justify-center py-36 px-4">
            <div className="max-w-[915px] text-center">
              <h2 className="[font-family:'Montserrat',Helvetica] font-normal text-[#e44782] text-[50px] text-center tracking-[-5.76px] leading-[144px] whitespace-nowrap">
                Let&apos;s get started
              </h2>

              <p className="[font-family:'Inter',Helvetica] font-normal text-black text-[15.9px] text-center tracking-[0] leading-[25.2px] mt-8 max-w-[603px] mx-auto">
                Discover how Tedy can boost your benefits and energize your
                corporate culture.
              </p>

              <div className="flex justify-center gap-3 mt-[44px]">
                <Button className="custom-pink-button h-[54px] w-[285px] rounded-[1920px] relative pl-[62px]">
                  <div className="absolute w-[52px] h-[52px] top-px left-px">
                    <div className="relative w-[38px] h-[38px] top-[7px] left-[7px] bg-[#ffffff4c] rounded-[1920px]">
                      <div className="relative w-[18px] h-[18px] top-2.5 left-2.5">
                        <img
                          className="absolute w-2.5 h-3.5 top-0.5 left-1"
                          alt="Vector"
                          src="/vector-10.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[13.9px] tracking-[0] leading-[15.8px]">
                    Discover Tedy with an expert
                  </span>
                </Button>

                <Button
                  className="custom-pink-button h-[54px] w-[203px] rounded-[1920px] border-2"
                >
                  <span className="[font-family:'Inter',Helvetica] font-medium text-[13.7px] tracking-[0] leading-[15.8px]">
                    📺 Watch a Tedy demo
                  </span>
                </Button>
              </div>
            </div>
          </div>

          <div className="px-[72px] pb-7">
            <Separator className="bg-[#ffffff1a]" />
            <div className="flex justify-between items-center mt-7">
              <div className="flex opacity-60">
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[15.8px] tracking-[0] leading-[25.2px]">
                  ©
                </span>
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[14.9px] tracking-[0] leading-[25.2px]">
                  2025
                </span>
              </div>

              <div className="flex gap-7 opacity-60">
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[14.3px] tracking-[0] leading-[25.2px]">
                  Terms
                </span>
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[14.3px] tracking-[0] leading-[25.2px]">
                  Contact
                </span>
              </div>

              <div className="opacity-60">
                <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[14.2px] tracking-[0] leading-[25.2px]">
                  Site by JG
                </span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </footer>
  );
};
