import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Manifesto() {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.intro__content > *', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 78%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="intro" ref={root}>
      <div className="shell intro__content">
        <p className="section-index">01 / O desafio</p>
        <h2>Problemas ambientais são também problemas de <em>decisão.</em></h2>
        <div className="intro__body">
          <p className="intro__lead">
            Onde intervir primeiro? O que mudou em uma propriedade? Qual evidência sustenta
            uma aprovação, uma cobrança ou um investimento?
          </p>
          <p>
            A Ecosapiens organiza dados dispersos e transforma o território em informação
            verificável. Cada solução começa por uma pergunta institucional e termina com
            um produto que a equipe consegue usar: mapa, indicador, plano, alerta ou dossiê.
          </p>
        </div>
        <figure className="intro__media">
          <img
            src="/images/levantamento-drone.webp"
            alt="Especialista realiza levantamento ambiental com drone e mapa territorial em campo"
            loading="lazy"
            decoding="async"
          />
          <figcaption>
            <span>Coleta em campo</span>
            <p>Dados territoriais conectados à realidade local.</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
