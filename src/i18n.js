import React, { createContext, useContext, useState } from 'react';

// Translation resources for French and English
const translations = {
  fr: {
    navbar: {
      home: 'Accueil',
      services: 'Services',
      about: 'À propos',
      sustainability: 'Engagement durable',
      contact: 'Contact',
      language: 'EN',
    },
    home: {
      heroTitle: 'Votre partenaire de nettoyage écoresponsable',
      heroDesc: 'Des solutions professionnelles qui respectent votre santé et la planète.',
      cta: 'Demander un devis',
      whyTitle: 'Pourquoi nous choisir ?',
      whyItems: [
        'Produits biodégradables et certifiés',
        'Équipe de confiance formée et expérimentée',
        'Solutions sur mesure pour chaque espace',
        'Tarifs compétitifs et transparence',
      ],
    },
    services: {
      title: 'Nos services',
      items: [
        {
          title: 'Entretien résidentiel',
          desc: 'Entretien régulier et nettoyages en profondeur pour maisons et appartements.',
        },
        {
          title: 'Entretien commercial',
          desc: 'Bureaux et espaces commerciaux impeccables pour vos clients et employés.',
        },
        {
          title: 'Nettoyage industriel',
          desc: 'Nettoyage spécialisé des installations et équipements industriels.',
        },
        {
          title: 'Gestion des déchets & recyclage',
          desc: 'Tri, collecte et recyclage pour réduire votre empreinte environnementale.',
        },
      ],
    },
    about: {
      title: 'À propos de nous',
      historyTitle: 'Notre histoire',
      history: `Leonix Eco Propreté est née de l’observation que la propreté est essentielle mais qu’elle ne devrait jamais compromettre la santé des personnes ou de la planète. Nous avons voulu offrir une alternative locale qui allie rigueur, conscience écologique et proximité humaine.`,
      missionTitle: 'Mission',
      mission: `Promouvoir un environnement sain et durable en offrant des solutions de propreté innovantes et respectueuses de l’environnement, adaptées aux besoins résidentiels, commerciaux et industriels.`,
      visionTitle: 'Vision',
      vision: `Devenir l’un des leaders régionaux de l’entretien ménager écologique en bâtissant une communauté plus saine et plus consciente de son impact environnemental.`,
      valuesTitle: 'Nos valeurs',
      values: {
        env: 'Respect de l’environnement',
        integrity: 'Intégrité & transparence',
        quality: 'Qualité & professionnalisme',
        innovation: 'Innovation durable',
        social: 'Responsabilité sociale',
      },
    },
    sustainability: {
      title: 'Engagement durable',
      intro: `Nous croyons qu’il est possible d’offrir des services efficaces tout en respectant profondément la nature et les communautés locales.`,
      items: [
        'Réduction des produits chimiques : utilisation de solutions non toxiques et sécuritaires.',
        'Optimisation des ressources : méthodes réduisant la consommation d’eau et d’énergie.',
        'Gestion des déchets : tri, recyclage et limitation des emballages à usage unique.',
        'Transports écoresponsables : itinéraires optimisés et adoption progressive de véhicules hybrides.',
        'Impact social : création d’emplois locaux et partenariats avec des fournisseurs responsables.',
      ],
    },
    contact: {
      title: 'Contactez-nous',
      intro: 'Une question ou un besoin de devis ? Écrivez-nous via le formulaire ou utilisez les coordonnées ci-dessous.',
      name: 'Nom',
      emailLabel: 'Courriel',
      message: 'Message',
      button: 'Envoyer',
      success: 'Merci ! Votre message a été envoyé.',
      info: {
        address: 'Gatineau, Québec, Canada',
        phone: '+1 819 918 4525',
        email: 'info@leonixecoproprete.com',
      },
    },
    footer: {
      copyright: '© 2025 Leonix Eco Propreté. Tous droits réservés.',
    },
  },
  en: {
    navbar: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      sustainability: 'Eco Commitment',
      contact: 'Contact',
      language: 'FR',
    },
    home: {
      heroTitle: 'Your eco-friendly cleaning partner',
      heroDesc: 'Professional solutions that respect your health and the planet.',
      cta: 'Get a quote',
      whyTitle: 'Why choose us?',
      whyItems: [
        'Biodegradable and certified products',
        'Trusted, trained and experienced team',
        'Tailor-made solutions for every space',
        'Competitive pricing and transparency',
      ],
    },
    services: {
      title: 'Our services',
      items: [
        {
          title: 'Residential cleaning',
          desc: 'Regular maintenance and deep cleaning for houses and apartments.',
        },
        {
          title: 'Commercial cleaning',
          desc: 'Pristine offices and commercial spaces for your clients and employees.',
        },
        {
          title: 'Industrial cleaning',
          desc: 'Specialised cleaning of industrial facilities and equipment.',
        },
        {
          title: 'Waste management & recycling',
          desc: 'Sorting, collection and recycling to reduce your environmental footprint.',
        },
      ],
    },
    about: {
      title: 'About us',
      historyTitle: 'Our history',
      history: `Leonix Eco Propreté was born from the observation that cleanliness is essential but should never compromise people’s health or the planet. We wanted to offer a local alternative combining rigour, ecological awareness and human proximity.`,
      missionTitle: 'Mission',
      mission: `Promote a healthy and sustainable environment by offering innovative cleaning solutions adapted to residential, commercial and industrial needs.`,
      visionTitle: 'Vision',
      vision: `Become one of the regional leaders in eco-friendly housekeeping by building a healthier community aware of its environmental impact.`,
      valuesTitle: 'Our values',
      values: {
        env: 'Respect for the environment',
        integrity: 'Integrity & transparency',
        quality: 'Quality & professionalism',
        innovation: 'Sustainable innovation',
        social: 'Social responsibility',
      },
    },
    sustainability: {
      title: 'Eco commitment',
      intro: `We believe it is possible to deliver effective services while deeply respecting nature and local communities.`,
      items: [
        'Reduce chemicals: use non-toxic and safe solutions.',
        'Optimize resources: methods that reduce water and energy consumption.',
        'Waste management: sorting, recycling and limiting single-use packaging.',
        'Eco-friendly transport: optimized routes and adoption of hybrid vehicles.',
        'Social impact: creating local jobs and partnerships with responsible suppliers.',
      ],
    },
    contact: {
      title: 'Get in touch',
      intro: 'Have a question or need a quote? Write to us via the form or use the contact details below.',
      name: 'Name',
      emailLabel: 'Email',
      message: 'Message',
      button: 'Send',
      success: 'Thank you! Your message has been sent.',
      info: {
        address: 'Gatineau, Québec, Canada',
        phone: '+1 819 918 4525',
        email: 'info@leonixecoproprete.com',
      },
    },
    footer: {
      copyright: '© 2025 Leonix Eco Propreté. All rights reserved.',
    },
  },
};

// Context to hold current language and allow switching
const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr');
  const value = { language, setLanguage };
  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useTranslation() {
  const { language } = useContext(LanguageContext);

  function translate(path) {
    return path.split('.').reduce((obj, key) => {
      return obj && obj[key] !== undefined ? obj[key] : '';
    }, translations[language]);
  }

  return { t: translate };
}

export function useLanguage() {
  return useContext(LanguageContext);
}
