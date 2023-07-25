import { h } from 'preact';
import { useState } from 'preact/hooks';

import Button from "./Button";
import OptionsContainer from "./OptionsContainer";
import { DEFAULT_VALUE } from './utils';

const Selector = () => {
  const [selectedValue, setSelectedValue] = useState(DEFAULT_VALUE);

  const addOutsideClickListener = () => {
    window.addEventListener('click', function (e) {
      if (!(document.getElementById('timezoneSelector').contains(e.target))) {
        document.getElementById("optionsContainer")?.classList?.add("hidden");
      }
    });
  };

  addOutsideClickListener();

  return (
    <div class="flex flex-col p-4 w-96" id="timezoneSelector">
      <Button selectedValue={selectedValue} />
      <OptionsContainer selectedValue={selectedValue} setSelectedValue={setSelectedValue} />
    </div>
  )
}

export default Selector;
