export default function ScorePanel({ players, currentPlayer }) {
  return (
    <div style={{ display: 'flex', gap: '40px', justifyContent: 'center', margin: '20px 0' }}>
      {players.map((player, index) => (
        <div key={index} style={{ 
          padding: '15px 30px', 
          background: index === currentPlayer ? '#ffdd57' : '#333',
          color: index === currentPlayer ? '#000' : '#fff',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}>
          {player.name}: ${player.score}
        </div>
      ))}
    </div>
  );
}
