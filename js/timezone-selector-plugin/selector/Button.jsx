import { h } from "htm/preact";
import { useEffect } from "preact/hooks";
import { getCurrentTimeInTimezone, isDST } from "./utils";

function Button({
  selectedValue, isOverlayVisible, setIsOverlayVisible, elementId,
}) {
  const handleClick = () => {
    setIsOverlayVisible((previousIsOverlayVisible) => !previousIsOverlayVisible);
  };

  const searchBoxElementId = `${elementId}-search-box`;

  useEffect(() => {
    if (isOverlayVisible) {
      const searchBox = document.getElementById(searchBoxElementId);

      searchBox.focus();
    }
  }, [isOverlayVisible]);

  return (
    <div
      className="flex flex-col justify-between w-full text-gray-700 bg-white rounded"
    >
      <button
        onClick={handleClick}
        className="flex items-center justify-between px-4 py-4 text-md ntsp-button-border"
        value={selectedValue?.keywords}
        type="submit"
      >
        <div className="flex flex-row gap-x-2">
          <div
            className="flex items-center space-x-4 text-left truncate pointer-events-none line-clamp-2"
          >
            <span>
              {selectedValue?.label}
            </span>
          </div>
          {isDST(selectedValue?.utc[0]) && (
          <span
            data-tooltip="Daylight savings Time"
            data-tooltip-position="right"
          >
            &#127774;
          </span>
          )}
        </div>
        <div className="text-right truncate line-clamp-2">
          <span className="flex">
            {getCurrentTimeInTimezone(selectedValue?.utc[0])}
            &nbsp;
            <svg height="20" width="20" viewBox="0 2 20 20" aria-hidden="true" focusable="false"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" /></svg>
          </span>
        </div>
      </button>
    </div>
  );
}

export default Button;
