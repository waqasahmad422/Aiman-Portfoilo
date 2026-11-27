import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Services from './components/Services'
import LangHobbies from './components/LangHobbies'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Background } from './components/Shared'

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Education /><Services /><LangHobbies /><Gallery /><Contact />
      </main>
      <Footer />
    </>
  )
}
