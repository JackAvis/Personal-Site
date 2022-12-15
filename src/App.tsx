import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
