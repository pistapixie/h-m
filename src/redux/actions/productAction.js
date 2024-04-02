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

export const productAction = { getProducts };
