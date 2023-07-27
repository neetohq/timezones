import { h, render } from "htm/preact"
import NeetoTimezoneSelect from "./NeetoTimezoneSelect";

import Selector from "./selector";
import './styles.css';

class Plugin {
  element: Element;

  constructor(element: Element, options: any) {
    this.element = element
    this.options = options;

    this.render()
  }

  render() {

    render(<Selector {...this.options} />, this.element);
  }
}

(window as any).NeetoTimezoneSelector = Plugin;
