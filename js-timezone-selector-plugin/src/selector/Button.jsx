import { h } from 'htm/preact';

function Button({ selectedValue }) {
  const handleClick = () => {
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.classList.toggle('hidden');

    if (!optionsContainer.classList.contains('hidden')) {
      const searchbox = document.getElementById('searchbox');
      searchbox.focus();
    }
  };

  return (
    <div
      className="flex justify-between px-4 py-2 pr-8 text-gray-700 bg-white border border-gray-300 rounded shadow"
      id="selectTimezone"
    >
      <button onClick={handleClick} id="changeTimezoneButton" className="w-full text-xs" value={selectedValue.value}>
        {selectedValue.label}
      </button>
    </div>
  );
}

export default Button;
