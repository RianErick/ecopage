const principles = [
  {
    code: '01',
    title: 'Rastreabilidade',
    text: 'Fontes, critérios, datas e limites da análise acompanham cada entrega para facilitar validação e auditoria.',
  },
  {
    code: '02',
    title: 'Proteção de dados',
    text: 'Coleta mínima, acesso controlado e tratamento responsável orientam o desenho de cada projeto.',
  },
  {
    code: '03',
    title: 'Transparência técnica',
    text: 'Metodologia e premissas são documentadas em linguagem clara, sem decisões escondidas em uma caixa-preta.',
  },
  {
    code: '04',
    title: 'Continuidade',
    text: 'Entregáveis organizados e atualizáveis reduzem dependência e preservam a memória técnica da instituição.',
  },
]

export default function Trust() {
  return (
    <section className="trust" id="seguranca">
      <div className="shell">
        <div className="section-head">
          <div>
            <p className="section-index">02 / Confiança institucional</p>
            <h2>Segurança também é saber como cada resposta foi construída.</h2>
          </div>
          <p>Projetos orientados por boas práticas de governança, privacidade e prestação de contas — do dado bruto à decisão pública.</p>
        </div>
        <div className="trust__grid">
          {principles.map((item) => (
            <article className="trust-card" key={item.code}>
              <span>{item.code}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <p className="trust__note">
          Princípios de projeto alinhados à LGPD e às necessidades de transparência do setor público.
          O escopo de segurança é definido conforme os dados e requisitos de cada contratação.
        </p>
      </div>
    </section>
  )
}
