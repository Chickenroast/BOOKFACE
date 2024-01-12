import { FaUser, FaHome, FaPaperPlane } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex h-14 w-screen flex-row items-center justify-between bg-brownl px-6 lg:hidden">
      <NavLink
        to="/profil"
        className="rounded-2xl bg-brownd p-3 text-lg text-white"
      >
        <FaUser />
      </NavLink>
      <NavLink to="/" className="rounded-2xl bg-brownd p-3 text-lg text-white">
        <FaHome />
      </NavLink>
      <NavLink
        to="/message"
        className="rounded-2xl bg-brownd p-3 text-lg text-white"
      >
        <FaPaperPlane />
      </NavLink>
      <NavLink to="" className="rounded-2xl bg-brownd p-3 text-lg text-white">
        <IoIosNotifications />
      </NavLink>
    </footer>
  );
}
export default Footer;
