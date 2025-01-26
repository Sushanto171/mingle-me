import { IoAdd, IoSearch } from "react-icons/io5";

const Chats = () => {
  return (
    <div>
      {/* top */}
      <div className="flex justify-between items-center">
        <h2 className="font-medium">Chats</h2>
        <button
          className="btn btn-xs btn-ghost tooltip tooltip-right rounded-full  flex items-center justify-center"
          data-tip="Add contact"
        >
          <IoAdd className="w-4 h-4" />
        </button>
      </div>
      {/* search */}
      <label className="input input-bordered rounded-full flex items-center gap-2  h-7 bg-[#1A120B] my-3">
        <input type="text" className="grow" placeholder="Search" />
        <button className="cursor-pointer">
          <IoSearch />
        </button>
      </label>

      {/* persons */}
      <h5 className="text-xs tracking-wide">Favorites</h5>
      <div className="overflow-x-auto max-h-52 mt-2">
        <div className="my-3 flex gap-2 cursor-pointer">
          <div className="avatar avatar-online">
            <div className="w-7 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <p>John Doe</p>
        </div>
        <div className="my-3 flex gap-2 cursor-pointer">
          <div className="avatar avatar-online ">
            <div className="w-7 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <p>John Doe</p>
        </div>
        <div className="my-3 flex gap-2 cursor-pointer">
          <div className="avatar avatar-online">
            <div className="w-7 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <p>John Doe</p>
        </div>
        <div className="my-3 flex gap-2 cursor-pointer">
          <div className="avatar avatar-online">
            <div className="w-7 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <p>John Doe</p>
        </div>
        <div className="my-3 flex gap-2 cursor-pointer">
          <div className="avatar avatar-online">
            <div className="w-7 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <p>John Doe</p>
        </div>
        <div className="my-3 flex gap-2 cursor-pointer">
          <div className="avatar avatar-online">
            <div className="w-7 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <p>John Doe</p>
        </div>
        <div className="my-3 flex gap-2 cursor-pointer">
          <div className="avatar avatar-online">
            <div className="w-7 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <p>John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
