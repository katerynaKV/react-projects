import useFetch from './useFetch';

export default function UseFetchHookTest() {
  const { data, error, loading } = useFetch('https://dummyjson.com/products?limit=100');

  if (loading) {
    return <h3>Loading! Please wait</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div>
      <h1>Use Fetch Hook</h1>

      {data?.products?.map((productItem) => (
        <p key={productItem.id}>{productItem.title}</p>
      ))}
    </div>
  );
}
