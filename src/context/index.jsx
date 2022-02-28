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

  const clearItem = () => {
    dispatch({ type: "CLEAR_ITEM" });
  };

  const remoteItem = (_id) => {
    dispatch({ type: "REMOTE_ITEM", payload: _id });
  };

  const increaseItem = (_id) => {
    dispatch({ type: "INCREASE_ITEM", payload: _id });
  };

  const decreaseItem = (_id) => {
    dispatch({ type: "DECREASE_ITEM", payload: _id });
  };

  return (
    <AppContext.Provider
      value={{ ...state, clearItem, remoteItem, increaseItem, decreaseItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
