import React, { useState } from "react";
import { FAQ_DATA } from "../config/clinicData";
import SectionHeader from "../components/SectionHeader";
import AccordionItem from "../components/AccordionItem";
import "../styles/faq.css";

export default function Faq() {
  // Primer acordeón abierto por defecto para feedback visual
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="section-padding bg-surface">
      <div className="container">
        <SectionHeader
          badge="Preguntas Frecuentes"
          title="Resolvemos tus dudas"
          subtitle="Todo lo que necesitas saber antes de tu primera visita a Sonrisa Norte Dental."
        />

        <div className="faq-container">
          {FAQ_DATA.map((faq, idx) => (
            <AccordionItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => toggleAccordion(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
