export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const isAlreadyHave = state.addedToCart.find(
        (item) => item.id === action.payload?.id
      );
      if (!isAlreadyHave) {
        return {
          ...state,
          addedToCart: [...state.addedToCart, action.payload],
        };
      }
    case "REMOVE_FROM_CART":
      const remainnigProduct = state.addedToCart.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        addedToCart: remainnigProduct,
      };
    default:
      return state;
  }
};
