import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import TopoMap from './TopoMap'

export default function Hero({ ready }) {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (!ready) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set('.hero__line span', { y: 0 })
        gsap.set('.hero__coords, .hero__lead, .hero__foot', { opacity: 1 })
        gsap.set('.hero__figure', { clipPath: 'inset(0% 0 0 0)' })
        gsap.set('.hero__figure img', { scale: 1 })
        return
      }

      const paths = root.current.querySelectorAll('.hero__topo path')
      paths.forEach((path) => {
        const length = path.getTotalLength()
        path.style.strokeDasharray = String(length)
        path.style.strokeDashoffset = String(length)
      })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.to(paths, { strokeDashoffset: 0, duration: 2.2, stagger: 0.08, ease: 'power2.inOut' }, 0)
        .to('.hero__line span', { y: 0, duration: 1.15, stagger: 0.12 }, 0.15)
        .to('.hero__coords, .hero__lead, .hero__foot', { y: 0, opacity: 1, duration: 0.8, stagger: 0.08 }, 0.55)
        .to('.hero__figure', { clipPath: 'inset(0% 0 0 0)', duration: 1.2, ease: 'power4.inOut' }, 0.2)
        .to('.hero__figure img', { scale: 1, duration: 1.6, ease: 'power2.out' }, 0.2)
    }, root)

    return () => ctx.revert()
  }, [ready])

  return (
    <section className="hero" id="topo" ref={root}>
      <TopoMap className="hero__topo" />
      <div className="hero__layout">
        <div>
          <p className="hero__coords">3°43'S · 38°32'W · Fortaleza · CE</p>
          <h1 className="hero__title">
            <span className="hero__line">
              <span>Inteligência</span>
            </span>
            <span className="hero__line">
              <span>
                <em>territorial</em>
              </span>
            </span>
          </h1>
          <p className="hero__lead">
            Tecnologias ambientais aplicadas à regeneração de paisagens, edificações e
            comunidades. Um escritório colaborativo que lê o território como sistema vivo.
          </p>
          <div className="hero__foot">
            <p className="hero__meta">Design ecológico · bioconstrução · permacultura</p>
            <a className="hero__scroll" href="#territorio">
              Explorar
              <i />
            </a>
          </div>
        </div>
        <figure className="hero__figure">
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80"
            alt="Dossel de floresta visto de baixo, luz filtrada entre as copas"
          />
          <figcaption className="hero__caption">Leitura de paisagem · camada 01</figcaption>
        </figure>
      </div>
    </section>
  )
}
