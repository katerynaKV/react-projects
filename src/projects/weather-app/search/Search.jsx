export function Search({ search, setSearch, handleSearch }) {
  return (
    <form className="search-engine" onSubmit={handleSearch}>
      <input
        type="text"
        className="city-search"
        placeholder="Enter City Name"
        name="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button>Search</button>
    </form>
  );
}
