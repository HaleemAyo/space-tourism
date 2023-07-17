import launchVehicleDesktop from "./techImage/launchVehicleDesktop.jpg";
import launchVehicle from "./techImage/launchVehicle.jpg";
import launchVehicleBlur from "./techImage/launchVehicle-small.jpg";
import spaceportDesktop from "./techImage/spaceportDesktop.jpg";
import spaceport from "./techImage/spaceport.jpg";
import spaceportBlur from "./techImage/spaceport-small.jpg";
import spaceCapsule from "./techImage/spaceCapsule.jpg";
import spaceCapsuleBlur from "./techImage/spaceCapsule-small.jpg";

export const TechData = [
    {
        id:1,
        techName:"LAUNCH VEHICLE",
        techDetails:"A launch vehicle is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        techBlurryImage: launchVehicleBlur,
        techImage: launchVehicle,
        techImageDesktop:launchVehicleDesktop,
    },
    {
        id:2,
        techName:"SPACEPORT",
        techDetails:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        techBlurryImage: spaceportBlur,
        techImage: spaceport,
        techImageDesktop:spaceportDesktop,
    },
    {
        id:3,
        techName:"SPACE CAPSULE",
        techDetails:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        techBlurryImage:spaceCapsuleBlur,
        techImage:spaceCapsule,
    },
]