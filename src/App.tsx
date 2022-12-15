import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box className='appContainer' alignItems='center'>
      <Box className='appContainer' maxWidth='150em' minWidth='30em' width='100vw'>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </Box>
    </Box>
  );
}

export default App;
