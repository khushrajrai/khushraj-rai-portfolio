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
        <section id="home"><Home /></section>
        <section id="stack"><Stack /></section>
        <section id="projects"><Projects /></section>
        <section id="about"><About /></section>
        <section id="connect"><Connect /></section>
      </main>

      <Footer />
    </>
  )
}