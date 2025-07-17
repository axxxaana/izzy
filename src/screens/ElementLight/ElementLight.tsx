import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";

export const ElementLight = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start w-full bg-white">
      <MainContentSection />
      <FooterSection />
    </div>
  );
};
