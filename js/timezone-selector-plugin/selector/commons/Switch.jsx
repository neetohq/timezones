import { h } from "preact";
import { useState } from "preact/hooks";

function Switch({
  id = "ntsp-switch",
  onChange = () => {},
  labelRight = "Toggle switch",
  labelLeft = "Toggle switch",
  defaultValue = false,
}) {
  const [isChecked, setIsChecked] = useState(defaultValue);

  const labelLeftBold = !isChecked && "font-semibold";
  const labelRightBold = isChecked && "font-semibold";

  const handleChange = ({ target: { checked } }) => {
    setIsChecked(checked);
    onChange(checked);
  };

  return (
    <label htmlFor={id} className="flex items-center space-x-1 cursor-pointer">
      <span className={`ml-3 text-sm text-gray-700 ${labelLeftBold}`}>
        {labelLeft}
      </span>
      <span className="relative">
        <input
          type="checkbox"
          id={id}
          className="sr-only"
          checked={isChecked}
          onChange={handleChange}
        />
        <span className="block w-10 h-6 bg-gray-600 rounded-full" />
        <span className="absolute w-4 h-4 transition bg-white rounded-full dot left-1 top-1" />
      </span>
      <span className={`ml-3 text-sm text-gray-700 ${labelRightBold}`}>
        {labelRight}
      </span>
    </label>
  );
}

export default Switch;
