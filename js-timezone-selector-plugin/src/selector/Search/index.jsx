import { h } from 'htm/preact';

function Search({ searchInput, setSearchInput, elementId }) {
  const searchboxElementId = `${elementId}-searchbox`;

  return (
    <input
      id={searchboxElementId}
      type="text"
      placeholder="Search"
      onInput={(event) => setSearchInput(event.target.value)}
      className="px-2 py-2 m-2 border-2 border-blue-400 rounded shadow-lg outline-none"
      value={searchInput}
    />
  );
}

export default Search;
