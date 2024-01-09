import React from 'react';

function NavTop() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-beiged w-screen h-14 flex items-center px-4">
      <img src="logo.svg" alt="" className="w-12 h-12" />

      <div className="ml-4 flex-grow">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-10 px-4 rounded-3xl bg-beigel focus:outline-none"
        />
      </div>
    </div>
  );
}

export default NavTop;
