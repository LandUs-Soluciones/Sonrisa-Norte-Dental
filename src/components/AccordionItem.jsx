import React from "react";
import { ChevronDown } from "lucide-react";

export default function AccordionItem({ question, answer, isOpen, onClick }) {
  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`}>
      <button
        type="button"
        className="faq-question-btn"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown className="faq-icon" size={20} />
      </button>
      <div className="faq-answer-wrapper">
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}
