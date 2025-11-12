import React, { createContext, useReducer } from "react";
import { shippingReducer } from "./ShippingReducer";

export const shippingContext = createContext();

export const ShippingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shippingReducer, {
    shippingDetails: [],
  });
  return (
    <shippingContext.Provider value={{ state, dispatch }}>
      {children}
    </shippingContext.Provider>
  );
};
