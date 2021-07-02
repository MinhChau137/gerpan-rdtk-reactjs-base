import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cookies from 'js-cookie';
import productApi from './productApi';

const initialState = {
  productsCount: 0,
  products: [],

  isFetchingGetAllProducts: false,
  fetchGetAllProductsMsg: null
};

export const fetchGetAllProducts = createAsyncThunk(
  'product/fetchGetAllProducts',
  async (params, { rejectWithValue }) => {
    try {
      const response = await productApi.getAllProducts({ ...params, token: cookies.get('token') });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error?.response || error);
    }
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Handle get all products
      .addCase(fetchGetAllProducts.rejected, (state, action) => {
        state.fetchGetAllProductsMsg = action.payload || action.error.message;
        state.isFetchingGetAllProducts = false;
        state.productsCount = 0;
        state.products = [];
      })
      .addCase(fetchGetAllProducts.pending, (state) => {
        state.fetchGetAllProductsMsg = null;
        state.isFetchingGetAllProducts = true;
        state.productsCount = 0;
        state.products = [];
      })
      .addCase(fetchGetAllProducts.fulfilled, (state, action) => {
        state.fetchGetAllProductsMsg = null;
        state.isFetchingGetAllProducts = false;
        state.productsCount = action.payload.count;
        state.products = action.payload.products;
      });
  }
});

// export const {  } = productSlice.actions;

export const selectProductsCount = (state) => state.productSlice.productsCount;
export const selectProducts = (state) => state.productSlice.products;

export default productSlice.reducer;
