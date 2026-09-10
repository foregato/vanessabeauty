import { useState } from 'react';
import { empresa, navLinks } from '../data/siteData.js';
import logo from '../assets/logo.jpeg';
import Icon from './Icon.jsx';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#inicio" className="header__logo" aria-label={empresa.nome}>
          <img src={logo} alt={empresa.logoAlt} />
        </a>

        <nav className={`header__nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navegação principal">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#agendamento" className="btn btn-primary header__cta" onClick={() => setMenuOpen(false)}>
            Agendar atendimento
          </a>
        </nav>

        <button
          className="header__toggle"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}
