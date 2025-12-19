export default function ThemeToggle({ isCharizardMode, onToggle }) {
  return (
    <button className="toggle-btn" onClick={onToggle}>
      {isCharizardMode ? "💧 Switch to Blastoise" : "🔥 Switch to Charizard"}
    </button>
  );
}
