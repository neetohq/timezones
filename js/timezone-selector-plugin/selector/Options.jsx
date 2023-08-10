import { h } from "htm/preact";
import { useEffect } from "preact/hooks";

import {
  allTimezones,
  createGroupedOptionButton, valueToId,
} from "./utils";
import { filterTimezones } from "./Search/utils";

function Options({
  searchInput, selectedValue, setSelectedValue, setIsOverlayVisible,
}) {
  const handleSelect = (e) => {
    const targetValue = e?.target?.value
      || e?.target?.parentNode?.value
      || e?.target?.parentNode?.parentNode?.value;

    const selectedTimezone = allTimezones.find((timezone) => timezone?.keywords === targetValue);
    setIsOverlayVisible(false);
    setSelectedValue(selectedTimezone);
  };

  useEffect(() => {
    const selectedElement = document.getElementById(valueToId(selectedValue?.keywords));
    selectedElement.scrollIntoView({ behavior: "auto", block: "center" });
  }, []);

  return (
    <div className="overflow-y-scroll h-80">
      <div className="flex flex-col">
        {createGroupedOptionButton(filterTimezones(searchInput), selectedValue, handleSelect)}
      </div>
    </div>
  );
}

export default Options;
