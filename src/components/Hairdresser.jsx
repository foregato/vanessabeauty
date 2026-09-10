import './Hairdresser.css';

// Seção preparada para receber os serviços reais de cabeleireira futuramente.
export default function Hairdresser() {
  return (
    <section id="cabeleireira" className="hairdresser bg-mint">
      <div className="container hairdresser__inner">
        <div className="hairdresser__content fade-in">
          <span className="eyebrow">Área secundária</span>
          <h2>Cabeleireira</h2>
          <p>
            {/* TEXTO EDITÁVEL — substituir por descrição real dos serviços de cabeleireira */}
            Em breve, esta área contará com o catálogo completo de serviços de
            cabeleireira da {' '}
            <strong>Vanessa Beauty Spa</strong>, mantendo o mesmo padrão de
            cuidado e excelência oferecido na podologia.
          </p>
          <a href="#agendamento" className="btn btn-primary">Agendar</a>
        </div>

        <div className="hairdresser__image fade-in">
          <img
            src="/images/cabeleireira-placeholder.svg"
            alt="Salão de beleza — substituir imagem"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
