import React from 'react';
import { useTranslation } from '../i18n';
import { FaLeaf, FaTint, FaRecycle, FaCarSide, FaHandsHelping } from 'react-icons/fa';
import './Sustainability.css';

/**
 * Sustainability page: outlines the company’s commitment to ecological and
 * social responsibility.  Each item is paired with an icon from the
 * react-icons library.
 */
export default function Sustainability() {
  const { t } = useTranslation();
  const items = t('sustainability.items') || [];
  const icons = [FaLeaf, FaTint, FaRecycle, FaCarSide, FaHandsHelping];

  return (
    <section className="sustainability">
      <div className="container">
        <h2>{t('sustainability.title')}</h2>
        <p className="intro">{t('sustainability.intro')}</p>
        <ul className="sustain-list">
          {items.map((text, index) => {
            const Icon = icons[index] || FaLeaf;
            return (
              <li key={index}>
                <Icon className="sustain-icon" />
                <span>{text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
