import { h, render } from 'https://esm.sh/preact@10.16.0';

import { filterTimezones, createContainerForUpdatedOptions } from './utils';
import { createOptionButton, handleSelect } from '../utils';

function Search() {
  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();

    const updatedTimezones = filterTimezones(inputValue);

    const optionsContainer = document.getElementById('selectTimezoneOptions');
    optionsContainer.innerHTML = '';

    const updatedOptionsContainer = createContainerForUpdatedOptions();
    optionsContainer.innerHTML = '';

    const buttons = [];

    updatedTimezones.forEach((timezone, index) => {
      const button = createOptionButton({
        onClick: handleSelect, key: index, value: timezone, timezone, label: timezone,
      });

      buttons.push(button);
    });

    render(buttons, updatedOptionsContainer);

    optionsContainer.innerHTML = '';
    optionsContainer.appendChild(updatedOptionsContainer);
  };

  return (
    <input
      id="searchbox"
      type="text"
      placeholder="Filter timezones"
      onInput={handleInputChange}
      className="px-2 py-1 border rounded"
    />
  );
}

export default Search;