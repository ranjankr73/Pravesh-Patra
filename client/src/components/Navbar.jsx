import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Dashboard",
      path: "/dashboard"
    },
    {
      name: "Contact",
      path: "/contact"
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#7fd9dc] p-4 shadow-xl w-screen">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-xl font-semibold">
          <NavLink to="/">Pravesh Patra</NavLink>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
        >
          <div className="text-lg md:flex-grow mx-4">
            {navItems.map(item => (
              <NavLink
                key={item.name}
                to={item.path}
                className="block mt-4 md:inline-block md:mt-0 text-black hover:text-[#f38b24] mr-4"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div>
            <NavLink
              to="/login"
              className="inline-block text-md px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0 mr-4"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="inline-block text-md px-4 py-2 leading-none border rounded text-black border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0"
            >
              Signup
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
