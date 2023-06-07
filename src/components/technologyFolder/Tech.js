import React from "react";
import Header from "../Header";
import { TechData } from "./TechData";
import TechCard from "./TechCard";

const Tech = () => {
    return (
        <div className="bg-techMobile h-auto bg-cover bg-slate-700 bg-center md:bg-techTablet md:h-screen lg:bg-techDesktop lg:h-auto ">
            <Header />
            <h2 className="mt-9 text-center font-sans text-white text-base tracking-custom md:mt-10 md:text-left md:ml-10 md:text-smallerText lg:hidden"><span className="opacity-25 pr-5">03</span>SPACE LAUNCH 101</h2>

            {TechData.map((TechDetail) =>{
                return <TechCard item = {TechDetail} />;
            })}
        </div>
    )
}

export default Tech