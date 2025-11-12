export const shippingReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_SHIPPING_DETAILS":
      return {
        ...state,
        shippingDetails: [...state.shippingDetails, action.payload],
      };

    default:
      return state;
  }
};
