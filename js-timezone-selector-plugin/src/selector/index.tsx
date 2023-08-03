import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import Button from "./Button";
import OptionsContainer from "./OptionsContainer";
import { DEFAULT_VALUE } from './utils';

const Selector = ({ className = "", position = "bottom", onChange = (selectedValue) => { }, elementId = "timezone-selector" }) => {
  const [selectedValue, setSelectedValue] = useState(DEFAULT_VALUE);
  const [showOptions, setShowOptions] = useState(false);
  const top = position === "top";

  useEffect(() => {
    const addOutsideClickListener = (e) => {
      if (!(document.getElementById(elementId)?.contains(e.target))) {
        setShowOptions(false);
      }
    };

    window.addEventListener('click', addOutsideClickListener);

    return () => {
      window.removeEventListener('click', addOutsideClickListener);
    };
  }, []);

  useEffect(() => {
    onChange(selectedValue);
  }, [selectedValue])

  return (
    <div className={`flex flex-col relative w-full ${className}`} id={elementId}>
      <Button showOptions={showOptions} setShowOptions={setShowOptions} selectedValue={selectedValue} elementId={elementId} />
      {showOptions === true && (
        <OptionsContainer
          className={`absolute ${top ? 'bottom-16' : 'top-16'}`}
          elementId={elementId}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          setShowOptions={setShowOptions}
        />
      )}
    </div>
  )
}

export default Selector;
