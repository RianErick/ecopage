import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { marquee } from '../data'

export default function Marquee() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      if (reduced) return
      const track = root.current.querySelector('.marquee__track')
      gsap.to(track, {
        xPercent: -50,
        duration: 28,
        ease: 'none',
        repeat: -1,
      })
    }, root)

    return () => ctx.revert()
  }, [])

  const items = [...marquee, ...marquee]

  return (
    <div className="marquee" ref={root} aria-hidden="true">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span className="marquee__item" key={`${item}-${i}`}>
            {item}
            <span className="marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
