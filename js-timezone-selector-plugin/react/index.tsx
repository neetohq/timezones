import React, { useCallback } from 'react'

import NeetoTimezoneSelect from "../src/selector";

const NeetoTimezoneSelector = (options = {}) => {


  const ref = useCallback(node => {
    if (node !== null) {
      new NeetoTimezoneSelector(node, options);
    }
  }, []);


  return (
    <div id="element" ref={ref}></div>
  )
}

export default NeetoTimezoneSelector
