import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from "react-router-dom"
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

            <Route path="/personalPage" element={<PersonalPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer></Footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
