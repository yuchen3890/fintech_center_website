import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Route, Routes } from "react-router-dom"
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Research from './Pages/Research';
import Contact from './Pages/Contact';
import FinTech from './Fintech/finTech';
import PersonalPage from './Pages/PersonalPage';
import Organization from './Pages/Organization';
import FinLaw from './FinLaw/finLaw';
import FinBuss from './FinBuss/finBuss';
import Industry from './Industry/industry';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/organization" element={<Organization />} />
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
