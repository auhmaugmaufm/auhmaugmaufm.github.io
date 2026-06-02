import Header from './components/header/Header'
import AboutMe from './components/AboutMe'
import PersonalInf from './components/PersonalInf'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './app/globals.css'

function App() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content" data-theme="cupcake">
      <Header />
      <main className="mx-auto max-w-screen-xl px-4 pb-12 pt-24">
        <AboutMe />
        <PersonalInf />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
