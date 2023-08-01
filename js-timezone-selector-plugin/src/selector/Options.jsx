import { h } from 'htm/preact';
import { useEffect } from 'preact/hooks';

import {
  allTimezones,
  createGroupedOptionButton, valueToId,
} from './utils';
import { filterTimezones } from './Search/utils';

function Options({
  searchInput, selectedValue, setSelectedValue, setShowOptions,
}) {
  const handleSelect = (e) => {
    const selectedTimezone = allTimezones.find((timezone) => timezone?.value === e?.target?.value);
    setShowOptions(false);
    setSelectedValue(selectedTimezone);
  };

  useEffect(() => {
    const selectedElement = document.getElementById(valueToId(selectedValue?.value));
    selectedElement.scrollIntoView({ behavior: 'auto', block: 'center' });
  }, []);

  return (
    <div id="selectTimezoneOptions" className="overflow-y-scroll h-72">
      <div className="flex flex-col">
        {createGroupedOptionButton(filterTimezones(searchInput), selectedValue, handleSelect)}
      </div>
    </div>
  );
}

export default Options;
