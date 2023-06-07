import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const HomeCard = () => {
  return (
    <div className="bg-homeMobile bg-cover  bg-slate-700 bg-center h-auto md:bg-homeTablet lg:bg-homeDesktop lg:h-auto ">
      <Header />
      <section className="flex flex-col  lg:flex-row lg:justify-between lg:mt-10">
        <div className="mx-6 text-center mt-14 md:mt-24 md:mx-40 lg:w-1/2 lg:mx-0 lg:text-left lg:ml-40">
          <p className="text-customPurple text-smallerText font-sans md:text-xl lg:text-lg">SO, YOU WANT TO TRAVEL TO</p>
          
          <h1 className="font-serif text-white text-biggerText md:text-biggestText">SPACE</h1>
          
          <p className="text-customPurple text-smallestText font-sans md:mx-12 lg:text-lg lg:mx-0 lg:w-desktopWidth">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="w-buttonWidth h-buttonHeight rounded-full mx-auto  hover:ring-[50px]  mt-20 md:w-60  md:h-60 md:mt-40 md:hover:ring-[80px] lg:w-72 lg:h-72 lg:hover:ring-[100px] hover:ring-gray-700 hover:ring-opacity-60 transition ease-in-out duration-500">
            <Link to="/destination">
              <button className="w-full h-full bg-white rounded-full text-xl font-serif font-normal tracking-custom md:text-smallText">EXPLORE</button>
            </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeCard;
