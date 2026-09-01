import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import Logo from './Logo'

export default function Loader({ onReveal, onDone }) {
  const root = useRef(null)

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) {
        onReveal()
        onDone()
        return
      }

      const tl = gsap.timeline({
        defaults: { ease: 'power3.inOut' },
        onComplete: onDone,
      })

      tl.from('.loader__mark', { scale: 0.6, opacity: 0, duration: 0.7 })
        .from('.loader__word', { y: 18, opacity: 0, duration: 0.55 }, '-=0.35')
        .to('.loader__bar span', { width: '100%', duration: 0.9, ease: 'power2.inOut' })
        .add(onReveal)
        .to(root.current, { yPercent: -100, duration: 0.9, delay: 0.05 })
    }, root)

    return () => ctx.revert()
  }, [onReveal, onDone])

  return (
    <div className="loader" ref={root} aria-hidden="true">
      <div className="loader__inner">
        <Logo className="loader__mark" />
        <p className="loader__word">Ecosapiens</p>
        <div className="loader__bar">
          <span />
        </div>
      </div>
    </div>
  )
}
