import React from "react";
import { Link} from "react-router-dom";
import { TechData } from "./TechData";


const TechCard = ({item}) => {

    const sharedLinkStyles = "w-10 h-10 md:w-16 md:h-16 rounded-full border border-solid border-gray-700 mr-4 pt-2 text-white text-center text-base font-serif md:text-2xl md:pt-4 lg:w-20 lg:h-20 lg:text-smallText lg:pt-6 lg:mt-8  lg:inline-block lg:mr-0";

    const {id,techName,techDetails,techImageName,techImage,techImageDesktop} = item

    return (
            <section className="flex flex-col pt-12 md:mt-16 lg:flex lg:flex-row-reverse lg:mt-20">
                <div className="w-screen h-44 md:h-techTabletHeight lg:h-techDesktopHeight lg:mt-36">
                    <picture>
                        <source srcSet={techImageDesktop} alt={techImageName} media="(max-width: 1440px)" />
                        <img src={techImage}  alt={techImageName} className="w-full h-full"/>
                    </picture>
                </div>

                <div className="lg:ml-6 lg:pl-20 lg:mt-4">
                    <h2 className="hidden text-left font-sans text-white tracking-custom text-smallerText lg:block"><span className="opacity-25 pr-5">03</span>SPACE LAUNCH 101</h2>

                    <div className="lg:flex lg:justify-between lg:mt-36">
                        <div className="mt-12 md:mt-16 flex justify-center lg:block lg:mt-0">
                            <div className="flex items-center lg:block">
                                <Link to={`/technology/${TechData.id}`} className={sharedLinkStyles}>1</Link>
                                <Link to={`/technology/${TechData.id}`} className={sharedLinkStyles}>2</Link>
                                <Link to={`/technology/${TechData.id}`} className={sharedLinkStyles}>3</Link>
                            </div>
                        </div>
                        <div className="pt-7 text-center md:pt-11 md:mb-7  lg:text-left  lg:ml-20">
                            <h2 className="font-sans text-sm  text-customPurple md:text-base lg:text-smallText">THE TERMINOLOGY...</h2>
                            <h1 className="font-serif text-2xl text-white pt-2 md:text-techText md:pt-4 lg:text-bigText lg:mt-3">{techName}</h1>
                            <p className="w-11/12 mx-auto  pt-4 leading-6 text-customPurple text-smallestText font-sans tracking-wider  md:w-7/12  md:text-base lg:mx-0 lg:text-lg lg:pt-7 lg:w-2/3">{techDetails}</p>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default TechCard