import { servicosPodologia } from '../data/siteData.js';
import ServiceCard from './ServiceCard.jsx';
import './Podology.css';

export default function Podology() {
  return (
    <section id="podologia" className="podology">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Área principal</span>
          <h2>Podologia</h2>
          <p>
            Cuidados voltados à saúde e ao bem-estar dos pés, com atenção,
            higiene e técnica em cada etapa do atendimento.
          </p>
        </div>

        <div className="podology__grid">
          {servicosPodologia.map((servico) => (
            <ServiceCard key={servico.id} {...servico} />
          ))}
        </div>
      </div>
    </section>
  );
}
