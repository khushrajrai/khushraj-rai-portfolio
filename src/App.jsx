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
    <>
      <Cursor />
      <Navbar />

      <main>
        {/* id anchors for scroll-to — no padding here, each page manages its own */}
        <div id="home"><Home /></div>
        <div id="stack"><Stack /></div>
        <div id="projects"><Projects /></div>
        <div id="about"><About /></div>
        <div id="connect"><Connect /></div>
      </main>

      <Footer />
    </>
  )
}