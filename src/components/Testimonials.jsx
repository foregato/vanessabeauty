import { depoimentosPlaceholder } from '../data/siteData.js';
import './Testimonials.css';

export default function Testimonials() {
  return (
    <section className="testimonials bg-light">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Depoimentos</span>
          <h2>O que dizem sobre nós</h2>
        </div>

        <div className="testimonials__grid">
          {depoimentosPlaceholder.map((n) => (
            <div className="testimonial-card fade-in" key={n}>
              <p>"Depoimento de cliente — substituir posteriormente."</p>
              <span className="testimonial-card__name">Nome do cliente</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
