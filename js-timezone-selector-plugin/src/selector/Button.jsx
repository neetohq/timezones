import { h } from 'htm/preact';
import { DUMMY_TIMEZONES } from './constants';

function Button() {
  const handleClick = () => {
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.classList.toggle('hidden');
  };

  return (
    <div
      className="flex justify-between px-4 py-2 pr-8 text-gray-700 bg-white border border-gray-300 rounded shadow"
      id="selectTimezone"
    >
      <button onClick={handleClick} id="changeTimezoneButton" className="w-full text-xs">
        {DUMMY_TIMEZONES[0]}
      </button>
    </div>
  );
}

export default Button;
