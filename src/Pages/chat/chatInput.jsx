import { useState } from "react";

import { FaPen } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const Chat = ({ isFirstMessage, onSendMessage }) => {
  const [input, setInput] = useState("");

  const onSubmit = () => {
    if (input.trim()) {
      onSendMessage(input);

      setInput("");
    }
  };

  const handleKeyDown =(event)=>{

    if(event.key==="Enter"){
      event.preventDefault(); 
      onSubmit()
    }
  }
  
  
  return (
    <>


      <div className="h-auto w-full bg-zinc-600 flex flex-col justify-center items-center px-4 pt-32 sm:pt-0">
        
          {isFirstMessage ? (
            <h1  className="text-center text-2xl sm:text-3xl md:text-4xl mb-80 font-semibold text-gray-200 cursor-pointer">
              "Where The Knowledge Begins..."
            </h1>
          ) : (
            ""
          )}

          <div className=" flex flex-col justify-center  items-center fixed w-full px-4">
            {isFirstMessage ? (
              <div className="flex flex-col sm:flex-row sm:gap-2 lg:gap-4 mt-32">
                <div  className="border border-gray-600 rounded-md flex justify-start items-center gap-3 pr-4 pl-2 py-2 mb-2 sm:mb-0">
                  <FaPen className="w-5 h-5 bg-zinc-700 rounded-md text-gray-300 p-1" />
                  <p onClick={(e)=>setInput(e.target.value)} value="" className="cursor-pointer text-sm text-gray-400">
                    What is the best place in Varanasi
                  </p>
                </div>

                <div className="border border-gray-600 rounded-md flex justify-start items-center gap-3 pr-4 pl-2 py-2 mb-2 sm:mb-0">
                  <FaPen className="w-5 h-5 bg-zinc-700 rounded-md text-gray-700 p-1" />
                  <p className="text-sm text-gray-400">
                    What is the best place in Varanasi
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}

            {isFirstMessage ? (
              <div className="flex flex-col sm:flex-row sm:gap-2 lg:gap-4 mt-2">
                <div className="border border-gray-600 rounded-md flex justify-start items-center gap-3 pr-4 pl-2 py-2 mb-2 sm:mb-0">
                  <FaPen className="w-5 h-5 bg-zinc-700 rounded-md text-gray-700 p-1" />
                  <p className="text-sm text-gray-400">
                    What is the best place in Varanasi
                  </p>
                </div>

                <div className="border border-gray-600 rounded-md flex justify-start items-center gap-3 pr-4 pl-2 py-2 mb-2 sm:mb-0">
                  <FaPen className="w-5 h-5 bg-zinc-700 rounded-md text-gray-700 p-1" />
                  <p className="text-sm text-gray-400">
                    What is the best place in Varanasi
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="relative mt-10 mx-auto items-center w-[100%] md:w-[70%] lg:w-[60%] px-4 bottom-0">
            <input
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              value={input}
              className="w-full outline-none bg-zinc-800 border border-gray-500 pr-10 pl-4 py-6 rounded-xl text-gray-300"
              placeholder="Ask me anythings about Mntrix..."
            />
            <FaLocationArrow
              onClick={onSubmit}
              className="absolute top-1/2 right-8 transform -translate-y-1/2 w-5 h-5 text-white cursor-pointer"
            />
          </div>

         
        </div>
      
    </>
  );
};

export default Chat;
