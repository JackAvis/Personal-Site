import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Contact from './pages/Contact'
import Experience from './pages/Experience/Experience'
import { useState } from 'react';
import { HashRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { Box } from '@chakra-ui/react'

function App() {
  const [optionSelected, setOptionSelected] = useState("");
  return (
    <Box className='appContainer' alignItems='center'>
      <Box className='appContainer' maxWidth='90em' minWidth='15em' width='100vw'>
        <Router> 
          <Navbar optionSelected={optionSelected} />
          <Routes>
            <Route path="/" element={<Home setOption={setOptionSelected} />} />
            <Route path="/contact" element={<Contact setOption={setOptionSelected}/>} />
            <Route path="/experience" element={<Experience setOption={setOptionSelected}/>} />
          </Routes>
        </Router>
      </Box>
    </Box>
  );
}

export default App;
