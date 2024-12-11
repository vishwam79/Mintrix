import React from "react";
import Bentocenter from "../BentoCenter/Bentocenter.jsx";

const Index = () => {
  return (
    <div className=" h-full  w-full mx-auto text-white z-[5]">
      <div className="flex flex-col md:flex-row justify-center max-w-[1280px] gap-8 mx-auto py-8">
        {/* Left Section */}
        <div className="flex flex-col z-[5]">
          <div className="flex w-auto h-[396px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col justify-between items-start flex-nowrap bg-[#31316433]  bg-no-repeat rounded-[24px]  z-[27]">
            <div className="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[28]">
              <div className="w-[52.544px] h-[44px] shrink-0 bg-[url(/assets/images/prompt_icon.png)] bg-cover bg-no-repeat relative overflow-hidden z-[29]" />
              <span className="flex w-full h-[120px] justify-start items-start self-stretch shrink-0 font-['Plus_Jakarta_Sans'] text-[36px] font-semibold leading-[40px] tracking-[-0.36px] relative text-left z-30">
                Effortless Prompt Perfection
              </span>
            </div>
            <div className="flex w-[128px] flex-col items-start shrink-0 flex-nowrap relative z-[31]">
              <span className="h-[28px] shrink-0 basis-auto font-['Plus_Jakarta_Sans'] text-[18px] font-bold leading-[28px] text-[#e6e3ff] relative text-left whitespace-nowrap z-[32]">
                14 days trial
              </span>
              <span className="h-[24px] shrink-0 basis-auto font-['Plus_Jakarta_Sans'] text-[16px] font-normal leading-[24px] text-[#ac9fe4] relative text-left whitespace-nowrap z-[33]">
                after – $5/month
              </span>
            </div>
          </div>

          <div className="flex w- h-[220px] pt-[34px] pr-[32px] pb-[30px] pl-[32px] flex-col mt-8 gap-[20px] justify-center items-center flex-nowrap bg-[#31316433] bg-no-repeat rounded-[24px] z-[34]">
            <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[35]">
              <span className="h-[46px] self-stretch shrink-0 basis-auto font-['Plus_Jakarta_Sans'] text-[62px] font-semibold leading-[46px] tracking-[-1.24px] relative text-center whitespace-nowrap z-[36] text-yellow-600">
                12K
              </span>
              <span className="flex w-[103px] h-[13px] justify-center items-end shrink-0 font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-[13px] text-[#b1a0fc] relative text-center whitespace-nowrap z-[37]">
                happy users
              </span>
            </div>

            <div className="flex w-[144px] pt-px pr-0 pb-px pl-0 gap-[-12px] items-center shrink-0 flex-nowrap relative z-[38]">
              <div className=" border-blue border-[3px] [flex w-[20px] h-[20px] pt-[17px] pr-[16px] pb-[17px] pl-[16px] gap-[4px] items-center shrink-0 flex-nowrap bg-[url(/assets/images/profile1.png)] bg-cover bg-no-repeat rounded-full relative box-content overflow-hidden z-[39]" />

              <div className="flex border-blue border-[3px] w-[20px] h-[20px] pt-[17px] pr-[16px] pb-[17px] pl-[16px] gap-[4px] items-center shrink-0 flex-nowrap bg-[url(/assets/images/profile1.png)] bg-cover bg-no-repeat rounded-full relative box-content overflow-hidden z-[42] right-2" />
              <div className="flex border-blue border-[3px] w-[20px] h-[20px] pt-[17px] pr-[16px] pb-[17px] pl-[16px] gap-[4px] items-center shrink-0 flex-nowrap bg-[url(/assets/images/profile1.png)] bg-cover bg-no-repeat rounded-full relative box-content overflow-hidden z-[42] right-4" />
            </div>
          </div>

          <div className="w-auto h-[164px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex justify-center items-start flex-nowrap bg-[#31316433] mt-8 bg-no-repeat rounded-[24px]  z-[44]">
            <div className="bg-[#2a2a6f33] p-2 rounded-md">
              <button className="md:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-2 rounded-md text-white text-lg flex ">
                <img src="/assets/images/image_icon.png" className="w-6 h-6" />{" "}
                Generate
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col z-[5]">
          <Bentocenter />
        </div>

        {/* Right Section */}
        <div className="flex flex-col z-[5]">
          <div className="flex w-auto h-[164px] pt-[32px] pr-[32px] pb-[32px] pl-[32px]  justify-center items-start flex-nowrap bg-[#31316433] bg-no-repeat rounded-[24px]  z-[44]">
            <div className="bg-[#2a2a6f33] p-2 rounded-full">
              <div className="flex gap-10 w-[140px]">
                <img
                  src="/assets/images/star3.png"
                  alt=""
                  className="w-12 h-12 rounded-full bg-black px-2 py-2"
                />

                {/* <img src="/assets/images/star3.png" alt="" className="w-12 h-12 rounded-full bg-black px-2 py-2 " /> */}
              </div>
            </div>
          </div>

          <div className="flex w-auto h-[220px] pt-[34px] pr-[32px] pb-[30px] pl-[32px] flex-col mt-8 gap-[20px] justify-center items-center flex-nowrap bg-[#31316433] bg-no-repeat rounded-[24px] z-[34]">
            <div className="flex w-auto flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[35]">
              <span className="h-[46px] self-stretch shrink-0 basis-auto font-['Plus_Jakarta_Sans'] text-[62px] font-semibold leading-[46px] tracking-[-1.24px] relative text-center whitespace-nowrap z-[36] text-blue-900 from-blue-800 to-teal-700">
                25M
              </span>

              <div className="flex gap-4 justify-center items-center bg-black transparent opacity-70 z-0 px-3 py-1">
                <img
                  src="/assets/images/25K_icon_line.png"
                  alt=""
                  className="h-7"
                />

                <span className="flex w-[103px] h-[13px] mt-4 justify-center items-end shrink-0 font-['Plus_Jakarta_Sans'] text-[18px] font-normal leading-[13px] text-white relative text-center whitespace-nowrap z-[37] px-4 py-2">
                  Created Prompt
                </span>
                <img
                  src="/assets/images/25K_icon_line.png"
                  alt=""
                  className="h-7 "
                />
              </div>
            </div>
          </div>

          <div className="flex w-auto mt-8   h-[396px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col justify-between items-start flex-nowrap bg-[#31316433]  bg-no-repeat rounded-[24px]  z-[27]">
            <div className="flex w-auto flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[28]">
              <span className="flex w-full justify-start items-start self-stretch shrink-0 font-['Plus_Jakarta_Sans'] text-[26px] font-semibold leading-[20px] tracking-[-0.32px] relative text-left z-30">
                Prompt templates
              </span>

              <span>Use pre-made templates to jumpstart creativity.</span>
            </div>

            <div className="w-full h-[261.755px] shrink-0 relative overflow-hidden z-[3]  rounded-lg p-4">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-[120px] h-[35px] flex items-center justify-center bg-[rgba(98,106,181,0.21)] rounded-md border-[2px] border-violet-600  -rotate-45 mt-8 -right-3">
                  <span className="font-['Plus_Jakarta_Sans'] text-[16px] font-medium text-[#e9e5ff] ">
                    14 Days Trial
                  </span>
                </div>

                <img
                  src="/assets/images/camera_icon.png"
                  alt=""
                  className="w-12 h-12 bg-[rgba(255,255,255,0.1)] p-1 rounded-full -ml-36"
                />

                <div className="flex min-w-fit px-2 gap-2 h-10 justify-center rounded-xl bg-[rgba(98,106,181,0.18)] rotate-90 -mt-16 ml-[100%]">
                  <button className="flex  items-center gap-1 justify-center  rounded-md  text-[#ddd6ff] uppercase text-[14px] font-base">
                    <span className="w-3 h-3 bg-pink-600 rounded-full"></span>
                    PNG
                  </button>
                  <button className="flex items-center gap-2 justify-center   rounded-full   text-[#ddd6ff] uppercase text-[14px] font-medium">
                    <span className="w-3 h-3 bg-yellow-600 rounded-full"></span>
                    PDF
                  </button>
                  <button className="flex items-center gap-2 justify-center  text-[#ddd6ff] uppercase text-[14px] font-medium">
                    <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
                    IMG
                  </button>
                </div>

                <img
                  src="/assets/images/gifticon.png"
                  alt=""
                  className="w-12 h-12 bg-[rgba(255,255,255,0.1)] p-1 rounded-full -mt-12 -mr-12"
                />

                <img
                  src="/assets/images/thunder_icon.png"
                  alt=""
                  className="w-12 h-12 bg-[rgba(255,255,255,0.1)] p-1 rounded-full -ml-12 -mt-8"
                />

                <button className="flex gap-2 items-center justify-center w-28 h-10 bg-[rgba(255,255,255,0.1)] rounded-full text-[#d4ccff] text-[16px] font-medium">
                  <img
                    src="/assets/images/star_icon.png"
                    alt=""
                    className="w-6 h-6"
                  />{" "}
                  Rewrite
                </button>
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Index;
