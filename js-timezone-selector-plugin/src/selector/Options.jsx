import { h } from 'htm/preact';
import { useEffect } from 'preact/hooks';

import {
  createGroupedOptionButton, valueToId,
} from './utils';
import { filterTimezones } from './Search/utils';

function Options({ searchInput, selectedValue, setSelectedValue }) {
  useEffect(() => {
    const selectedElement = document.getElementById(valueToId(selectedValue?.value));
    selectedElement.scrollIntoView({ behavior: 'auto', block: 'center' });
  }, []);

  return (
    <div id="selectTimezoneOptions" className="h-64 overflow-y-scroll">
      <div className="flex flex-col">
        {createGroupedOptionButton(filterTimezones(searchInput), selectedValue, setSelectedValue)}
      </div>
    </div>
  );
}

export default Options;
