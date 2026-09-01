import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Cursor() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const x = gsap.quickTo(el, 'left', { duration: 0.35, ease: 'power3.out' })
    const y = gsap.quickTo(el, 'top', { duration: 0.35, ease: 'power3.out' })

    const move = (e) => {
      el.classList.add('is-on')
      x(e.clientX)
      y(e.clientY)
    }

    const enter = () => el.classList.add('is-hover')
    const leave = () => el.classList.remove('is-hover')

    window.addEventListener('pointermove', move)
    document.querySelectorAll('a, button').forEach((node) => {
      node.addEventListener('pointerenter', enter)
      node.addEventListener('pointerleave', leave)
    })

    return () => {
      window.removeEventListener('pointermove', move)
    }
  }, [])

  return <div className="cursor" ref={ref} />
}
