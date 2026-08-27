import React from "react";
import { BadgeCheck, ClipboardCheck, Stethoscope, UserRound } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import "../styles/team.css";

function TeamCard({ member, variant = "dentist" }) {
  const IconComp = variant === "dentist" ? Stethoscope : ClipboardCheck;

  return (
    <article className={`team-card ${variant === "staff" ? "team-card-staff" : ""}`}>
      {member.image ? (
        <img
          className="team-photo"
          src={member.image}
          alt={`Foto de ${member.name}`}
          loading="lazy"
        />
      ) : (
        <div className="team-avatar" aria-hidden="true">
          <IconComp size={24} />
        </div>
      )}
      <div className="team-card-content">
        <span className="team-role">{member.role}</span>
        <h3 className="team-name">{member.name}</h3>
        <p className="team-specialty">{member.specialty}</p>
        <p className="team-experience">
          <BadgeCheck size={16} />
          {member.experience}
        </p>
      </div>
    </article>
  );
}

export default function Team({content, dentists, employees}) {
  return (
    <section id="equipo" className="section-padding bg-white">
      <div className="container">
        <SectionHeader
          badge={content.badge}
          title={content.title}
          subtitle={content.subtitle}
        />

        <div className="team-layout">
          <div className="team-panel">
            <div className="team-panel-title">
              <UserRound size={20} />
              <h3>{content.clinicalLabel}</h3>
            </div>
            <div className="team-grid">
              {dentists.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>

          <div className="team-panel team-panel-compact">
            <div className="team-panel-title">
              <ClipboardCheck size={20} />
              <h3>{content.supportLabel}</h3>
            </div>
            <div className="team-staff-list">
              {employees.map((member) => (
                <TeamCard key={member.id} member={member} variant="staff" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
