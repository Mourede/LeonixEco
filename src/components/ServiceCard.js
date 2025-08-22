/**
 * A reusable card component for displaying a service.  The icon prop should
 * be a React component (e.g. from react-icons) which is rendered above the
 * title.  Each card contains an icon, heading and a short description.
 */
import React from 'react';
import './ServiceCard.css';

export default function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="service-card">
      {Icon && <Icon className="service-icon" />}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
