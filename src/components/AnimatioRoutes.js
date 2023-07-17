import React from 'react'
import {Route, useLocation, Routes } from 'react-router-dom'
import Home from './homeFolder/Home';
import DestinationCard from './destinationFolder/DestinationCard'
import CrewCard from './crewFolder/CrewCard'
import TechCard from './technologyFolder/TechCard';

import {AnimatePresence} from "framer-motion"


export const AnimatioRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>} />
        <Route path='/destination' element={<DestinationCard />} />
        <Route path='/crew' element={<CrewCard />} />
        <Route path='/technology' element={<TechCard />} />
      </Routes>
    </AnimatePresence>
  )
}
