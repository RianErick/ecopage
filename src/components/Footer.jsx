import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__brand"><Logo /><div><strong>Ecosapiens</strong><span>Inteligência ambiental</span></div></div>
        <p>GovTech ambiental · evidência, segurança e rastreabilidade.</p>
        <div className="footer__meta"><span>Fortaleza · CE · Brasil</span><span>© {new Date().getFullYear()} Ecosapiens</span></div>
      </div>
    </footer>
  )
}
