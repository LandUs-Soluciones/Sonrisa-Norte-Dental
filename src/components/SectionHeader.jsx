import React from "react";

export default function SectionHeader({ badge, title, subtitle }) {
  return (
    <header className="section-header">
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </header>
  );
}
