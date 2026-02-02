export default function Suggestions({ names = [], handleClick }) {
  return (
    <ul>
      {names.map((name, index) => (
        <li onClick={() => handleClick(name)} key={index}>
          {name}
        </li>
      ))}
    </ul>
  );
}
