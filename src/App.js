import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return(

  <Router>
   <Header />
   <Routes>
       
        <Route exact path="/"  element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Contact" element={<Contact />} />
      
        </Routes>
      </Router>
);
}

export default App;
