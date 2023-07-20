import { h } from 'htm/preact';

import Search from './Search';
import Options from './Options';

const OptionsContainer = () => {
  return (
    <div className="flex flex-col hidden text-gray-700 bg-white border border-gray-300 rounded shadow" id="optionsContainer">
      <Search />
      <Options />
    </div>
  );
}

export default OptionsContainer;
