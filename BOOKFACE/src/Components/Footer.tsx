import React from 'react';
import { FaUser , FaHome , FaPaperPlane } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-brownl w-screen h-14 items-center px-6 flex flex-row justify-between">
      <button className="bg-brownd p-3 text-lg rounded-2xl text-white"><FaUser /></button>
      <button className="bg-brownd p-3 text-lg rounded-2xl text-white"><FaHome  /></button>
      <button className="bg-brownd p-3 text-lg rounded-2xl text-white"><FaPaperPlane /></button>
      <button className="bg-brownd p-3 text-lg rounded-2xl text-white"><IoIosNotifications /></button>
    </div>
  );
}

export default Footer;