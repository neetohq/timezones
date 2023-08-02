import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import Button from "./Button";
import OptionsContainer from "./OptionsContainer";
import { DEFAULT_VALUE } from './utils';

const Selector = ({ className = "", position = "bottom", onChange = (selectedValue) => { } }) => {
  const [selectedValue, setSelectedValue] = useState(DEFAULT_VALUE);
  const [showOptions, setShowOptions] = useState(false);
  const top = position === "top";

  const addOutsideClickListener = () => {
    window.addEventListener('click', function (e) {
      if (!(document.getElementById('timezoneSelector')?.contains(e.target))) {
        setShowOptions(false)
      }
    });
  };


  addOutsideClickListener();

  useEffect(() => {
    onChange(selectedValue);
  }, [selectedValue])

  return (
    <div className={`flex flex-col relative w-full z-40 ${className}`} id="timezoneSelector">
      <Button showOptions={showOptions} setShowOptions={setShowOptions} selectedValue={selectedValue} />
      {showOptions === true && (
        <OptionsContainer
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          setShowOptions={setShowOptions}
          className={`absolute ${top ? 'bottom-16' : 'top-16'}`}
        />
      )}
    </div>
  )
}

export default Selector;
