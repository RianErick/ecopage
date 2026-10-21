import { sectors } from '../data'

export default function Technologies() {
  return (
    <section className="sectors" id="setores">
      <div className="shell">
        <div className="section-head section-head--light">
          <div><p className="section-index">04 / Para quem</p><h2>Uma base técnica. Duas frentes de decisão.</h2></div>
          <p>A mesma inteligência territorial responde a necessidades diferentes — da política pública à gestão de risco socioambiental.</p>
        </div>
        <div className="sectors__grid">
          {sectors.map((sector) => (
            <article className="sector-card" key={sector.code}>
              <span className="sector-card__code">{sector.code}</span>
              <h3>{sector.title}</h3>
              <p>{sector.text}</p>
              <ul>{sector.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
