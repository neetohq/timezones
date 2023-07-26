import { h } from 'htm/preact';
import { useEffect } from 'preact/hooks';

import {
  createGroupedOptionButton,
} from './utils';
import { filterTimezones } from './Search/utils';

function Options({ searchInput, selectedValue, setSelectedValue }) {
  useEffect(() => {
    const selectedElement = document.getElementById(`option-${selectedValue?.value}`);
    selectedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
