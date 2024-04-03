import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  productList: [],
  selectedItem: null, // 상세 정보를 저장할 상태
  isLoading: false,
  error: null,
};

// 상품 리스트를 비동기적으로 가져오는 thunk
export const fetchProducts = createAsyncThunk(
  "product/fetchAll",
  async (searchQuery, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/pistapixie/h-m/products?q=${searchQuery}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// 상품 상세 정보를 비동기적으로 가져오는 thunk
export const fetchProductDetail = createAsyncThunk(
  "product/fetchDetail",
  async (productId, thunkApi) => {
    try {
      let url = `https://my-json-server.typicode.com/pistapixie/h-m/products/${productId}`;
      let response = await fetch(url);
      return await response.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductDetail.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedItem = action.payload;
      })
      .addCase(fetchProductDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const productActions = productSlice.actions;
export default productSlice.reducer;
