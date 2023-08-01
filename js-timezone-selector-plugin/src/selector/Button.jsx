import { h } from 'htm/preact';
import { useEffect } from 'preact/hooks';
import { getCurrentTimeInTimezone } from './utils';

function Button({ selectedValue, showOptions, setShowOptions }) {
  const handleClick = () => {
    setShowOptions((showOptions) => !showOptions);
  };

  useEffect(() => {
    if (showOptions) {
      const searchbox = document.getElementById('searchbox');

      searchbox.focus();
    }
  }, [showOptions]);

  return (
    <div
      className="flex flex-col justify-between w-full text-gray-700 bg-white rounded"
      id="selectTimezone"
    >
      <button
        onClick={handleClick}
        id="changeTimezoneButton"
        className="flex items-center justify-between px-4 py-4 text-md"
        value={selectedValue?.value}
      >
        <div className="flex items-center w-3/4 space-x-4 text-left truncate pointer-events-none line-clamp-2">
          <div>{selectedValue?.label}</div>
        </div>
        <div className="text-right truncate line-clamp-2">
          {getCurrentTimeInTimezone(selectedValue?.utc[0])}
        </div>
      </button>
    </div>
  );
}

export default Button;
