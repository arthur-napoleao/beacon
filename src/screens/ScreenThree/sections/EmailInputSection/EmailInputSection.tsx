import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

export const EmailInputSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full max-w-md items-center justify-between gap-10 py-4">
      <div className="flex items-center gap-2.5 self-stretch w-full">
        <Button 
          variant="ghost" 
          size="icon" 
          className="p-0"
          onClick={() => navigate('/')}
        >
          <ChevronLeftIcon className="w-6 h-6" />
          <span className="sr-only">Back</span>
        </Button>
      </div>

      <div className="flex flex-col items-center gap-10 w-full">
        <div className="flex flex-col items-center gap-5 w-full">
          <h2 className="opacity-90 font-normal text-black text-2xl text-center tracking-[-0.24px] leading-[30px] [font-family:'GascogneSerial-Regular',Helvetica]">
            What&apos;s your email?
          </h2>

          <p className="opacity-90 [font-family:'Manrope',Helvetica] font-medium text-[#565656] text-lg text-center tracking-[-0.18px] leading-[22.5px]">
            We&apos;ll send a code to this email to verify your sign in
          </p>
        </div>

        <Card className="w-full border-none shadow-none">
          <CardContent className="flex items-center justify-center p-0">
            <Input
              className="bg-[#0000000d] rounded-2xl px-4 py-[17px] h-auto opacity-90 [font-family:'Manrope',Helvetica] font-semibold text-[#565656] text-lg text-center tracking-[-0.18px] leading-[22.5px]"
              defaultValue="ana.silva@gmail.com"
              type="email"
            />
          </CardContent>
        </Card>
      </div>

      <Button 
        onClick={() => navigate('/verify')}
        className="w-full max-w-[480px] min-w-[180px] py-3.5 px-6 bg-[#141414] rounded-[27px] shadow-shallow-below [font-family:'PP_Neue_Montreal-Medium',Helvetica] font-medium text-white text-lg tracking-[0.18px] leading-5"
      >
        Send verification code
      </Button>
    </div>
  );
};