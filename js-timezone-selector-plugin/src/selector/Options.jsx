import { h } from 'htm/preact';
import {
  createGroupedOptionButton, groupedOptions,
} from './utils';

function Options() {
  return (
    <div id="selectTimezoneOptions" className="h-64 overflow-y-scroll">
      <div className="flex flex-col">
        {createGroupedOptionButton(groupedOptions)}
      </div>
    </div>
  );
}

export default Options;
