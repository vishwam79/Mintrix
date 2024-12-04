import React from "react";
import { MdArrowOutward } from "react-icons/md";

const header = () => {
  return (
    <div className="max-w-[1280px] mx-auto bg-transparent pt-40 lg:pt-64 flex justify-center">
  <div className="w-full flex flex-col justify-center items-center gap-10 text-center">
    <p className="text-base lg:text-lg md:text-lg text-gray-200 px-8">
      Unlock the Power with Mintrix: Your Ultimate AI Companion!
    </p>
    <h1 className="text-4xl lg:text-6xl md:text-5xl font-semibold text-gray-200 px-8">
      Revolutionize Your Conversations with <br></br>Mintrix: The Ultimate AI Chatbot!
    </h1>

    <div className="border-zinc-800 p-1 border-[1px] rounded-xl lg:w-[40%] mx-auto flex justify-between">
      <input
        className="outline-none bg-transparent pl-4 py-3 rounded-xl flex-grow"
        type="text"
        placeholder="Enter Your Email"
        name=""
        id=""
      />
      <button className="text-sm px-7 py-2 rounded-lg bg-gradient-to-r from-[#B852D7] via-[#AE5BE9] to-[#C65A94] flex items-center gap-2 text-white">
        Join the waitlist <MdArrowOutward className="btn-icon" />
      </button>
    </div>
  </div>
</div>

  );
};

export default header;
