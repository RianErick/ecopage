export const navLinks = [
  { href: '#solucoes', label: 'Soluções' },
  { href: '#seguranca', label: 'Segurança' },
  { href: '#credito-rural', label: 'Crédito rural' },
  { href: '#mapa-multicriterio', label: 'Mapa multicritério' },
  { href: '#metodo', label: 'Método' },
  { href: '#ecossistema', label: 'Ecossistema' },
]

export const capabilities = [
  'Sensoriamento remoto',
  'Geoprocessamento',
  'Modelagem ambiental',
  'Drones e satélites',
  'Inteligência territorial',
  'Dossiês técnicos',
]

export const solutions = [
  {
    index: '01',
    tag: 'Cidades',
    title: 'Arborização e conforto urbano',
    text: 'Priorização de áreas para plantio com base em cobertura vegetal, ilhas de calor, circulação, densidade urbana e indicadores de qualidade do ar. O resultado orienta espécies, locais e fases de implantação.',
  },
  {
    index: '02',
    tag: 'Crédito rural',
    title: 'Monitoramento de áreas financiadas',
    text: 'Acompanhamento da propriedade por imagens de satélite e drone para verificar mudanças no uso do solo, supressão vegetal e implantação de plantio ou restauração acordada no financiamento.',
  },
  {
    index: '03',
    tag: 'Território',
    title: 'Detecção de mudanças ambientais',
    text: 'Comparação temporal de imagens para identificar desmatamento, degradação, ocupações e alterações relevantes antes que o risco se transforme em passivo.',
  },
  {
    index: '04',
    tag: 'Infraestrutura verde',
    title: 'Jardins e soluções baseadas na natureza',
    text: 'Planejamento de jardins de chuva, corredores verdes, áreas de infiltração e paisagismo funcional considerando água, solo, clima, circulação e manutenção.',
  },
  {
    index: '05',
    tag: 'Evidência',
    title: 'Dossiês e diligência socioambiental',
    text: 'Organização de mapas, séries históricas, registros de campo, fontes e critérios de análise em documentos claros para decisão, auditoria e prestação de contas.',
  },
  {
    index: '06',
    tag: 'Operação',
    title: 'Levantamentos com drones',
    text: 'Planejamento de voo, captura e processamento de imagens de alta resolução para diagnóstico, medição, fiscalização e acompanhamento de intervenções.',
  },
]

export const sectors = [
  {
    code: '01 / Gestão pública',
    title: 'Prefeituras que precisam transformar dados em prioridade de investimento.',
    text: 'Apoiamos secretarias de meio ambiente, planejamento, infraestrutura e saúde a localizar problemas, comparar cenários e justificar onde agir primeiro.',
    items: [
      'Plano de arborização orientado por evidências',
      'Mapeamento de ilhas de calor e áreas vulneráveis',
      'Infraestrutura verde e drenagem urbana',
      'Fiscalização e acompanhamento territorial',
    ],
  },
  {
    code: '02 / Setor financeiro',
    title: 'Bancos que precisam conhecer o risco ambiental por trás de cada operação.',
    text: 'Apoiamos crédito, risco, compliance e sustentabilidade com evidências geoespaciais para avaliar propriedades e acompanhar obrigações ao longo do contrato.',
    items: [
      'Triagem socioambiental de propriedades',
      'Monitoramento de garantias e áreas financiadas',
      'Alertas de mudança no uso do solo',
      'Dossiê técnico para análise e auditoria',
    ],
  },
]

export const approach = [
  {
    step: '01',
    title: 'Definir a decisão',
    text: 'Começamos pela pergunta que a instituição precisa responder, pelos critérios aplicáveis e pelo nível de evidência necessário.',
  },
  {
    step: '02',
    title: 'Integrar os dados',
    text: 'Reunimos imagens, bases públicas, levantamentos de campo e informações do cliente em uma leitura territorial única.',
  },
  {
    step: '03',
    title: 'Calcular e comparar',
    text: 'Aplicamos análise espacial e modelos multicritério para localizar prioridades, mudanças, riscos e oportunidades.',
  },
  {
    step: '04',
    title: 'Entregar evidência',
    text: 'Traduzimos o resultado em mapa, painel, plano ou dossiê com fontes e critérios rastreáveis para sustentar a decisão.',
  },
]

export const scenarios = [
  {
    eyebrow: 'Cenário de aplicação · Prefeitura',
    question: 'Onde plantar árvores para gerar maior benefício urbano?',
    context: 'Cruzamento de cobertura vegetal, calor, população, circulação, equipamentos públicos e condições de plantio.',
    result: 'Mapa de prioridade por trecho, critérios de implantação e sequência recomendada de investimento.',
    signal: 'Prioridade territorial',
    image: '/images/territorio-urbano.webp',
    imageAlt: 'Vista aérea de área urbana com camadas de análise territorial e zonas prioritárias em laranja',
  },
  {
    eyebrow: 'Cenário de aplicação · Banco',
    question: 'A área financiada cumpriu o compromisso ambiental?',
    context: 'Comparação de imagens ao longo do contrato, limites da propriedade e evidências fornecidas pelo tomador.',
    result: 'Linha do tempo das mudanças, alertas objetivos e dossiê técnico para a equipe de risco ou compliance.',
    signal: 'Evidência temporal',
    image: '/images/monitoramento-rural.webp',
    imageAlt: 'Vista aérea de propriedade rural com limites geográficos e áreas de atenção ambiental destacadas',
  },
]

export const deliverables = [
  { code: 'MAP', title: 'Mapas de decisão', text: 'Camadas, prioridades e recortes territoriais prontos para orientar equipes e investimentos.' },
  { code: 'DSH', title: 'Painéis e indicadores', text: 'Visão executiva para acompanhar áreas, ocorrências, evolução e pontos que exigem atenção.' },
  { code: 'DOS', title: 'Dossiês técnicos', text: 'Documento consolidado com metodologia, fontes, mapas, cronologia e evidências da análise.' },
  { code: 'MON', title: 'Monitoramento contínuo', text: 'Rotina de atualização e alertas conforme a frequência e o risco de cada operação.' },
]
