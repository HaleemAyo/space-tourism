import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer"
import {easeOut, motion } from "framer-motion";

import { CrewData } from "./CrewData";


const CrewCard = () => {

    // Default value to be shown
    const [crewData,setCrewData] = useState({
        id:CrewData[0].id,
        crewImage:CrewData[0].crewImage,
        crewBlurryImage:CrewData[0].crewBlurryImage,
        crewTitle:CrewData[0].crewTitle,
        crewName:CrewData[0].crewName,
        crewBio:CrewData[0].crewBio
    })

    const handleClick = (item) => {
        setCrewData({
            id: item.id,
            crewImage:item.crewImage,
            crewBlurryImage:item.crewBlurryImage,
            crewTitle:item.crewTitle,
            crewName:item.crewName,
            crewBio:item.crewBio
        })
    }

        // Tailwind styling
    const mobilePagination = "w-3 h-3 rounded-full bg-gray-600 mr-4 hover:bg-gray-300"
    const pagination = "w-pagnationWidth h-pagnationHeight rounded-full bg-gray-600 mr-4 lg:mr-6 md:w-5 md:h-5 hover:bg-gray-300"


    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.75, ease:easeOut}}
            className="bg-crewMobile h-screen  bg-cover md:bg-crewTablet md:h-auto lg:bg-crewDeskop"
        >
            <Header />

            <h2 className="mt-9 text-center font-sans text-white text-base tracking-custom md:mt-10 md:text-left md:ml-10 md:text-smallerText lg:hidden"><span className="opacity-25 pr-5">02</span>MEET YOUR CREW</h2>
            <section className="flex flex-col mt-8 md:flex-col-reverse md:mt-12 lg:flex lg:flex-row-reverse  lg:mt-16">
                <div className="w-customMobileWidth h-customMobileHeight mx-auto md:w-customTabletWidth md:h-customTabletHeight lg:mx-0  lg:w-customDesktopWidth lg:h-customDesktopHeight">
                    <img src={crewData.crewImage} alt={crewData.crewName} className="w-full h-full" loading="lazy"/>
                </div>

                <hr className="mx-6 border-gray-600 md:hidden lg:hidden"/>

                <div className="lg:w-1/2 lg:ml-6 lg:pl-20 lg:mt-4">
                    <h2 className="hidden text-left font-sans text-white tracking-custom text-smallerText lg:block"><span className="opacity-25 pr-5">02</span>MEET YOUR CREW</h2>

                    <div className="mt-8 flex justify-center md:hidden lg:hidden">
                        <div className="flex items-center">
                            {CrewData.map((item) =>{
                                return(
                                    <span 
                                    className={mobilePagination}
                                    id={`crew-${item.id}`}
                                    onClick={() => handleClick(item)}
                                    >
                                    </span>)
                            })}
                        </div>
                    </div>
                    <div className="pt-8 text-center lg:mt-36 lg:text-left">
                        <h2 className="font-serif text-base  text-gray-400 md:text-smallerText lg:text-smallText">{crewData.crewTitle}</h2>
                        <h1 className="font-serif text-2xl text-white pt-2 md:text-4xl lg:text-bigText lg:mt-4">{crewData.crewName}</h1>
                        <p className="mx-11  pt-4 leading-6 text-customPurple text-smallestText font-sans tracking-wider md:mx-44 md:text-base lg:mx-0 lg:text-lg lg:pt-7 lg:w-3/4">{crewData.crewBio}</p>

                    <div className="hidden my-10 md:flex md:justify-center lg:justify-start lg:mt-32">
                        <div className="flex items-center">
                            {CrewData.map((item) =>{
                                return(
                                    <span 
                                    className={pagination}
                                    id={`crew-${item.id}`}
                                    onClick={() => handleClick(item)}
                                    >
                                    </span>)
                            })}
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <Footer />
            

        </motion.div>
    )
}

export default CrewCard;