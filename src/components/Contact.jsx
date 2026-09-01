import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) return
      gsap.from('.contact__inner > *', {
        y: 36,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="paper" id="contato" ref={root}>
      <div className="section contact">
        <div className="contact__inner">
          <p className="kicker">Contato</p>
          <h2 className="section-title">
            Vamos ler o seu <em>território</em>
          </h2>
          <p className="lead">
            Conte sobre o sítio, o edifício, a comunidade ou o empreendimento. Montamos a
            equipe certa para cada desafio — sempre com rigor técnico e olhar regenerativo.
          </p>
          <a className="contact__mail" href="mailto:contato@ecosapiens.eco.br">
            contato@ecosapiens.eco.br
          </a>
          <p className="contact__loc">Fortaleza · CE · Brasil</p>
        </div>
      </div>
    </section>
  )
}
