import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('[data-hero]', { y: 24, opacity: 0, duration: 0.85, stagger: 0.1, ease: 'power3.out' })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" id="topo" ref={root}>
      <div className="hero__grid" />
      <div className="hero__content">
        <div className="hero__copy">
          <p className="eyebrow" data-hero>GovTech ambiental · Fortaleza, Ceará</p>
          <h1 data-hero>Inteligência territorial <em>segura</em> para decisões públicas.</h1>
          <p className="hero__lead" data-hero>
            Transformamos imagens de satélite, drones e dados públicos em evidências
            rastreáveis para prefeituras, órgãos públicos e instituições financeiras.
          </p>
          <div className="hero__actions" data-hero>
            <a className="button" href="#contato">Solicitar apresentação <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#solucoes">Conhecer soluções <span aria-hidden="true">↓</span></a>
          </div>
          <ul className="hero__trust" data-hero aria-label="Princípios de confiança">
            <li>Fontes rastreáveis</li>
            <li>Privacidade por princípio</li>
            <li>Metodologia documentada</li>
          </ul>
        </div>

      </div>
      <a className="hero__image-credit" href="https://science.nasa.gov/earth/earth-observatory/agricultural-fields-and-flat-lands-brazil-91360/" target="_blank" rel="noreferrer">
        Imagem orbital · Maranhão, Brasil · NASA / ISS
      </a>
    </section>
  )
}
