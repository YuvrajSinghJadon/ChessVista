import React, { useState } from "react";
import logo from "/Logo.png";
import { IoHome } from "react-icons/io5";
import { FcAbout } from "react-icons/fc";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaChess } from "react-icons/fa";

const Navbar = () => {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const handleAccountHover = () => {
    setIsAccountMenuOpen(true);
  };

  const handleAccountLeave = () => {
    setIsAccountMenuOpen(false);
  };

  return (
    <main>
      <div className="pr-5 pt-2 flex justify-between items-center text-secondary-200 text-xl mb-10">
        <div className="w-16 md:w-20">
          <img className="w-full" src={logo} alt="" />
        </div>
        <div className="flex w-full justify-between pl-40 pr-36">
          <div className="flex items-baseline gap-1 ">
            <IoHome color="#35635b" />
            <span> Home</span>
          </div>
          <div className="flex items-baseline gap-1 ">
            <FcAbout color="#35635b" />
            <span> About</span>
          </div>

          <div className="flex items-baseline gap-1 ">
            <FaPhoneVolume color="#35635b" />
            <span>Contact</span>
          </div>
          <div
            className="relative flex items-baseline gap-1 cursor-pointer"
            onMouseOver={handleAccountHover}
            onMouseOut={handleAccountLeave}
          >
            <FaChess color="#35635b" />
            <span> Account</span>
            {isAccountMenuOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white p-2 shadow-md rounded-md account-dropdown">
                <div>Login</div>
                <div>Signup</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
