import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Contact from './pages/Contact'
import Experience from './pages/Experience/Experience'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react'

function App() {
  const [optionSelected, setOptionSelected] = useState("Home");
  return (
    <Box className='appContainer' alignItems='center'>
      <Box className='appContainer' maxWidth='150em' minWidth='15em' width='100vw'>
        <Router>
          <Navbar setOption={setOptionSelected} optionSelected={optionSelected} />
          <Routes>
            <Route path="/" element={<Home setOption={setOptionSelected} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Router>
      </Box>
    </Box>
  );
}

export default App;
