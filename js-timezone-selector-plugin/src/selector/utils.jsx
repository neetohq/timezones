import { h } from 'htm/preact';

import Africa from '../../../data/africa.json';
import America from '../../../data/america.json';
import Asia from '../../../data/asia.json';
import Atlantic from '../../../data/atlantic.json';
import Australia from '../../../data/australia.json';
import Europe from '../../../data/europe.json';
import Pacific from '../../../data/pacific.json';
import UsCanada from '../../../data/us_canada.json';

export const groupedOptions = [
  { 'US/Canada': UsCanada },
  { America },
  { Asia },
  { Africa },
  { Atlantic },
  { Australia },
  { Europe },
  { Pacific },
];

export const allTimezones = groupedOptions.reduce((accumulator, currentValue) => {
  const key = Object.keys(currentValue)[0];
  return [...accumulator, ...currentValue[key]];
}, []);

const findBrowserTimezone = () => {
  const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return allTimezones.find((timezone) => timezone.utc.includes(browserTimezone));
};

export const DEFAULT_VALUE = findBrowserTimezone() || allTimezones[0];

export const handleSelect = (e, setSelectedValue) => {
  const selectedTimezone = allTimezones.find((timezone) => timezone?.value === e?.target?.value);
  setSelectedValue(selectedTimezone);

  const changeTimezoneButton = document.getElementById('changeTimezoneButton');
  changeTimezoneButton.innerHTML = e.target.innerHTML;
  changeTimezoneButton.value = e.target.value;

  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.classList.toggle('hidden');
};

export const createOptionButton = ({
  key, value, onClick, label, selected,
}) => (
  <button onClick={onClick} className={`px-4 py-4 text-xs hover:bg-slate-100 ${selected ? 'bg-blue-300' : ''}`} key={key} value={value}>
    {label}
  </button>
);

export const createGroupedOptionButton = (
  group,
  selectedValue,
  setSelectedValue,
) => (
  <div>
    {group.map((groupItem, groupIndex) => {
      const key = Object.keys(groupItem)[0];
      const element = groupItem[key];
      return (
        <div className="flex flex-col p-4 pb-0" key={groupIndex}>
          <span className="text-xs font-bold uppercase">{key}</span>
          {element.map((timezone, index) => createOptionButton({
            onClick: (event) => handleSelect(event, setSelectedValue),
            key: index,
            value: timezone.value,
            timezone: timezone.label,
            label: timezone.label,
            selected: selectedValue.value === timezone.value,
          }))}
        </div>
      );
    })}
  </div>
);
