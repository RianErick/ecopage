import { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { services } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const root = useRef(null)
  const [open, setOpen] = useState(0)

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) return
      gsap.from('.service', {
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 72%' },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  useLayoutEffect(() => {
    const bodies = root.current?.querySelectorAll('.service__body')
    if (!bodies) return

    bodies.forEach((body, i) => {
      gsap.to(body, {
        maxHeight: open === i ? 200 : 0,
        duration: 0.45,
        ease: 'power2.inOut',
      })
    })
  }, [open])

  return (
    <section className="paper" id="atuacao" ref={root}>
      <div className="section">
        <div className="atuacao__head">
          <div>
            <p className="kicker">Atuação</p>
            <h2 className="section-title">
              Inteligência ecológica em <em>diferentes escalas</em>
            </h2>
          </div>
          <p>
            Consultoria e desenvolvimento de soluções sustentáveis — da tecnologia à
            edificação, da comunidade ao planejamento territorial.
          </p>
        </div>
        <div>
          {services.map((item, i) => (
            <button
              type="button"
              className={`service${open === i ? ' is-open' : ''}`}
              key={item.index}
              onClick={() => setOpen(open === i ? -1 : i)}
              aria-expanded={open === i}
            >
              <span className="service__index">{item.index}</span>
              <span className="service__title">{item.title}</span>
              <span className="service__plus" aria-hidden="true">
                +
              </span>
              <span className="service__body">
                <p>{item.text}</p>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
