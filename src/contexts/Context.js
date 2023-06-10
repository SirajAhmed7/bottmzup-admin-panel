import {createContext, useState} from "react"
 
export const SingularContext = createContext()

const Context = ({ children }) => {
    return (
      <SingularContext.Provider value={{}}>
        {children}
      </SingularContext.Provider>
    );
  };
  

export default Context