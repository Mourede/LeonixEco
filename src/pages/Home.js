import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../i18n';
import heroImg from '../assets/hero.png';
import './Home.css';

/**
 * Home page with a large hero section introducing the company and a
 * secondary section listing key reasons to choose Leonix Eco Propreté.  The
 * background image is abstract and evokes cleanliness and nature.
 */
export default function Home() {
  const { t } = useTranslation();
  const whyItems = t('home.whyItems') || [];

  return (
    <section className="home">
      <div
        className="hero"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="hero-overlay">
          <h1>{t('home.heroTitle')}</h1>
          <p>{t('home.heroDesc')}</p>
          <Link to="/contact" className="cta-button">
            {t('home.cta')}
          </Link>
        </div>
      </div>
      <div className="why">
        <div className="container">
          <h2>{t('home.whyTitle')}</h2>
          <ul className="why-list">
            {whyItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
