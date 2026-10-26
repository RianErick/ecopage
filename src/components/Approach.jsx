import { approach } from '../data'

export default function Approach() {
  return (
    <section className="method" id="metodo">
      <div className="shell">
        <div className="section-head">
          <div><p className="section-index">07 / Método</p><h2>Rastreável da pergunta à entrega.</h2></div>
          <p>Sem caixa-preta: critérios, fontes e limites são documentados para que a análise possa ser compreendida, auditada e atualizada.</p>
        </div>
        <ol className="method__steps">
          {approach.map((item) => (
            <li key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>
          ))}
        </ol>
      </div>
    </section>
  )
}
