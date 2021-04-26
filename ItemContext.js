import React, { useState } from "react";

const Context = React.createContext([]);

export const ItemContext = ({ children }) => {
  const [item, setItem] = useState([]);

  return (
    // pass as much data into value as you want your context to have
    <Context.Provider value={{ item, setItem }}>{children}</Context.Provider>
  );
};

export const useItemContext = () => React.useContext(Context);
