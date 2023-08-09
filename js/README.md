# @neetohq/timezones

![npm version](https://img.shields.io/npm/v/@neetohq/timezones.svg) ![license](https://img.shields.io/npm/l/@neetohq/timezones.svg)

A simple and lightweight NPM package for working with time zones. This package provides an easy-to-use timezone selector.



## Installation

You can install the package using npm:

```bash
npm install @neetohq/timezones
```


## NeetoTimezoneSelector

[Check out the live demo](https://codepen.io/Jijin-Haridas/full/wvQbeOr)
```js
import { NeetoTimezoneSelector } from "@neetohq/timezones";

new NeetoTimezoneSelector(document.getElementById("elementId"));
```

### Configuration
You can pass options as the second parameter to configure the timezone selector component.

1. elementId: ID for the NeetoTimezoneSelector. By default the ID will be `timezone-selector`
2. className: Custom classes that can be added to the component.
3. onChange: Function to be called when the timezone selector changes.
4. position: Position in which the selector should open in. Available options: `top`, `bottom`. Default position is `bottom`.

```js
import { NeetoTimezoneSelector } from "@neetohq/timezones";

new NeetoTimezoneSelector(document.getElementById("elementId"), {
  className: "custom-selector-class",
  onChange: (timezone) => {
    console.log(timezone);
  },
  elementId: "custom-selector-element",
  position: "top",
});
```

### ianaTimezoneToHumanReadble
```js
import { ianaTimezoneToHumanReadable } from "@neetohq/timezones";

ianaTimezoneToHumanReadable("Asia/Calcutta") // => Indian Standard Time

ianaTimezoneToHumanReadable("America/New_York") // => Eastern Standard Time
```

## Development

### Clone the repo
```
git clone git@github.com:neetohq/neeto-timezones.git
cd neeto-timezones/js
```

### Install the dependencies
```bash
pnpm i
```

### Run
Run the package using pnpm
```bash
pnpm run dev
```
