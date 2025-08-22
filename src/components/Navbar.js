import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation, useLanguage } from '../i18n';
import logoMan from '../assets/logo-man.png';
import './Navbar.css';

/**
 * Responsive navigation bar with language switcher.  On smaller screens a
 * hamburger menu appears, allowing the links to collapse into a vertical
 * navigation panel.  The logo is prominently displayed next to the brand name.
 */
export default function Navbar() {
  const { t } = useTranslation();
  const { language, setLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  return (
    <header className="navbar">
      <div className="brand">
        <img src={logoMan} alt="Leonix Eco Logo" className="brand-logo" />
        <span className="brand-name">Leonix Eco</span>
      </div>
      <button className="burger" onClick={toggleMenu} aria-label="Menu">
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
        <span className={menuOpen ? 'open' : ''}></span>
      </button>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
        <Link to="/">{t('navbar.home')}</Link>
        <Link to="/services">{t('navbar.services')}</Link>
        <Link to="/a-propos">{t('navbar.about')}</Link>
        <Link to="/durable">{t('navbar.sustainability')}</Link>
        <Link to="/contact">{t('navbar.contact')}</Link>
        <button onClick={toggleLanguage} className="lang-btn">
          {t('navbar.language')}
        </button>
      </nav>
    </header>
  );
}
