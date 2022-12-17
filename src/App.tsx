import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Contact from './pages/Contact'
import Experience from './pages/Experience/Experience'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Box } from '@chakra-ui/react'

function App() {
  return (
    <Box className='appContainer' alignItems='center'>
      <Box className='appContainer' maxWidth='150em' minWidth='15em' width='100vw'>
        <Router>
          <Navbar text="Home" page=" "/>
          <Routes>
            <Route path="/" element={<Home button={<h1>test</h1>}/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </Router>
      </Box>
    </Box>
  );
}

export default App;
