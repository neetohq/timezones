import { h } from "preact";

function Switch({
  id = "ntsp-switch",
  onChange = (value) => { },
  labelRight = "Toggle switch",
  labelLeft = "Toggle switch",
  defaultValue = false,
}) {
  return (
    <label htmlFor={id} className="flex items-center space-x-1 cursor-pointer">
      <span className="ml-3 text-sm text-gray-700">
        {labelLeft}
      </span>
      <span className="relative">
        <input type="checkbox" id={id} className="sr-only" checked={defaultValue} onChange={(e) => onChange(e.target.checked)} />
        <span className="block w-10 h-6 bg-gray-600 rounded-full" />
        <span className="absolute w-4 h-4 transition bg-white rounded-full dot left-1 top-1" />
      </span>
      <span className="ml-3 text-sm text-gray-700">
        {labelRight}
      </span>
    </label>
  );
}

export default Switch;
