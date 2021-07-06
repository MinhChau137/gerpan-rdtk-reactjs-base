import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cookies from 'js-cookie';
import productApi from './productApi';
import { TYPE_PRODUCT } from 'src/configs/constants'


const initialState = {
  productsCount: 0,
  products: [],
  currentProduct: null,
  productLiked: [],
  hotProducts: [],

  isFetchingGetAllProducts: false,
  fetchGetAllProductsMsg: null,

  isFetchingGetHotProducts: false,
  fetchGetHotProductsMsg: null,

  isFetchingGetProductById: false,
  fetchGetProductByIdMsg: null,

  isFetchingGetProductLiked: false,
  fetchGetProductLikedMsg: null,

};

export const fetchGetAllProducts = createAsyncThunk(
  'product/fetchGetAllProducts',
  async (params, { rejectWithValue }) => {
    try {
      const response = await productApi.getAllProducts({ ...params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error?.response || error);
    }
  }
);
export const fetchGetHotProducts = createAsyncThunk(
  'product/fetchGetHotProducts',
  async (params, { rejectWithValue }) => {
    try {
      const response = await productApi.getHotProducts({ ...params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error?.response || error);
    }
  }
);

export const fetchGetProductById = createAsyncThunk(
  'product/fetchGetProductById',
  async (params, { rejectWithValue }) => {
    try {
      const response = await productApi.getProductById({ ...params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error?.response || error);
    }
  }
);
export const fetchGetProductLiked = createAsyncThunk(
  'product/fetchGetProductLiked',
  async (params, { rejectWithValue }) => {
    try {
      const response = await productApi.getProductLiked({ ...params });
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
        state.productsCount = action.payload.total;
        state.products = action.payload.results;
      })

      //Handle get hot product
      .addCase(fetchGetHotProducts.rejected, (state, action) => {
        state.fetchGetHotProductsMsg = action.payload || action.error.message;
        state.isFetchingGetHotProducts = false;
        state.hotProducts = [];
      })
      .addCase(fetchGetHotProducts.pending, (state) => {
        state.fetchGetHotProductsMsg = null;
        state.isFetchingGetHotProducts = true;
        state.hotProducts = [];
      })
      .addCase(fetchGetHotProducts.fulfilled, (state, action) => {
        state.fetchGetHotProductsMsg = null;
        state.isFetchingGetHotProducts = false;
        state.hotProducts = action.payload.results;
      })


      //Handle get product by id
      .addCase(fetchGetProductById.rejected, (state, action) => {
        state.fetchGetProductByIdMsg = action.payload || action.error.message;
        state.isFetchingGetProductById = false;
      })
      .addCase(fetchGetProductById.pending, (state) => {
        state.fetchGetProductByIdMsg = null;
        state.isFetchingGetProductById = true;
      })
      .addCase(fetchGetProductById.fulfilled, (state, action) => {
        state.fetchGetProductByIdMsg = null;
        state.isFetchingGetProductById = true;
        state.currentProduct = action.payload;
      })

      //Handle get product liked
      .addCase(fetchGetProductLiked.rejected, (state, action) => {
        state.fetchGetProductLikedMsg = action.payload || action.error.message;
        state.isFetchingGetProductLiked = false;
      })
      .addCase(fetchGetProductLiked.pending, (state) => {
        state.fetchGetProductLikedMsg = null;
        state.isFetchingGetProductLiked = true;
      })
      .addCase(fetchGetProductLiked.fulfilled, (state) => {
        state.fetchGetProductLikedMsg = null;
        state.isFetchingGetProductLiked = true;
      })
  }
});

// export const {  } = productSlice.actions;

export const selectProductsCount = (state) => state.productSlice.productsCount;
export const selectProducts = (state) => state.productSlice.products;
export const selecHotProducts = (state) => state.productSlice.hotProducts;

export default productSlice.reducer;
