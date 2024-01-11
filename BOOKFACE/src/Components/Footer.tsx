import { FaUser, FaHome, FaPaperPlane } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-brownl w-screen h-14 items-center px-6 flex flex-row justify-between lg:hidden">
      <NavLink to="/profil" className="bg-brownd p-3 text-lg rounded-2xl text-white">
        <FaUser />
      </NavLink>
      <NavLink to="/" className="bg-brownd p-3 text-lg rounded-2xl text-white">
        <FaHome />
      </NavLink>
      <NavLink to="/message" className="bg-brownd p-3 text-lg rounded-2xl text-white">
        <FaPaperPlane />
      </NavLink>
      <NavLink to="" className="bg-brownd p-3 text-lg rounded-2xl text-white">
        <IoIosNotifications />
      </NavLink>
    </footer>
  );
}
export default Footer;
