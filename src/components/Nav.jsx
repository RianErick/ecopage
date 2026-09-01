import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Logo from './Logo'
import { navLinks } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Nav() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: '#territorio',
        start: 'top 64px',
        onEnter: () => root.current?.classList.add('is-solid'),
        onLeaveBack: () => root.current?.classList.remove('is-solid'),
      })
    }, root)

    return () => ctx.revert()
  }, [])

  return (
    <header className="nav" ref={root}>
      <a className="nav__logo" href="#topo">
        <Logo />
        <span>Ecosapiens</span>
      </a>
      <nav className="nav__links" aria-label="Principal">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <a className="nav__cta" href="mailto:contato@ecosapiens.eco.br">
        Fale conosco
      </a>
    </header>
  )
}
