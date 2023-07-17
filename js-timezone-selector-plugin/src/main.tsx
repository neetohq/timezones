import NeetoTimezoneSelect from "./NeetoTimezoneSelect";
import Selector from "./selector";

class Plugin {
  element: Element;
  
  constructor(element: Element) {
    this.element = element
    this.render()
  }

  render() {
    const selector = Selector();

    this.element.appendChild(selector)
  }
}

(window as any).NeetoTimezoneSelector = Plugin;
