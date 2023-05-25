import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from "react-router-dom"
import { ACTIVITIES } from './Components/info_all_activities';

import Footer from './Components/Footer';
import NavBar from './Components/NavBar';

import HomePage from './Pages/HomePage';
import Organization from './Pages/Organization';
import Chief from './Pages/Chief';
import Research from './Pages/Research';

import FinTech from './Fintech/finTech';
import FinBuss from './FinBuss/finBuss';
import FinLaw from './FinLaw/finLaw';
import Industry from './Industry/industry';

import Activity from './Pages/Activity';
import Event from './Activities/event';

import PersonalPage from './Pages/PersonalPage';
import Contact from './Pages/Contact';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/chief" element={<Chief />} />
            <Route path="/research" element={<Research />} />

            <Route path="/finTech" element={<FinTech />} />
            <Route path="/finBuss" element={<FinBuss />} />
            <Route path="/finLaw" element={<FinLaw />} />
            <Route path="/industry" element={<Industry />} />

            <Route path="/activity" element={<Activity />} />
            {ACTIVITIES.map((v, i)=>{
              return <Route path={`/activity/${i}`} element={<Event id={i} />} />
            })}

            <Route path="/personalPage" element={<PersonalPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
