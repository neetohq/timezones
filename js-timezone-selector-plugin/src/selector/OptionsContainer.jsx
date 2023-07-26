import { h } from 'htm/preact';
import { useState } from 'preact/hooks';

import Search from './Search';
import Options from './Options';

function OptionsContainer({ selectedValue, setSelectedValue, setShowOptions }) {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="flex flex-col text-gray-700 bg-white border border-gray-300 rounded shadow" id="optionsContainer">
      <Search
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <Options searchInput={searchInput} selectedValue={selectedValue} setSelectedValue={setSelectedValue} setShowOptions={setShowOptions} />
    </div>
  );
}

export default OptionsContainer;
