import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/homeFolder/Home';
import DestinationCard from './components/destinationFolder/DestinationCard'
import CrewCard from './components/crewFolder/CrewCard'
import Tech from './components/technologyFolder/Tech';
import TechCard from './components/technologyFolder/TechCard';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/destination' element={<DestinationCard />} />
        <Route path='/crew' element={<CrewCard />} />
        <Route path='/technology' element={<Tech />} />
        <Route path='/technology/:id' element={<TechCard />} />
      </Routes>
    </div>
  );
}

export default App;
