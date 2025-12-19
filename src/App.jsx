import React, { useState } from "react";
import "./App.css";
import { categories } from "./data/categories";
import CategoryColumn from "./components/CategoryColumn";
import ThemeToggle from "./components/ThemeToggle";
import ScorePanel from "./components/ScorePanel";

export default function JeopardyBoard() {
  const [isCharizardMode, setIsCharizardMode] = useState(false);

  const [players, setPlayers] = useState([
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 }
  ]);

  const [currentPlayer, setCurrentPlayer] = useState(0);

  const updateScore = (points, isCorrect) => {
    setPlayers(prevPlayers =>
      prevPlayers.map((player, index) =>
        index === currentPlayer
          ? {
              ...player,
              score: isCorrect
                ? player.score + points
                : player.score - points
            }
          : player
      )
    );

    setCurrentPlayer(prev => (prev + 1) % players.length);
  };

  return (
    <div
      className={
        isCharizardMode
          ? "board-container charizard-mode"
          : "board-container"
      }
    >
      <h1 className="board-title">FNAF Jeopardy</h1>

      <ThemeToggle
        isCharizardMode={isCharizardMode}
        onToggle={() => setIsCharizardMode(!isCharizardMode)}
      />

      <ScorePanel players={players} currentPlayer={currentPlayer} />

      <div className="board-grid">
        {categories.map((cat, index) => (
          <CategoryColumn
            key={index}
            category={cat}
            updateScore={updateScore}
          />
        ))}
      </div>
    </div>
  );
}
