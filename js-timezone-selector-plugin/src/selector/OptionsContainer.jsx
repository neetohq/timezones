import { h } from 'htm/preact';

import Search from './Search';
import Options from './Options';

function OptionsContainer({ selectedValue, setSelectedValue }) {
  return (
    <div className="flex flex-col hidden text-gray-700 bg-white border border-gray-300 rounded shadow" id="optionsContainer">
      <Search selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
      <Options selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
    </div>
  );
}

export default OptionsContainer;
