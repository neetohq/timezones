import { h } from "htm/preact";

function Search({ searchInput, setSearchInput, elementId }) {
  const searchBoxElementId = `${elementId}-search-box`;

  return (
    <input
      id={searchBoxElementId}
      type="text"
      placeholder="Search"
      onInput={(event) => setSearchInput(event.target.value)}
      className="p-2 m-2 border-2 border-blue-400 rounded shadow-lg outline-none"
      value={searchInput}
    />
  );
}

export default Search;
