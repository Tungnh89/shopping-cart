import React from "react";
import data from "../data";
import { useContext } from "react";
import reducer from "../reducer";
import { useReducer } from "react";

const AppContext = React.createContext();

const initialState = {
  cart: data,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
