import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Stack from './pages/Stack'
import About from './pages/About'
import Connect from './pages/Connect'

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}