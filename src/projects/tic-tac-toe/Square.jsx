import './Square.css';

export function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="Square">
      {value}
    </button>
  );
}
