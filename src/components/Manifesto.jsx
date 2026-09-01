import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { stats } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Manifesto() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) return

      gsap.from('[data-fade]', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: root.current, start: 'top 75%' },
      })

      gsap.from('.manifesto__visual img', {
        scale: 1.12,
        duration: 1.4,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.manifesto__visual', start: 'top 80%' },
      })

      root.current.querySelectorAll('[data-count]').forEach((el) => {
        const end = Number(el.dataset.count)
        const obj = { val: 0 }
        gsap.to(obj, {
          val: end,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toLocaleString('pt-BR')
          },
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <section className="paper" id="territorio" ref={root}>
      <div className="section manifesto">
        <div className="manifesto__sticky" data-fade>
          <p className="kicker">O território</p>
          <h2 className="section-title">
            Um olhar sistêmico sobre <em>pessoas e natureza</em>
          </h2>
        </div>
        <div>
          <p data-fade>
            A Ecosapiens é um escritório colaborativo e multidisciplinar focado em soluções
            de sustentabilidade. Acreditamos na integração das pessoas com a natureza para
            promover ciclos regenerativos e sistemas autossuficientes.
          </p>
          <p data-fade>
            Desde <strong>2003</strong>, nascida em uma incubadora de tecnologias em Mogi das
            Cruzes, unimos conhecimentos ancestrais e técnicas contemporâneas — da
            bioconstrução ao planejamento urbano. Atuamos em diferentes escalas:
            tecnologias, edificações, comunidades e territórios.
          </p>
          <p data-fade>
            Cada ambiente é tratado como sistema vivo, único e complexo. Cruzamos dados
            bioclimáticos, hidrografia, legislação e saberes do lugar para chegar ao
            potencial máximo construtivo sem abrir mão da regeneração.
          </p>
          <div className="stats">
            {stats.map((item) => (
              <article className="stat" key={item.label} data-fade>
                <p className="stat__value">
                  <span data-count={item.value}>0</span>
                  {item.suffix}
                </p>
                <p className="stat__label">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="section" style={{ paddingTop: 0 }}>
        <div className="manifesto__visual">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1600&q=80"
            alt="Relevo montanhoso coberto de vegetação, lido como território vivo"
          />
          <aside className="manifesto__card" data-fade>
            <span>Premissa</span>
            <p>
              Projetos únicos voltados à autonomia e à sustentabilidade ambiental, social e
              econômica de cada ambiente — residências, espaços públicos, ecovilas e
              urbanismo integrado.
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
