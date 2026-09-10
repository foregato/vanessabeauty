import { contato } from '../data/siteData.js';
import Icon from './Icon.jsx';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Contato</span>
          <h2>Fale conosco</h2>
        </div>

        <div className="contact__inner">
          <ul className="contact__list">
            <li><strong>WhatsApp:</strong> {contato.whatsapp}</li>
            <li><strong>Telefone:</strong> {contato.telefone}</li>
            <li><strong>Endereço:</strong> {contato.endereco}</li>
            <li><strong>Horário de atendimento:</strong> {contato.horario}</li>
            <li><strong>Instagram:</strong> {contato.instagram}</li>
          </ul>

          <a href={contato.whatsappLink} className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={20} />
            Falar no WhatsApp
          </a>

          <div className="contact__map">
            {contato.mapsEmbedUrl ? (
              <iframe
                title="Localização"
                src={contato.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="contact__map-placeholder">
                Espaço reservado para o mapa do Google Maps.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
