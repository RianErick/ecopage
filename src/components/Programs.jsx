export default function Programs() {
  return (
    <section className="programs" id="ecossistema">
      <div className="shell">
        <div className="programs__copy">
          <p className="section-index">10 / Ecossistema de inovação</p>
          <h2>Credenciais públicas e conexões que geram impacto.</h2>
          <p>
            A Ecosapiens atua ao lado do ecossistema público de inovação para
            transformar ciência, dados territoriais e tecnologia em soluções aplicáveis.
          </p>
        </div>

        <div className="public-partnerships">
          <article className="public-partnership public-partnership--fortaleza">
            <div className="public-partnership__topline">
              <span>Parceria de inovação</span>
              <span>Fortaleza · CE</span>
            </div>
            <div className="public-partnership__logo public-partnership__logo--fortaleza">
              <img src="/partners/prefeitura-fortaleza.png" alt="Prefeitura de Fortaleza" />
            </div>
            <div className="public-partnership__content">
              <p className="public-partnership__result">2º lugar · solução pré-selecionada</p>
              <h3>Desafio InovaVerde Fortaleza</h3>
              <p>
                A plataforma Ecosapiens foi pré-selecionada para a fase de aceleração
                do CPSI 11518, conectando inteligência territorial, biorretenção pluvial
                e manutenção da cobertura vegetal em áreas urbanas vulneráveis.
              </p>
              <div className="public-partnership__meta">
                <span>CPSI 11518</span>
                <span>CITINOVA</span>
              </div>
              <a href="https://compras.sepog.fortaleza.ce.gov.br/publico/detalhe-licitacao.asp?fonte=Novo&id=3969" target="_blank" rel="noreferrer">
                Ver resultado oficial <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>

          <article className="public-partnership public-partnership--corredores">
            <div className="public-partnership__topline">
              <span>Participante · ciclo 2026</span>
              <span>Governo do Ceará</span>
            </div>
            <div className="public-partnership__logo public-partnership__logo--corredores">
              <img src="/partners/corredores-digitais.png" alt="Programa Corredores Digitais" />
            </div>
            <div className="public-partnership__content">
              <p className="public-partnership__result">Inovação e crescimento</p>
              <h3>Corredores Digitais</h3>
              <p>
                A Ecosapiens participa do hub de inovação do Governo do Ceará,
                integrando uma rede que apoia novos negócios, startups e soluções
                tecnológicas com potencial de impacto no território.
              </p>
              <div className="public-partnership__meta">
                <span>SECITECE</span>
                <span>Ecossistema estadual</span>
              </div>
              <a href="https://www.sct.ce.gov.br/2026/05/18/secitece-lanca-edital-do-corredores-digitais-para-novos-projetos-inovadores-e-startups-em-crescimento/" target="_blank" rel="noreferrer">
                Conhecer o programa <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        </div>

        <article className="haia-card">
          <div className="haia-card__identity">
            <span className="status-badge">Ciclo 2026 · inscrições encerradas</span>
            <p className="haia-card__kicker">Hub de Aceleração para Incubadoras e Aceleradoras</p>
            <h3>HA.<em>IA</em> <span>Deep Techs</span></h3>
            <p>
              Programa do VIRTUS-CC em parceria com a Anprotec para fortalecer
              ambientes de inovação e startups de base científica e tecnológica.
            </p>
          </div>
          <div className="haia-card__details">
            <img src="/partners/virtus.png" alt="VIRTUS — CEEI UFCG" />
            <dl>
              <div><dt>Inscrições</dt><dd>Encerradas em 7 de junho de 2026</dd></div>
              <div><dt>Etapa atual</dt><dd>Onboarding iniciado em julho de 2026</dd></div>
              <div><dt>Realização</dt><dd>VIRTUS-CC · parceria institucional Anprotec</dd></div>
            </dl>
            <a href="https://anprotec.org.br/site/2026/07/ha-ia-deep-tech-2026-inicia-atividades-com-onboarding-das-incubadoras-selecionadas/" target="_blank" rel="noreferrer">
              Conhecer o programa <span aria-hidden="true">↗</span>
            </a>
          </div>
        </article>

        <div className="institutional-network">
          <div className="institutional-network__head">
            <p>Rede institucional</p>
            <span>Conexões que apoiam inovação, empreendedorismo e impacto público.</span>
          </div>
          <div className="institutional-network__logos" aria-label="Instituições do ecossistema">
            <a href="https://www.virtus.ufcg.edu.br/" target="_blank" rel="noreferrer" aria-label="Visitar VIRTUS UFCG">
              <img src="/partners/virtus.png" alt="VIRTUS — CEEI UFCG" />
            </a>
            <a href="https://portal.ifce.edu.br/campus/fortaleza/" target="_blank" rel="noreferrer" aria-label="Visitar IFCE Campus Fortaleza">
              <img src="/partners/ifce-fortaleza.png" alt="Instituto Federal do Ceará — Campus Fortaleza" />
            </a>
            <a className="institutional-logo--sebrae" href="https://sebrae.com.br/" target="_blank" rel="noreferrer" aria-label="Visitar Sebrae">
              <img src="/partners/sebrae.svg" alt="Sebrae" />
            </a>
            <a href="https://citnova.fortaleza.ce.gov.br/" target="_blank" rel="noreferrer" aria-label="Visitar CITINOVA">
              <img src="/partners/citinova.png" alt="CITINOVA — Fundação de Ciência, Tecnologia e Inovação de Fortaleza" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
