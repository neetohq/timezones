import { h } from "htm/preact";
import { useEffect } from "preact/hooks";

import {
  allTimezones,
  createGroupedOptionButton, valueToId,
} from "./utils";
import { filterTimezones } from "./Search/utils";

function Options({
  elementId, searchInput, selectedValue, setSelectedValue, setIsOverlayVisible,
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

  useEffect(() => {
    if (searchInput === "") return;

    const overflowContainer = document.getElementById(`${elementId}-ntsp-overflow-container`);
    if (overflowContainer) {
      overflowContainer.scrollTop = 0;
    }
  }, [searchInput]);

  return (
    <div className="mt-6 overflow-y-scroll h-80" id={`${elementId}-ntsp-overflow-container`}>
      <div className="flex flex-col">
        {
          createGroupedOptionButton(
            filterTimezones(searchInput),
            selectedValue,
            handleSelect,
          )
        }
      </div>
    </div>
  );
}

export default Options;
