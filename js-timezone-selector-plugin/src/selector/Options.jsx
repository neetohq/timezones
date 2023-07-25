import { h } from 'htm/preact';
import {
  allTimezones,
  createGroupedOptionButton, groupedOptions,
} from './utils';

function Options({ selectedValue, setSelectedValue }) {
  return (
    <div id="selectTimezoneOptions" className="h-64 overflow-y-scroll">
      <div className="flex flex-col">
        {createGroupedOptionButton(groupedOptions, selectedValue, setSelectedValue)}
      </div>
    </div>
  );
}

export default Options;
