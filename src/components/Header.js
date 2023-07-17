import React from "react";
import logo from "./logo.jpg";
import HamburgerMenu from './Hamburger';
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const activeNavStyling = "md:ml-12 md:py-8 lg:ml-16 lg:pl-0 lg:py-5 lg:tracking-custom border-b-2 border-solid border-white";
  const navStyling = "md:ml-12 md:py-8 lg:ml-16 lg:pl-0 lg:py-5 lg:tracking-custom hover:border-b-2 hover:border-solid hover:border-gray-500  transition ease-in duration-500"

  return (
    <header className=" w-full">
      <nav className="relative lg:pt-10 lg:z-10 flex justify-between">
        
        <Link to="/" className="w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 ">
            <img src={logo} alt="logo" className="rounded-full mt-6 ml-6   w-full h-full md:ml-10 md:mt-3 lg:ml-14 "/>
        </Link>

        <HamburgerMenu/>

        <hr className="absolute hidden md:hidden lg:block left-48 border-white border-solid border-t border-opacity-30 mt-8 w-hrWidth z-10" />

        <div className="hidden md:w-tabletWidth md:block md:py-5 lg:w-desktopWidth lg:block lg:py-5  text-base font-sans text-white  lg:bg-gray-900 lg:bg-opacity-50 md:bg-gray-950 md:bg-opacity-25">
          <NavLink  to="/" className={({ isActive }) =>
              isActive ?activeNavStyling : navStyling 
            }>
            <span className="font-extrabold md:hidden lg:inline">00</span> HOME</NavLink>

          <NavLink  to="/destination" className={({ isActive }) =>
              isActive ? activeNavStyling:navStyling
            }>
            <span className="font-extrabold md:hidden lg:inline">01</span> DESTINATION</NavLink>

          <NavLink  to="/crew" className={({ isActive }) =>
              isActive ? activeNavStyling:navStyling
            }>
            <span className="font-extrabold md:hidden lg:inline">02</span> CREW</NavLink>

          <NavLink  to="/technology" className={({ isActive }) =>
              isActive ? activeNavStyling:navStyling
            }>
            <span className="font-extrabold md:hidden lg:inline lg:pr-2">03</span>TECHNOLOGY</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
