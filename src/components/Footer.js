import React from 'react';
import { useTranslation } from '../i18n';
import './Footer.css';

/**
 * Simple footer that displays copyright information and the primary contact
 * details.  Text is translated via the i18n hook.
 */
export default function Footer() {
  const { t } = useTranslation();
  const contactInfo = t('contact.info');
  return (
    <footer className="footer">
      <p>{t('footer.copyright')}</p>
      <p>{contactInfo.email}  |  {contactInfo.phone}</p>
    </footer>
  );
}
