import { galeria } from '../data/siteData.js';
import './Gallery.css';

export default function Gallery() {
  return (
    <section id="galeria" className="gallery">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Galeria</span>
          <h2>Nosso espaço</h2>
        </div>

        <div className="gallery__grid">
          {galeria.map((img, i) => (
            <div className="gallery__item fade-in" key={img.src}>
              <img src={img.src} alt={img.alt} loading={i < 2 ? 'eager' : 'lazy'} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
