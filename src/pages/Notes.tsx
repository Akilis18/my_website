import React from "react";
import "./Notes.css";

const Notes: React.FC = () => {
  return (
    <main className="notes">
      <section className="notes-content">
        <h1 className="notes-title">Lecture Notes</h1>
        <p className="notes-subtitle">Links to my Notion-based college notes will be placed here.</p>
      </section>
    </main>
  );
};

export default Notes;
