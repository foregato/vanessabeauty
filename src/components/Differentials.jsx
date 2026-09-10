import { diferenciais } from '../data/siteData.js';
import Icon from './Icon.jsx';
import './Differentials.css';

export default function Differentials() {
  return (
    <section className="differentials bg-light">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Diferenciais</span>
          <h2>Por que escolher a Vanessa Beauty Spa</h2>
        </div>

        <div className="differentials__grid">
          {diferenciais.map((item) => (
            <div className="differentials__item fade-in" key={item.titulo}>
              <Icon name={item.icone} size={26} />
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
