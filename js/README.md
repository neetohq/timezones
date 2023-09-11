# @neetohq/timezones

![npm version](https://img.shields.io/npm/v/@neetohq/timezones.svg) ![license](https://img.shields.io/npm/l/@neetohq/timezones.svg)

A simple and lightweight NPM package for working with time zones. This package provides a human friendly timezone selector and utility functions for timezones.


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
5. onHourFormatChange: Function to be called when the time format changes.

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

ianaTimezoneToHumanReadable("Europe/Berlin") // => Central Standard Time
```

## Development

### Clone the repo

```bash
git clone git@github.com:neetohq/neeto-timezones.git
cd neeto-timezones/js
pnpm install
pnpm dev
```

### Publishing to npm

1. Bump `package.json` version
2. Commit and push
3. `pnpm build && pnpm publish`
