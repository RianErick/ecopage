import { capabilities } from '../data'

export default function Marquee() {
  return (
    <div className="capability-bar" aria-label="Capacidades técnicas">
      <span className="capability-bar__label">Capacidades</span>
      <div className="capability-bar__items">
        {capabilities.map((item) => <span key={item}>{item}</span>)}
      </div>
    </div>
  )
}
