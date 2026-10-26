import { deliverables, scenarios } from '../data'

export default function Projects() {
  return (
    <>
      <section className="scenarios">
        <div className="shell">
          <div className="section-head">
            <div><p className="section-index">08 / Na prática</p><h2>Perguntas complexas. Respostas utilizáveis.</h2></div>
            <p>Exemplos de como um desafio institucional é estruturado e convertido em decisão.</p>
          </div>
          <div className="scenarios__grid">
            {scenarios.map((item, index) => (
              <article className="scenario-card" key={item.question}>
                <div className="scenario-card__visual">
                  <img src={item.image} alt={item.imageAlt} loading="lazy" decoding="async" />
                  <span aria-hidden="true">0{index + 1}</span>
                  <small>{item.signal}</small>
                </div>
                <div className="scenario-card__content">
                  <p className="scenario-card__eyebrow">{item.eyebrow}</p>
                  <h3>{item.question}</h3>
                  <dl>
                    <div><dt>Análise</dt><dd>{item.context}</dd></div>
                    <div><dt>Saída</dt><dd>{item.result}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="deliverables" id="entregaveis">
        <div className="shell">
          <div className="section-head section-head--light">
            <div><p className="section-index">09 / Entregáveis</p><h2>Informação no formato certo para decidir.</h2></div>
            <p>Cada entrega é dimensionada para o fluxo real da equipe e para o nível de evidência exigido.</p>
          </div>
          <div className="deliverables__grid">
            {deliverables.map((item) => (
              <article key={item.code}><span>{item.code}</span><h3>{item.title}</h3><p>{item.text}</p></article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
