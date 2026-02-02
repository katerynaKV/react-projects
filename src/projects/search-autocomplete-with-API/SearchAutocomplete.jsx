import { useEffect, useState } from 'react';
import Suggestions from './Suggestions';

export default function SearchAutocomplete() {
  const [loading, setLoading] = useState(false);
  const [userNames, setUserNames] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredNames, setFilteredNames] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();

    setSearchParam(query);

    if (query.length > 1) {
      const newFilteredNames = userNames.filter((name) => name.toLowerCase().indexOf(query) > -1);

      setFilteredNames(newFilteredNames);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  function handleClick(name) {
    setShowDropdown(false);
    setSearchParam(name);
    setFilteredNames([]);
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch('https://dummyjson.com/users');
      const data = await response.json();

      if (data && data.users && data.users.length) {
        const names = data.users.map((userItem) => userItem.firstName);

        setUserNames(names);
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  if (loading) {
    return <h1>Loading Data! Please wait</h1>;
  }

  if (error) {
    return <h1>There was an error {error.message}</h1>;
  }

  return (
    <div className="search-autocomplete-container">
      <input value={searchParam} name="search-user" placeholder="Search User here..." onChange={handleChange} />

      {showDropdown && <Suggestions handleClick={handleClick} names={filteredNames} />}
    </div>
  );
}
