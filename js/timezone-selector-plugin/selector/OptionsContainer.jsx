import { h } from "htm/preact";
import { useState } from "preact/hooks";

import Search from "./Search";
import Options from "./Options";

function OptionsContainer({
  className, selectedValue, setSelectedValue, setIsOverlayVisible, elementId,
}) {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div
      className={`w-full px-2 py-4 flex flex-col text-gray-700 bg-white border border-gray-300 rounded shadow h-80 ${className}`}
    >
      <Search {...{ elementId, searchInput, setSearchInput }} />
      <Options {...{
        elementId, searchInput, selectedValue, setSelectedValue, setIsOverlayVisible,
      }}
      />
    </div>
  );
}

export default OptionsContainer;
