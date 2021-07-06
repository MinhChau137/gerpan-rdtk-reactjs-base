import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import cookies from 'js-cookie';
import categoryApi from './productCategoryApi';

const initialState = {
  categoryCount: 0,
  category: [],

  isFetchingGetAllCategory: false,
  fetchGetAllCategoryMsg: null,

};

export const fetchGetAllCategory = createAsyncThunk(
  'product/fetchGetAllCategory',
  async (params, { rejectWithValue }) => {
    try {
      const response = await productApi.getAllProducts({ ...params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || error?.response || error);
    }
  }
);

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // Handle get all category
      .addCase(fetchGetAllCategory.rejected, (state, action) => {
        state.fetchGetAllCategoryMsg = action.payload || action.error.message;
        state.isFetchingGetAllCategory = false;
        state.categoryCount = 0;
        state.category = [];
      })
      .addCase(fetchGetAllCategory.pending, (state) => {
        state.fetchGetAllCategoryMsg = null;
        state.isFetchingGetAllCategory = true;
        state.categoryCount = 0;
        state.category = [];
      })
      .addCase(fetchGetAllCategory.fulfilled, (state, action) => {
        state.fetchGetAllCategoryMsg = null;
        state.isFetchingGetAllCategory = false;
        state.categoryCount = action.payload.count;
        state.category = action.payload.category;
      })
  }
});

// export const {  } = productSlice.actions;

export const selectcategoryCount = (state) => state.categorySlice.categoryCount;
export const selectCategory = (state) => state.categorySlice.category;

export default categorySlice.reducer;
