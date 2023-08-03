import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';

import Button from "./Button";
import OptionsContainer from "./OptionsContainer";
import { DEFAULT_VALUE } from './utils';

const Selector = ({ className = "", position = "bottom", onChange = (selectedValue) => { }, elementId = "timezone-selector" }) => {
  const [selectedValue, setSelectedValue] = useState(DEFAULT_VALUE);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const top = position === "top";

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!(document.getElementById(elementId)?.contains(e.target))) {
        setIsOverlayVisible(false);
      }
    };

    window.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    onChange(selectedValue);
  }, [selectedValue])

  return (
    <div className={`flex flex-col relative w-full ${className}`} id={elementId}>
      <Button isOverlayVisible={isOverlayVisible} setIsOverlayVisible={setIsOverlayVisible} selectedValue={selectedValue} elementId={elementId} />
      {isOverlayVisible === true && (
        <OptionsContainer
          className={`absolute ${top ? 'bottom-16' : 'top-16'}`}
          elementId={elementId}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          setIsOverlayVisible={setIsOverlayVisible}
        />
      )}
    </div>
  )
}

export default Selector;
