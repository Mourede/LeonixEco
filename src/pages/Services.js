// src/pages/Services.js
import React, { useMemo, useState } from 'react';
import { useTranslation } from '../i18n';
import './Services.css';

// Images (PNG, selon tes fichiers)
import residentielImg from '../assets/services/residentiel.png';
import commercialImg from '../assets/services/commercial.png';
import industrielImg from '../assets/services/industriel.png';
import recyclageImg from '../assets/services/recyclage.png';

/**
 * Page Services : grilles horizontales + modale au clic (bilingue)
 * Les contenus (titres/descriptions/détails) viennent de i18n: t('services.items')
 */
export default function Services() {
  const { t } = useTranslation();

  // Récupère les items traduits (FR/EN). Fallback = []
  const items = t('services.items') || [];

  // Associe tes images aux items, selon un "key" s'il existe, sinon par position
  const imagesByKey = {
    residential: residentielImg,
    commercial: commercialImg,
    industrial: industrielImg,
    recycle: recyclageImg,
  };

  // Normalise la data pour toujours avoir { key, title, desc, details[], img }
  const data = useMemo(() => {
    return items.map((raw, idx) => {
      const key = raw.key || ['residential', 'commercial', 'industrial', 'recycle'][idx] || `srv_${idx}`;
      return {
        key,
        title: raw.title || '',
        desc: raw.desc || '',
        details: Array.isArray(raw.details) ? raw.details : [],
        img: imagesByKey[key] || [residentielImg, commercialImg, industrielImg, recyclageImg][idx] || residentielImg,
      };
    });
  }, [items]);

  const [selected, setSelected] = useState(null);

  return (
    <section className="services">
      <div className="container">
        <h2>{t('services.title') || 'Services'}</h2>

        {/* Grille horizontale (4 → 2 → 1) */}
        <div className="services-grid">
          {data.map((s) => (
            <button
              key={s.key}
              className="service-card"
              onClick={() => setSelected(s)}
              aria-label={`Voir le détail : ${s.title}`}
            >
              {/* La taille/forme est gérée dans Services.css (miniature ronde + hover) */}
              <img src={s.img} alt={s.title} />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Modale détail */}
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selected.title}</h3>
            {selected.details?.length ? (
              <ul className="detail-list">
                {selected.details.map((d, i) => <li key={i}>{d}</li>)}
              </ul>
            ) : (
              <p style={{ margin: '0.5rem 0 1rem' }}>Contactez‑nous pour un devis détaillé.</p>
            )}
            <div className="modal-actions">
              {/* HashRouter → #/contact */}
              <a href="/#/contact" className="btn">
                {t('home.cta') || 'Demander un devis'}
              </a>
              <button className="btn btn-ghost" onClick={() => setSelected(null)}>
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
