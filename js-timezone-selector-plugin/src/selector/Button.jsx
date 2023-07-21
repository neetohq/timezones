import { h } from 'htm/preact';
import { DEFAULT_VALUE } from './utils';

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
        {DEFAULT_VALUE}
      </button>
    </div>
  );
}

export default Button;
