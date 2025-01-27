import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import SectionTitle from "../../components/SectionTitle";
import Message from "../../pages/message/Message";
import Sidebar from "./Sidebar";

const Main = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#E5E5CB] via-[#C9ADA7] to-[#9A8C98]">
      <div className="rounded-xl sm:w-10/12 w-full h-[90%] border border-[#6D6875] bg-[#1A120B] shadow-2xl shadow-[#3C2A21] text-[#E5E5CB] sm:grid grid-cols-12 p-6 relative">
        {/* Sidebar Toggle Button (Mobile) */}
        <button
          className="sm:hidden absolute top-4 left-4 z-20 text-[#E5E5CB] bg-[#3C2A21] p-2 rounded-full shadow-lg"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <AiOutlineClose size={20} /> : <FiMenu size={20} />}
        </button>

        {/* Sidebar */}
        <div
          className={`col-span-4 sm:block ${
            isSidebarOpen ? "block" : "hidden"
          } sm:relative absolute py-6 sm:py-0 rounded-lg top-0 left-0 h-full w-3/4 sm:w-auto bg-[#1A120B] transition-transform duration-300 ease-in-out z-10`}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-8 h-full flex flex-col justify-center items-center bg-gradient-to-tr from-[#1A120B] to-[#2D1F1B] rounded-xl p-6 pt-2 sm:ml-2">
          <SectionTitle text={"Messages"} />
          <div className="w-full h-full bg-[#3C2A21] bg-opacity-30 rounded-lg p-2 overflow-auto">
            {/* message body */}
            <Message />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
