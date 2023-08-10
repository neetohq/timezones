import Africa from "../../data/africa.json";
import America from "../../data/america.json";
import Asia from "../../data/asia.json";
import Atlantic from "../../data/atlantic.json";
import Australia from "../../data/australia.json";
import Europe from "../../data/europe.json";
import Pacific from "../../data/pacific.json";
import UsCanada from "../../data/us_canada.json";

const groupedOptions = [
  { "US/Canada": UsCanada },
  { America },
  { Asia },
  { Africa },
  { Atlantic },
  { Australia },
  { Europe },
  { Pacific },
];

const allTimezones = groupedOptions.reduce((accumulator, currentValue) => {
  const key = Object.keys(currentValue)[0];

  return [...accumulator, ...currentValue[key]];
}, []);

const ianaTimezoneToHumanReadable = (ianaValue) => {
  const TimezoneObject = allTimezones.find((timezone) => timezone.utc.includes(ianaValue));

  return TimezoneObject?.label || "";
};
export default ianaTimezoneToHumanReadable;
