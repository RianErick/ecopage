import { useEffect, useState } from 'react'
import Logo from './Logo'
import { navLinks } from '../data'

export default function Nav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const update = () => setSolid(window.scrollY > 24)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <header className={`nav${solid ? ' is-solid' : ''}`}>
      <a className="nav__logo" href="#topo" aria-label="Ecosapiens — início">
        <Logo />
        <span><strong>Ecosapiens</strong><small>Inteligência ambiental</small></span>
      </a>
      <nav className="nav__links" aria-label="Navegação principal">
        {navLinks.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
      </nav>
      <a className="button button--small" href="#contato">Falar com a Ecosapiens</a>
    </header>
  )
}
