import { Outlet } from "react-router";
import Navigation from "../../components/Navigation";

const Sidebar = () => {
  return (
    <aside
      style={{
        boxShadow: "0 0 10px 3px rgba(60, 42, 33, 0.7)",
      }}
      className="rounded-xl col-span-3 h-full bg-gradient-to-b from-[#3C2A21] to-[#4A3933] text-[#E5E5CB]"
    >
      <div className=" h-full flex">
        {/* navigation */}

        <Navigation />

        {/* outlet */}
        <div className="flex-1 p-3">
          <Outlet />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
