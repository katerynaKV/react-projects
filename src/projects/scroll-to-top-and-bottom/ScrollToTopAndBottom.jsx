import { useRef } from 'react';

import useFetch from '../use-fetch/useFetch';

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch('https://dummyjson.com/products?limit=100');

  const bottomRef = useRef(null);

  function handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function handleScrollToBottom() {
    bottomRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  if (error) {
    return <h1>Error occured! Please try again.</h1>;
  }

  if (pending) {
    return <h1>Loading! Please wait.</h1>;
  }

  return (
    <div>
      <h1>Scroll To Top And Bottom Feature</h1>
      <h3>This is the top section</h3>

      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>

      <ul style={{ listStyle: 'none' }}>
        {data?.products?.length && data.products.map((product) => <li key={product.id}>{product.title}</li>)}
      </ul>

      <button onClick={handleScrollToTop}>Scroll To Top</button>

      <h3 ref={bottomRef}>This is the bottom of the page</h3>
    </div>
  );
}
