import { NavLink } from "react-router";

const Sidebar = () => {
  return (
    <aside
      style={{
        boxShadow: "0 0 10px 3px rgba(60, 42, 33, 0.7)",
      }}
      className="rounded-xl col-span-3 h-full bg-gradient-to-b from-[#3C2A21] to-[#4A3933] flex flex-col  text-[#E5E5CB] p-4"
    >
      <h2 className="text-lg font-bold mb-4"></h2>
      <ul className="space-y-3 text-sm">
        <li className="hover:text-[#9A8C98] transition-all duration-200">
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li className="hover:text-[#9A8C98] transition-all duration-200">
          <NavLink to={"/messages"}>Messages</NavLink>
        </li>
        <li className="hover:text-[#9A8C98] transition-all duration-200">
          <NavLink to={"/ "}>Setting</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
