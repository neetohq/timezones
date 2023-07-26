import { h } from 'preact';
import { useState } from 'preact/hooks';

import Button from "./Button";
import OptionsContainer from "./OptionsContainer";
import { DEFAULT_VALUE } from './utils';

const Selector = () => {
  const [selectedValue, setSelectedValue] = useState(DEFAULT_VALUE);
  const [showOptions, setShowOptions] = useState(false);

  const addOutsideClickListener = () => {
    window.addEventListener('click', function (e) {
      if (!(document.getElementById('timezoneSelector').contains(e.target))) {
        setShowOptions(false)
      }
    });
  };

  addOutsideClickListener();

  return (
    <div class="flex flex-col p-4" id="timezoneSelector">
      <Button showOptions={showOptions} setShowOptions={setShowOptions} selectedValue={selectedValue} />
      {showOptions === true &&
        (<OptionsContainer selectedValue={selectedValue} setSelectedValue={setSelectedValue} setShowOptions={setShowOptions} />)
      }
    </div>
  )
}

export default Selector;
