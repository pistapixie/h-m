function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/pistapixie/h-m/products?q=${searchQuery}`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      // console.log(data);
      dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    } catch (error) {
      console.error("Fetching products failed:", error);
    }
  };
}

function getProductDetail(id) {
  return async (dispatch) => {
    let url = `https://my-json-server.typicode.com/legobitna/noona-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts, getProductDetail };
