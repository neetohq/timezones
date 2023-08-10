import { h } from "htm/preact";
import { useEffect } from "preact/hooks";
import { getCurrentTimeInTimezone, isDST } from "./utils";

function Button({
  selectedValue,
  isOverlayVisible,
  setIsOverlayVisible,
  elementId,
}) {
  const handleClick = () => {
    setIsOverlayVisible(
      (previousIsOverlayVisible) => !previousIsOverlayVisible,
    );
  };

  const searchBoxElementId = `${elementId}-search-box`;

  useEffect(() => {
    if (isOverlayVisible) {
      const searchBox = document.getElementById(searchBoxElementId);

      searchBox.focus();
    }
  }, [isOverlayVisible]);

  return (
    <div className="flex flex-col justify-between w-full text-gray-700 bg-white rounded">
      <button
        onClick={handleClick}
        className="flex items-center gap-2 px-4 py-2 text-md ntsp-button-border"
        value={selectedValue?.keywords}
        type="submit"
      >
        <span className="min-w-0 text-left break-words grow">
          {selectedValue?.label}

          {isDST(selectedValue?.utc[0]) && (
            <span
              data-tooltip="Daylight savings Time"
              data-tooltip-position="right"
              className="inline-flex ml-1"
            >
              &#127774;
            </span>
          )}
        </span>

        <span className="flex items-center shrink-0">
          {getCurrentTimeInTimezone(selectedValue?.utc[0])}
          &nbsp;
          <svg
            height="16"
            width="16"
            viewBox="0 2 20 20"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
          </svg>
        </span>
      </button>
    </div>
  );
}

export default Button;
