import React from "react";
import { EmailInputSection } from "./sections/EmailInputSection";
import { KeyboardSection } from "./sections/KeyboardSection";

export const ScreenThree = (): JSX.Element => {
  return (
    <div className="relative w-full max-w-[393px] h-[852px] rounded-[40px] overflow-hidden mx-auto">
      <div className="flex flex-col h-full">
        <div className="absolute top-[8%] left-[5%] w-[90%] h-[50%]">
          <EmailInputSection />
        </div>
        <div className="absolute top-[61%] left-0 w-full h-[39%]">
          <KeyboardSection />
        </div>
      </div>

      {/* Device frame overlay */}
      <img
        className="absolute w-full h-full top-0 left-0 pointer-events-none"
        alt="Device frame"
        src="/frame.svg"
      />

      {/* Home indicator */}
      <div className="absolute w-[134px] bottom-[9px] left-1/2 -translate-x-1/2 h-[5px] bg-black rounded-[100px]" />

      {/* Status bar */}
      <div className="absolute w-[302px] h-3 top-[22px] left-1/2 -translate-x-1/2 max-w-[302px]">
        <div className="relative h-3">
          <img
            className="absolute w-[26px] h-[11px] top-px right-0"
            alt="Battery indicator"
            src="/battery-outline--35--opacity-.svg"
          />
          <img
            className="absolute w-full h-3 top-0 left-0"
            alt="Status bar"
            src="/status-bar.svg"
          />
        </div>
      </div>
    </div>
  );
};
