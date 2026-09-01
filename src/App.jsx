import { useCallback, useState } from 'react'
import Approach from './components/Approach'
import Contact from './components/Contact'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Loader from './components/Loader'
import Manifesto from './components/Manifesto'
import Marquee from './components/Marquee'
import Nav from './components/Nav'
import Projects from './components/Projects'
import Services from './components/Services'
import Technologies from './components/Technologies'

export default function App() {
  const [ready, setReady] = useState(false)
  const [loading, setLoading] = useState(true)
  const onReveal = useCallback(() => setReady(true), [])
  const onDone = useCallback(() => setLoading(false), [])

  return (
    <>
      <a className="sr-only" href="#territorio">
        Pular para o conteúdo
      </a>
      <div className="grain" />
      <Cursor />
      {loading ? <Loader onReveal={onReveal} onDone={onDone} /> : null}
      <Nav />
      <main>
        <Hero ready={ready} />
        <Manifesto />
        <Marquee />
        <Services />
        <Technologies />
        <Approach />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
