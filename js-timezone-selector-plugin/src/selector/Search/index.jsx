import { h, render } from 'htm/preact';

import { filterTimezones, createContainerForUpdatedOptions } from './utils';
import { createGroupedOptionButton } from '../utils';

function Search({ selectedValue, setSelectedValue }) {
  const handleInputChange = (event) => {
    const inputValue = event.target.value.toLowerCase();

    const updatedTimezones = filterTimezones(inputValue);

    const optionsContainer = document.getElementById('selectTimezoneOptions');
    optionsContainer.innerHTML = '';

    const updatedOptionsContainer = createContainerForUpdatedOptions();
    optionsContainer.innerHTML = '';

    const filteredGroupedOptions = createGroupedOptionButton(updatedTimezones, selectedValue, setSelectedValue);

    render(filteredGroupedOptions, updatedOptionsContainer);

    optionsContainer.innerHTML = '';
    optionsContainer.appendChild(updatedOptionsContainer);
  };

  return (
    <input
      id="searchbox"
      type="text"
      placeholder="Search"
      onInput={handleInputChange}
      className="px-2 py-2 m-2 border rounded"
    />
  );
}

export default Search;
