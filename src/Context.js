import React, { createContext, useState } from 'react'

const PageContext = createContext(null);
function Context(props) {
    const [state, setState] = useState("About");
  return (
    <PageContext.Provider value = {[state, setState]}>
        {props.children}
    </PageContext.Provider>
  )
}
export {PageContext, Context};


