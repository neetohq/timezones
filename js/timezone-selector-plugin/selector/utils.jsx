import { h } from "preact";

import Africa from "../../../data/africa.json";
import America from "../../../data/america.json";
import Asia from "../../../data/asia.json";
import Atlantic from "../../../data/atlantic.json";
import Australia from "../../../data/australia.json";
import Europe from "../../../data/europe.json";
import Pacific from "../../../data/pacific.json";
import UsCanada from "../../../data/us_canada.json";
import Button from "./commons/Button";

export const groupedOptions = [
  { "US/Canada": UsCanada },
  { America },
  { Asia },
  { Africa },
  { Atlantic },
  { Australia },
  { Europe },
  { Pacific },
];

export const allTimezones = groupedOptions.reduce(
  (accumulator, currentValue) => {
    const key = Object.keys(currentValue)[0];
    return [...accumulator, ...currentValue[key]];
  },
  [],
);

export const getTimezoneObject = (ianaTimezone) => ianaTimezone
  && allTimezones.find((timezone) => timezone.utc.includes(ianaTimezone));

const findBrowserTimezone = () => {
  const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return getTimezoneObject(browserTimezone);
};

export const DEFAULT_VALUE = findBrowserTimezone() || allTimezones[0];

export const valueToId = (value) => `option-${value.replaceAll(" ", "_").toLowerCase()}`;

export const createGroupedOptionButton = (
  group,
  selectedValue,
  handleSelect,
  is24H,
) => (
  <div>
    {group.map((groupItem, groupIndex) => {
      const key = Object.keys(groupItem)[0];
      const element = groupItem[key];
      return (
        <div className="flex flex-col px-2 py-1" key={groupIndex}>
          <span className="pb-1 font-bold uppercase text-md">{key}</span>
          {element.map((timezone, index) => (
            <Button
              id={valueToId(timezone.keywords)}
              onClick={handleSelect}
              customClass={`px-2 hover:bg-slate-100 ${
                (selectedValue.keywords === timezone.keywords) ? "bg-blue-300" : ""
              }`}
              key={index}
              timezone={timezone}
              is24H={is24H}
            />
          ))}
        </div>
      );
    })}
  </div>
);
