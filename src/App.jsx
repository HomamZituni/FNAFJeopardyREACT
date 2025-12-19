import React, { useState } from "react";
import "./App.css";
import { categories } from './data/categories';



function QuestionCard({ value, question, answer }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="question-card" onClick={() => setRevealed(!revealed)}>
      {revealed ? (
        <p className="answer-text">{answer}</p>
      ) : (
        <>
          <p className="question-value">${value}</p>
          <p className="question-text">{question}</p>
        </>
      )}
    </div>
  );
}

function CategoryColumn({ category }) {
  return (
    <div className="category-column">
      <h2 className="category-title">{category.name}</h2>
      {category.questions.map((q, index) => (
        <QuestionCard key={index} value={q.value} question={q.question} answer={q.answer} />
      ))}
    </div>
  );
}

export default function JeopardyBoard() {
  const [isCharizardMode, setIsCharizardMode] = useState(false);
  return (
       <div className={isCharizardMode ? "board-container charizard-mode" : "board-container"}>
      <h1 className="board-title">FNAF Jeopardy</h1>
      <button className= "toggle-btn" onClick={() => setIsCharizardMode(!isCharizardMode)}>
      {isCharizardMode ? " Switch to Blastoise" : "Switch to Charizard"} </button>
      

      <div className="board-grid">
        {categories.map((cat, index) => (
          <CategoryColumn key={index} category={cat} />
        ))}
      </div>
    </div>
  );
}
