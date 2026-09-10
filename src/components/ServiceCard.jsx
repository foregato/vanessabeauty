import Icon from './Icon.jsx';
import './ServiceCard.css';

export default function ServiceCard({ nome, descricao, preco, icone }) {
  return (
    <article className="service-card fade-in">
      <div className="service-card__icon">
        <Icon name={icone} size={28} />
      </div>
      <h3>{nome}</h3>
      <p>{descricao}</p>
      <div className="service-card__footer">
        <span className="service-card__price">{preco}</span>
        <a href="#agendamento" className="btn btn-outline">Agendar</a>
      </div>
    </article>
  );
}
