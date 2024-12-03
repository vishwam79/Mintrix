import React from "react";

const index = () => {
  return (
    <div className="bg-[#09090B] h-full w-full mx-auto">
      <div className="flex justify-center  max-w-[1280px] gap-8 mx-auto">
        {/* Left section  */}

        <div className="flex flex-col">
          <div className="flex w-[262px] h-[396px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col justify-between items-start flex-nowrap bg-[#31316433]  bg-no-repeat rounded-[24px]  z-[27]">
            <div className="flex flex-col gap-[20px] items-start self-stretch shrink-0 flex-nowrap relative z-[28]">
              <div className="w-[52.544px] h-[44px] shrink-0 bg-[url(/assets/images/prompt_icon.png)] bg-cover bg-no-repeat relative overflow-hidden z-[29]" />
              <span className="flex w-[198px] h-[120px] justify-start items-start self-stretch shrink-0 font-['Plus_Jakarta_Sans'] text-[36px] font-semibold leading-[40px] tracking-[-0.36px] relative text-left z-30">
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

          <div className="flex w-[262px] h-[220px] pt-[34px] pr-[32px] pb-[30px] pl-[32px] flex-col mt-8 gap-[20px] justify-center items-center flex-nowrap bg-[#31316433] bg-no-repeat rounded-[24px] z-[34]">
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

          <div className="flex w-[262px] h-[164px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col justify-center items-start flex-nowrap bg-[#31316433] mt-8 bg-no-repeat rounded-[24px]  z-[44]">
            <div className="bg-[#2a2a6f33] p-2 rounded-md">
              <button className="md:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-2 rounded-md text-white text-lg flex ">
                <img src="/assets/images/image_icon.png" className="w-6 h-6" />{" "}
                Generate
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section  */}

        <div className="flex flex-col">
          <div className="flex w-[556px] h-[396px] flex-col gap-[32px] items-center flex-nowrap rounded-[24px]  ">
            <div className="w-[556px] h-[396px] self-stretch shrink-0 bg-[url(/assets/images/promptpal_background.png)] bg-cover bg-no-repeat absolute  z-20" />
            <div className="w-[376px] h-[376px] shrink-0  bg-cover bg-no-repeat rounded-[50%] absolute top-[230px] left-1/2 translate-x-[-50%] translate-y-0 box-content z-[21]" />
            <div className="flex w-[452px] pt-[32px] pr-0 pb-0 pl-0 flex-col gap-[16px] items-center shrink-0 flex-nowrap relative z-[22]">
              <div className="flex w-[133px] gap-[4px] items-center shrink-0 flex-nowrap relative z-[23]">
                <div className="w-[26px] h-[30px] shrink-0 bg-[url(/assets/images/prompt_icon.png)] bg-cover bg-no-repeat relative z-[24]" />
                <span className="flex w-[103px] h-[28px] justify-end items-end shrink-0 basis-auto font-['Plus_Jakarta_Sans'] text-[20px] font-bold leading-[28px] text-[#faf9ff] relative text-right whitespace-nowrap z-[25]">
                  PromptPal
                </span>
              </div>
              <span className="flex w-[452px] h-[124px] justify-center items-start self-stretch shrink-0 font-['Plus_Jakarta_Sans'] text-[62px] font-semibold leading-[62px] text-[#faf9ff] tracking-[-1.24px] relative text-center z-[26]">
                Your AI PromptCompanion
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}






        <div className="flex flex-col justify-end">



        <div className="flex w-[262px] h-[164px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col justify-center items-start flex-nowrap bg-[#31316433] mt-8 bg-no-repeat rounded-[24px]  z-[44]">
              <div className="bg-[#2a2a6f33] p-2 rounded-md">
                <button className="md:flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-2 rounded-md text-white text-lg flex ">
                  <img
                    src="/assets/images/image_icon.png"
                    className="w-6 h-6"
                  />{" "}
                  Generate
                </button>
              </div>
            </div>


          <div className="flex flex-col">



          <div className="flex w-[262px] h-[220px] pt-[34px] pr-[32px] pb-[30px] pl-[32px] flex-col mt-8 gap-[20px] justify-center items-center flex-nowrap bg-[#31316433] bg-no-repeat rounded-[24px] z-[34]">
              <div className="flex flex-col gap-[12px] items-center self-stretch shrink-0 flex-nowrap relative z-[35]">
                <span className="h-[46px] self-stretch shrink-0 basis-auto font-['Plus_Jakarta_Sans'] text-[62px] font-semibold leading-[46px] tracking-[-1.24px] relative text-center whitespace-nowrap z-[36] text-blue-800">
                  25M
                </span>
                <div>



                </div>
              </div>

              <div className="flex w-[144px] pt-px pr-0 pb-px pl-0 gap-[-12px] items-center shrink-0 flex-nowrap relative z-[38]">
                <div className=" border-blue border-[3px] [flex w-[20px] h-[20px] pt-[17px] pr-[16px] pb-[17px] pl-[16px] gap-[4px] items-center shrink-0 flex-nowrap bg-[url(/assets/images/profile1.png)] bg-cover bg-no-repeat rounded-full relative box-content overflow-hidden z-[39]" />

                <div className="flex border-blue border-[3px] w-[20px] h-[20px] pt-[17px] pr-[16px] pb-[17px] pl-[16px] gap-[4px] items-center shrink-0 flex-nowrap bg-[url(/assets/images/profile1.png)] bg-cover bg-no-repeat rounded-full relative box-content overflow-hidden z-[42] right-2" />
                <div className="flex border-blue border-[3px] w-[20px] h-[20px] pt-[17px] pr-[16px] pb-[17px] pl-[16px] gap-[4px] items-center shrink-0 flex-nowrap bg-[url(/assets/images/profile1.png)] bg-cover bg-no-repeat rounded-full relative box-content overflow-hidden z-[42] right-4" />
              </div>


              
            </div>


            <div className="flex w-[262px] mt-8 h-[396px] pt-[32px] pr-[32px] pb-[32px] pl-[32px] flex-col justify-between items-start flex-nowrap bg-[#31316433]  bg-no-repeat rounded-[24px]  z-[27]">

