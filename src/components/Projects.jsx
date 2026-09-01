import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const track = root.current.querySelector('.projects-track')
      const wrap = root.current.querySelector('.projects-wrap')
      if (!track || !wrap) return

      const mm = gsap.matchMedia()
      mm.add('(min-width: 801px)', () => {
        if (reduced) return
        const distance = () => track.scrollWidth - wrap.clientWidth
        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            trigger: wrap,
            start: 'top 18%',
            end: () => `+=${distance()}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
      })

      gsap.from('.project', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: wrap, start: 'top 75%' },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="paper" id="projetos" ref={root}>
      <div className="section" style={{ paddingBottom: '1.5rem' }}>
        <p className="kicker">Projetos</p>
        <h2 className="section-title">
          Territórios que <em>voltaram a viver</em>
        </h2>
      </div>
      <div className="projects-wrap section" style={{ paddingTop: 0 }}>
        <div className="projects-track">
          {projects.map((item) => (
            <article className="project" key={item.title}>
              <figure>
                <img src={item.image} alt={item.title} />
              </figure>
              <div className="project__meta">
                <span>{item.year}</span>
                <span>{item.place}</span>
              </div>
              <h3>{item.title}</h3>
              <p>
                {item.meta}. {item.text}
              </p>
            </article>
          ))}
        </div>
        <p className="projects-note">Deslize o território →</p>
      </div>
    </section>
  )
}
