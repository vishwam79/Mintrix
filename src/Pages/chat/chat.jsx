import Navbar from "../../components/Navbar/Navbar";
import { FaPen } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";

const Chat = () => {
  return (
    <>
      <Navbar />

      <div className="h-screen w-full bg-[#03061C] flex flex-col justify-center items-center px-4 pt-32">
       
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl mb-80 font-semibold text-gray-200">
          "Where The Knowledge Begins..."
        </h1>

        <div className=" flex flex-col justify-center  items-center fixed w-full px-4">
          <div className="flex flex-col sm:flex-row sm:gap-2 lg:gap-4 mt-32">
            <div className="border border-gray-600 rounded-md flex justify-start items-center gap-3 pr-4 pl-2 py-2 mb-2 sm:mb-0">
              <FaPen className="w-5 h-5 bg-zinc-700 rounded-md text-gray-700 p-1" />
              <p className="text-sm text-gray-400">What is the best place in Varanasi</p>
            </div>

            <div className="border border-gray-600 rounded-md flex justify-start items-center gap-3 pr-4 pl-2 py-2 mb-2 sm:mb-0">
              <FaPen className="w-5 h-5 bg-zinc-700 rounded-md text-gray-700 p-1" />
              <p className="text-sm text-gray-400">What is the best place in Varanasi</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:gap-2 lg:gap-4 mt-2">
            <div className="border border-gray-600 rounded-md flex justify-start items-center gap-3 pr-4 pl-2 py-2 mb-2 sm:mb-0">
              <FaPen className="w-5 h-5 bg-zinc-700 rounded-md text-gray-700 p-1" />
              <p className="text-sm text-gray-400">What is the best place in Varanasi</p>
            </div>

            <div className="border border-gray-600 rounded-md flex justify-start items-center gap-3 pr-4 pl-2 py-2 mb-2 sm:mb-0">
              <FaPen className="w-5 h-5 bg-zinc-700 rounded-md text-gray-700 p-1" />
              <p className="text-sm text-gray-400">What is the best place in Varanasi</p>
            </div>
          </div>

          <div className="relative mt-10 mx-auto items-center w-full sm:w-3/4 md:w-1/2 lg:w-1/2 px-4 bottom-0">
            <input
              className="w-full outline-none bg-zinc-800 border border-gray-500 pr-10 pl-4 py-2 rounded-md text-gray-300"
              placeholder="Ask anything..."
            />
            <FaLocationArrow className="absolute top-1/2 right-8 transform -translate-y-1/2 w-5 h-5 text-white" />
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Chat;
