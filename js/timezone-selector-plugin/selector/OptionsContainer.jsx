import { h } from "htm/preact";
import { useState } from "preact/hooks";

import Search from "./Search";
import Options from "./Options";
import Switch from "./commons/Switch";
import { getFromLocalStorage, setToLocalStorage } from "./commons/utils";

function OptionsContainer({
  className, selectedValue, setSelectedValue, setIsOverlayVisible, elementId,
}) {
  const [searchInput, setSearchInput] = useState("");
  const [is24H, setIs24H] = useState(getFromLocalStorage("ntsp-24-hr-time-format") || false);

  const handleTimeFormatChange = (value) => {
    setToLocalStorage("ntsp-24-hr-time-format", value);
    setIs24H(value);
  };

  return (
    <div
      className={`w-full px-2 py-4 flex flex-col text-gray-700 bg-white border border-gray-300 rounded shadow h-80 ${className}`}
    >
      <Search {...{ elementId, searchInput, setSearchInput }} />
      <div className="flex items-center justify-between w-full pb-2 pr-4 mb-1 shadow-sm gap-x-4">
        <span />
        <Switch defaultValue={is24H} labelRight="24h" labelLeft="AM/PM" onChange={handleTimeFormatChange} />
      </div>
      <Options {...{
        elementId, searchInput, selectedValue, setSelectedValue, setIsOverlayVisible, is24H,
      }}
      />
    </div>
  );
}

export default OptionsContainer;
