let initialState = {
  productList: [],
  selectedItem: null,
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: action.payload.data };
    case "GET_SINGLE_PRODUCT_SUCCESS":
      return { ...state, selectedItem: action.payload.data };
    default:
      return state;
  }
}

export default productReducer;
