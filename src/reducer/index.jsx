const reducer = (state, action) => {
  // console.log(state);

  switch (action.type) {
    case "CLEAR_ITEM": {
      return { ...state, cart: [] };
    }

    case "REMOTE_ITEM": {
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };
    }

    case "INCREASE_ITEM": {
      let cartItem = state.cart.map((item) => {
        if (item._id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: cartItem };
    }

    case "DECREASE_ITEM": {
      let cartItem = state.cart
        .map((item) => {
          if (item._id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((checkItem) => checkItem.amount !== 0);
      return { ...state, cart: cartItem };
    }

    default:
      return state;
  }
};

export default reducer;
