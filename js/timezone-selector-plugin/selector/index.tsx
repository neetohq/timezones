import { h } from "preact";
import { useEffect, useState } from "preact/hooks";

import Button from "./Button";
import OptionsContainer from "./OptionsContainer";
import { DEFAULT_VALUE } from "./utils";
import { getFromLocalStorage } from "./commons/utils";

function Selector({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  className = "", position = "bottom", onChange = (selectedValue) => { }, elementId = "timezone-selector",
}) {
  const [selectedValue, setSelectedValue] = useState(DEFAULT_VALUE);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [is24H, setIs24H] = useState(getFromLocalStorage("ntsp-24-hr-time-format") || false);

  const top = position === "top";

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const element = document.getElementById(elementId);

      if (element && !element?.contains(e.target)) {
        setIsOverlayVisible(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    onChange(selectedValue);
  }, [selectedValue]);

  return (
    <div className="ntsp" id={elementId}>
      <div
        className={`flex flex-col relative ${className}`}
      >
        <Button {...{
          isOverlayVisible, setIsOverlayVisible, selectedValue, elementId, is24H,
        }}
        />
        {isOverlayVisible === true && (
          <OptionsContainer
            className={`absolute ${top ? "bottom-16" : "top-16"}`}
            {...{
              elementId, selectedValue, setSelectedValue, setIsOverlayVisible, is24H, setIs24H,
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Selector;
