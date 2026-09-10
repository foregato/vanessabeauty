import logo from '../assets/logo.jpeg';
import { empresa, contato, navLinks } from '../data/siteData.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt={empresa.logoAlt} />
          <p>{empresa.nome}</p>
        </div>

        <nav aria-label="Links do rodapé">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="footer__social">
          <a href={contato.instagramLink} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={contato.whatsappLink} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} {empresa.nome}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
