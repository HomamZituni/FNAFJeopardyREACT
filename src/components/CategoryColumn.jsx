import QuestionCard from './QuestionCard';

export default function CategoryColumn({ category, updateScore }) {
  return (
    <div className="category-column">
      <h2 className="category-title">{category.name}</h2>
      {category.questions.map((q, index) => (
        <QuestionCard key={index} value={q.value} question={q.question} answer={q.answer} updateScore={updateScore} />
      ))}
    </div>
  );
}
