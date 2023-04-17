import {createSlice} from '@reduxjs/toolkit';
import productData from './productData';
import productWomen from './productWomen';

const initialState = {
  cart: [],
  items: productData,
  productWomen: productWomen,
};

export const UserSlice = createSlice({
  name: 'Users',
  initialState,
  reducers: {},
});

export default UserSlice.reducer;
