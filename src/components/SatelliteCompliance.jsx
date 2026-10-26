const services = [
  {
    code: '01',
    title: 'Triagem pré-contratação',
    text: 'Aptidão da área, declividade, degradação do solo, vegetação nativa e indícios de duplicidade de crédito.',
  },
  {
    code: '02',
    title: 'Monitoramento multitemporal',
    text: 'Comparação de imagens durante a operação para verificar atividade, calendário agrícola, área explorada e desenvolvimento do cultivo.',
  },
  {
    code: '03',
    title: 'Alertas territoriais',
    text: 'Sinais de sobreposição, mudança no uso do solo, condução inadequada ou possível aplicação divergente dos recursos.',
  },
  {
    code: '04',
    title: 'Dossiê auditável',
    text: 'Registro do satélite e sensor, datas, resoluções, bandas, metodologia, resultados e evidências de cada verificação.',
  },
]

export default function SatelliteCompliance() {
  return (
    <section className="satellite" id="credito-rural">
      <div className="shell">
        <div className="satellite__hero">
          <img
            src="/images/sensoriamento-satelite.webp"
            alt="Satélite de observação monitorando imóveis rurais com áreas de atenção destacadas"
            loading="lazy"
            decoding="async"
          />
          <div className="satellite__hero-copy">
            <p>Sensoriamento remoto · crédito rural</p>
            <h2>Do espaço à decisão, com evidência verificável.</h2>
          </div>
        </div>

        <div className="satellite__intro">
          <div>
            <p className="section-index">05 / Serviços de satélite</p>
            <h2>Apoio técnico à Resolução CMN nº 5.267/2025.</h2>
          </div>
          <div className="regulation-card">
            <span>Em vigor desde 1º de março de 2026</span>
            <p>
              A resolução tornou obrigatório o sensoriamento remoto em operações de
              custeio e investimento contratadas a partir dessa data e com área total
              superior a 300 hectares.
            </p>
            <a href="https://www.bcb.gov.br/estabilidadefinanceira/exibenormativo?numero=5267&amp;tipo=Resolu%C3%A7%C3%A3o+CMN" target="_blank" rel="noreferrer">
              Consultar norma no Banco Central <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="satellite__services">
          {services.map((service) => (
            <article key={service.code}>
              <span>{service.code}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>

        <div className="satellite__decision">
          <div className="satellite__decision-image">
            <img
              src="/images/decisao-credito-rural.webp"
              alt="Analista compara imagens de satélite para apoiar uma decisão de crédito rural"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="satellite__decision-copy">
            <p className="eyebrow">Evidência para decidir</p>
            <h3>Uma operação acompanhada antes, durante e até a liquidação.</h3>
            <ul>
              <li>Imagens com qualidade adequada à finalidade da análise</li>
              <li>Critérios consistentes, verificáveis e documentados</li>
              <li>Histórico de verificações e alertas por empreendimento</li>
              <li>Relatórios para risco, compliance e fiscalização</li>
            </ul>
          </div>
        </div>

        <p className="satellite__disclaimer">
          A Ecosapiens executa análises especializadas e produz evidências para apoiar o atendimento
          à norma. A responsabilidade integral pelo monitoramento, pela fiscalização e pela conformidade
          da operação permanece com a instituição financeira, conforme a própria Resolução CMN nº 5.267/2025.
        </p>
      </div>
    </section>
  )
}
