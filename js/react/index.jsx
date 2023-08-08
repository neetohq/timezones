import React, { useCallback } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars, import/extensions
import NeetoTimezoneSelectorComponent from "../timezone-selector-plugin";

function NeetoTimezoneSelector(options = {}) {
  const id = options?.id || "timezone-selector";

  const ref = useCallback((node) => {
    if (node !== null) {
      // eslint-disable-next-line no-new
      new NeetoTimezoneSelectorComponent(node, options);
    }
  }, []);

  return (
    <div id={id} ref={ref} />
  );
}

export default NeetoTimezoneSelector;
