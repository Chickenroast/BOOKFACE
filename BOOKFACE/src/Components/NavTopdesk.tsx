import { FaUser, FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";
function NavTopdesk() {
  return (
    <div className="absolute top-0 left-0 right-0 h-14 hidden justify-between items-center px-4 lg:mx-80 lg:flex ">
      <img src="logo.svg" alt="" className="w-12 h-12 lg:ml-2" />

      <div className="flex flex-row h-full w-1/2 items-center justify-evenly">
        <NavLink
          to="/profil"
          className="text-brownd p-3 text-2xl"
        >
          <FaUser />
        </NavLink>
        <NavLink
          to="/"
          className="text-brownd p-3 text-3xl"
        >
          <FaHome />
        </NavLink>
  
        <NavLink to="" 
         className="text-brownd p-3 text-3xl">
          <IoIosNotifications />
        </NavLink>
      </div>
      <div className="ml-4">
        <input
          type="text"
          placeholder="Search tags..."
          className="h-10 px-4 rounded-3xl bg-beigel lg:bg-beiged focus:outline-none"
        />
      </div>
    </div>
  );
}

export default NavTopdesk;
