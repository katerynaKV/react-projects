import useLocalStorage from './useLocalStorage';
import './LightDarkMode.css';

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <p>Hello World!</p>
      <button onClick={handleToggleTheme}>Change Theme</button>
    </div>
  );
}
