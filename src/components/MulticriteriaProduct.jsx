import { useState } from 'react'

const maps = [
  {
    id: 'prioridade',
    label: 'Prioridade',
    eyebrow: 'Índice multicritério · versão 5',
    title: 'Prioridade para arborização',
    text: 'Cada assentamento recebe um score comparável a partir de seis critérios. Tons mais intensos indicam maior prioridade relativa para aprofundamento técnico.',
    image: '/maps/prioridade-arborizacao.webp',
    alt: 'Mapa de Fortaleza com assentamentos classificados por prioridade para arborização',
    metric: '857',
    metricLabel: 'assentamentos avaliados',
    source: 'Fortaleza em Mapas · Ipplan Fortaleza',
    legend: [['Baixa', '#2b8c5a'], ['Média', '#f7d35c'], ['Alta', '#a50f15']],
  },
  {
    id: 'calor',
    label: 'Calor',
    eyebrow: 'Landsat 8/9 · 30 metros',
    title: 'Temperatura da superfície',
    text: 'A camada térmica mostra onde a superfície urbana acumula mais calor na estação seca e adiciona evidência climática ao ranking territorial.',
    image: '/maps/calor-superficie.webp',
    alt: 'Mapa de temperatura da superfície de Fortaleza derivado de imagens Landsat',
    metric: '38,2 °C',
    metricLabel: 'média espacial da cidade',
    source: '53 cenas · jul/2024 a set/2026',
    legend: [['Menor', '#fff4c2'], ['Intermediária', '#f4843c'], ['Maior', '#4a0e4e']],
  },
  {
    id: '1985',
    label: 'Cobertura 1985',
    eyebrow: 'MapBiomas · série histórica',
    title: 'Cobertura do solo em 1985',
    text: 'O recorte histórico permite observar a estrutura territorial antes da expansão urbana mais recente e quantificar a mudança de cobertura.',
    image: '/maps/cobertura-1985.webp',
    alt: 'Mapa de cobertura e uso do solo de Fortaleza em 1985',
    metric: '32,81%',
    metricLabel: 'vegetação nativa',
    source: 'MapBiomas · Coleção 9',
    legend: [['Vegetação', '#3e8e5a'], ['Urbano', '#8a8f99'], ['Água', '#6fa8dc']],
  },
  {
    id: '2023',
    label: 'Cobertura 2023',
    eyebrow: 'MapBiomas · série histórica',
    title: 'Cobertura do solo em 2023',
    text: 'A leitura recente evidencia a consolidação urbana e ajuda a localizar os territórios onde infraestrutura verde pode produzir maior benefício.',
    image: '/maps/cobertura-2023.webp',
    alt: 'Mapa de cobertura e uso do solo de Fortaleza em 2023',
    metric: '80,51%',
    metricLabel: 'área urbanizada',
    source: 'MapBiomas · Coleção 9',
    legend: [['Vegetação', '#3e8e5a'], ['Urbano', '#8a8f99'], ['Água', '#6fa8dc']],
  },
]

const ranking = [
  { name: 'Pantanal', district: 'Planalto Ayrton Senna', population: '17.646', density: '196,3', green: '0,13', lake: '26 m', temperature: '39,5 °C', complete: true, components: { density: .301, lake: .991, green: .981, soil: 1, area: .925, heat: .690 } },
  { name: 'Santa Elisa/Pirambu', district: 'Cristo Redentor/Pirambu', population: '21.716', density: '292,5', green: '0,53', lake: '0 m', temperature: '40,0 °C', complete: false, components: { density: .449, lake: 1, green: .933, soil: null, area: .764, heat: .795 } },
  { name: 'Beco da Samasa', district: 'Rodolfo Teófilo', population: '220', density: '615,5', green: '0,39', lake: '14 m', temperature: '39,8 °C', complete: false, components: { density: .945, lake: .995, green: .949, soil: null, area: .003, heat: .760 } },
  { name: 'Parque Alto Alegre', district: 'Canindezinho', population: '8.567', density: '107,6', green: '0,06', lake: '8 m', temperature: '39,9 °C', complete: false, components: { density: .165, lake: .997, green: .991, soil: null, area: .819, heat: .782 } },
  { name: 'Campo Real', district: 'Itaperi', population: '118', density: '271,0', green: '0,08', lake: '341 m', temperature: '41,6 °C', complete: true, components: { density: .416, lake: .878, green: .987, soil: 1, area: .004, heat: 1 } },
]

const weights = [
  { id: 'green', label: 'Déficit de verde', value: 21.25 },
  { id: 'lake', label: 'Proximidade de lagoa', value: 17 },
  { id: 'density', label: 'Densidade populacional', value: 17 },
  { id: 'soil', label: 'Viabilidade do solo', value: 17 },
  { id: 'heat', label: 'Calor da superfície', value: 15 },
  { id: 'area', label: 'Área do assentamento', value: 12.75 },
]

const defaultWeights = Object.fromEntries(weights.map((weight) => [weight.id, weight.value]))

