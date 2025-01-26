import Message from "../../pages/message/Message";
import SectionTitle from "./../../components/SectionTitle";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-[#E5E5CB] via-[#C9ADA7] to-[#9A8C98]">
      <div className="rounded-xl w-8/12 h-96 border border-[#6D6875] bg-[#1A120B] shadow-2xl shadow-[#3C2A21] text-[#E5E5CB] grid grid-cols-12 p-6">
        {/* Sidebar */}
        <div className="col-span-4 mr-2">
          <Sidebar />
        </div>

        {/* Outlet */}
        <div className="col-span-8 h-full flex flex-col justify-center items-center bg-gradient-to-tr from-[#1A120B] to-[#2D1F1B] rounded-xl p-6 pt-2">
          <SectionTitle text={"Messages"} />
          <div className="w-full h-full bg-[#3C2A21] bg-opacity-30 rounded-lg p-4 overflow-auto">
            <Message />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
