import { h } from 'htm/preact';

export const createOptionButton = ({
  key, value, onClick, label,
}) => (
  <button onClick={onClick} className="px-4 py-4 text-xs border-b" key={key} value={value}>
    {label}
  </button>
);

export const handleSelect = (e) => {
  const changeTimezoneButton = document.getElementById('changeTimezoneButton');
  changeTimezoneButton.innerHTML = e.target.value;

  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.classList.toggle('hidden');
};
