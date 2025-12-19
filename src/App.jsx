import React, { useState } from "react";
import "./App.css";

// BEFORE YOU CHANGE A SINGLE THING, EXPLORE THE CODE!
// Data will need to be moved elsewhere (look at the structure files/folders i shared with you)
// CSS will be a mess because there are set styles, blastoise is supposed to be default and charizard the toggle option
// GOOD LUCK!

const categories = [
  {
    name: "HTML",
    questions: [
      { value: 100, question: "What does HTML stand for?", answer: "HyperText Markup Language" },
      { value: 200, question: "What tag creates a hyperlink?", answer: "<a>" },
      { value: 300, question: "What tag defines the largest heading?", answer: "<h1>" }
    ]
  },
  {
    name: "CSS",
    questions: [
      { value: 100, question: "What does CSS stand for?", answer: "Cascading Style Sheets" },
      { value: 200, question: "Which property changes text color?", answer: "color" },
      { value: 300, question: "What layout uses flexible boxes?", answer: "Flexbox" }
    ]
  },
  {
    name: "JavaScript",
    questions: [
      { value: 100, question: "JS type for true/false?", answer: "boolean" },
      { value: 200, question: "Method to print to console?", answer: "console.log()" },
      { value: 300, question: "Keyword to declare a constant?", answer: "const" }
    ]
  }
];

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
  return (
    <div className="board-container">
      <h1 className="board-title">Developer Jeopardy</h1>

      <div className="board-grid">
        {categories.map((cat, index) => (
          <CategoryColumn key={index} category={cat} />
        ))}
      </div>
    </div>
  );
}
