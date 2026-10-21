const checks = [
  'Detecção de mudança e supressão vegetal',
  'Uso do solo, plantio e vegetação nativa',
  'APP estimada e Reserva Legal',
  'CAR, embargos, autos e autorizações',
  'PMFS, POA e áreas ambientalmente sensíveis',
  'Coordenadas e roteiro para validação em campo',
]

const sources = ['Sentinel-1', 'Sentinel-2', 'PRODES', 'MapBiomas', 'SICAR', 'Ibama', 'MMA', 'INCRA']

export default function ProductShowcase() {
  return (
    <section className="products" id="produtos">
      <div className="shell">
        <div className="products__head">
          <div>
            <p className="section-index">06 / Produto Ecosapiens</p>
            <h2>Relatório Ambiental Situacional</h2>
          </div>
          <div>
            <p className="products__lead">
              Transformamos a obrigação de monitorar em um processo técnico,
              rastreável e pronto para orientar decisões.
            </p>
            <p>
              O produto combina imagens ópticas e de radar com bases ambientais e
              fundiárias para localizar mudanças, medir áreas, verificar contexto
              regulatório e indicar o próximo passo.
            </p>
          </div>
        </div>

        <div className="product-demo">
          <div className="product-demo__pages" aria-label="Páginas de exemplo do relatório Ecosapiens">
            <figure className="report-page report-page--cover">
              <img src="/images/produto-relatorio-capa.webp" alt="Capa de um Relatório Ambiental Situacional da Ecosapiens" loading="lazy" decoding="async" />
            </figure>
            <figure className="report-page report-page--map">
              <img src="/images/produto-relatorio-mapa.webp" alt="Página do relatório com mapa de mudanças ambientais detectadas" loading="lazy" decoding="async" />
            </figure>
            <figure className="report-page report-page--summary">
              <img src="/images/produto-relatorio-sintese.webp" alt="Página de síntese final do relatório com recomendações" loading="lazy" decoding="async" />
            </figure>
          </div>

          <div className="product-demo__content">
            <span className="product-label">Produto aplicado · amostra real</span>
            <h3>Da imagem bruta ao dossiê que explica o que aconteceu.</h3>
            <ul className="product-checks">
              {checks.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="product-sources" aria-label="Principais fontes de dados">
              {sources.map((source) => <span key={source}>{source}</span>)}
            </div>
          </div>
        </div>

        <div className="product-outcome">
          <div>
            <span>O problema</span>
            <h3>Dados dispersos, imagens difíceis de interpretar e evidências sem padrão.</h3>
          </div>
          <div className="product-outcome__arrow" aria-hidden="true">→</div>
          <div>
            <span>A Ecosapiens resolve</span>
            <h3>Uma análise reproduzível, documentada e pronta para fiscalização e decisão.</h3>
          </div>
        </div>

        <div className="product-proof">
          <div><strong>Óptico + radar</strong><span>Monitoramento mesmo com nuvens ou vegetação sem folhas</span></div>
          <div><strong>Mapa + coordenadas</strong><span>Do alerta remoto à vistoria direcionada em campo</span></div>
          <div><strong>Método + fontes</strong><span>Evidência verificável e passível de atualização</span></div>
        </div>

        <p className="products__note">
          O relatório é um levantamento técnico situacional. Não substitui vistoria, laudo pericial,
          parecer jurídico ou decisão da instituição responsável quando esses elementos forem exigidos.
        </p>

        <a className="product-map-cta" href="#mapa-multicriterio">
          <span>
            <small>Novo produto demonstrável</small>
            <strong>Explorar o Mapa Multicritério de Fortaleza</strong>
          </span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
