import React from "react";
import { STATS_DATA } from "../config/clinicData";
import "../styles/stats.css";

export default function Stats() {
  return (
    <section className="bg-white" style={{ padding: "0 0 60px 0" }}>
      <div className="container">
        <div className="stats-bar">
          <div className="stats-grid">
            {STATS_DATA.map((stat, idx) => (
              <div key={idx} className="stat-card">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
            ))}
          </div>
          <p className="stats-disclaimer">
            * Cifras e indicadores presentados con fines ilustrativos en esta
            maqueta conceptual.
          </p>
        </div>
      </div>
    </section>
  );
}
