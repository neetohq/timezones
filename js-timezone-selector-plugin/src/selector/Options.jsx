import { h } from 'https://esm.sh/preact@10.16.0';
import { DUMMY_TIMEZONES } from './constants';
import { createOptionButton, handleSelect } from './utils';

function Options() {
  return (
    <div id="selectTimezoneOptions">
      <div className="flex flex-col">
        {DUMMY_TIMEZONES.map((timezone, index) => createOptionButton({
          onClick: handleSelect, key: index, value: timezone, timezone, label: timezone,
        }))}
      </div>
    </div>
  );
}

export default Options;
