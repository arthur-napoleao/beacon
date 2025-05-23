import React from "react";
import { Button } from "../../../../components/ui/button";

// Define keyboard data for mapping
const suggestionWords = [
  { text: '"The"', isSelected: true },
  { text: "the", isSelected: false },
  { text: "to", isSelected: false },
];

const keyboardRows = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  ["z", "x", "c", "v", "b", "n", "m"],
];

export const KeyboardSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center justify-end pt-[3px] pb-0 px-0 bg-[#dedede] backdrop-blur-[50px] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] bg-blend-lighten [background:linear-gradient(0deg,rgba(222,222,222,1)_0%,rgba(222,222,222,1)_100%),linear-gradient(0deg,rgba(0,0,0,0.13)_0%,rgba(0,0,0,0.13)_100%)]">
      {/* Suggestion bar */}
      <div className="flex items-start px-0 py-[3px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex h-[39px] items-center gap-0.5 px-px py-0 relative flex-1 grow">
          {suggestionWords.map((word, index) => (
            <React.Fragment key={index}>
              <div
                className={`relative flex-1 self-stretch grow ${word.isSelected ? "bg-[#ebedf0]" : ""} rounded-[4.6px]`}
              >
                <div className="absolute w-full h-[39px] -top-px left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-labelsprimary text-[17px] text-center tracking-[-0.40px] leading-[22px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical]">
                  {word.text}
                </div>
              </div>

              {index < suggestionWords.length - 1 && (
                <div className="inline-flex h-[25px] items-center justify-center px-0.5 py-0 relative flex-[0_0_auto]">
                  <div
                    className={`relative self-stretch w-px bg-labelsprimary ${index === 0 ? "opacity-0" : "opacity-10"}`}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Spacer */}
      <div className="relative self-stretch w-full h-[5px] opacity-60" />

      {/* Keyboard layout */}
      <div className="relative self-stretch w-full h-[204px]">
        {/* Top row - qwertyuiop */}
        <div className="flex w-full items-start gap-1.5 absolute top-0 left-0 px-[3px]">
          {keyboardRows[0].map((key) => (
            <Button
              key={key}
              variant="outline"
              className="relative flex-1 grow h-[42px] bg-[#fcfcfe] rounded-[4.6px] shadow-[0px_1px_0px_#898a8d] p-0 border-0 hover:bg-[#fcfcfe]"
            >
              <span className="w-full h-12 -mt-[7px] text-labelsprimary text-[25px] tracking-[0] leading-7 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-center">
                {key}
              </span>
            </Button>
          ))}
        </div>

        {/* Middle row - asdfghjkl */}
        <div className="flex w-[347px] items-start gap-1.5 absolute top-[54px] left-[23px]">
          {keyboardRows[1].map((key) => (
            <Button
              key={key}
              variant="outline"
              className="relative flex-1 grow h-[42px] bg-[#fcfcfe] rounded-[4.6px] shadow-[0px_1px_0px_#898a8d] p-0 border-0 hover:bg-[#fcfcfe]"
            >
              <span className="w-full h-12 -mt-[7px] text-labelsprimary text-[25px] tracking-[0] leading-7 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-center">
                {key}
              </span>
            </Button>
          ))}
        </div>

        {/* Bottom row - zxcvbnm with shift and delete */}
        <div className="flex w-[269px] items-start gap-1.5 absolute top-[108px] left-[62px]">
          {keyboardRows[2].map((key) => (
            <Button
              key={key}
              variant="outline"
              className="relative flex-1 grow h-[42px] bg-[#fcfcfe] rounded-[4.6px] shadow-[0px_1px_0px_#898a8d] p-0 border-0 hover:bg-[#fcfcfe]"
            >
              <span className="w-full h-12 -mt-[7px] text-labelsprimary text-[25px] tracking-[0] leading-7 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-center">
                {key}
              </span>
            </Button>
          ))}
        </div>

        {/* Shift key */}
        <Button
          variant="outline"
          className="absolute w-11 h-[42px] top-[108px] left-[3px] bg-[#abb0ba] rounded-[4.6px] shadow-[0px_1px_0px_#898a8d] p-0 border-0 hover:bg-[#abb0ba]"
        >
          <span className="absolute h-7 top-1.5 left-2.5 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-labelsprimary text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
            􀆝
          </span>
        </Button>

        {/* Delete key */}
        <Button
          variant="outline"
          className="absolute w-11 h-[42px] top-[108px] left-[346px] bg-[#abb0ba] rounded-[4.6px] shadow-[0px_1px_0px_#898a8d] p-0 border-0 hover:bg-[#abb0ba]"
        >
          <span className="absolute h-7 top-1.5 left-[9px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-labelsprimary text-xl text-center tracking-[0] leading-7 whitespace-nowrap">
            􀆛
          </span>
        </Button>

        {/* ABC key */}
        <Button
          variant="outline"
          className="absolute w-[92px] h-[42px] top-[162px] left-[3px] bg-[#abb0ba] rounded-[4.6px] shadow-[0px_1px_0px_#898a8d] p-0 border-0 hover:bg-[#abb0ba]"
        >
          <span className="absolute w-full h-[42px] -top-px left-0 [font-family:'SF_Pro-Regular',Helvetica] font-normal text-labelsprimary text-base text-center tracking-[-0.40px] leading-[21px]">
            ABC
          </span>
        </Button>

        {/* Space key */}
        <Button
          variant="outline"
          className="absolute w-[191px] h-[42px] top-[162px] left-[101px] bg-[#fcfcfe] rounded-[4.6px] shadow-[0px_1px_0px_#898a8d] p-0 border-0 hover:bg-[#fcfcfe]"
        >
          <span className="w-full h-[42px] -top-px text-labelsprimary text-base tracking-[-0.40px] leading-[21px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-center">
            space
          </span>
        </Button>

        {/* Search key */}
        <Button className="absolute w-[92px] h-[42px] top-[162px] left-[298px] bg-[#2964ee] rounded-[4.6px] shadow-[0px_1px_0px_#898a8d] p-0 border-0 hover:bg-[#2964ee]">
          <span className="w-full h-[42px] -top-px text-white text-base tracking-[-0.40px] leading-[21px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-center">
            search
          </span>
        </Button>
      </div>

      {/* Bottom controls */}
      <div className="flex h-[58px] items-start justify-between pt-[25px] pb-0 px-5 relative self-stretch w-full">
        <img
          className="relative w-[26.92px] h-[26.92px]"
          alt="Emoji"
          src="/emoji.svg"
        />

        <div className="relative w-fit mt-[-1.00px] [font-family:'SF_Pro-Regular',Helvetica] font-normal text-[#3c3c43cc] text-[27px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          􀊰
        </div>
      </div>

      {/* Home indicator */}
      <div className="relative self-stretch w-full h-[21px]">
        <div className="relative w-[139px] top-2 left-[127px] rotate-180 h-[5px] bg-graysblack rounded-[100px]" />
      </div>
    </section>
  );
};
