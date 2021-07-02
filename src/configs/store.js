import { configureStore } from '@reduxjs/toolkit';
import productSlice from 'src/features/Product/productSlice';

export const store = configureStore({
  reducer: {
    productSlice
  }
});
