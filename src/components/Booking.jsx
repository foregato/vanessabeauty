import { contato } from '../data/siteData.js';
import './Booking.css';

export default function Booking() {
  return (
    <section id="agendamento" className="booking">
      <div className="container booking__inner fade-in">
        <h2>Cuide de você.</h2>
        <p>Entre em contato e agende seu horário na Vanessa Beauty Spa.</p>
        {/* O link abaixo deve ser atualizado com o WhatsApp real em src/data/siteData.js */}
        <a href={contato.whatsappLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Agendar atendimento
        </a>
      </div>
    </section>
  );
}
