import React from 'react';

function NavTop() {
  return (
    <div className="fixed top-0 left-0 right-0 h-14 flex items-center px-4 lg:mx-28 lg:hidden bg-beiged">
      <img src="logo.svg" alt="" className="w-12 h-12 lg:ml-2" />

      <div className="ml-4 flex-grow">
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-10 px-4 rounded-3xl bg-beigel lg:bg-beiged focus:outline-none"
        />
      </div>
    </div>
  );
}

export default NavTop;
