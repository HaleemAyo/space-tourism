import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { easeOut, motion } from "framer-motion";
import Header from "../Header";

import { TechData } from "./TechData";
import Footer from "../Footer";



const TechCard = () => {

//   Tailwind styling
  const sharedLinkStyles =
    "w-10 h-10 md:w-16 md:h-16 rounded-full border border-solid border-gray-700 mr-4 pt-2 text-white text-center text-base  font-serif hover:border-solid hover:border-white  md:text-2xl md:pt-4 lg:w-20 lg:h-20 lg:text-smallText lg:pt-6 lg:mt-8  lg:inline-block lg:mr-0";
  
  //   Default value to be shown
  const [techData, setTechData] = useState({
    techName: TechData[0].techName,
    techDetails: TechData[0].techDetails,
    techImage: TechData[0].techImage,
    techImageDesktop: TechData[0].techImageDesktop,
    techBlurryImage: TechData[0].techBlurryImage,
    id: TechData[0].id,
  });




  const handleClick = (item) => {
    setTechData({
      techName: item.techName,
      techDetails: item.techDetails,
      techImage: item.techImage,
      techImageDesktop: item.techImageDesktop,
      techBlurryImage: item.techBlurryImage,
      id: item.id,
    });
  };

  const backgroundStyle = {
    backgroundImage: `url(${techData.techBlurryImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75, ease: easeOut }}
      className="bg-techMobile h-auto bg-cover  bg-slate-700 bg-center md:bg-techTablet md:h-screen  lg:bg-techDesktop lg:h-auto "
    >
      <Header />
      <h2 className="mt-9 text-center font-sans text-white text-base tracking-custom md:mt-10 md:text-left md:ml-10 md:text-smallerText lg:hidden">
        <span className="opacity-25 pr-5">03</span>SPACE LAUNCH 101
      </h2>

      <section className="flex flex-col pt-12 md:mt-16 lg:flex lg:flex-row-reverse lg:mt-20">
        <div
          className="w-screen h-44  md:h-techTabletHeight lg:h-techDesktopHeight lg:mt-36"
          style={backgroundStyle}
        >
          <picture>
            <source
              srcSet={techData.techImageDesktop}
              alt={techData.techName}
              media="(max-width: 1440px)"
            />
            <img
              src={techData.techImage}
              alt={techData.techName}
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </picture>
        </div>

        <div className="lg:ml-6 lg:pl-20 lg:mt-4">
          <h2 className="hidden text-left font-sans text-white tracking-custom text-smallerText lg:block">
            <span className="opacity-25 pr-5">03</span>SPACE LAUNCH 101
          </h2>

          <div className="lg:flex lg:justify-between lg:mt-36">
            <div className="mt-12 md:mt-16 flex justify-center lg:block lg:mt-0">
              <div className="flex items-center lg:block">
                {TechData.map((item) => {
                  return (
                    <NavLink
                      key={item.id}
                      id={`round-${item.id}`}
                      onClick={() => handleClick(item)}
                      className={sharedLinkStyles}>
                      <span>{item.id}</span>
                    </NavLink>
                  );
                })}
                ;
              </div>
            </div>
            <div className="pt-7 text-center md:pt-11 md:mb-7  lg:text-left  lg:ml-20">
              <h2 className="font-sans text-sm  text-customPurple md:text-base lg:text-smallText">
                THE TERMINOLOGY...
              </h2>
              <h1 className="font-serif text-2xl text-white pt-2 md:text-techText md:pt-4 lg:text-bigText lg:mt-3">
                {techData.techName}
              </h1>
              <p className="w-11/12 mx-auto  pt-4 leading-6 text-customPurple text-smallestText font-sans tracking-wider  md:w-7/12  md:text-base lg:mx-0 lg:text-lg lg:pt-7 lg:w-2/3">
                {techData.techDetails}
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default TechCard;
