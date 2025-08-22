import React from 'react';
import { useTranslation } from '../i18n';
import './About.css';

/**
 * About page: tells the company story, mission, vision and values.  The
 * sections are displayed with clear headings and spacing.  Values are shown
 * as a list for easy reading.
 */
export default function About() {
  const { t } = useTranslation();
  const values = t('about.values') || {};

  return (
    <section className="about">
      <div className="container">
        <h2>{t('about.title')}</h2>

        <h3>{t('about.historyTitle')}</h3>
        <p>{t('about.history')}</p>

        <h3>{t('about.missionTitle')}</h3>
        <p>{t('about.mission')}</p>

        <h3>{t('about.visionTitle')}</h3>
        <p>{t('about.vision')}</p>

        <h3>{t('about.valuesTitle')}</h3>
        <ul className="values-list">
          {Object.keys(values).map((key) => (
            <li key={key}>{values[key]}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
