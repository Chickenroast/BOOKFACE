import { FaUser, FaHome } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";
function NavTopdesk() {
  return (
    <div className="absolute left-0 right-0 top-0 hidden h-14 items-center justify-between  rounded-2xl lg:mx-28 lg:flex ">
      <img src="logo.svg" alt="" className="h-12 w-12 lg:ml-2" />

      <div className="flex h-full w-1/2 flex-row items-center justify-evenly">
        <NavLink to="/profil" className="p-3 text-2xl text-brownd">
          <FaUser />
        </NavLink>
        <NavLink to="/" className="p-3 text-3xl text-brownd">
          <FaHome />
        </NavLink>

        <NavLink to="" className="p-3 text-3xl text-brownd">
          <IoIosNotifications />
        </NavLink>
      </div>
      <div className="ml-4">
        <input
          type="text"
          placeholder="Search tags..."
          className="h-10 rounded-3xl bg-beigel px-4 focus:outline-none lg:bg-beiged justify-self-start"
        />
      </div>
    </div>
  );
}

export default NavTopdesk;
