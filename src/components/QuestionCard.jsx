import { useState } from "react";

export default function QuestionCard({ value, question, answer, updateScore }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="question-card" onClick={() => setRevealed(!revealed)}>
      {revealed ? (
        <div>
          <p className="answer-text">{answer}</p>
          <div style={{ marginTop: '15px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
            <button onClick={(e) => { e.stopPropagation(); updateScore(value, true); setRevealed(false); }}>
              ✓ Correct
            </button>
            <button onClick={(e) => { e.stopPropagation(); updateScore(value, false); setRevealed(false); }}>
              ✗ Incorrect
            </button>
          </div>
        </div>
      ) : (
        <>
          <p className="question-value">${value}</p>
          <p className="question-text">{question}</p>
        </>
      )}
    </div>
  );
}