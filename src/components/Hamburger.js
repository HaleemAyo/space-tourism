import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import {NavLink } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const NavLinkStyles = "text-xl pt-8 pl-8 tracking-custom block hover:text-gray-600 transition-colors duration-500";
  const ActiveNavLinkStyles = "text-customPurple text-xl pt-8 pl-8 tracking-custom block transition-colors duration-500";

  
  return (
    <div className="relative">
      <button
        className="text-white focus:outline-none focus:text-white block pr-6 mt-8 md:hidden lg:hidden z-10 transition-all ease-in-out duration-500"
        onClick={toggleMenu}
      >
        {isOpen ? (
          <FiX size={24} />
        ) : (
          <FiMenu size={24} />
        )}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-all ease-in-out duration-500"
          onClick={closeMenu}
        >
          <div className="fixed inset-y-0 right-0 w-2/3  text-white pt-32  backdrop-blur-3xl transition-all ease-in-out duration-500">
            
            <NavLink to="/" className={({ isActive }) =>
              isActive ? ActiveNavLinkStyles : NavLinkStyles
            }>
              <span className="font-extrabold md:hidden">00</span> HOME
            </NavLink>

            <NavLink to="/destination" className={({ isActive }) =>
              isActive ? ActiveNavLinkStyles : NavLinkStyles
            }>
              <span className="font-extrabold md:hidden">01</span> DESTINATION
            </NavLink>

            <NavLink to="/crew" className={({ isActive }) =>
              isActive ? ActiveNavLinkStyles : NavLinkStyles
            }>
              <span className="font-extrabold md:hidden">02</span> CREW
            </NavLink>

            <NavLink to="/technology" className={({ isActive }) =>
              isActive ? ActiveNavLinkStyles : NavLinkStyles
            }>
              <span className="font-extrabold md:hidden">03</span> TECHNOLOGY
            </NavLink>          
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
