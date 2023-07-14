import NeetoTimezoneSelect from "./NeetoTimezoneSelect";

import React from "react"
import ReactDOM from "react-dom/client"

class Plugin {
  constructor(element: Element) {
    this.element = element
    this.render()
  }

  render() {
    const root = ReactDOM.createRoot(this.element);
    root.render(
      <React.StrictMode>
        <NeetoTimezoneSelect />
      </React.StrictMode>
    )
  }
}

(window as any).NeetoTimezoneSelector = Plugin;
