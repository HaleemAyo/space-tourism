import moonImage from "./destinationImages/moonImage.png"
import marsImage from "./destinationImages/marsImage.png"
import europaImage from "./destinationImages/europaImage.png"
import titanImage from "./destinationImages/titanImage.png"

export const DestinationData = [
    {
        id:1,
        destinationName: "MOON",
        destinationDetails:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        destinationDistance:"384,400 KM",
        destinationTravelTime:"3 DAYS",
        destinationImage: moonImage
    },
    {
        id:2,
        destinationName: "MARS",
        destinationDetails:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        destinationDistance:"225 MIL. KM",
        destinationTravelTime:"9 MONTHS",
        destinationImage: marsImage
    },
    {
        id:3,
        destinationName: "EUROPA",
        destinationDetails:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        destinationDistance:"628 MIL. KM",
        destinationTravelTime:"3 YEARS",
        destinationImage: europaImage
    },
    {
        id:4,
        destinationName: "TITAN",
        destinationDetails:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        destinationDistance:"1.6 BIL. KM",
        destinationTravelTime:"7 YEARS",
        destinationImage: titanImage
    }
]