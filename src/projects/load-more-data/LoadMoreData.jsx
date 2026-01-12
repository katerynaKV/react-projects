import { useEffect, useState } from 'react';
import './LoadMoreData.css';
import { Paper } from '../../components/Paper/Paper';

const PAGE_SIZE = 10;

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      setLoading(true);

      const skip = products.length;

      const response = await fetch(`https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${skip}`);

      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading && products.length === 0) {
    return <div>Loading data! Please wait.</div>;
  }

  const isButtonDisabled = products.length >= 100;

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products.map((item) => (
          <Paper className="product" isInteractive key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <p>{item.title}</p>
          </Paper>
        ))}
      </div>
      <div>
        <button disabled={isButtonDisabled} onClick={fetchProducts} className="button-container">
          Load More Products
        </button>
        {isButtonDisabled ? <p>You have reached to 100 products</p> : null}
      </div>
    </div>
  );
}
