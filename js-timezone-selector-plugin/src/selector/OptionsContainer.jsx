import { h } from 'https://esm.sh/preact@10.16.0';

import Search from './Search';
import Options from './Options';

function OptionsContainer() {
  return (
    <div className="flex flex-col hidden text-gray-700 bg-white border border-gray-300 rounded shadow" id="optionsContainer">
      <Search />
      <Options />
    </div>
  );
}

export default OptionsContainer;
