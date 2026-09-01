import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { technologies } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Technologies() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) return
      gsap.from('.tech-card', {
        y: 36,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 70%' },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="tech" id="tecnologias" ref={root}>
      <div className="section">
        <p className="kicker">Tecnologias ambientais</p>
        <h2 className="section-title">
          Sistemas que recriam <em>ciclos naturais</em>
        </h2>
        <div className="tech-grid">
          {technologies.map((item) => (
            <article className="tech-card" key={item.title}>
              <span className="tech-card__index">{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
