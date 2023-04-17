import {configureStore} from '@reduxjs/toolkit';
import CartSlice from './CartSlice.js';
import UserSlice from './UserSlice.js';

const store = configureStore({
  reducer: {
    user: UserSlice,
    cart: CartSlice,
  },
});

export default store;
