import Approach from './components/Approach'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Marquee from './components/Marquee'
import MulticriteriaProduct from './components/MulticriteriaProduct'
import Nav from './components/Nav'
import Programs from './components/Programs'
import ProductShowcase from './components/ProductShowcase'
import Projects from './components/Projects'
import Services from './components/Services'
import SatelliteCompliance from './components/SatelliteCompliance'
import Technologies from './components/Technologies'
import Trust from './components/Trust'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Nav />
      <main id="conteudo">
        <Hero />
        <Marquee />
        <Manifesto />
        <Trust />
        <Services />
        <Technologies />
        <SatelliteCompliance />
        <ProductShowcase />
        <MulticriteriaProduct />
        <Approach />
        <Projects />
        <Programs />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
