import { U as UsCanada, A as America, a as Asia, b as Africa, c as Atlantic, d as Australia, E as Europe, P as Pacific } from "./index-82040dcd.js";
import { e } from "./index-82040dcd.js";
const groupedOptions = [
  { "US/Canada": UsCanada },
  { America },
  { Asia },
  { Africa },
  { Atlantic },
  { Australia },
  { Europe },
  { Pacific }
];
const allTimezones = groupedOptions.reduce((accumulator, currentValue) => {
  const key = Object.keys(currentValue)[0];
  return [...accumulator, ...currentValue[key]];
}, []);
const ianaTimezoneToHumanReadable = (ianaValue) => {
  const TimezoneObject = allTimezones.find((timezone) => timezone.utc.includes(ianaValue.utc[0]));
  return (TimezoneObject == null ? void 0 : TimezoneObject.label) || "";
};
export {
  e as NeetoTimezoneSelector,
  ianaTimezoneToHumanReadable
};
