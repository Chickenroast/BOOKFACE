import React from "react";

function NavTop() {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center bg-beiged px-[5vw] lg:mx-28 lg:hidden">
      <img src="logo.svg" alt="" className="h-12 w-12 lg:ml-2" />

      <div className="ml-4 flex-grow">
        <input
          type="text"
          placeholder="Search..."
          className="h-10 w-full rounded-3xl bg-beigel px-4 focus:outline-none lg:bg-beiged"
        />
      </div>
    </div>
  );
}

export default NavTop;
