import { useEffect, useState } from 'react';
import './ScrollIndicator.css';

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setData(data.products);
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(url);
  }, [url]);

  function handleScrollPercentage() {
    const howMuchScrolled = document.documentElement.scrollTop;

    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage);

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  if (errorMessage) {
    return <div>Error! {errorMessage}</div>;
  }

  return (
    <>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div className="current-progress-bar" style={{ width: `${scrollPercentage}%` }}>
            {' '}
          </div>
        </div>
      </div>

      <div className="data-container">
        {data.map((dataItem) => (
          <p key={dataItem.id}>{dataItem.title}</p>
        ))}
      </div>
    </>
  );
}
