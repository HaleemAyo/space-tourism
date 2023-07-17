import React, { useState } from "react"
import Header from "../Header"
import Footer from "../Footer"
import { easeOut, motion } from "framer-motion";

import { DestinationData } from "./DestinationData";
import { NavLink } from "react-router-dom";



const DestinationCard = () =>{

    // Default value to be used
    const [destinationData, setDestinationData] = useState({
        destinationName: DestinationData[0].destinationName,
        destinationDetails: DestinationData[0].destinationDetails,
        destinationImage: DestinationData[0].destinationImage,
        destinationDistance: DestinationData[0].destinationDistance,
        destinationTravelTime: DestinationData[0].destinationTravelTime,
        id: DestinationData[0].id,
    });

    const handleClick = (item) => {
        setDestinationData({
        destinationName: item.destinationName,
        destinationDetails: item.destinationDetails,
        destinationImage: item.destinationImage,
        destinationDistance: item.destinationDistance,
        destinationTravelTime: item.destinationTravelTime,
        id: item.id,
        })
    }

    return(
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:0.75, ease:easeOut}}
            className="bg-destinationMobile bg-cover bg-slate-700 bg-center h-auto md:bg-destinationTablet lg:bg-destinationDesktop"
        >
            <Header />
            <p className="hidden font-sans text-white  tracking-custom mt-20 mb-16 pl-40 text-smallerText lg:block"><span className="opacity-25 pr-5">01</span>PICK YOUR DESTINATION</p>

            <section className="flex flex-col text-center lg:flex-row lg:justify-evenly">
                <div className="mt-8">
                <p className="font-sans text-white text-base md:text-left md:pl-9 lg:hidden"><span className="opacity-25 pr-5">01</span>PICK YOUR DESTINATION</p>
                <div className="w-globeMobileWidth h-globeMobileHeight mx-auto mt-8 md:w-globeTabletWidth md:h-globeTabletHeight md:mt-14 lg:w-globeDesktopWidth lg:h-globeDesktopHeight lg:ml-44">
                    <img src={destinationData.destinationImage} alt={destinationData.destinationName} className="w-full h-full"/>
                </div>
                </div>

                <div className="mt-7 md:mt-14 lg:w-1/2 lg:mt-20">
                    <div className="text-customPurple tracking-custom text-sm  mx-16 md:text-base  md:mx-60   lg:text-base lg:mx-24 lg:text-left">
                        {DestinationData.map((item)=>{
                            return(
                        <NavLink 
                        className="mr-5 pb-2 hover:border-solid hover:border-white hover:border-b-2 "
                        id={`destination ${item.id}`}
                        key={item.id}
                        onClick={() => handleClick(item)}
                        >{item.destinationName}
                        </NavLink>
                            )
                        })}
                    </div>
                    
                    <div className="mt-5 md:mt-8 lg:mt-8">
                        <h1 className="text-white font-serif text-bigText md:text-Text lg:text-biggerText lg:mx-28 lg:text-left">{destinationData.destinationName}</h1>
                        <p className="text-customPurple text-smallestText font-sans tracking-widest mx-6 md:text-base md:mx-24 lg:mx-24 lg:text-left">{destinationData.destinationDetails}</p>
                    </div>

                    <hr className="mt-8 mx-6 border border-solid border-gray-800 md:mx-24 md:mt-12  lg:mx-24"/>

                    <div className="md:flex md:justify-evenly lg:justify-around ">
                        <div className="mt-8 ">
                            <p className="text-customPurple font-sans text-sm">AVG. DISTANCE</p>
                            <p className="text-white font-serif text-smallerText pt-3">{destinationData.destinationDistance}</p>
                        </div>
                        
                        <div className="mt-8 mb-8 md:mb-16">
                        <p className="text-customPurple font-sans text-sm ">EST. TRAVEL TIME</p>
                        <p className="text-white font-serif text-smallerText pt-3">{destinationData.destinationTravelTime}</p>
                        </div>
                    </div>

                    <hr className="mt-8 mx-6 border border-solid border-gray-800 md:hidden"/>
                </div>
            </section>

            <Footer />
        </motion.div>
    )
}

export default DestinationCard;