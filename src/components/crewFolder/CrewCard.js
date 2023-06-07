import React from "react";
import Header from "../Header";
import douglasImage from "./crewImages/douglasImage.png"

const CrewCard = () => {
    return(
        <div className="bg-crewMobile h-screen bg-cover md:bg-crewTablet md:h-auto lg:bg-crewDeskop">
            <Header />

            <h2 className="mt-9 text-center font-sans text-white text-base tracking-custom md:mt-10 md:text-left md:ml-10 md:text-smallerText lg:hidden"><span className="opacity-25 pr-5">02</span>MEET YOUR CREW</h2>
            <section className="flex flex-col mt-8 md:flex-col-reverse md:mt-12 lg:flex lg:flex-row-reverse  lg:mt-16">
                <div className="w-customMobileWidth h-customMobileHeight mx-auto md:w-customTabletWidth md:h-customTabletHeight lg:mx-0  lg:w-customDesktopWidth lg:h-customDesktopHeight">
                    <img src={douglasImage} alt="Douglas Image" className="w-full h-full"/>
                </div>

                <hr className="mx-6 border-gray-600 md:hidden lg:hidden"/>

                <div className="lg:w-1/2 lg:ml-6 lg:pl-20 lg:mt-4">
                    <h2 className="hidden text-left font-sans text-white tracking-custom text-smallerText lg:block"><span className="opacity-25 pr-5">02</span>MEET YOUR CREW</h2>

                    <div className="mt-8 flex justify-center md:hidden lg:hidden">
                        <div className="flex items-center">
                            <span className="w-pagnationWidth h-pagnationHeight rounded-full bg-gray-600 mr-4"></span>
                            <span className="w-pagnationWidth h-pagnationHeight rounded-full bg-gray-600 mr-4"></span>
                            <span className="w-pagnationWidth h-pagnationHeight rounded-full bg-gray-600 mr-4"></span>
                            <span className="w-pagnationWidth h-pagnationHeight rounded-full bg-gray-600 mr-4"></span>
                        </div>
                    </div>
                    <div className="pt-8 text-center lg:mt-36 lg:text-left">
                        <h2 className="font-serif text-base  text-gray-400 md:text-smallerText lg:text-smallText">COMMANDER</h2>
                        <h1 className="font-serif text-2xl text-white pt-2 md:text-4xl lg:text-bigText lg:mt-4">DOUGLAS HURLEY</h1>
                        <p className="mx-11  pt-4 leading-6 text-customPurple text-smallestText font-sans tracking-wider md:mx-44 md:text-base lg:mx-0 lg:text-lg lg:pt-7 lg:w-3/4">Douglas Gerald Hurley is an American engineer, 
                        former Marine Corps pilot and former NASA astronaut. 
                        He launched into space for the third time as commander of Crew Dragon Demo-2.
                        </p>

                    <div className="hidden my-10 md:flex md:justify-center lg:justify-start lg:mt-32">
                        <div className="flex items-center">
                            <span className="w-pagnationWidth h-pagnationHeight rounded-full bg-gray-600 mr-4 lg:mr-6 lg:w-3 lg:h-3"></span>
                            <span className="w-pagnationWidth h-pagnationHeight rounded-full bg-gray-600 mr-4 lg:mr-6 lg:w-3 lg:h-3"></span>
                            <span className="w-pagnationWidth h-pagnationHeight rounded-full bg-gray-600 mr-4 lg:mr-6 lg:w-3 lg:h-3"></span>
                            <span className="w-pagnationWidth h-pagnationHeight rounded-full bg-gray-600 mr-4 lg:mr-6 lg:w-3 lg:h-3"></span>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            

        </div>
    )
}

export default CrewCard;