export default function MulticriteriaProduct() {
  const [activeMapId, setActiveMapId] = useState('prioridade')
  const [activeName, setActiveName] = useState('Pantanal')
  const [weightValues, setWeightValues] = useState(defaultWeights)
  const activeMap = maps.find((map) => map.id === activeMapId) ?? maps[0]
  const calculatedRanking = ranking
    .map((item) => {
      const available = weights.filter(({ id }) => item.components[id] !== null)
      const availableWeight = available.reduce((sum, { id }) => sum + weightValues[id], 0)
      const weightedScore = available.reduce((sum, { id }) => sum + item.components[id] * weightValues[id], 0)
      return { ...item, calculatedScore: availableWeight ? weightedScore / availableWeight : 0 }
    })
    .sort((a, b) => b.calculatedScore - a.calculatedScore)
  const activeRank = calculatedRanking.findIndex((item) => item.name === activeName)
  const place = calculatedRanking[activeRank === -1 ? 0 : activeRank]
  const totalWeight = Object.values(weightValues).reduce((sum, value) => sum + value, 0)

  return (
    <div className="product-page product-page--embedded" id="mapa-multicriterio">
        <section className="map-product-hero map-product-hero--embedded">
          <div className="shell map-product-hero__inner">
            <div className="map-product-hero__copy">
              <span className="map-product-chip">Produto demonstrável · dados carregados</span>
              <p className="eyebrow">Mapa multicritério · Inteligência territorial urbana</p>
              <h1>Onde investir <em>primeiro</em>.</h1>
              <p className="map-product-hero__lead">
                Um produto de análise multicritério que transforma dados urbanos,
                ambientais e climáticos em prioridades territoriais explicáveis.
              </p>
              <div className="map-product-hero__actions">
                <a className="button" href="#mapas-interativos">Explorar os mapas <span aria-hidden="true">↓</span></a>
                <span>Exemplo carregado: Fortaleza · CE</span>
              </div>
            </div>

            <div className="map-product-hero__visual" aria-label="Prévia do mapa multicritério de Fortaleza">
              <div className="hero-map-frame">
                <img src="/maps/prioridade-arborizacao.webp" alt="Mapa de prioridades territoriais para arborização em Fortaleza" />
                <div className="hero-map-frame__status"><i /> Base processada · set/2026</div>
                <div className="hero-map-frame__metric"><strong>857</strong><span>territórios comparados</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="product-stats" aria-label="Dimensão da análise">
          <div className="shell product-stats__grid">
            <div><strong>857</strong><span>assentamentos</span></div>
            <div><strong>06</strong><span>critérios ponderados</span></div>
            <div><strong>715 mil</strong><span>pessoas estimadas na base</span></div>
            <div><strong>1985–2023</strong><span>série de uso do solo</span></div>
          </div>
        </section>

        <section className="map-explorer" id="mapas-interativos">
          <div className="shell">
            <div className="map-explorer__head">
              <div>
                <p className="section-index">01 / Mapas de demonstração</p>
                <h2>Veja o território por diferentes evidências.</h2>
              </div>
              <p>
                Quatro visualizações selecionadas do projeto original. As imagens foram
                otimizadas para a web e carregadas uma por vez para manter a página leve.
              </p>
            </div>

            <div className="map-tabs" role="tablist" aria-label="Camadas disponíveis">
              {maps.map((map) => (
                <button
                  key={map.id}
                  type="button"
                  role="tab"
                  aria-selected={activeMapId === map.id}
                  aria-controls="map-panel"
                  className={activeMapId === map.id ? 'is-active' : ''}
                  onClick={() => setActiveMapId(map.id)}
                >
                  {map.label}
                </button>
              ))}
            </div>

            <div className="map-panel" id="map-panel" role="tabpanel">
              <div className="map-panel__canvas">
                <img key={activeMap.image} src={activeMap.image} alt={activeMap.alt} decoding="async" />
                <div className="map-legend" aria-label={`Legenda: ${activeMap.title}`}>
                  {activeMap.legend.map(([label, color]) => (
                    <span key={label}><i style={{ background: color }} /> {label}</span>
                  ))}
                </div>
              </div>
              <div className="map-panel__content">
                <p className="eyebrow">{activeMap.eyebrow}</p>
                <h3>{activeMap.title}</h3>
                <p>{activeMap.text}</p>
                <div className="map-panel__metric">
                  <strong>{activeMap.metric}</strong>
                  <span>{activeMap.metricLabel}</span>
                </div>
                <small>Fonte: {activeMap.source}</small>
              </div>
            </div>
          </div>
        </section>

        <section className="ranking-demo" id="dados-exemplo">
          <div className="shell">
            <div className="ranking-demo__head">
              <div>
                <p className="section-index">02 / Dados de exemplo</p>
                <h2>Do mapa ao território que precisa de atenção.</h2>
              </div>
              <p>
                Selecione uma posição do ranking para ver os indicadores que sustentam
                a leitura. Este recorte usa os cinco primeiros resultados da rodada v5.
              </p>
            </div>

            <div className="ranking-workspace">
              <div className="ranking-list" aria-label="Primeiros territórios do ranking">
                {calculatedRanking.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    aria-pressed={place.name === item.name}
                    className={place.name === item.name ? 'is-active' : ''}
                    onClick={() => setActiveName(item.name)}
                  >
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <span><strong>{item.name}</strong><small>{item.district}</small></span>
                    <b>{item.calculatedScore.toFixed(4).replace('.', ',')}</b>
                  </button>
                ))}
              </div>

              <article className="territory-card" aria-live="polite">
                <div className="territory-card__head">
                  <span>Prioridade {String(activeRank + 1).padStart(2, '0')} na amostra</span>
                  <span className={place.complete ? 'data-complete' : 'data-partial'}>
                    {place.complete ? '6 critérios disponíveis' : '5 critérios · solo ausente'}
                  </span>
                </div>
                <h3>{place.name}</h3>
                <p>{place.district} · score recalculado <strong>{place.calculatedScore.toFixed(4).replace('.', ',')}</strong></p>
                <dl>
                  <div><dt>População estimada</dt><dd>{place.population}</dd></div>
                  <div><dt>Densidade</dt><dd>{place.density} hab/ha</dd></div>
                  <div><dt>Verde no raio</dt><dd>{place.green} m²/hab</dd></div>
                  <div><dt>Lagoa mais próxima</dt><dd>{place.lake}</dd></div>
                  <div><dt>Temperatura superficial</dt><dd>{place.temperature}</dd></div>
                </dl>
                <small>Estimativas para apoio à triagem. Não substituem validação de campo.</small>
              </article>
            </div>
          </div>
        </section>

        <section className="product-method" id="metodologia-mapa">
          <div className="shell product-method__grid">
            <div className="product-method__intro">
              <p className="section-index">03 / Método transparente</p>
              <h2>O score pode ser explicado, revisado e recalculado.</h2>
              <p>
                Os pesos abaixo são um ponto de partida técnico. Em um projeto contratado,
                eles são validados com a instituição responsável e ajustados ao objetivo da decisão.
              </p>
            </div>

            <div className="weight-list" aria-label="Pesos do índice multicritério">
              <div className="weight-list__status">
                <span>Simulador ativo</span>
                <strong>{totalWeight.toFixed(0)} pontos</strong>
                <button type="button" onClick={() => setWeightValues(defaultWeights)}>Restaurar pesos</button>
              </div>
              {weights.map(({ id, label }) => (
                <div className="weight-row" key={id}>
                  <div><label htmlFor={`weight-${id}`}>{label}</label><strong>{String(weightValues[id]).replace('.', ',')}%</strong></div>
                  <input
                    id={`weight-${id}`}
                    type="range"
                    min="0"
                    max="40"
                    step="1"
                    value={weightValues[id]}
                    onChange={(event) => setWeightValues((current) => ({ ...current, [id]: Number(event.target.value) }))}
                    aria-label={`Peso de ${label}`}
                  />
                </div>
              ))}
              <small>O ranking da amostra acima é recalculado em tempo real. Pesos ausentes são redistribuídos automaticamente.</small>
            </div>
          </div>

          <div className="shell methodology-flow">
            <article><span>01</span><h3>Integrar</h3><p>Bases públicas, imagens orbitais e dados da instituição em uma estrutura territorial única.</p></article>
            <article><span>02</span><h3>Qualificar</h3><p>Corrigir geometrias, padronizar projeções e registrar ausências sem inventar valores neutros.</p></article>
            <article><span>03</span><h3>Comparar</h3><p>Normalizar critérios, aplicar pesos acordados e calcular a prioridade relativa de cada área.</p></article>
            <article><span>04</span><h3>Decidir</h3><p>Entregar mapa, ranking, justificativa e recortes para vistoria, projeto e investimento público.</p></article>
          </div>
        </section>

        <section className="method-notes">
          <div className="shell method-notes__grid">
            <div>
              <p className="section-index">04 / Leitura responsável</p>
              <h2>Limites também fazem parte do produto.</h2>
            </div>
            <ul>
              <li><strong>Solo:</strong> 377 dos 857 assentamentos não têm essa informação; nesses casos, o peso é redistribuído entre os critérios disponíveis.</li>
              <li><strong>Calor:</strong> a camada representa temperatura da superfície por satélite, não temperatura do ar sentida por uma pessoa.</li>
              <li><strong>Prioridade:</strong> o índice apoia triagem e planejamento; a decisão final exige validação técnica, institucional e de campo.</li>
              <li><strong>Fonte cartográfica:</strong> Prefeitura Municipal de Fortaleza — Fortaleza em Mapas / Ipplan Fortaleza, com processamento Ecosapiens.</li>
            </ul>
          </div>
        </section>

        <section className="product-delivery">
          <div className="shell product-delivery__inner">
            <p className="eyebrow">Aplicação institucional</p>
            <h2>O mesmo método pode responder outras perguntas do território.</h2>
            <div className="product-delivery__items">
              <span>Arborização urbana</span>
              <span>Drenagem e jardins de chuva</span>
              <span>Risco climático</span>
              <span>Fiscalização ambiental</span>
              <span>Priorização de investimentos</span>
            </div>
          </div>
        </section>

    </div>
  )
}
