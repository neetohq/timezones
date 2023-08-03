import { h } from 'htm/preact';
import { useState } from 'preact/hooks';

import Search from './Search';
import Options from './Options';

function OptionsContainer({
  className, selectedValue, setSelectedValue, setShowOptions, elementId,
}) {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div
      className={`w-full px-2 py-4 flex flex-col text-gray-700 bg-white border border-gray-300 rounded shadow h-80 ${className}`}
    >
      <Search
        elementId={elementId}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Options elementId={elementId} searchInput={searchInput} selectedValue={selectedValue} setSelectedValue={setSelectedValue} setShowOptions={setShowOptions} />
    </div>
  );
}

export default OptionsContainer;
