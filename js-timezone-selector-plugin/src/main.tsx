/* eslint-disable import/extensions */
import { h, render } from "htm/preact";
// eslint-disable-next-line @typescript-eslint/no-unused-vars, import/no-unresolved
import NeetoTimezoneSelect from "./NeetoTimezoneSelect";

// eslint-disable-next-line import/no-unresolved
import Selector from "./selector";
import "./css/styles.css";

class Plugin {
  element: Element;

  constructor(element: Element, options) {
    this.element = element;
    this.options = options;
    this.render();
  }

  render() {
    render(<Selector {...this.options} />, this.element);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).NeetoTimezoneSelector = Plugin;

export default Plugin;
