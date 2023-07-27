import React, { useCallback, useEffect } from 'react'

import * as TimezoneComponent from "../js-timezone-selector-plugin/";

const NeetoTimezoneSelector = (options = {}) => {


  const ref = useCallback(node => {
    if (node !== null) {
      new NeetoTimezoneSelector(node, options);
    }
  }, []);


  return (
    <div id="element" />
  )
}

export default NeetoTimezoneSelector
