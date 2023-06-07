import React from "react"
import Header from "../Header"
import moonImage from "./destinationImages/moonImage.png"
import Footer from "../Footer"


const DestinationCard = () =>{
    return(
        <div className="bg-destinationMobile bg-cover bg-slate-700 bg-center h-auto md:bg-destinationTablet lg:bg-destinationDesktop">
            <Header />
            <p className="hidden font-sans text-white  tracking-custom mt-20 mb-16 pl-40 text-smallerText lg:block"><span className="opacity-25 pr-5">01</span>PICK YOUR DESTINATION</p>

            <section className="flex flex-col text-center lg:flex-row lg:justify-evenly">
                <div className="mt-8">
                <p className="font-sans text-white text-base md:text-left md:pl-9 lg:hidden"><span className="opacity-25 pr-5">01</span>PICK YOUR DESTINATION</p>
                <div className="w-globeMobileWidth h-globeMobileHeight mx-auto mt-8 md:w-globeTabletWidth md:h-globeTabletHeight md:mt-14 lg:w-globeDesktopWidth lg:h-globeDesktopHeight lg:ml-44">
                    <img src={moonImage} alt="moon" className="w-full h-full"/>
                </div>
                </div>

                <div className="mt-7 md:mt-14 lg:w-1/2 lg:mt-20">
                    <div className="text-customPurple tracking-custom text-sm  mx-16 md:text-base  md:mx-60   lg:text-base lg:mx-24 lg:text-left">
                        <a className="pr-5">MOON</a>
                        <a className="pr-5">MARS</a>
                        <a className="pr-5">EUROPA</a>
                        <a className="pr-5">TITAN</a>
                    </div>
                    
                    <div className="mt-5 md:mt-8 lg:mt-8">
                        <h1 className="text-white font-serif text-bigText md:text-Text lg:text-biggerText lg:mx-28 lg:text-left">MOON</h1>
                        <p className="text-customPurple text-smallestText font-sans tracking-widest mx-6 md:text-base md:mx-24 lg:mx-24 lg:text-left">
                        See our planet as you’ve never seen it before. 
                        A perfect relaxing trip away to help regain perspective and come back refreshed. 
                        While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                        </p>
                    </div>

                    <hr className="mt-8 mx-6 border border-solid border-gray-800 md:mx-24 md:mt-12  lg:mx-24"/>

                    <div className="md:flex md:justify-evenly lg:justify-around ">
                        <div className="mt-8 ">
                            <p className="text-customPurple font-sans text-sm">AVG. DISTANCE</p>
                            <p className="text-white font-serif text-smallerText pt-3">384,400 KM</p>
                        </div>
                        
                        <div className="mt-8 mb-8 md:mb-16">
                        <p className="text-customPurple font-sans text-sm ">EST. TRAVEL TIME</p>
                        <p className="text-white font-serif text-smallerText pt-3">3 DAYS</p>
                        </div>
                    </div>

                    <hr className="mt-8 mx-6 border border-solid border-gray-800 md:hidden"/>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default DestinationCard;