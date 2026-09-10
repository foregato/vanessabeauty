import { empresa } from '../data/siteData.js';
import './About.css';

// Texto institucional genérico — SUBSTITUIR pelo texto real da empresa.
export default function About() {
  return (
    <section id="sobre" className="about bg-light">
      <div className="container about__inner">
        <div className="about__image fade-in">
          <img
            src="/images/sobre-placeholder.svg"
            alt="Equipe e ambiente do Vanessa Beauty Spa — substituir imagem"
            loading="lazy"
          />
        </div>

        <div className="about__content fade-in">
          <span className="eyebrow">Sobre nós</span>
          <h2>Sobre a {empresa.nome}</h2>
          <p>
            {/* TEXTO EDITÁVEL — substituir por informações reais da empresa */}
            A {empresa.nome} é dedicada ao cuidado e ao bem-estar de cada cliente,
            unindo técnica, higiene e atenção aos detalhes em cada atendimento.
            Nosso espaço foi pensado para proporcionar conforto e uma experiência
            completa de beleza e saúde.
          </p>
          <ul className="about__highlights">
            <li>Atendimento cuidadoso e individualizado</li>
            <li>Ambiente limpo, seguro e acolhedor</li>
            <li>Foco em bem-estar e resultados duradouros</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
