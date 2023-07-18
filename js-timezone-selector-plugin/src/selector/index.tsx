import { h } from 'https://esm.sh/preact@10.16.0';

import Button from "./Button";
import OptionsContainer from "./OptionsContainer";

const Selector = () => {

  const addOutsideClickListener = () => {
    window.addEventListener('click', function (e) {
      if (!(document.getElementById('timezoneSelector').contains(e.target))) {
        document.getElementById("optionsContainer")?.classList?.add("hidden");
      }
    });
  };

  addOutsideClickListener();


  return (
    <div class="flex flex-col p-4 w-64" id="timezoneSelector">
      <Button />
      <OptionsContainer />
    </div>
  )
}

export default Selector;
