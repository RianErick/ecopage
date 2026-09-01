export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__row">
        <p>© {new Date().getFullYear()} Ecosapiens</p>
        <p>Soluções em sustentabilidade · Fortaleza, CE</p>
        <a href="https://ecosapiens.eco.br" target="_blank" rel="noreferrer">
          ecosapiens.eco.br
        </a>
      </div>
    </footer>
  )
}
