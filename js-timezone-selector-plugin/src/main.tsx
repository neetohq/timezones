import { render } from "https://esm.sh/preact@10.16.0"
import NeetoTimezoneSelect from "./NeetoTimezoneSelect";

import Selector from "./selector";
import './styles.css';

class Plugin {
  element: Element;

  constructor(element: Element) {
    this.element = element
    this.render()
  }

  render() {

    render(Selector(), this.element);
  }
}

(window as any).NeetoTimezoneSelector = Plugin;