<div className="gap-3 flex flex-col">
              <h2 className="text-white text-xl font-semibold">Prompt template</h2>
              <h2 className="text-white font-semibold">Use pre-made template to jumpstart creativity.</h2>

              </div>

              <div>
             

              <div className='w-[206px] h-[261.755px] shrink-0 relative overflow-hidden z-[77]'>
          <div className='w-[137.604px] h-[259.366px] absolute top-0 left-[68.396px] z-[101]'>

            <div className='flex px-3 py-2  gap-[6px] justify-center items-center flex-nowrap bg-[rgba(98,106,181,0.21)] rounded-md border-solid border-2 border-[rgba(255,255,255,0.05)] absolute top-0 left-0 rotate-[-22.92deg] z-[101]'>


              <span className=" text-[#e9e5ff]  text-left whitespace-nowrap z-[102]">
                14 days trial
              </span>



            </div>
            <div className='flex px-3 py-2  gap-[6px]  justify-center items-center flex-nowrap bg-[rgba(98,106,181,0.18)] rounded-[10000px] border-solid border border-[rgba(255,255,255,0.05)] absolute top-[65.366px] left-[89.604px] rotate-[-90deg] z-[78]'>
              <div className='flex w-[10px] gap-[4px] items-center shrink-0 flex-nowrap relative z-[82]'>
                <span className="h-[32px] shrink-0 basis-auto font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[32px] text-[#ddd6ff] tracking-[0.42px] relative text-left uppercase whitespace-nowrap z-[84]">
                  png
                </span>
                <div className='w-[10px] h-[10px] shrink-0 bg-[url(/assets/images/9aad68e9-2d7c-4836-adf7-c671231b3637.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[83]' />
              </div>
              <div className='flex w-[10px] gap-[4px] items-center shrink-0 flex-nowrap relative z-[85]'>
                <span className="h-[29px] shrink-0 basis-auto font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[29px] text-[#ddd6ff] tracking-[0.42px] relative text-left uppercase whitespace-nowrap z-[87]">
                  pdf
                </span>
                <div className='w-[10px] h-[10px] shrink-0 bg-[url(/assets/images/940736e2-10be-466d-821f-f5ce99e0c8eb.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[86]' />
              </div>
              <div className='flex w-[10px] gap-[4px] items-center shrink-0 flex-nowrap relative z-[79]'>
                <span className="h-[27px] shrink-0 basis-auto font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[27px] text-[#ddd6ff] tracking-[0.42px] relative text-left uppercase whitespace-nowrap z-[81]">
                  jpg
                </span>
                <div className='w-[10px] h-[10px] shrink-0 bg-[url(/assets/images/6ce2dddc-80dd-41fa-bd6a-2f99bd1adc54.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[80]' />
              </div>
            </div>
          </div>
          <div className='w-[162.497px] h-[189.249px] absolute top-[80.367px] left-[-2.248px] z-[98]'>
            <div className='flex w-[108.173px] h-[124.862px] pt-[20px] pr-[20px] pb-[20px] pl-[20px] gap-[6px] justify-center items-center flex-nowrap bg-[rgba(98,106,181,0.21)] rounded-full border-solid border border-[rgba(255,255,255,0.05)] absolute top-0 left-[2.248px] rotate-[-54.55deg] z-[95]'>
              <div className='w-[10.844px] h-[10.844px] shrink-0 bg-[url(/assets/images/87b31d5e-d37f-481f-bbba-950381d5484d.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[96]' />
              <span className="flex w-[43.992px] h-[55.024px] justify-start items-end shrink-0 font-['Plus_Jakarta_Sans'] text-[16px] font-medium leading-[34px] text-[#d4ccff] relative text-left z-[97]">
                Rewrite
              </span>
            </div>
            <div className='flex w-[76.497px] h-[76.497px] pt-[14px] pr-[14px] pb-[14px] pl-[14px] gap-[14px] justify-center items-center flex-nowrap bg-[url(/assets/images/b36d65e6d5148be9a5b3d8fb5fea1a46ffb9a8ca.png)] bg-no-repeat rounded-[11802.797px] absolute top-[30.751px] left-[85.999px] z-[98]'>
              <div className='w-[32.785px] h-[32.785px] shrink-0 relative overflow-hidden z-[99]'>
                <div className='w-[28.966px] h-[28.42px] bg-[url(/assets/images/e30fb998-7584-46c8-b63b-2f4d251d3fbd.png)] bg-[length:100%_100%] bg-no-repeat relative z-[100] mt-[2.041px] mr-0 mb-0 ml-[2.424px]' />
              </div>
            </div>
            <div className='flex w-[108.354px] h-[99.388px] pt-[24px] pr-[20px] pb-[24px] pl-[20px] gap-[12px] justify-center items-center flex-nowrap bg-[rgba(98,106,181,0.21)] rounded-full border-solid border border-[rgba(255,255,255,0.05)] absolute top-[82px] left-[53.248px] rotate-[38deg] z-[88]'>
              <div className='w-[33.688px] h-[33.688px] shrink-0 relative z-[89]'>
                <div className='w-[28.073px] h-[28.073px] bg-[url(/assets/images/408dcf90-f4c7-4103-aa0d-f2bd4a61dace.png)] bg-[length:100%_100%] bg-no-repeat relative z-[90] mt-[2.807px] mr-0 mb-0 ml-[2.807px]' />
              </div>
              <div className='w-[33.688px] h-[33.688px] shrink-0 relative z-[91]'>
                <div className='w-[30.881px] h-[30.881px] bg-[url(/assets/images/deb8536f-0add-44fb-8afb-ad915aa53f88.png)] bg-[length:100%_100%] bg-no-repeat relative z-[92] mt-[1.343px] mr-0 mb-0 ml-[0.97px]' />
              </div>
            </div>
            <div className='flex w-[76.497px] h-[76.497px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] gap-[6px] justify-center items-center flex-nowrap bg-[rgba(255,255,255,0.010000000000000002)] bg-[url(/assets/images/1a517fa94894b5a94a875f9331d4cc4672a5d40d.png)] bg-no-repeat rounded-[10000px] absolute top-[112.751px] left-0 z-[93]'>
              <div className='w-[32.785px] h-[32.785px] shrink-0 bg-[url(/assets/images/8e94950c-72ff-4013-be06-fcbb5a1862f3.png)] bg-cover bg-no-repeat relative z-[94]' />
            </div>
          </div>
        </div>
                  
              </div>
            </div>




            

           






          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
