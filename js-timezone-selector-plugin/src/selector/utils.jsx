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

export const valueToId = (value) => `option-${value.replaceAll(' ', '_').toLowerCase()}`;

export const createOptionButton = ({
  key, value, onClick, label, selected, currentTime,
}) => (
  <button
    id={valueToId(value)}
    onClick={onClick}
    className={`flex items-center justify-between px-2 py-3 text-md hover:bg-slate-100 ${selected ? 'bg-blue-300' : ''}`}
    key={key}
    value={value}
  >
    <div className="flex items-center w-3/4 space-x-4 text-left truncate pointer-events-none line-clamp-2">
      <div>{label}</div>
    </div>
    <div className="text-right truncate pointer-events-none line-clamp-2">
      {currentTime}
    </div>
  </button>
);

export const getCurrentTimeInTimezone = (timezone) => {
  const currentTimeInUTC = new Date();

  const options = {
    timeZone: timezone,
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
  };

  const currentTimeInTimezone = currentTimeInUTC.toLocaleString('en-US', options);

  return currentTimeInTimezone;
};

export const createGroupedOptionButton = (
  group,
  selectedValue,
  handleSelect,
) => (
  <div>
    {group.map((groupItem, groupIndex) => {
      const key = Object.keys(groupItem)[0];
      const element = groupItem[key];
      return (
        <div className="flex flex-col px-2 py-1" key={groupIndex}>
          <span className="pb-1 font-bold uppercase text-md">{key}</span>
          {element.map((timezone, index) => createOptionButton({
            onClick: handleSelect,
            key: index,
            value: timezone.value,
            timezone: timezone.label,
            label: timezone.label,
            selected: selectedValue.value === timezone.value,
            currentTime: getCurrentTimeInTimezone(timezone.utc[0]),
          }))}
        </div>
      );
    })}
  </div>
);
