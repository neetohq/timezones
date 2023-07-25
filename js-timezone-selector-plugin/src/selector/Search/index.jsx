import { h } from 'htm/preact';

function Search({ searchInput, setSearchInput }) {
  return (
    <input
      id="searchbox"
      type="text"
      placeholder="Search"
      onInput={(event) => setSearchInput(event.target.value)}
      className="px-2 py-2 m-2 border rounded"
      value={searchInput}
    />
  );
}

export default Search;
