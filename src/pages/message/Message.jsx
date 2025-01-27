import { useEffect, useState } from "react";
import { GrAttachment } from "react-icons/gr";
import { IoSendOutline } from "react-icons/io5";
import useAuth from "../../hooks/useAuth";

const Message = () => {
  const { setTitle } = useAuth();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setTitle("Messages");
  }, [setTitle]);
  return messages.length > 0 ? (
    <div className="flex flex-col justify-between h-full rounded-lg">
      {/* Message area */}
      <div className="flex-1 overflow-y-auto space-y-4 p-2">
        {/* Sender message */}
        <div className="flex justify-end items-start space-x-2">
          <div className="bg-[#1b130f] text-sm p-2 rounded-lg max-w-xs shadow">
            Hi there! How are you?
            <div className="text-[10px] text-gray-400 text-right mt-1">
              10:30 AM
            </div>
          </div>
          <img
            src="https://via.placeholder.com/40"
            alt="Sender Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>

        {/* Receiver message */}
        <div className="flex justify-start items-start space-x-2">
          <img
            src="https://via.placeholder.com/40"
            alt="Receiver Avatar"
            className="w-8 h-8 rounded-full"
          />
          <div className="bg-[#1b130f31] text-sm p-2 rounded-lg max-w-xs shadow">
            I'm good, thanks! How about you?
            <div className="text-[10px] text-gray-500 mt-1">10:32 AM</div>
          </div>
        </div>
      </div>

      {/* Input field */}
      <form className="h-fit flex items-center gap-2 border-t border-[#1b130f] p-2">
        {/* Attachment */}
        <div>
          <label
            htmlFor="file"
            className="opacity-70 cursor-pointer flex items-center"
          >
            <GrAttachment size={20} />
            <input type="file" className="hidden" id="file" name="file" />
          </label>
        </div>

        {/* Textarea */}
        <textarea
          rows={2}
          className="flex-grow text-sm rounded-md border border-[#1b130f] p-2 outline-none resize-none"
          placeholder="Type your message..."
        ></textarea>

        {/* Send Button */}
        <div>
          <button
            type="submit"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1b130f] shadow hover:bg-[#1b130fcd]"
          >
            <IoSendOutline size={20} />
          </button>
        </div>
      </form>
    </div>
  ) : (
    <div className="h-full  flex items-center justify-center">
      <h1 className="text-center text-3xl">No message available</h1>
    </div>
  );
};

export default Message;
