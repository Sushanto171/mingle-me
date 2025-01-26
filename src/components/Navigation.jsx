import { CgProfile } from "react-icons/cg";
import { PiChatsFill } from "react-icons/pi";
import { RiSettings4Line } from "react-icons/ri";
import { NavLink } from "react-router";
import logo from "../../public/logo.png";

const Navigation = () => {
  return (
    <div className="w-8 bg-[#1A120B] h-full flex justify-between items-center py-2 rounded-lg col-span-3 rounded-r-none flex-col">
      <ul className="space-y-3 text-sm">
        <li className="hover:text-[#9A8C98] transition-all duration-200 px-1">
          <img className="w-5 h-5 " src={logo} />
        </li>
        <li className="hover:text-[#9A8C98] transition-all duration-200">
          <NavLink
            to={"/profile"}
            className={({ isActive }) =>
              `${
                isActive ? "border-[#E5E5CB]" : "border-transparent"
              } tooltip  tooltip-right border-r-2 px-1`
            }
            data-tip="Profile"
          >
            <CgProfile className="text-xl" />
          </NavLink>
        </li>
        <li className="hover:text-[#9A8C98] transition-all duration-200">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              `flex items-center justify-center ${
                isActive ? "border-[#E5E5CB]" : "border-transparent"
              } tooltip tooltip-right border-r-2 px-1`
            }
            data-tip="Chats"
          >
            <PiChatsFill className="text-xl" />
          </NavLink>
        </li>

        <li className="hover:text-[#9A8C98] transition-all duration-200">
          <NavLink
            to={"/settings"}
            className={({ isActive }) =>
              `${
                isActive ? "border-[#E5E5CB]" : "border-transparent"
              } tooltip  tooltip-right border-r-2 px-1`
            }
            data-tip="Settings"
          >
            <RiSettings4Line className="text-xl" />
          </NavLink>
        </li>
      </ul>
      <div className="avatar">
        <div className="ring-[#D5CEA3] ring ring-offset-base-100 w-6 h-6 rounded-full ">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
