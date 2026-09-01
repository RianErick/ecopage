import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { approach } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Approach() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) return
      gsap.from('.approach-card', {
        y: 32,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 72%' },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="paper" ref={root}>
      <div className="section">
        <p className="kicker">Método</p>
        <h2 className="section-title">
          Da leitura à <em>regeneração</em>
        </h2>
        <div className="approach-grid">
          {approach.map((item) => (
            <article className="approach-card" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
