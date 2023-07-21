import { h } from 'htm/preact';

import {
  DUMMY_TIMEZONES_ASIA,
  DUMMY_TIMEZONES_AUSTRALIA,
  DUMMY_TIMEZONES_EUROPE,
  DUMMY_TIMEZONES_USA_CANADA,
} from './constants';

export const handleSelect = (e) => {
  const changeTimezoneButton = document.getElementById('changeTimezoneButton');
  changeTimezoneButton.innerHTML = e.target.value;

  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.classList.toggle('hidden');
};

export const createOptionButton = ({
  key, value, onClick, label,
}) => (
  <button onClick={onClick} className="px-4 py-4 text-xs border-y" key={key} value={value}>
    {label}
  </button>
);

export const createGroupedOptionButton = (group) => (
  <div>
    {group.map((groupItem, groupIndex) => {
      const key = Object.keys(groupItem)[0];
      const element = groupItem[key];
      return (
        <div className="flex flex-col p-4 border-b" key={groupIndex}>
          <span className="px-4 text-base font-bold uppercase">{key}</span>
          {element.map((timezone, index) => createOptionButton({
            onClick: handleSelect, key: index, value: timezone, timezone, label: timezone,
          }))}
        </div>
      );
    })}
  </div>
);

export const groupedOptions = [
  { ASIA: DUMMY_TIMEZONES_ASIA },
  { EUROPE: DUMMY_TIMEZONES_EUROPE },
  { 'USA/CANADA': DUMMY_TIMEZONES_USA_CANADA },
  { AUSTRALIA: DUMMY_TIMEZONES_AUSTRALIA },
];

export const DEFAULT_VALUE = groupedOptions[0].ASIA[0];
