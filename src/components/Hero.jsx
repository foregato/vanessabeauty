import logo from '../assets/logo.png';
import { empresa } from '../data/siteData.js';
import './Hero.css';

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__inner">
        <div className="hero__content fade-in">
          <img src={logo} alt={empresa.logoAlt} className="hero__logo" />
          <h1>Cuidados que unem beleza, saúde e bem-estar.</h1>
          <p>
            Tratamentos especializados em podologia e cuidados capilares, com atenção
            aos detalhes e um ambiente pensado para o seu conforto.
          </p>
          <div className="hero__actions">
            <a href="#agendamento" className="btn btn-primary">Agendar atendimento</a>
            <a href="#podologia" className="btn btn-outline">Conhecer serviços</a>
          </div>
        </div>

        <div className="hero__image fade-in">
          {/* Placeholder — substitua por uma imagem real do ambiente */}
          <img
            src="/images/hero-placeholder.svg"
            alt="Ambiente do Vanessa Beauty Spa — substituir imagem"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
