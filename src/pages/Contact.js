import React, { useState } from 'react';
import { useTranslation } from '../i18n';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const { t } = useTranslation();
  const info = t('contact.info') || { address: '', phone: '', email: '' };

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- Fallback: mailto (ouvre la messagerie avec un message pré-rempli)
    const subject = encodeURIComponent(t('contact.title') || 'Contact');
    const body = encodeURIComponent(
      `Nom/Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    const mailtoUrl = `mailto:${info.email}?subject=${subject}&body=${body}`;

    // Ouvre le client mail
    window.location.href = mailtoUrl;

    // Reset + message de remerciement
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <div className="container">
        <h2>{t('contact.title')}</h2>
        <p className="intro">{t('contact.intro')}</p>

        <div className="contact-grid">
          {/* Bloc coordonnées (cliquables) */}
          <div className="contact-info" aria-label="Company contact info">
            <p>
              <FaMapMarkerAlt className="contact-icon" />
              <span>{info.address}</span>
            </p>
            <p>
              <FaPhone className="contact-icon" />
              <a href={`tel:${info.phone}`} aria-label="Phone">
                {info.phone}
              </a>
            </p>
            <p>
              <FaEnvelope className="contact-icon" />
              <a href={`mailto:${info.email}`} aria-label="Email">
                {info.email}
              </a>
            </p>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="contact-form" aria-label="Contact form">
            <label htmlFor="name">{t('contact.name')}</label>
            <input
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder=""
              autoComplete="name"
            />

            <label htmlFor="email">{t('contact.emailLabel')}</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder=""
              autoComplete="email"
            />

            <label htmlFor="message">{t('contact.message')}</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
            />

            <button type="submit" className="cta-button">
              {t('contact.button')}
            </button>

            {submitted && (
              <p className="thank-you" role="status">
                {t('contact.success')}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
