import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import Navbar from "../../components/Navbar/Navbar";

const chat = () => {
  const [isFirstMessage, setIsFirstMessage] = useState(true);
  const [message, setMessage] = useState([]);

  const handleSendMessage = (messages) => {
    setMessage([...message, { sender: "user", text: messages }]);
    setIsFirstMessage(false);

    setTimeout(() => {
      setMessage((prev) => [
        ...prev,
        { sender: "AI", text: "Hello How can i help you !" },
      ]);
    }, 1500);
  };

  return (

    <>



    <div className="w-full h-screen justify-center bg-[#09090B] flex items-center gap-3 text-white">
     <div className="w-[20%] sm:block hidden left-0 "> <Sidebar /></div>

     <div className="w-[100%] sm:w-[100%] right-0 flex justify-center items-center">
  <ChatWindow
    message={message}
    isFirstMessage={isFirstMessage}
    onSendMessage={handleSendMessage}
  />
</div>

      
    </div>

    </>
  );
};

export default chat;
