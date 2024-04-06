
import './App.css';
import Header from './Componets/Header';
import './Componets/Header.css';
import Home from './Componets/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Componets/About';
import Contact from './Componets/Contact';
import Service from './Componets/Service';
import SearchAppBar from './Componets/HeaderBar';


function App({}) {
  
  return (
    <>
    <BrowserRouter>
    <SearchAppBar />
    
    <Header />  
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact title="Get In Touch"/>} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
