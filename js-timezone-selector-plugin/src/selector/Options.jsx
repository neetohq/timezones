import { h } from 'htm/preact';

import {
  createGroupedOptionButton,
} from './utils';
import { filterTimezones } from './Search/utils';

function Options({ searchInput, selectedValue, setSelectedValue }) {
  return (
    <div id="selectTimezoneOptions" className="h-64 overflow-y-scroll">
      <div className="flex flex-col">
        {createGroupedOptionButton(filterTimezones(searchInput), selectedValue, setSelectedValue)}
      </div>
    </div>
  );
}

export default Options;
