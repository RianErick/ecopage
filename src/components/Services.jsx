import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { solutions } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const root = useRef(null)

  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = gsap.context(() => {
      gsap.from('.solution-card', {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.solutions__grid', start: 'top 78%' },
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section className="solutions" id="solucoes" ref={root}>
      <div className="shell">
        <div className="section-head">
          <div><p className="section-index">03 / Soluções</p><h2>Da imagem bruta à ação concreta.</h2></div>
          <p>Projetos sob medida para perguntas específicas, combinando tecnologia, conhecimento ambiental e leitura institucional.</p>
        </div>
        <div className="solutions__grid">
          {solutions.map((item) => (
            <article className="solution-card" key={item.index}>
              <div className="solution-card__meta"><span>{item.index}</span><span>{item.tag}</span></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="solution-card__arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
