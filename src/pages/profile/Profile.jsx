import { FaPhoneFlip } from "react-icons/fa6";
import { MdOutlineLocationOn, MdOutlineMarkEmailUnread } from "react-icons/md";
import avatar from "../../assets/avatar.png";
import banner from "../../assets/banner.jpg";
const Profile = () => {
  return (
    <div>
      {/* avatar & banner */}
      <div
        className="h-20  bg-cover bg-no-repeat rounded relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className=" rounded-full absolute -bottom-8 flex items-center justify-center w-full">
          <img
            src={avatar}
            alt=""
            className="w-16 h-16 ring-4 rounded-full ring-[#3C2A21]"
          />
        </div>
      </div>

      {/* info */}
      <div className="mt-10">
        <h1 className="text-center text-lg font-medium">John Doe</h1>
        <p className="text-xs w-8/12 mx-auto text-center opacity-80 mt-1">
          Lorem ipsum dolor sit amet.
        </p>
        <hr className="opacity-70 my-1" />

        <div className="text-xs mt-4 h-20">
          <ul className=" flex flex-col space-y-1.5">
            <li className="flex items-center gap-2">
              <span>
                <FaPhoneFlip size={12} />
              </span>
              <span>+880 123456789</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <MdOutlineMarkEmailUnread />
              </span>
              <span>abc@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <span>
                <MdOutlineLocationOn size={16} />
              </span>
              <span>Dhaka, Bangladesh</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
